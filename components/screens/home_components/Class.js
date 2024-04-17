import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const Class = ({ dia, hora, longitud, color, nombre, lugar}) => {
  const anchoCelda = (Dimensions.get('window').width) / 7.4;
  const altoCelda = ((Dimensions.get('window').height) / 33) - 0.8;
  const columna = dia * anchoCelda;
  const fila = hora * altoCelda - 2;

  const styles = StyleSheet.create({
    cardContainer: {
      marginLeft: columna + 0.5,
      marginTop: fila,
      width: anchoCelda - 1.5,
      height: (altoCelda * longitud),
      backgroundColor: color,
      borderRadius: 7,
      padding: 2,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 3,
      display: 'flex',
      justifyContent: 'space-between',
      position: 'absolute',
    },
    preferencesContainer: {
      width: '100%',
    },
    subcontainer: {
      width: '100%',
      flexDirection: 'row',
      display: 'flex',
      justifyContent: 'flex-start',
      padding: 1,
      marginVertical: 5,
    },
    preferencia: {
      width: '80%',
      display: 'flex',
      textAlign: 'left',
      fontFamily: 'lexend-regular',
      fontSize: 10,
      color: '#ffffff',
      textAlignVertical: 'center',
    },
    flecha: {
      width: '15%',
      alignItems: 'center',
      justifyContent: 'right',
      marginRight: 10,
    },
  });

  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View style={styles.preferencesContainer}>
        <View style={styles.subcontainer}>
          <Text style={styles.preferencia}>{nombre}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Class;
