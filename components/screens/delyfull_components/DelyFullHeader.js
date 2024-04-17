import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';

const anchoVentana = Dimensions.get('window').width;
const altoVentana = Dimensions.get('window').height;

const DelyFullHeader = ({ruta_imagen , color_fondo}) =>{
    const navigation = useNavigation();    
    return (
        <TouchableOpacity style={[styles.barra_superior, {backgroundColor:color_fondo}]} onPress={() => navigation.navigate("CuckooScreen")}>
          <Image source={ruta_imagen} style={styles.imagen_superior}></Image>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    barra_superior: {
        paddingTop: Constants.statusBarHeight*1.20,
        height: 120,
        width: anchoVentana,
        backgroundColor: '#014955',
        //display: 'flex',
        alignSelf: 'flex-start',
        alignItems: 'center',
        //alignContent: 'center',
        justifyContent: 'center',
    },
    imagen_superior: {
        width: anchoVentana*0.5,
        maxWidth: 500,
        resizeMode: 'contain',
        marginTop: '10%',
        marginBottom: '10%',
        // paddingBottom: '5%',
      },
});

export default DelyFullHeader;