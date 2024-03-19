import React from 'react';
import { View, TouchableOpacity, Dimensions, ScrollView, Text, StyleSheet, Image, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';

const anchoVentana = Dimensions.get('window').width;

const AgendaScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" /> 
      <View style={styles.menu}>
        <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate("HomeScreen")}> 
          <Text style={styles.tab_name}> Perfil</Text>      
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate("Horario")}> 
          <Text style={styles.tab_name}> Horario</Text>
        </TouchableOpacity>
        <View style={styles.tab}> 
          <Text style={styles.tab_name_active}> Agenda</Text>
          <View style={styles.line} />
        </View>
      </View>

      <ScrollView style={styles.container}>    
          <Text style={styles.titulo}>AGENDA</Text>
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
    // paddingVertical: 10,
    // paddingHorizontal: 20,
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
  contenedor_titulo: {
    marginTop: 30,
    alignItems: 'center',
    margin: 15,
    marginBottom: 30,
  },
  titulo: {
      marginTop: 250,
      textAlign: 'center',
      fontFamily: 'lexend-extrabold',
      fontSize: 20,
      color: '#FD5900',
  } 
});

export default AgendaScreen;
