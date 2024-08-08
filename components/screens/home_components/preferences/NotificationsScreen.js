import React, {useContext} from 'react';
import {View, ScrollView, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import Element_Switch from '../Element_Switch';
import CustomSwitch from '../../../general_components/CustomSwitch';
import themeContext from '../../../theme/themeContext';

const NotificationScreen = ( ) => {
  const theme = useContext(themeContext);

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: theme.backgroundColor,
      //marginTop: 90,
      paddingTop: 90,
    },
    cardContainer: {
        backgroundColor: theme.backgroundCard,
        borderRadius: 10,
        marginRight: 15,
        marginLeft: 15,
        marginTop: 15,
        //marginBottom: 5,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
        display: 'flex',
        justifyContent: 'space-between',
        alignSelf: 'center',
      },
      preferencesContainer:{
        // borderWidth: 2,
        // borderColor: 'red',
        marginVertical: 10,
        width: '90%',
      },
      titulo:{
        color: theme.color,
        marginLeft: 20,
        fontFamily: 'lexend-bold',
        fontSize: 16,
        paddingVertical: 10,
        //marginVertical: 5,
      },
  });

  return (
    <ScrollView style={styles.container}>
        <StatusBar translucent backgroundColor="#ffffff" barStyle="dark-content" /> 
        <View style={styles.cardContainer}>
          <View style={styles.preferencesContainer}>
            <Element_Switch text={"Todas las notificaciones"}/>  
          </View>          
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.preferencesContainer}>
            <Text style={styles.titulo}>COMIDA</Text>
            <Element_Switch text={"Novedades de Cuckoo"}/>
            <Element_Switch text={"Menú del día"}/>
            <Element_Switch text={"Novedades de Dely Full"}/>
            <Element_Switch text={"Pedido listo"}/>   
          </View>          
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.preferencesContainer}>
            <Text style={styles.titulo}>EVENTOS</Text>
            <Element_Switch text={"Eventos de la semana"}/>            
            <Element_Switch text={"Puntos nova social"}/>
            <Element_Switch text={"Puntos nova liderazgo"}/> 
            <Element_Switch text={"Puntos nova espiritual"}/>
            <Element_Switch text={"Puntos nova profesional"}/> 
          </View>          
        </View>
        <View style={[styles.cardContainer, {marginBottom: 110}]}>
          <View style={styles.preferencesContainer}>
            <Text style={styles.titulo}>HORARIO</Text>
            <Element_Switch text={"Inicio de clase"}/>            
            <Element_Switch text={"Actividades personales"}/> 
          </View>          
        </View>
      </ScrollView>
  );
};

export default NotificationScreen;