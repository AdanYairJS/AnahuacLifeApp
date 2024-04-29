import React, { useState , useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, Platform, StatusBar, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; //npx expo install expo-linear-gradient
import { FontAwesome6 } from '@expo/vector-icons';
import utf8 from 'utf8';

const anchoVentana = Dimensions.get('window').width;
const altoVentana = Dimensions.get('window').height;

export default function DelyFullItem({navigation , route}) {
  const {color_1, color_2, id_platillo, nombre, precio, imagen} = route.params;

  const [sabores, setSabores] = useState([]);

  let getSabores = (id_platillo) => {
    fetch("http://10.100.130.134:3333/sabores",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id_platillo: id_platillo})
    })
    .then(res =>{
      return res.json();
    })
    .then(
      (result) => {
        if(result.length === 0)
        {
          setSabores(undefined);
        }
        else
        {
          setSabores(result);
        }
      },
      (error) => {
        console.log(error);
      }
    )
  };

  useEffect(() => {
    getSabores(id_platillo);
  }, []);

  const [extras, setExtras] = useState([]);

  let getExtras = (id_platillo) => {
    fetch("http://10.100.130.134:3333/extras",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id_platillo: id_platillo})
    })
    .then(res =>{
      return res.json();
    })
    .then(
      (result) => {
        if(result.length === 0)
        {
          setExtras(undefined);
        }
        else
        {
          setExtras(result);
        }
      },
      (error) => {
        console.log(error);
      }
    )
  };

  useEffect(() => {
    getExtras(id_platillo);
  }, []);

    return (
        <LinearGradient 
          colors={[color_1,color_2]}
          style={styles.container}
        >
          <View style={styles.fondo}>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
            <ScrollView>
              <View style={styles.view_return}>
                <TouchableOpacity styles={styles.boton_return} onPress={() => navigation.goBack()}>
                  <FontAwesome6 name="chevron-left" size={30} color="white" />
                </TouchableOpacity>
              </View>
              <View style={[styles.view_return,{justifyContent: 'center'}]}>
                <Image source={{uri: 'https://rawcdn.githack.com/AdanYairJS/AnahuacLifeApp/e1447b54be16cb89b7c425452a6c321bfe11225e/images/directorios/w_default.jpg'}} style={styles.imagen}/>
              </View>
            {/* <Text style={styles.titulo}>{utf8.decode(nombre)}</Text> */}
            <Text style={styles.titulo}>{nombre}</Text>
            <Text style={styles.subtitulo}>${precio.toFixed(2)}</Text>
            <TouchableOpacity style= {[styles.boton_seccion,{backgroundColor: '#FFF'}]}>
            <   Text style={[styles.titulo,{color: color_2,fontSize: 20, fontWeight: 'normal', marginTop: 12, marginBottom: 12}]}>Ordenar</Text>
            </TouchableOpacity>
            {/* <Text style={styles.titulo}>Hora de entrega</Text> */}
            {sabores && <Text style={styles.titulo}>Sabores</Text>}
            {sabores && 
              sabores.map((sabor, index) => (      
                // <Text key={index} style={styles.subtitulo}>{utf8.decode(sabor.nombre)}</Text>
                <Text key={index} style={styles.subtitulo}>{sabor.nombre}</Text>
              ))
            }
            {extras && <Text style={styles.titulo}>Extras</Text>}
            {extras && 
              extras.map((extra, index) => (      
                // <Text key={index} style={styles.subtitulo}>{utf8.decode(extra.nombre)+' $'+extra.precio.toFixed(2)}</Text>
                <Text key={index} style={styles.subtitulo}>{extra.nombre+' $'+extra.precio.toFixed(2)}</Text>
              ))
            }
            </ScrollView>
          </View>
        </LinearGradient>
      );
  }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fondo: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  titulo: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: altoVentana*0.005,
    width: '90%',
  },
  subtitulo: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '100',
    color: '#FFF',
    marginBottom: 5,
    width: '90%',
  },
  view_return: {
    height: 'auto',
    width: anchoVentana,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
  },
  boton_return: {
    width: anchoVentana,
    borderColor: 'yellow',
    borderWidth: 3,
  },
  imagen: {
    paddingTop: 20,
    width: '90%',
    aspectRatio: 1/1,
    borderRadius: 30,
  },    
  boton_seccion: {
    borderRadius: 25,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 15,
    marginBottom: 30,
    marginLeft: 70,
    marginRight: 70,
  }
});