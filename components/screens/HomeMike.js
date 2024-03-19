import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import HorarioScreen from './home_components/HorarioScreenMike';

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
  const [perfilVisible, setPerfilVisible] = useState(false);
  const [configuracionVisible, setConfiguracionVisible] = useState(false);
  const [temaClaroSeleccionado, setTemaClaroSeleccionado] = useState(true); // Estado para controlar si el tema claro está seleccionado

  const cambiarIcono = (nuevoIcono) => {
    setIconName(nuevoIcono);
    setModalVisible(false);
  };

  // Función para manejar la selección del tema claro
  const seleccionarTemaClaro = () => {
    setTemaClaroSeleccionado(true);
  };

  // Función para manejar la selección del tema oscuro
  const seleccionarTemaOscuro = () => {
    setTemaClaroSeleccionado(false);
  };

  const renderIcono = ({ item }) => (
    <TouchableOpacity onPress={() => cambiarIcono(item)} style={styles.iconoItemContainer}>
      <View style={styles.iconoItem}>
        <FontAwesome name={item} size={50} color="white" />
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <View style={styles.topSection}>
          <View style={styles.rectangle}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <View style={styles.circle}>
                <FontAwesome name={iconName} size={45} color="white" />
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
            <HorarioScreen diasSemana={['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']} />
          </View>

          <View style={styles.space} />
          
          <View style={styles.configuracionContainer}>
            <Text style={styles.configuracionTitle}>Configuración</Text>
      
            <View style={styles.optionContainer}>
              <Text style={styles.optionText}>Tema</Text>
              <View style={styles.themeButtons}>
                <TouchableOpacity 
                  style={[styles.themeButton, temaClaroSeleccionado ? styles.selectedButton : null]} // Aplicar estilos adicionales si el tema claro está seleccionado
                  onPress={seleccionarTemaClaro} // Manejar la selección del tema claro
                >
                  <FontAwesome name="sun-o" size={24} color={temaClaroSeleccionado ? "white" : "black"} /> 
                  <Text style={[styles.themeButtonText, temaClaroSeleccionado ? styles.selectedText : null]}>Claro</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.themeButton, !temaClaroSeleccionado ? styles.selectedButton : null]} // Aplicar estilos adicionales si el tema oscuro está seleccionado
                  onPress={seleccionarTemaOscuro} // Manejar la selección del tema oscuro
                >
                  <FontAwesome name="moon-o" size={24} color={!temaClaroSeleccionado ? "white" : "black"} />
                  <Text style={[styles.themeButtonText, !temaClaroSeleccionado ? styles.selectedText : null]}>Oscuro</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </View>
      </View>

        <View style={styles.space} />

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>

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
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  topSection: {
    width: '100%',
    marginBottom: 20,
  },
  bottomSection: {
    width: '100%',
    marginBottom: 20,
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
    width: 70,
    height: 70,
    borderRadius: 40,
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
    justifyContent: 'center',
    paddingTop: 200,
    paddingHorizontal: 30,
  },
  iconoItemContainer: {
    padding: 25,
  },
  iconoItem: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  space: {
    height: 50,
  },
  configuracionContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  configuracionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionContainer: {
    marginBottom: 20,
  },
  optionText: {
    fontSize: 16,
    marginBottom: 10,
  },
  themeButtons: {
    flexDirection: 'row',
  },
  themeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    borderWidth: 1, // Añadir contorno negro
    borderRadius: 5, // Añadir borde redondeado
    paddingVertical: 5, // Espaciado vertical
    paddingHorizontal: 10, // Espaciado horizontal
  },
  themeButtonText: {
    marginLeft: 5,
  },
  selectedButton: {
    backgroundColor: 'black', // Fondo negro si está seleccionado
  },
  selectedText: {
    color: 'white', // Texto blanco si está seleccionado
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

export default HomeScreen;