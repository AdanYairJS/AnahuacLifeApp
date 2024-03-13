import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';

const anchoVentana = Dimensions.get('window').width;
const altoVentana = Dimensions.get('window').height;

const CuckooHeader = ({ruta_imagen , color_fondo}) =>{
    return (
        <View style={[styles.barra_superior, {backgroundColor:color_fondo}]}>
          <Image source={ruta_imagen} style={styles.imagen_superior}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    barra_superior: {
        paddingTop: Constants.statusBarHeight,
        height: 120,
        width: anchoVentana,
        backgroundColor: '#014955',
        display: 'flex',
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagen_superior: {
        width: anchoVentana*0.75,
        maxWidth: 500,
        resizeMode: 'contain',
        marginTop: '5%',
        marginBottom: '10%',
        // paddingBottom: '5%',
      },
});

export default CuckooHeader;