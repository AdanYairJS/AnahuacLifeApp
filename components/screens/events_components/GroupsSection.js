import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import Svg, { Filter, Image as SvgImage, Defs } from 'react-native-svg'; //npm install react-native-svg

import adefaImage from '../../../images/eventos/grupos/adefa.png';
import fesalImage from '../../../images/eventos/grupos/fesal.png';
import asuaImage from '../../../images/eventos/grupos/asua.png';
import pastoralImage from '../../../images/eventos/grupos/pastoral.png';
import espacioculturalImage from '../../../images/eventos/grupos/espaciocultural.png';
import leonesImage from '../../../images/eventos/grupos/leones.png';

const GroupsSection = ({  }) => {
  const navigation = useNavigation();

  const secciones = [
    { nombre: 'adefa', imagen: adefaImage },
    { nombre: 'asua', imagen: asuaImage },
    { nombre: 'fesal', imagen: fesalImage },
    { nombre: 'pastoral', imagen: pastoralImage },
    { nombre: 'leones', imagen: leonesImage },
    { nombre: 'espaciocultural', imagen: espacioculturalImage },
  ];

  return (
    <View style={styles.container}>
      {secciones.map((seccion, index) => (
        <TouchableOpacity key={index} style={styles.icono} onPress={() => navigation.navigate("Vertice")}>
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
    marginBottom: 30,
  },
  icono: {
    width: 100,
    height: 100,
    margin: 15,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#FD5900',
    elevation: 4,
    shadowColor: '#000000',
    overflow: 'hidden',
    // backgroundColor: 'White',
  },
  imagen: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    backgroundColor: 'white',
  },
});

export default GroupsSection;