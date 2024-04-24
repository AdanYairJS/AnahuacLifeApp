import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import utf8 from 'utf8';

const DirectoryWorkerTarjeta = ({nombre, id_depto, correo, hora_ap1, hora_ci1, id_lugar, nombre_lugar}) => {
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate("DirectoryWorkers",{id_depto, correo, nombre, hora_ap1, hora_ci1, id_lugar, nombre_lugar})}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{utf8.decode(nombre)}</Text>
      </View>
      <ArrowIcon name="right" size={26} color="#FD5900" style={styles.image}/>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '90%',
    height: 'auto',
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    margin: 15,
  },
  name: {
    fontSize: 17,
    fontFamily: 'lexend-regular',
  },
  image: {
    marginRight: 10,
    alignSelf: 'center',
  },
  contendor_scroll: {
    marginTop: 15,
    marginBottom: 15,
  }
  });

  export default DirectoryWorkerTarjeta;