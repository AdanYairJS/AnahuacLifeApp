import React, { useState , useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, Platform, StatusBar, TouchableOpacity, TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome6 } from '@expo/vector-icons';
import Element_Switch from '../home_components/Element_Switch';
import Element_Button from './Element_Button';
import Iconos from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

import {EXPO_ip, EXPO_puerto} from "@env";

const anchoVentana = Dimensions.get('window').width;
const altoVentana = Dimensions.get('window').height;

export default function CuckooScreen({navigation , route}) {
  navigation = useNavigation();

  const {color_1, color_2, id_platillo, nombre, precio, imagen, descripcion} = route.params;

  const [sabores, setSabores] = useState([]);

  let getSabores = (id_platillo) => {
    fetch('http://${EXPO_ip}:${EXPO_puerto}/sabores'
    ,{
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
    fetch('http://${EXPO_ip}:${EXPO_puerto}/extras'
    ,{
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

  const [cantidad, setCantidad] = useState(1);

  const handleIncrement = () => {
    setCantidad(cantidad + 1);
  };

  const handleDecrement = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const [number, onChangeNumber] = React.useState('');

  var especificacion;
    return (
        <LinearGradient 
          colors={[color_1,color_2]}
          style={styles.container}
        >
          <View style={styles.fondo}>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
            <ScrollView>
              <View style={styles.imagen_container}>
                <Image source={{uri: imagen}} style={styles.imagen}/>
              </View>
              <Text style={styles.titulo}>{nombre.toUpperCase()}</Text>
              {descripcion &&
                <Text style={styles.descripcion2}> {descripcion} </Text>
              }
              {sabores && 
                <View style={styles.cardContainer}>
                  <View style={styles.preferencesContainer}>
                    {sabores && sabores.map((sabor, index) => (
                      <Element_Button key={index} text={sabor.nombre}/>           
                    ))}
                  </View>
                </View>
              }
              {extras && 
                <View style={styles.cardContainer}>
                  <View style={styles.preferencesContainer}>
                    {extras && extras.map((extra, index) => (
                      <Element_Button 
                        key={index} 
                        text={extra.precio !== 0 ? `${extra.nombre} \n$${extra.precio.toFixed(2)}` : extra.nombre}
                      />          
                    ))}
                  </View>
                </View>
              }
              <View style={styles.input}>
                <TextInput
                  style={styles.input_text}
                  onChangeText={onChangeNumber}
                  value={especificacion}
                  placeholder="Especificaciones"
                  keyboardType="default"
                />
              </View>
          
              <View style={styles.botonera}>
                <View style={styles.cantidad}>
                  <TouchableOpacity onPress={handleDecrement}><Iconos name="minus" size={26} color='#FD5900' /></TouchableOpacity>
                  <Text style={{fontSize: 18, fontFamily: 'lexend-regular'}}> {cantidad} </Text>
                  <TouchableOpacity onPress={handleIncrement}><Iconos name="plus" size={26} color='#FD5900' /></TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.agregar} onPress={() => navigation.navigate("CuckooCart",{id_platillo,nombre,cantidad,precio})}>
                  <Text style={styles.texto_agregar}> Agregar </Text>
                  <Text style={styles.texto_agregar}> ${precio.toFixed(2)} </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </LinearGradient>
      );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  fondo: {
    flex: 1,
    justifyContent: 'flex-start',
    height: '100%',
  },
  imagen_container: {
    height: altoVentana*0.3,
    width: anchoVentana,
    justifyContent: 'flex-start',
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  titulo: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'lexend-bold',
    color: '#ffffff',
    marginTop: altoVentana*0.005,
    width: '100%',
    paddingHorizontal: 10,
    paddingTop: 15,
  },
  descripcion2: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'lexend-regular',
    color: '#ffffff',
    marginTop: altoVentana*0.005,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
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
  boton_return: {
    width: anchoVentana,
    borderColor: 'yellow',
    borderWidth: 3,
  },
  imagen: {
    width: '100%',
    height: '100%',
  },    
  boton_seccion: {
    borderRadius: 25,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 15,
    marginBottom: 30,
    marginLeft: 70,
    marginRight: 70,
  },
  cardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginRight: 15,
    marginLeft: 15,
    marginTop: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
    display: 'flex',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  preferencesContainer:{
    marginVertical: 10,
    width: '100%',
  },
  titulo_inside:{
    marginLeft: 20,
    fontFamily: 'lexend-bold',
    fontSize: 16,
    paddingVertical: 10,
  },
  input:{
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginRight: 15,
    marginLeft: 15,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
    display: 'flex',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: '93%',
    paddingVertical: '4%',
    paddingLeft: 20,
  },
  input_text:{
    fontFamily: 'lexend-regular',
    fontSize: 17,
  },
  botonera:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  cantidad:{
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginVertical: 20,
    paddingVertical: '4%',
    width: '35%',
    justifyContent: 'space-between',
    paddingHorizontal: '2%',
    alignContent: 'center',
    alignItems: 'center',
  },
  agregar:{
    flexDirection: 'row',
    backgroundColor: '#FD5900',
    borderRadius: 10,
    marginVertical: 20,
    paddingVertical: '5%',
    width: '60%',
    justifyContent: 'space-between',
    paddingHorizontal: '2%',
    alignContent: 'center',
    alignItems: 'center',
  },
  texto_agregar:{
    fontFamily: 'lexend-medium',
    fontSize: 16,
    color: '#ffffff',
    paddingHorizontal: 5,
  },
});