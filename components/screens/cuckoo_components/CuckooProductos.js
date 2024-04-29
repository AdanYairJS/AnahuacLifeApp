import React, { useState , useEffect } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import utf8 from 'utf8';

import CuckooSubseccion from './CuckooSubseccion';
//Imagenes
// import a_enchiladas from '../../../images/cuckoo/a_enchiladas.jpg';
// import b_caramel from '../../../images/cuckoo/b_caramel.jpg';
// import d_sandwich from '../../../images/cuckoo/d_sandwich.jpg';
// import e_cuckoo from '../../../images/cuckoo/e_cuckoo.jpg';
import s_desayunos from '../../../images/cuckoo/s_desayunos.jpeg';
import s_antojitos from '../../../images/cuckoo/s_antojitos.jpg';
import s_platillos from '../../../images/cuckoo/s_platillos.png';

import ss_huevos from '../../../images/cuckoo/ss_huevos.jpg';
import ss_enchiladas from '../../../images/cuckoo/ss_enchiladas.jpg';
import ss_dulce from '../../../images/cuckoo/ss_dulce.jpg';
import ss_pan from '../../../images/cuckoo/ss_pan.jpg';
import ss_bebidas from '../../../images/cuckoo/ss_bebidas.jpg';
// import { ScrollView } from 'react-native-gesture-handler';



const anchoVentana = Dimensions.get('window').width;
const altoVentana = Dimensions.get('window').height;

const CuckooMenu = ({id_menu}) => {
  const navigation = useNavigation();
  let secciones;

  const [subsecciones, setSubsecciones] = useState([]);

  let getSubsecciones = (id_seccion) => {
    fetch("http://10.100.130.134:3333/subsecciones",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id_seccion: id_seccion})
    })
    .then(res =>{
      return res.json();
    })
    .then(
      (result) => {
        if(result.length === 0)
        {
          setSubsecciones(undefined);
        }
        else
        {
          setSubsecciones(result);
        }
      },
      (error) => {
        console.log(error);
      }
    )
  };

  useEffect(() => {
    if (id_menu === 'Desayunos') {
      getSubsecciones(1);
    } else if (id_menu === 'Antojitos') {
      getSubsecciones(2);
    } else if (id_menu === 'Platillos') {
      getSubsecciones(3);
    }
  }, [id_menu]);

  const handlePress = (seccion) => {
    let nombre_seccion = seccion.nombre;
    let texto_seccion = seccion.texto;
    navigation.navigate(nombre_seccion,{texto_seccion});
  };

  return (
    <View style={styles.container}>
      {subsecciones.map((subseccion, index) => (      
        <View key={index} style= {styles.container}>
          {/* <Text style={styles.titulo_seccion}>{utf8.decode(subseccion.nombre_subseccion)}</Text> */}
          <Text style={styles.titulo_seccion}>{subseccion.nombre_subseccion}</Text>
          <CuckooSubseccion key={subseccion.id_subseccion} id_subseccion={subseccion.id_subseccion}/>     
        </View>  
      ))}
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: anchoVentana,
    maxWidth: 800,
    alignSelf: 'center',
  },
  titulo_seccion: {
    width: '100%',
    fontSize: 20,
    fontFamily: 'lexend-extrabold',
    color: '#FFF',
    textAlign: 'left',
    marginLeft: 40,
    marginBottom: 5,
  },
});

export default CuckooMenu;