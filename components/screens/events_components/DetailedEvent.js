import React from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const DetailedEvent = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={['#f0f0f0', '#F9F9F9']}
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("EventosScreen")}>
          <ArrowIcon name="left" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.groupName}>Detalles del Evento</Text>
        </View>
      </View>

      {/* Banner de la actividad */}
      <View style={styles.bannerContainer}>
        <Image
            source={require('../../../images/eventos/evento2.png')}
            style={styles.bannerImage}
        />
      </View>

      {/* Logos de las áreas involucradas */}
      <View style={styles.areasContainer}>
        <Image
          source={require('../../../images/eventos/grupos/fesal.png')}
          style={styles.logo}
        />
        <Image
          source={require('../../../images/eventos/grupos/vertice.png')}
          style={{width: 50, height:50, resizeMode: 'contain'}}
        />
        <Image
          source={require('../../../images/eventos/grupos/adefa.png')}
          style={styles.logo}
        />
      </View>

      {/* Descripción breve del evento */}
      <Text style={styles.description}>
        Descripción breve del evento. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit lorem sit amet velit scelerisque, vitae posuere nunc ultricies.
      </Text>

      {/* Fecha, hora y lugar del evento */}
      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>Fecha: 12 de marzo de 2024</Text>
        <Text style={styles.detailText}>Hora: 10:00 AM</Text>
        <Text style={styles.detailText}>Lugar: Auditorio SUM</Text>
      </View>

      {/* Botón de registro */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    flex: 1,
  },
  header: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
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
  bannerContainer: {
    height: 200,
    //backgroundColor: 'lightblue',
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  areasContainer: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    //marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
  logo: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  description: {
    padding: 20,
    marginHorizontal: 20,
    margin: 20,
    textAlign: 'justify',
    fontFamily: 'lexend-regular',
    fontSize: 16,
  },
  detailsContainer: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  detailText: {
    fontFamily: 'lexend-medium',
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  button: {
    maxWidth: 200,
    alignSelf: 'center',
    backgroundColor: '#FD5900',
    margin: 40,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'lexend-medium',
  },
});

export default DetailedEvent;
