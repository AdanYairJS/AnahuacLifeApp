import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import Header from '../../../general_components/Header';
import Card_Chevron from '../Card_Chevron';

const HelpScreen = ( ) => {
  return (
    <View style={styles.container}>
        <StatusBar translucent backgroundColor="#ffffff" barStyle="dark-content" /> 
        {/* <View style={styles.contenedor_titulo}>
          <Text style={styles.titulo}>PREGUNTAS FRECUENTES</Text>
        </View>
        <Card_Chevron text={"¿Cómo puedo realizar un pedido de comida?"}/>
        <Card_Chevron text={"¿Cómo puedo personalizar mis notificaciones?"}/>
        <Card_Chevron text={"¿Cómo registro actividades en horario/agenda?"}/> */}
        <View style={styles.contenedor_titulo}>
          <Text style={styles.titulo}>CONTÁCTANOS</Text>
        </View>
        <Text style={styles.texto}>Si tienes dudas o sugerencias puedes escribirlas en el siguiente recuadro</Text>
        <Card_Chevron text={"Haz una pregunta..."}/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8F8',
        flex: 1,
        paddingTop: 90,
    },
    contenedor_titulo: {
      //marginTop: 30,
      marginTop: 20,
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
    },
    texto:{
      width: '80%',
      alignSelf: 'center',
      textAlign: 'center',
      fontFamily: 'lexend-regular',
      fontSize: 16,
      //marginBottom: 20,
      marginTop: -10,
    },
});

export default HelpScreen;