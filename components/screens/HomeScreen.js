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