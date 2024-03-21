import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import Svg, { Filter, Image as SvgImage, Defs } from 'react-native-svg'; //npm install react-native-svg

import verticeImage from '../../../images/eventos/grupos/vertice.png';
import accionImage from '../../../images/eventos/grupos/accion.png';
import culmenImage from '../../../images/eventos/grupos/culmen.png';
import imefImage from '../../../images/eventos/grupos/imef.png';

const LeadershipPrograms = ({  }) => {
  const navigation = useNavigation();

  const secciones = [
    { id : 1, nombre: 'vertice', texto: 'Vértice', imagen: verticeImage},
    { id : 2, nombre: 'accion', texto: 'ACCIÓN', imagen: accionImage},
    { id : 3, nombre: 'culmen', texto: 'Culmen', imagen: culmenImage},
    { id : 4, nombre: 'imef', texto: 'Imef',imagen: imefImage},
  ];

  return (
    <View style={styles.container}>
      {secciones.map((seccion, index) => (
        <TouchableOpacity key={index} style={styles.icono} onPress={() => navigation.navigate("Vertice",{texto: seccion.texto, id: seccion.id, imagen: seccion.imagen})}>
          <Image source={seccion.imagen} style={styles.imagen} />           
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    //maxWidth: 350,
    alignSelf: 'center',
    marginBottom: 30,
  },
  icono: {
    width: 100,
    height: 100,
    margin: 15,
    //margin: 25,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#FD5900',
    elevation: 4,
    shadowColor: '#000000',
    overflow: 'hidden',
  },
  imagen: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    backgroundColor: 'white',
  },
});

export default LeadershipPrograms;