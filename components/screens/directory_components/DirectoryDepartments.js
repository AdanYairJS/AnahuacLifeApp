import React, { useState , useEffect } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import DirectoryWorkers from './DirectoryWorkers';
import DirectoryDepartmentTarjeta from './DirectoryDepartmentTarjeta';

import {EXPO_ip} from "@env";

const anchoVentana = Dimensions.get('window').width;
const altoVentana = Dimensions.get('window').height;

console.log(EXPO_ip);

const DirectoryDepartments = ({id_menu}) => {
  const navigation = useNavigation();

  const [deptos, setDeptos] = useState([]);

  let getDeptos = () => {
    fetch(`http://${EXPO_ip}:3333/departamentos`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res =>{
      // console.log(res.status);
      // console.log(res.headers);
      return res.json();
    })
    .then(
      (result) => {
        // console.log(result);
        setDeptos(result);
      },
      (error) => {
        console.log(error);
      }
    )
  };

  useEffect(() => {
    getDeptos();
  }, []);


  return (
      <View style={styles.container}>
      {deptos.map((departamento, index) => (        
          <DirectoryDepartmentTarjeta key={index} {...departamento} />        
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: anchoVentana,
    maxWidth: 800,
    alignSelf: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 20,
    marginTop: Constants.statusBarHeight + 60,
  },
});

export default DirectoryDepartments;