// import React from 'react';
// import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import ArrowIcon from 'react-native-vector-icons/AntDesign';
// import { useNavigation } from '@react-navigation/native';
// import { LinearGradient } from 'expo-linear-gradient';

// const HomeScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <LinearGradient
//       colors={['#f0f0f0', '#F9F9F9']}
//       style={styles.container}
//     >
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.navigate("EventosScreen")}>
//           <ArrowIcon name="left" size={24} color="black" />
//         </TouchableOpacity>
//         <View style={styles.titleContainer}>
//           <Text style={styles.groupName}>Detalles del Evento</Text>
//         </View>
//       </View>

//       {/* Banner de la actividad */}
//       <View style={styles.bannerContainer}>
//         <Image
//             source={require('../../images/eventos/evento2.png')}
//             style={styles.bannerImage}
//         />
//       </View>

//       {/* Logos de las áreas involucradas */}
//       <View style={styles.areasContainer}>
//         <Image
//           source={require('../../images/eventos/grupos/fesal.png')}
//           style={styles.logo}
//         />
//         <Image
//           source={require('../../images/eventos/grupos/vertice.png')}
//           style={{width: 50, height:50, resizeMode: 'contain'}}
//         />
//         <Image
//           source={require('../../images/eventos/grupos/adefa.png')}
//           style={styles.logo}
//         />
//       </View>

//       {/* Descripción breve del evento */}
//       <Text style={styles.description}>
//         Descripción breve del evento. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit lorem sit amet velit scelerisque, vitae posuere nunc ultricies.
//       </Text>

//       {/* Fecha, hora y lugar del evento */}
//       <View style={styles.detailsContainer}>
//         <Text style={styles.detailText}>Fecha: 12 de marzo de 2024</Text>
//         <Text style={styles.detailText}>Hora: 10:00 AM</Text>
//         <Text style={styles.detailText}>Lugar: Auditorio SUM</Text>
//       </View>

//       {/* Botón de registro */}
//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>Registrarse</Text>
//       </TouchableOpacity>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#F8F8F8',
//     flex: 1,
//   },
//   header: {
//     height: 80,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     zIndex: 1,
//   },
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//   },
//   groupName: {
//     fontSize: 24,
//     marginLeft: 20,
//     marginRight: 'auto',
//     fontFamily: 'lexend-medium',
//   },
//   bannerContainer: {
//     height: 200,
//     //backgroundColor: 'lightblue',
//     marginTop: 80,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   bannerImage: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
//   areasContainer: {
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     //marginTop: 20,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 1,
//   },
//   logo: {
//     width: 70,
//     height: 70,
//     resizeMode: 'contain',
//   },
//   description: {
//     padding: 20,
//     marginHorizontal: 20,
//     margin: 20,
//     textAlign: 'justify',
//     fontFamily: 'lexend-regular',
//     fontSize: 16,
//   },
//   detailsContainer: {
//     marginHorizontal: 20,
//     marginTop: 10,
//   },
//   detailText: {
//     fontFamily: 'lexend-medium',
//     fontSize: 16,
//     marginBottom: 10,
//     marginLeft: 20,
//     marginRight: 20,
//   },
//   button: {
//     maxWidth: 200,
//     alignSelf: 'center',
//     backgroundColor: '#FD5900',
//     margin: 40,
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontFamily: 'lexend-medium',
//   },
// });

// export default HomeScreen;

import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import HorarioScreen from './home_components/HorarioScreen';
import PerfilDialog from './home_components/PerfilDialog'; // Importa el componente PerfilDialog
import ConfiguracionDialog from './home_components/ConfiguracionDialog'; // Importa el componente ConfiguracionDialog

const iconosDisponibles = [
  "user",
  "building",
  "heart",
  "star",
  "bell",
  "rocket",
  "camera",
  "music",
  "globe"
];

const HomeScreen = () => {
  const [iconName, setIconName] = useState("user");
  const [modalVisible, setModalVisible] = useState(false);
  const [perfilVisible, setPerfilVisible] = useState(false); // Estado para controlar la visibilidad del cuadro de diálogo de perfil
  const [configuracionVisible, setConfiguracionVisible] = useState(false); // Estado para controlar la visibilidad del cuadro de diálogo de configuración

  const cambiarIcono = (nuevoIcono) => {
    setIconName(nuevoIcono);
    setModalVisible(false);
  };

  const renderIcono = ({ item }) => (
    <TouchableOpacity onPress={() => cambiarIcono(item)} style={styles.iconoItem}>
      <FontAwesome name={item} size={30} color="black" />
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <View style={styles.topSection}>
          <View style={styles.rectangle}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <View style={styles.circle}>
                <FontAwesome name={iconName} size={30} color="white" />
              </View>
            </TouchableOpacity>
            <View style={styles.userInfo}>
              <Text>Nombre del Usuario</Text>
              <Text>Carrera que estudia</Text>
              <Text>Periodo actual de estudios</Text>
            </View>
          </View>
        </View>

        <View style={styles.bottomSection}>
          <View style={styles.horarioContainer}>
            <HorarioScreen diasSemana={['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']} 
                           onPerfilPress={() => setPerfilVisible(true)}
                           onConfiguracionPress={() => setConfiguracionVisible(true)} />
          </View>
        </View>

        <View style={styles.space} />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => setPerfilVisible(true)}>
            <Text style={styles.buttonText}>Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setConfiguracionVisible(true)}>
            <Text style={styles.buttonText}>Configuración</Text>
          </TouchableOpacity>
        </View>

        <PerfilDialog visible={perfilVisible} onClose={() => setPerfilVisible(false)} />
        <ConfiguracionDialog visible={configuracionVisible} onClose={() => setConfiguracionVisible(false)} />

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <FlatList
              data={iconosDisponibles}
              renderItem={renderIcono}
              keyExtractor={(item) => item}
              numColumns={3}
              contentContainerStyle={styles.iconoList}
            />
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  topSection: {
    flex: 1,
    width: '100%',
    marginBottom: -70,
  },
  bottomSection: {
    flex: 2,
    width: '100%',
  },
  rectangle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    padding: 20,
    borderRadius: 10,
    width: '100%',
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FD5900',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  userInfo: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    flex: 2,
  },
  horarioContainer: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconoList: {
    alignItems: 'center',
  },
  iconoItem: {
    padding: 10,
  },
  space: {
    height: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    width: '100%',
  },
  button: {
    backgroundColor: '#FD5900',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
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
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;