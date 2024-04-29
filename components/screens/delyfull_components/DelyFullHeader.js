import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Dimensions } from 'react-native';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';

const anchoVentana = Dimensions.get('window').width;
const altoVentana = Dimensions.get('window').height;

const DelyFullHeader = ({ruta_imagen , color_fondo}) =>{
    const navigation = useNavigation();   
    const t = 30; 
    return (
        <View style={[styles.barra_superior, {backgroundColor:color_fondo}]}>
            <TouchableOpacity onPress={() => navigation.pop()} style={styles.touch}><ArrowIcon name="left" size={t} color='#fff' /></TouchableOpacity>
            <Image source={ruta_imagen} style={styles.imagen_superior}></Image>
            <TouchableOpacity style={styles.touch}><ArrowIcon name="shoppingcart" size={t} color='#fff' /></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    barra_superior: {
        paddingTop: Constants.statusBarHeight*1.20,
        height: 120,
        //height: '40%',
        width: '100%',
        alignSelf: 'flex-start',
        alignItems: 'center',
        //alignContent: 'center',
        //justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    imagen_superior: {
        width: anchoVentana*0.4,
        maxWidth: 500,
        resizeMode: 'contain',
        marginTop: '11%',
        marginBottom: '10%',
        // paddingBottom: '5%',
        //backgroundColor: '#000',
    },
    touch: {
        //backgroundColor: '#000',
        padding: 3,
        //backgroundColor: '#000',
        height: '100%',
        justifyContent: 'center'
    },
});

export default DelyFullHeader;