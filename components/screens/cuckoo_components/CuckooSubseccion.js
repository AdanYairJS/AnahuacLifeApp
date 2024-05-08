import React, { useState , useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Touchable } from 'react-native';
import CuckooTarjeta from './CuckooTarjeta';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {EXPO_ip, EXPO_puerto} from "@env";

const CuckooSubseccion = ({id_subseccion}) => {

const [platillos, setPlatillos] = useState([]);

let getPlatillos = (id_subseccion) => {
  fetch(`http://${EXPO_ip}:${EXPO_puerto}/platillos`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({id_subseccion: id_subseccion})
  })
  .then(res =>{
    // console.log(res.status);
    // console.log(res.headers);
    return res.json();
  })
  .then(
    (result) => {
      // console.log(result);
      if(result.length === 0)
      {
        setPlatillos(undefined);
      }
      else
      {
        setPlatillos(result);
      }
    },
    (error) => {
      console.log(error);
    }
  )
};

useEffect(() => {
  getPlatillos(id_subseccion);
}, []);

  return (
    <ScrollView horizontal style={styles.contendor_scroll} showsHorizontalScrollIndicator={false}>
      {platillos.map((platillo, index) => (        
          <CuckooTarjeta key={index} {...platillo} />        
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contendor_scroll: {
    //margin: 15,
    marginTop: 15,
    marginBottom: 15,
  }
});

export default CuckooSubseccion;