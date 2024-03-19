import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ArrowIcon from 'react-native-vector-icons/AntDesign';

//iconos
import Activity from '../../../images/home/home_icons/historial.svg';
import Notifications from '../../../images/home/home_icons/notificaciones.svg';
import DarkMode from '../../../images/home/home_icons/modo_oscuro.svg';
import Help from '../../../images/home/home_icons/ayuda.svg';

const PreferenceCard = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.cardContainer}>
          <View style={styles.preferencesContainer}>
            <TouchableOpacity style={styles.subcontainer} onPress={() => navigation.navigate("Actividad")}>
              <Activity width={30} height={30} style={styles.iconos}/>
              <Text style={styles.preferencia}>Tu actividad</Text>
              <ArrowIcon name="right" size={24} color="#FD5900" style={styles.flecha}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.subcontainer} onPress={() => navigation.navigate("Notificaciones")}>
              <Notifications width={30} height={30} style={styles.iconos}/>
              <Text style={styles.preferencia}>Notificaciones</Text>
              <ArrowIcon name="right" size={24} color="#FD5900" style={styles.flecha}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.subcontainer} onPress={() => navigation.navigate("ModoOscuro")}>
              <DarkMode width={30} height={30} style={styles.iconos}/>
              <Text style={styles.preferencia}>Modo oscuro</Text>
              <ArrowIcon name="right" size={24} color="#FD5900" style={styles.flecha}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.subcontainer} onPress={() => navigation.navigate("Ayuda")}>
              <Help width={30} height={30} style={styles.iconos}/>
              <Text style={styles.preferencia}>Ayuda</Text>
              <ArrowIcon name="right" size={24} color="#FD5900" style={styles.flecha}/>
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
        marginBottom: 10,
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
        width: 360,
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
      },
      preferencia:{
        width: 250,
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