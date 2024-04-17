import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Touchable } from 'react-native';
import DelyFullTarjeta from './DelyFullTarjeta';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DelyFullSubseccion = ({items}) => {
//   const items = [
//     {
//         nombre: 'Bebidas' , 
//         imagen: require('../../../images/cuckoo/p_jugo_uva.jpg'), 
//         // texto: 'Jugo (Uva, manzana, arándano o durazno)', 
//         texto: 'Jugo', 
//         precio: 20
//     },
//     {
//         nombre: 'Bebidas' , 
//         imagen: require('../../../images/cuckoo/p_licuado_platano.jpeg'), 
//         // texto: 'Licuado (Avena, plátano, manzana, Nesquik chocolate, Nesquik fresa o Nesquik vainilla)', 
//         texto: 'Licuado', 
//         precio: 25
//     },
//     {
//         nombre: 'Bebidas' , 
//         imagen: require('../../../images/cuckoo/p_malteada_oreo.jpeg'), 
//         // texto: 'Malteada (Oreo, Carlos V, Bubulubu, Emperador)',
//         texto: 'Malteada',
//         precio: 38
//     },
//   ];

  return (
    <ScrollView horizontal style={styles.contendor_scroll} showsHorizontalScrollIndicator={false}>
      {items.map((item, index) => (        
          <DelyFullTarjeta key={index} {...item} />        
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

export default DelyFullSubseccion;