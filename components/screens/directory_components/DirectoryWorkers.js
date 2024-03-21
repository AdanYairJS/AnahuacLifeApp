import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import DirectoryWorkerTarjeta from './DirectoryWorkerTarjeta';
import Constants from 'expo-constants';
import EmailLink from '../../general_components/EmailLink';
// import { useNavigation } from '@react-navigation/native';

alto = Constants.statusBarHeight;

const DirectoryWorker = ({navigation , route}) => {
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
  const trabajadores = route.params.trabajadores;
  return (
    <ScrollView style={styles.contendor_scroll} showsHorizontalScrollIndicator={false}>
      <Text style={styles.encabezado}>INFORMACIÓN</Text>
      {route.params.correo && 
        <View style={styles.cardContainer}>
          <Text style={styles.subtitulo}>
            Contacto:
          </Text>
          <View style={styles.contenedor_tramites}>
            <Text style={styles.texto}>
              <EmailLink email={route.params.correo}>{route.params.correo}</EmailLink> 
            </Text>
          </View>
        </View>
      }
      {route.params.tramites && 
        <View style={styles.cardContainer}>
          <Text style={styles.subtitulo}>
            Trámites: 
          </Text>
          <View style={styles.contenedor_tramites}>
              {route.params.tramites.map((tramite, index) => (
                <Text style={[styles.texto,{textAlign:'left'}]} key={index}>• {tramite}</Text>
              ))}
          </View>
        </View>
      }
      <View style={styles.cardContainer}>
        <Text style={styles.subtitulo}>Ubicación: </Text>
        <View style={styles.contenedor_tramites}>
          <Text style={styles.texto}>
            {route.params.ubicacion}
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Mapa",{id_ubicacion: route.params.id_ubicacion})}>
          <Text style={styles.buttonText}>Ver en el mapa</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.encabezado}>MIEMBROS</Text>
      <View style={styles.miembros}>
        {trabajadores.map((trabajador, index) => (        
            <DirectoryWorkerTarjeta key={index} {...trabajador} />        
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginRight: 5,
    marginBottom: 10,
    marginLeft: 15,
  //   padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '90%',
    height: 'auto',
    paddingTop: 15,
    paddingBottom: 20,
    // flexDirection: 'row',
  //   justifyContent: 'space-evenly',
  },
  encabezado: {
    fontFamily: 'lexend-bold',
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 15,
    marginBottom: 15,
    color: '#FD5900',
    // borderColor: 'red',
    // borderWidth: 3,
  },
  subtitulo: {
    fontFamily: 'lexend-semibold',
    fontSize: 18,
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  contenedor_tramites: {
    marginTop: -10,
    alignSelf: 'center',
    // marginLeft: 25,
    // marginBottom: 12
  },
  texto: {
    fontFamily: 'lexend-regular',
    fontSize: 18,
    // paddingLeft: 20,
    marginBottom: 3,
    textAlign: 'center',
    // borderColor: 'red',
    // borderWidth: 3,
  },
  contendor_scroll: {
    //margin: 15,
    marginTop: alto + 60,
    paddingTop: 15,
    marginLeft: 5,
    marginRight: -5,
    // marginBottom: 15,
  },
  button: {
    borderRadius: 50,
    marginTop: 20,
    marginBottom: 10,
    // marginBottom: -28,
    // paddingHorizontal: 20,
    paddingVertical: 10,
    width: '60%',
    alignSelf: 'center',
    backgroundColor: '#FD5900'
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'lexend-bold',
    color: '#FFF',
    alignSelf: 'center',
  },
  miembros: {
    // marginBottom: 40,
    paddingBottom: 30,
  },  
});

export default DirectoryWorker;