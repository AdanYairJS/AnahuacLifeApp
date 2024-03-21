import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ArrowIcon from 'react-native-vector-icons/AntDesign';

//iconos
import Activity from '../../../images/home/home_icons/historial.svg';
import Notifications from '../../../images/home/home_icons/notificaciones.svg';
import DarkMode from '../../../images/home/home_icons/modo_oscuro.svg';
import CloseSesion from '../../../images/home/home_icons/cerrar_sesion.svg';
import Help from '../../../images/home/home_icons/ayuda.svg';

const PreferenceCard = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.cardContainer}>
          <View style={styles.preferencesContainer}>
            <TouchableOpacity style={styles.subcontainer} onPress={() => navigation.navigate("Notificaciones",{texto:"Notificaciones"})}>
              <Notifications width={30} height={30} style={styles.iconos}/>
              <Text style={styles.preferencia}>Notificaciones</Text>
              <ArrowIcon name="right" size={24} color="#FD5900" style={styles.flecha}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.subcontainer} onPress={() => navigation.navigate("ModoOscuro",{texto:"Modo Oscuro"})}>
              <DarkMode width={30} height={30} style={styles.iconos}/>
              <Text style={styles.preferencia}>Modo oscuro</Text>
              <ArrowIcon name="right" size={24} color="#FD5900" style={styles.flecha}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.subcontainer}>
              <CloseSesion width={30} height={30} style={styles.iconos}/>
              <Text style={styles.preferencia}>Cerrar sesión</Text>
            </TouchableOpacity>          
          </View>          
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginRight: 15,
        marginBottom: 30,
        marginLeft: 15,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
        // width: 360,
        // height: 300,
        display: 'flex',
        justifyContent: 'space-between',
        alignSelf: 'center',
      },
      preferencesContainer:{
        marginVertical: 10,
      },
      subcontainer: {
        width: '95%',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'flex-start',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 5,
        // borderColor: 'red',
        // borderWidth: 2,
        
        //alignItems: 'center',
      },
      iconos:{
        resizeMode: 'cover',
      },
      preferencia:{
        width: '80%',
        display: 'flex',
        textAlign: 'left',
        fontFamily: 'lexend-regular',
        fontSize: 17,
        marginLeft: 20,
      },
      flecha:{
      },
});

export default PreferenceCard;