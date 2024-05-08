import React, { useState , useEffect } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import DirectoryWorkers from './DirectoryWorkers';
import DirectoryDepartmentTarjeta from './DirectoryDepartmentTarjeta';
//Imagenes
// import a_enchiladas from '../../../images/cuckoo/a_enchiladas.jpg';
// import b_caramel from '../../../images/cuckoo/b_caramel.jpg';
// import d_sandwich from '../../../images/cuckoo/d_sandwich.jpg';
// import e_cuckoo from '../../../images/cuckoo/e_cuckoo.jpg';
import s_desayunos from '../../../images/cuckoo/s_desayunos.jpeg';
import s_antojitos from '../../../images/cuckoo/s_antojitos.jpg';
import s_platillos from '../../../images/cuckoo/s_platillos.png';

import ss_huevos from '../../../images/cuckoo/ss_huevos.jpg';
import ss_enchiladas from '../../../images/cuckoo/ss_enchiladas.jpg';
import ss_dulce from '../../../images/cuckoo/ss_dulce.jpg';
import ss_pan from '../../../images/cuckoo/ss_pan.jpg';
import ss_bebidas from '../../../images/cuckoo/ss_bebidas.jpg';
// import { ScrollView } from 'react-native-gesture-handler';

// import utf8 from 'utf8';

const anchoVentana = Dimensions.get('window').width;
const altoVentana = Dimensions.get('window').height;


const DirectoryDepartments = ({id_menu}) => {
  const navigation = useNavigation();

  const [deptos, setDeptos] = useState([]);

  let getDeptos = () => {
    fetch("http://192.168.1.70:3333/departamentos",{
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