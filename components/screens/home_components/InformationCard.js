import React, {useContext} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import { FontAwesome5 } from '@expo/vector-icons';

//iconos
import Activity from '../../../images/home/home_icons/historial.svg';
import Notifications from '../../../images/home/home_icons/notificaciones.svg';
import DarkModeI from '../../../images/home/home_icons/modo_oscuro.svg';
import Help from '../../../images/home/home_icons/ayuda.svg';
import CustomSwitch from '../../general_components/CustomSwitch';
import themeContext from '../../theme/themeContext';

const InformationCard = () => {
    const navigation = useNavigation();
    const theme = useContext(themeContext);

    const styles = StyleSheet.create({
      cardContainer: {
          width: '90%',
          backgroundColor: theme.backgroundCard,
          borderRadius: 10,
          marginRight: 15,
          marginBottom: 10,
          marginLeft: 15,
          padding: 10,
          shadowColor: theme.shadowColor,
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
           borderWidth: 2,
           borderColor: 'red',
          marginVertical: 10,
          width: '90%',
        },
        subcontainer: {
           borderWidth: 2,
           borderColor: 'green',
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
           borderWidth: 2,
           borderColor: 'red',
        },
        preferencia:{
          // borderWidth: 2,
          // borderColor: 'blue',
          color: theme.color,
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
  });

    return (
        <View style={styles.cardContainer}>
          <View style={styles.preferencesContainer}>
            <TouchableOpacity style={styles.subcontainer} onPress={() => navigation.navigate("Actividad",{texto:"Tu Actividad"})}>
              <View style={styles.iconos}>
                <Activity width={30} height={30}/>
              </View>
              <Text style={styles.preferencia}>Tu actividad</Text>
              <View style={styles.flecha}>
                <ArrowIcon name="right" size={26} color="#FD5900"/>
              </View>              
            </TouchableOpacity>
            <TouchableOpacity style={styles.subcontainer} onPress={() => navigation.navigate("Ayuda",{texto:"Ayuda"})}>
              <View style={styles.iconos}>
                <Help width={30} height={30} style={styles.iconos}/>
              </View>
              <Text style={styles.preferencia}>Ayuda</Text>
              <View style={styles.flecha}>
                <ArrowIcon name="right" size={26} color="#FD5900"/>
              </View>   
            </TouchableOpacity>
          </View>          
        </View>
    );
};

export default InformationCard;