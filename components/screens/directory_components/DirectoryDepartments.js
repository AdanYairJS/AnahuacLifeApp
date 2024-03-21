import React from 'react';
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



const anchoVentana = Dimensions.get('window').width;
const altoVentana = Dimensions.get('window').height;


const DirectoryDepartments = ({id_menu}) => {
  const navigation = useNavigation();
  let departamentos;

  
  operacion_academica = [
      {nombre: 'Roberto Geovani López Curiel', correo: 'geovanni.curiel@anahuac.mx', imagen: require('../../../images/directorios/w_roberto.jpg')},
      {nombre: 'Dalia Alarcón Gonzalez', correo: 'dalia.alarcon@anahuac.mx', imagen: require('../../../images/directorios/w_dalia.jpg')},
    ];
    
    formacion_integral = [
        {nombre: 'Lluvia Itaií Ruiz Ramos', correo: 'lluvia.ruiz@anahuac.mx', imagen: require('../../../images/directorios/w_lluvia.jpg')},
        {nombre: 'Jose Lorenzo Martínez Valencia', correo: 'jose.martinezval@anahuac.mx', imagen: require('../../../images/directorios/w_jose_lorenzo.jpg')},
        {nombre: 'Concepción Jazmín Santos Estrada', correo: 'concepcion.santoses@anahuac.mx', imagen: require('../../../images/directorios/w_concepcion.jpg')},
        {nombre: 'Francisco Morales Mejía', correo: 'jorge.moralesme@anahuac.mx', imagen: require('../../../images/directorios/w_jorge_francisco.jpg')},
    ];
    caja = [
        {nombre: 'Elizabeth Cruz Zafra', correo: 'elizabeth.cruzz@anahuac.mx', imagen: require('../../../images/directorios/w_elizabeth.jpg')},
    ];
    t_caja = [
      'Pago de colegiaturas',
      'Pago de inscripción',
      'Pago de constancias',
    ];
    administracion_escolar = [
        {nombre: 'Carolina López Reyes', correo: 'carolina.lopezre@anahuac.mx', imagen: require('../../../images/directorios/w_carolina.jpg')},
    ];
    orientacion_psicologica = [
        {nombre: 'Nelly Tanivet López Martínez', correo: 'nelly.lopezm76@anahuac.mx', imagen: require('../../../images/directorios/w_nelly.jpg')},
        {nombre: 'Luisa Miriam Toledo Ramos', correo: 'luisa.toledo@anahuac.mx', imagen: require('../../../images/directorios/w_luisa.jpg')},
    ];
    becas = [
        {nombre: 'Veronica Ivonne López García', correo: 'ivonne.lopezga@anahuac.mx', imagen: require('../../../images/directorios/w_veronica.jpg')},
    ];
    departamentos = [
      {nombre: 'OperacionAcademica' , imagen: require('../../../images/directorios/d_operacion_academica.jpg'), texto: 'Operación Académica', ubicacion: 'Edificio B, planta alta', id_ubicacion: 2, trabajadores: operacion_academica},
      {nombre: 'FormacionIntegral' , imagen: require('../../../images/directorios/d_formacion_integral.jpeg'), texto: 'Formación Integral', ubicacion: 'Edificio B, planta alta', id_ubicacion: 2, trabajadores: formacion_integral},
      {nombre: 'Caja' , imagen: require('../../../images/directorios/d_caja.jpg'), texto: 'Caja', correo: 'caja.uao@anahuac.mx', ubicacion: 'Edificio B, planta alta', id_ubicacion: 2 , tramites: t_caja, trabajadores: caja},
      {nombre: 'AdministracionEscolar' , imagen: require('../../../images/directorios/d_administracion_escolar.jpg'), texto: 'Administración Escolar', ubicacion: 'Edificio B, planta alta', id_ubicacion: 2, trabajadores: administracion_escolar},
      {nombre: 'OrientacionPsicologica' , imagen: require('../../../images/directorios/d_orientacion_psicologica.jpg'), texto: 'Orientación Psicológica', ubicacion: 'Edificio B, planta alta', id_ubicacion: 2, trabajadores: orientacion_psicologica},
      {nombre: 'Becas' , imagen: require('../../../images/directorios/d_becas.jpg'), texto: 'Becas', ubicacion: 'Edificio B, planta alta', id_ubicacion: 2, trabajadores: becas},
    ];
    const handlePress = (seccion) => {
        let nombre_seccion = seccion.nombre;
        let texto_seccion = seccion.texto;
        // Aquí puedes navegar a la nueva ventana con el título de la sección
        // navigation.navigate('NuevaVentana', { titulo: seccion.nombre });
        navigation.navigate(nombre_seccion,{texto_seccion});
    };
    return (
      <View style={styles.container}>
      {departamentos.map((departamento, index) => (        
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
  icono: {
    width: '45%',
    aspectRatio: 0.75,
    // width: 100,
    // height: 100,
    margin: '2%',
    // borderRadius: 20,
    // borderWidth: 2,
    // borderColor: '#FD5900',
    elevation: 4,
    shadowColor: '#000000',
    // shadowOffset: ,
    // shadowOpacity: 20,
    overflow: 'hidden',
  },
  imagen: {
    width: '100%',
    height: '80%',
    resizeMode: 'cover',
    borderRadius: 25,
  },
  titulo: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    // textShadowColor: 'rgba(0, 0, 0, 0.4)', 
    // textShadowOffset: { width: 0.05, height: 0.05 }, 
    // textShadowRadius: 1,
    marginTop: 5,
    marginBottom: 5,
  },
  titulo_seccion: {
    width: '100%',
    fontSize: 20,
    // fontWeight: 'bold',
    fontFamily: 'lexend-extrabold',
    color: '#FFF',
    textAlign: 'left',
    marginLeft: 40,
    marginBottom: 5,
  },
  contendor_scroll: {
    //margin: 15,
    marginTop: 15,
    marginBottom: 15,
  },
});

export default DirectoryDepartments;