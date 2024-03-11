import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Importa FontAwesome desde Expo para los iconos
import HorarioScreen from './home_components/HorarioScreen'; // Importa el componente HorarioScreen

const iconosDisponibles = [ // Lista de iconos disponibles
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
  const [iconName, setIconName] = useState("user"); // Estado para almacenar el nombre del icono actual
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar la visibilidad del modal

  // Función para cambiar el icono
  const cambiarIcono = (nuevoIcono) => {
    setIconName(nuevoIcono); // Actualiza el estado del icono con el nuevo nombre
    setModalVisible(false); // Cierra el modal después de seleccionar un icono
  };

  // Renderiza un ítem de la lista de iconos
  const renderIcono = ({ item }) => (
    <TouchableOpacity onPress={() => cambiarIcono(item)} style={styles.iconoItem}>
      <FontAwesome name={item} size={30} color="black" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.rectangle}>
          <TouchableOpacity onPress={() => setModalVisible(true)}> {/* Abre el modal al presionar el círculo */}
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
        {/* Aquí se integra el componente del horario */}
        <HorarioScreen />
      </View>

      {/* Modal para mostrar las opciones de iconos */}
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
  );
}

const styles = StyleSheet.create({
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
    marginBottom: 20,
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
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  userInfo: {
    flex: 1,
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
});

export default HomeScreen;
