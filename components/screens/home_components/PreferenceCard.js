import React,{useState} from 'react';
import { View, Switch, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ArrowIcon from 'react-native-vector-icons/AntDesign';

//iconos
import Activity from '../../../images/home/home_icons/historial.svg';
import Notifications from '../../../images/home/home_icons/notificaciones.svg';
import DarkMode from '../../../images/home/home_icons/modo_oscuro.svg';
import CloseSesion from '../../../images/home/home_icons/cerrar_sesion.svg';
import Help from '../../../images/home/home_icons/ayuda.svg';
import CustomSwitch from '../../general_components/CustomSwitch';

const PreferenceCard = () => {
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.cardContainer}>
          <View style={styles.preferencesContainer}>
            <TouchableOpacity style={styles.subcontainer} onPress={() => navigation.navigate("Notificaciones",{texto:"Notificaciones"})}>
              <View style={styles.iconos}>
                <Notifications width={30} height={30}/>
              </View>
              <Text style={styles.preferencia}>Notificaciones</Text>
              <View style={styles.flecha}>
                <ArrowIcon name="right" size={26} color="#FD5900"/>
              </View> 
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.subcontainer} onPress={() => navigation.navigate("Notificaciones",{texto:"Notificaciones"})}>
              <View style={styles.iconos}>
                <Notifications width={30} height={30} style={styles.iconos}/>
              </View>
              <Text style={styles.preferencia}>Notificaciones</Text>
              <View style={styles.flecha}>
                <CustomSwitch/>
              </View> 
            </TouchableOpacity> */}
            <View style={styles.divider}/> 
            <View style={styles.subcontainer}>
              <View style={styles.iconos}>
                <DarkMode width={30} height={30} style={styles.iconos}/>
              </View>
              <Text style={styles.preferencia}>Modo oscuro</Text>
              <View style={styles.flecha}>
                <CustomSwitch/>
              </View> 
            </View>
            <TouchableOpacity style={styles.subcontainer}>
              <View style={styles.iconos}>
                <CloseSesion width={30} height={30} style={styles.iconos}/>
              </View>
              <Text style={styles.preferencia}>Cerrar sesión</Text>
            </TouchableOpacity>          
          </View>          
        </View>
    );
};

const styles = StyleSheet.create({
  cardContainer: {
      width: '90%',
      backgroundColor: '#ffffff',
      borderRadius: 10,
      marginRight: 15,
      marginBottom: 15,
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
    subcontainer: {
      // borderWidth: 2,
      // borderColor: 'green',
      width: '100%',
      flexDirection: 'row',
      display: 'flex',
      justifyContent: 'flex-start',
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginVertical: 5,
    },
    iconos:{
      width: '10%',
      justifyContent: 'center',
      alignItems: 'center',
      // borderWidth: 2,
      // borderColor: 'red',
    },
    preferencia:{
      // borderWidth: 2,
      // borderColor: 'blue',
      width: '80%',
      display: 'flex',
      textAlign: 'left',
      fontFamily: 'lexend-regular',
      fontSize: 17,
      marginLeft: 20,
      textAlignVertical: 'center',
    },
    flecha:{
      // borderWidth: 2,
      // borderColor: 'black',
      width: '15%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    divider: {
      width: '100%',
      borderBottomWidth: 0,
      //borderBottomColor: '#FD5900',
      borderBottomColor: '#000000',
      //borderBottomColor: '#fdfdfd',
      //marginTop: 20,
      //marginBottom: 10,
      elevation: 1,
      shadowColor: '#000000',
      zIndex: 1,
  },
});

export default PreferenceCard;