import React, { useState , useEffect } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import utf8 from 'utf8';

import {EXPO_ip, EXPO_puerto} from "@env";

import CuckooSubseccion from './CuckooSubseccion';

const anchoVentana = Dimensions.get('window').width;
const altoVentana = Dimensions.get('window').height;

const CuckooMenu = ({id_menu}) => {
  const navigation = useNavigation();
  let secciones;

  const [subsecciones, setSubsecciones] = useState([]);

  let getSubsecciones = (id_seccion) => {
    fetch(`http://${EXPO_ip}:${EXPO_puerto}/subsecciones`,{
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