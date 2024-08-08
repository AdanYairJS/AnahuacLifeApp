import React,{ useRef, useState, useContext} from 'react';
import { View, TouchableOpacity, Dimensions, ScrollView, Text, StyleSheet, Image, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import themeContext from '../../theme/themeContext';

const anchoVentana = Dimensions.get('window').width;

const HomeMenu = () => {
  const navigation = useNavigation();
  const theme = useContext(themeContext);

  const styles = StyleSheet.create({
    menu:{
      paddingTop: Constants.statusBarHeight,
      height: 60 + Constants.statusBarHeight,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.backgroundCard, // Fondo blanco
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
  });

  return (
      <View style={styles.menu}>
        <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate("HomeScreen")}> 
          <Text style={styles.tab_name}> Perfil</Text>      
        </TouchableOpacity>
        <View style={styles.tab}> 
          <Text style={styles.tab_name_active}> Horario</Text>
          <View style={styles.line} />
        </View>
        <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate("Agenda")}> 
          <Text style={styles.tab_name}> Agenda</Text>
        </TouchableOpacity>
      </View>
  );
};

export default HomeMenu;
