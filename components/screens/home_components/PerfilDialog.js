import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const PerfilDialog = ({ visible, onClose, profileInfo }) => {
  if (!visible) return null;

  return (
    <View style={styles.dialogContainer}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <FontAwesome name="times" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.dialogContent}>
        <View style={styles.profileInfo}>
          <Text style={styles.infoTitle}>Nombre:</Text>
          <Text style={styles.infoText}>{profileInfo.name}</Text>

          <Text style={styles.infoTitle}>ID:</Text>
          <Text style={styles.infoText}>{profileInfo.id}</Text>

          <Text style={styles.infoTitle}>Correo:</Text>
          <Text style={styles.infoText}>{profileInfo.email}</Text>

          <Text style={styles.infoTitle}>Carrera:</Text>
          <Text style={styles.infoText}>{profileInfo.career}</Text>

          <Text style={styles.infoTitle}>Minor:</Text>
          <Text style={styles.infoText}>{profileInfo.minor}</Text>
        </View>
        <TouchableOpacity style={styles.adminButton}>
          <Text style={styles.adminButtonText}>Administración</Text>
        </TouchableOpacity>
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
    padding: 20,
  },
  profileInfo: {
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
  adminButton: {
    backgroundColor: '#FD5900',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    elevation: 5,
  },
  adminButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PerfilDialog;