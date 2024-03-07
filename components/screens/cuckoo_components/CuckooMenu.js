import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Dimensions } from 'react-native';

//Imagenes
import a_enchiladas from '../../../images/cuckoo/a_enchiladas.jpg';
import b_caramel from '../../../images/cuckoo/b_caramel.jpg';
import d_sandwich from '../../../images/cuckoo/d_sandwich.jpg';
import e_cuckoo from '../../../images/cuckoo/e_cuckoo.jpg';

const anchoVentana = Dimensions.get('window').width;
const altoVentana = Dimensions.get('window').height;

const CuckooMenu = () => {
  const secciones = [
    { nombre: 'e_cuckoo' , imagen: e_cuckoo, texto: 'Ensaldas' },
    { nombre: 'd_sandwich' , imagen: d_sandwich , texto: 'Desayunos'},
    { nombre: 'a_enchiladas' , imagen: a_enchiladas , texto: 'Antojitos' },
    { nombre: 'b_caramel' , imagen: b_caramel , texto: 'Bebidas'},
  ];

  const handlePress = (seccion) => {
    // Aquí puedes navegar a la nueva ventana con el título de la sección
    navigation.navigate('NuevaVentana', { titulo: seccion.nombre });
  };

  return (
    <View style={styles.container}>
      {secciones.map((seccion, index) => (
        <TouchableOpacity key={index} style={styles.icono} onPress={() => handlePress(seccion)}>
          <Image source={seccion.imagen} style={styles.imagen} />
          <Text style={styles.titulo}>{seccion.texto}</Text>
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
    width: anchoVentana,
    maxWidth: 800,
    alignSelf: 'center',
  },
  icono: {
    width: '45%',
    aspectRatio: 0.75,
    // width: 100,
    // height: 100,
    margin: '2%',
    // borderRadius: 20,
    // borderWidth: 2,
    // borderColor: '#FD5900',
    elevation: 4,
    shadowColor: '#000000',
    // shadowOffset: ,
    // shadowOpacity: 20,
    overflow: 'hidden',
  },
  imagen: {
    width: '100%',
    height: '80%',
    resizeMode: 'cover',
    borderRadius: 25,
  },
  titulo: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    // textShadowColor: 'rgba(0, 0, 0, 0.4)', 
    // textShadowOffset: { width: 0.05, height: 0.05 }, 
    // textShadowRadius: 1,
    marginTop: 5,
    marginBottom: 5,
  }
});

export default CuckooMenu;