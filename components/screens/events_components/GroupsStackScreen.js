import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking} from 'react-native';
import InstagramIcon from '../../../images/icons/instagram_icon.svg';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'; //npx expo install expo-linear-gradient
import EventSection from './EventSection';


const GroupsStackScreen = () => {
  const navigation = useNavigation(); 

  return (
    <LinearGradient 
            colors={['#f0f0f0','#F9F9F9']}
            style={styles.container}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("EventosScreen")}>
            <ArrowIcon name="left" size={24} color="black" />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={styles.groupName}>Vértice</Text>
            <Image source={require('../../../images/eventos/grupos/vertice.png')} style={styles.logo} />
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Vértice Anáhuac es un Programa de Excelencia y Desarrollo Humano enfocado en la formación integral de alumnos destacados en su carrera y con alto potencial de liderazgo.
          </Text>
        </View>
        <View style={styles.instagramContainer}>
          <TouchableOpacity style={styles.instagramContainer} onPress={() => Linking.openURL('https://www.instagram.com/verticeoaxaca')}>
            <InstagramIcon width={30} height={30} />
            <Text style={styles.instagramText}>
              verticeoaxaca
            </Text>
          </TouchableOpacity>  
        </View>
        <View style={styles.divider}/>    
            <View style={styles.contenedor_titulo}>
            <Text style={styles.titulo}>Próximos eventos</Text>
        </View> 
        <EventSection/>     
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    flex: 1,
    //padding: 20,
  },
  header: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff', // Fondo blanco
    paddingVertical: 10,
    paddingHorizontal: 20,
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
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  groupName: {
    fontSize: 24,
    marginLeft: 20,
    marginRight: 'auto',
    fontFamily: 'lexend-medium', 
  },
  logo: {
    width: 60,
    height: 60,
  },
  descriptionContainer: {
    padding: 30,
    marginTop: 90,
    marginBottom: 25,
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
    fontFamily: 'lexend-regular', 
  },
  instagramContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15, 
  },
  instagramText: {
    fontSize: 18,
    marginLeft: 7,
    fontFamily: 'lexend-light', 
    textDecorationLine: 'underline',
  },
  divider: {
    borderBottomWidth: 0.5,
    //borderBottomColor: '#FD5900',
    borderBottomColor: '#fdfdfd',
    marginTop: 20,
    marginBottom: 10,
    elevation: 1,
    shadowColor: '#000000',
  },
  contenedor_titulo: {
      marginTop: 25,
      alignItems: 'center',
      margin: 15,
      marginBottom: 25,
  },
  titulo: {
      fontFamily: 'lexend-regular',
      fontSize: 25,
      color: '#000000',
      textShadowColor: 'rgba(0, 0, 0, 0.4)', 
      textShadowOffset: { width: 0.05, height: 0.05 }, 
      textShadowRadius: 1, 
  },
});

export default GroupsStackScreen;
