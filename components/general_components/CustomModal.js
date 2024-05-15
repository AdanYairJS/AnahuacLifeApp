import React from 'react';
import { View, Text, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const CustomModal = ({ visible, onClose, item }) => {
  if (!visible) {
    return null;
  }

  return (
    <View style={styles.modalView}>
      {/* <Text style={[styles.modalTitle, { color: item.color_p }]}>{item.name}</Text>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'lightgray' : 'white',
          },
          styles.buttonClose,
        ]}
        onPress={onClose}>
        <Text style={styles.textStyle}>Cerrar</Text>
      </Pressable> */}
        <TouchableOpacity activeOpacity={0.3} style={styles.modal_cerrar} onPress={onClose}>
        <MaterialCommunityIcons name="close-thick" size={20} color="gray" />
      </TouchableOpacity>
      <Text style={[styles.title, { color: item.color_p }]}>{item.name}</Text>
      <Text style={styles.description}>No hay eventos que mostrar</Text>
      {/* <TouchableOpacity /*onPress={onPress} style={[styles.button, { color: item.color_s }, { display }]}>
        <Text style={styles.buttonText}>{textoBoton}</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    position: 'absolute',
    top: 50,
    left: '10%',
    right: '10%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 10,
  },
  modalTitle: {
    fontSize: 20,
    // fontWeight: 'bold',
    fontFamily: 'lexend-extrabold',
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonClose: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 20,
    paddingBottom: 44,
    shadowColor: '#000',
    shadowOffset: { width: 7, height: 7 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5, // propiedad exclusiva de Android
    position: 'absolute',
    top: 60,
    left: 20,
    right: 20,
    zIndex: 10,
  },
  modal_cerrar: {
    alignSelf: 'flex-end', //alinea la X a la izquierda
  },
  title: {
    fontSize: 24,
    // fontWeight: 'bold',
    fontFamily: 'lexend-extrabold',
    marginBottom: 10,
    // color: '#7522bd',
  },
  description: {
    fontSize: 14,
  },
  button: {
    borderRadius: 20,
    marginTop: 10,
    marginBottom: -28,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '70%',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    alignSelf: 'center',
  },
});

export default CustomModal;
