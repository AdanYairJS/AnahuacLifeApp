import React, { useState , useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import DirectoryWorkerTarjeta from './DirectoryWorkerTarjeta';
import Constants from 'expo-constants';
import EmailLink from '../../general_components/EmailLink';
// import utf8 from 'utf8';

import {EXPO_ip} from "@env";

alto = Constants.statusBarHeight;

const DirectoryWorker = ({navigation , route}) => {
  console.log(route.params.id_depto);
  console.log(route.params.correo);
  const [trabajadores, setTrabajadores] = useState([]);

  let getTrabajadores = (id_depto) => {
    fetch(`http://${EXPO_ip}:3333/trabajadores`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id_depto: id_depto})
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
          setTrabajadores(undefined);
        }
        else
        {
          setTrabajadores(result);
        }
      },
      (error) => {
        console.log(error);
      }
    )
  };

  useEffect(() => {
    getTrabajadores(route.params.id_depto);
  }, []);

  const [tramites, setTramites] = useState([]);

  let getTramites = (id_depto) => {
    fetch(`http://${EXPO_ip}:3333/tramites`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id_depto: id_depto})
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
          setTramites(undefined);
        }
        else
        {
          setTramites(result);
        }
      },
      (error) => {
        console.log(error);
      }
    )
  };

  useEffect(() => {
    getTramites(route.params.id_depto);
  }, []);

  return (
    <ScrollView style={styles.contendor_scroll} showsHorizontalScrollIndicator={false}>
      <Text style={styles.encabezado}>INFORMACIÓN</Text>
      {route.params.correo && 
        <View style={styles.cardContainer}>
          <Text style={styles.subtitulo}>
            Contacto:
          </Text>
          <View style={styles.contenedor_texto}>
            <Text style={styles.texto}>
              <EmailLink email={route.params.correo}>{route.params.correo}</EmailLink> 
            </Text>
          </View>
        </View>
      }
      {route.params.hora_ap1 && 
        <View style={styles.cardContainer}>
          <Text style={styles.subtitulo}>
            Horario de atención:
          </Text>
          <View style={styles.contenedor_texto}>
            <Text style={styles.texto}>
              {route.params.hora_ap1+"-"+route.params.hora_ci1}
            </Text>
          </View>
        </View>
      }
      {tramites && 
        <View style={styles.cardContainer}>
          <Text style={styles.subtitulo}>
            Trámites: 
          </Text>
          <View style={styles.contenedor_tramites}>
              {tramites.map((tramite, index) => (
              // <Text style={[styles.texto,{textAlign:'left'}]} key={index}>• {utf8.decode(tramite.nombre)}</Text>
              <Text style={[styles.texto,{textAlign:'left'}]} key={index}>• {tramite.nombre}</Text>
              ))}
          </View>
        </View>
      }
      <View style={styles.cardContainer}>
        <Text style={styles.subtitulo}>Ubicación: </Text>
        <View style={styles.contenedor_tramites}>
          <Text style={[styles.texto,{/*fontSize:20,fontFamily:'lexend-light'*/}]}>
            {route.params.nombre_lugar}
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Mapa",{id_lugar: route.params.id_lugar})}>
          <Text style={styles.buttonText}>Ver en el mapa</Text>
        </TouchableOpacity>
      </View>
      {/* {trabajadores && } */}
      {trabajadores &&       
      // {route.params.trabajadores &&       
        <View>
          <Text style={styles.encabezado}>MIEMBROS</Text>
          <View style={styles.miembros}>
            {trabajadores.map((trabajador, index) => (        
                <DirectoryWorkerTarjeta key={index} {...trabajador} />        
            ))}
          </View>
        </View>
      }
      {/* <Text style={styles.encabezado}>MIEMBROS</Text> */}
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
  contenedor_texto: {
    marginTop: -10,
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: 40,
    // paddingLeft: 30,
    // borderColor: 'blue',
    // borderWidth: 3,
    // marginLeft: 25,
    // marginBottom: 12
  },
  contenedor_tramites: {
    marginTop: -10,
    alignSelf: 'center',
    width: '100%',
    paddingLeft: 30,
    paddingRight: 20,
    // borderColor: 'blue',
    // borderWidth: 3,
    // marginLeft: 25,
    // marginBottom: 12
  },
  texto: {
    fontFamily: 'lexend-regular',
    fontSize: 15,
    // paddingLeft: 20,
    marginTop: 5,
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
    marginTop: 10,
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