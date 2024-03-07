import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import Svg, { Filter, Image as SvgImage, Defs } from 'react-native-svg'; //npm install react-native-svg

import verticeImage from '../../../images/eventos/grupos/vertice.png';
import accionImage from '../../../images/eventos/grupos/accion.png';
import adefaImage from '../../../images/eventos/grupos/adefa.png';
import fesalImage from '../../../images/eventos/grupos/fesal.png';
import asuaImage from '../../../images/eventos/grupos/asua.png';
import pastoralImage from '../../../images/eventos/grupos/pastoral.png';
import culmenImage from '../../../images/eventos/grupos/culmen.png';
import espacioculturalImage from '../../../images/eventos/grupos/espaciocultural.png';
import leonesImage from '../../../images/eventos/grupos/leones.png';

const GroupsSection = ({  }) => {
  const navigation = useNavigation();

  const secciones = [
    { nombre: 'vertice', imagen: verticeImage },
    { nombre: 'accion', imagen: accionImage },
    { nombre: 'adefa', imagen: adefaImage },
    { nombre: 'fesal', imagen: fesalImage },
    { nombre: 'asua', imagen: asuaImage },
    { nombre: 'pastoral', imagen: pastoralImage },
    { nombre: 'culmen', imagen: culmenImage },
    { nombre: 'espaciocultural', imagen: espacioculturalImage },
    { nombre: 'leones', imagen: leonesImage },
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
  },
  imagen: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default GroupsSection;