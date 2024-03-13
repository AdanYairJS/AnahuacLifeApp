import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ConfiguracionDialog = ({ visible, onClose }) => {
  if (!visible) return null;

  return (
    <View style={styles.dialogContainer}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <FontAwesome name="times" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.dialogContent}>
        <Text>Contenido del cuadro de diálogo de Configuración...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dialogContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
    width: '66%',
    height: '66%',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    zIndex: 1000,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1001,
  },
  dialogContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ConfiguracionDialog;