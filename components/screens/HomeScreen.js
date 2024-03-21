import React from 'react';
import { View, TouchableOpacity, Dimensions, ScrollView, Text, StyleSheet, Image, StatusBar } from 'react-native';
import PreferenceCard from './home_components/PreferenceCard';
import InformationCard from './home_components/InformationCard';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';

const anchoVentana = Dimensions.get('window').width;

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="#ffffff" barStyle="dark-content" /> 
      <View style={styles.menu}>
        <View style={styles.tab}> 
          <Text style={styles.tab_name_active}> Perfil</Text>      
          <View style={styles.line} />
        </View>
        <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate("Horario")}> 
          <Text style={styles.tab_name}> Horario</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate("Agenda")}> 
          <Text style={styles.tab_name}> Agenda</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.container}>    
        <View style={styles.avatarContainer}>
          <Image
            source={require('../../images/home/Cr7_Mun.jpg')} // Cambia la ruta a tu foto de perfil
            style={styles.avatar}
          />
        </View>
        <View style={styles.informacion}>
          <Text style={styles.nombre}>Cristiano Ronaldo Dos Santos Aveiro</Text>
          <Text style={styles.carrera}>Ingeniería en Tecnologías de Información</Text>
          <Text style={styles.correo}>cr7_thegoat@anahuac.mx</Text>
        </View>
        
        <View style={styles.contenedor_titulo}>
          <Text style={styles.titulo}>INFORMACIÓN</Text>
        </View>
        <InformationCard/>
        <View style={styles.contenedor_titulo}>
          <Text style={styles.titulo}>CONFIGURACIÓN</Text>
        </View>
        <PreferenceCard/>       
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  menu:{
    paddingTop: Constants.statusBarHeight,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff', // Fondo blanco
    shadowColor: '#000', // Color de la sombra
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Elevación para Android
    position: 'absolute', // Posición absoluta para mantener fijo
    top: 0, // Coloca el encabezado en la parte superior
    left: 0,
    right: 0,
    zIndex: 1,
  },
  tab:{
    width: anchoVentana/3,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  tab_name_active: {
    marginBottom: 12,
    textAlign: 'center',
    fontFamily: 'lexend-regular',
    color: '#FD5900',
    fontSize: 17,
  },
  tab_name: {
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'lexend-regular',
    color: 'gray',
    fontSize: 17,
  },
  line: {
    height: 3,
    width: '100%',
    backgroundColor: '#FD5900',
    borderRadius: 5,
  },
  avatarContainer: {
    alignSelf: 'center',
    marginTop: 140,
    marginBottom: 15,
    borderRadius: 100,
    overflow: 'hidden',
  },
  avatar: {
    width: 150,
    height: 150,
  },
  informacion: {
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },
  nombre: {
    textAlign: 'center',
    fontFamily: 'lexend-medium',
    fontSize: 17,
    marginBottom: 10,
  },
  carrera: {
    textAlign: 'center',
    fontFamily: 'lexend-regular',
    fontSize: 15,
    marginBottom: 10,
  },
  correo: {
    textAlign: 'center',
    fontFamily: 'lexend-regular',
    color: 'gray',
    fontSize: 15,
    marginBottom: 10,
  },
  contenedor_titulo: {
    //marginTop: 30,
    marginTop: 40,
    alignItems: 'center',
    margin: 15,
    //marginBottom: 30,
    marginBottom: 20,
  },
  titulo: {
      textAlign: 'center',
      fontFamily: 'lexend-extrabold',
      fontSize: 20,
      color: '#FD5900',
  } 
});

export default HomeScreen;
