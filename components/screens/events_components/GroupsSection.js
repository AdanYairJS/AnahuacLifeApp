import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import adefaImage from '../../../images/eventos/grupos/adefa.png';
import fesalImage from '../../../images/eventos/grupos/fesal.png';
import asuaImage from '../../../images/eventos/grupos/asua.png';
import pastoralImage from '../../../images/eventos/grupos/pastoral.png';
import espacioculturalImage from '../../../images/eventos/grupos/espaciocultural.png';
import leonesImage from '../../../images/eventos/grupos/leones.png';

const GroupsSection = ({  }) => {
  const navigation = useNavigation();

  const secciones = [
    { id : 5, nombre: 'adefa', texto: 'ADEFA', imagen: require('../../../images/eventos/grupos/adefa.png') },
    { id : 6, nombre: 'asua', texto: 'ASUA', imagen: asuaImage },
    { id : 7, nombre: 'fesal', texto: 'FESAL', imagen: fesalImage },
    { id : 8, nombre: 'pastoral', texto: 'PASTORAL', imagen: pastoralImage },
    { id : 9, nombre: 'leones', texto: 'LEONES', imagen: leonesImage },
    { id : 10, nombre: 'espaciocultural', texto: 'Espacio Cultural', imagen: espacioculturalImage },
  ];

  return (
    <View style={styles.container}>
      {secciones.map((seccion, index) => (
        <TouchableOpacity key={index} style={styles.icono} onPress={() => navigation.navigate("Vertice",{texto:seccion.texto , id: seccion.id, imagen: seccion.imagen})}>
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
    //borderWidth: 1,
    //borderColor: '#FD5900',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
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