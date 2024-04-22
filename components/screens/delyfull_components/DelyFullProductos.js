import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import DelyFullSubseccion from './DelyFullSubseccion';
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

const DelyFullProductos = ({id_menu}) => {
  const navigation = useNavigation();
  let secciones;

  // if(id_menu == 'Desayunos')
  // {
  //   secciones = [
  //     {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Huevos'},
  //     {nombre: 'CuckooSeccion' , imagen: ss_enchiladas, texto: 'Maíz'},
  //     {nombre: 'CuckooSeccion' , imagen: ss_dulce, texto: 'Dulce'},
  //     {nombre: 'CuckooSeccion' , imagen: ss_pan, texto: 'Pan'},
  //     {nombre: 'CuckooSeccion' , imagen: ss_bebidas, texto: 'Bebidas'},
  //   ];
  // }

  if(id_menu == 'DelyFull')
  {
    Sandwich=[
      {nombre: 'Sandwich' , 
      imagen: require('../../../images/delyfull/p_pomodoro.png'), 
      texto: 'Pomodoro', 
      precio: 65},
      {nombre: 'Sandwich' , 
      imagen: require('../../../images/delyfull/p_atun_aguacate.png'), 
      texto: 'Atún & Aguacate', 
      precio: 65},
      {nombre: 'Sandwich' , 
      imagen: require('../../../images/delyfull/p_turkey_palermo.jpeg'), 
      texto: 'Turkey Palermo', 
      precio: 65},
    ];  
    Ensaladas = [
      {nombre: 'Ensaladas' , 
      imagen: require('../../../images/delyfull/p_griega.jpg'), 
      texto: 'Griega', 
      precio: 75},
      {nombre: 'Ensaladas' , 
      imagen: require('../../../images/delyfull/p_oriental.jpg'), 
      texto: 'Oriental', 
      precio: 75},
      {nombre: 'Ensaladas' , 
      imagen: require('../../../images/delyfull/p_paraiso_balsamico.jpg'), 
      texto: 'Paraíso Balsámico', 
      precio: 75},
      {nombre: 'Ensaladas' , 
      imagen: require('../../../images/delyfull/p_cesar_pollo.jpg'),
      texto: 'Cesar Pollo', 
      precio: 75},
    ];
    Ciabattas=[
      {nombre: 'Ciabattas', 
      imagen: require('../../../images/delyfull/p_Jamon_pavo.jpeg'), 
      texto: 'Jamón de Pavo', 
      precio: 85},
      {nombre: 'Ciabattas' , 
      imagen: require('../../../images/delyfull/p_Chicken_roma.jpg'), 
      texto: 'Chicken Roma', 
      precio: 85},
      {nombre: 'Ciabattas' , 
      imagen: require('../../../images/delyfull/p_queso_gratinado.jpg'), 
      texto: 'Queso gratinado', 
      precio: 80},
    ];
    HealthyBurgers=[
      {nombre: 'Healthy Burgers', 
      imagen: require('../../../images/delyfull/p_ham_vegana.jpg'), 
      texto: 'Vegana', 
      precio: 85},
      {nombre: 'Healthy Burgers' , 
      imagen: require('../../../images/delyfull/p_ham_chorizo_queso.jpg'), 
      texto: 'Chorizo con queso', 
      precio: 85},
    ];
    Mañanas=[
      {nombre: 'Para las mañanas', 
      imagen: require('../../../images/delyfull/p_pudin_chia.jpg'), 
      texto: 'Pudín de chía', 
      precio: 45},
      {nombre: 'Para las mañanas', 
      imagen: require('../../../images/delyfull/p_Night_oats.jpg'), 
      texto: 'Over Night Oats', 
      precio: 45},
    ];
    Cafe=[
      {nombre: 'Café recien molido', 
      imagen: require('../../../images/delyfull/p_cafe_americano.jpg'), 
      texto: 'Americano', 
      precio: 25},
      {nombre: 'Café recien molido', 
      imagen: require('../../../images/delyfull/p_cafe_leche.jpg'), 
      texto: 'Café con leche', 
      precio: 25},
      {nombre: 'Café recien molido', 
      imagen: require('../../../images/delyfull/p_capuccino.jpeg'), 
      texto: 'Capuccino', 
      precio: 25},
      {nombre: 'Café recien molido', 
      imagen: require('../../../images/delyfull/p_latte.jpg'), 
      texto: 'Latte', 
      precio: 25},
      {nombre: 'Café recien molido', 
      imagen: require('../../../images/delyfull/p_capuccino_vainilla.jpeg'), 
      texto: 'Capuccino Vainilla', 
      precio: 25},
      {nombre: 'Café recien molido', 
      imagen: require('../../../images/delyfull/p_latte_vainilla.jpeg'), 
      texto: 'Latte Vainilla', 
      precio: 25},
      {nombre: 'Café recien molido', 
      imagen: require('../../../images/delyfull/p_chocolate_caliente.jpg'), 
      texto: 'Chocolate Caliente', 
      precio: 25},
      {nombre: 'Café recien molido', 
      imagen: require('../../../images/delyfull/p_moka_caliente.jpg'), 
      texto: 'Moka Canela', 
      precio: 25},
      {nombre: 'Café recien molido', 
      imagen: require('../../../images/delyfull/p_mokaccino.jpeg'), 
      texto: 'Mokaccino', 
      precio: 25},
      {nombre: 'Café recien molido', 
      imagen: require('../../../images/delyfull/p_chocovainilla.jpg'), 
      texto: 'Chocovainilla', 
      precio: 25},
    ];
    Jugos=[
      {nombre: 'Jugos Cold Press', 
      imagen: require('../../../images/delyfull/p_delymojito.jpg'), 
      texto: 'Dely Mojito', 
      precio: 50},
      {nombre: 'Jugos Cold Press', 
      imagen: require('../../../images/delyfull/p_delycitrus.jpeg'), 
      texto: 'Dely Citrus', 
      precio: 50},
    ];
    Smoothies=[
      {nombre: 'Smoothies', 
      imagen: require('../../../images/delyfull/p_delyberry.jpg'), 
      texto: 'Dely Berry', 
      precio: 70},
      {nombre: 'Smoothies', 
      imagen: require('../../../images/delyfull/p_delyfull.jpg'), 
      texto: 'Dely Full', 
      precio: 70},
      {nombre: 'Smoothies', 
      imagen: require('../../../images/delyfull/p_delymoka.jpg'), 
      texto: 'Dely Moka', 
      precio: 70},
      {nombre: 'Smoothies', 
      imagen: require('../../../images/delyfull/p_delycacao.jpg'), 
      texto: 'Dely Cacao', 
      precio: 70},
    ];
    Antojos=[
      {nombre: 'Antojos', 
      imagen: require('../../../images/delyfull/p_manzana_chile.jpg'), 
      texto: 'Manzana con chile', 
      precio: 40},
      {nombre: 'Antojos', 
      imagen: require('../../../images/delyfull/p_carlota.jpg'), 
      texto: 'Carlota', 
      precio: 28},
      {nombre: 'Antojos', 
      imagen: require('../../../images/delyfull/p_coctel_frutas.jpg'), 
      texto: 'Coctel de frutas', 
      precio: 35},
      {nombre: 'Antojos', 
      imagen: require('../../../images/delyfull/p_malangas.jpg'), 
      texto: 'Malangas', 
      precio: 35},
    ];
    ColdTeas=[
      {nombre: 'Cold Teas', 
      imagen: require('../../../images/delyfull/p_buble_tea.jpg'), 
      texto: 'Buble Tea', 
      precio: 80},
      {nombre: 'Cold Teas', 
      imagen: require('../../../images/delyfull/p_chai_late.jpg'), 
      texto: 'Chai Late', 
      precio: 80},
    ];
    Combos=[
      {nombre: 'Combos', 
      imagen: require('../../../images/delyfull/p_Combo1.jpg'), 
      texto: 'Agua + Ciabatta + Ensalada/Malangas', 
      precio: 100},
      {nombre: 'Combos', 
      imagen: require('../../../images/delyfull/p_Combo2.jpeg'), 
      texto: 'Smoothie + Ciabata + Malangas', 
      precio: 160},
    ];
  }

  const handlePress = (seccion) => {
    let nombre_seccion = seccion.nombre;
    let texto_seccion = seccion.texto;
    // Aquí puedes navegar a la nueva ventana con el título de la sección
    // navigation.navigate('NuevaVentana', { titulo: seccion.nombre });
    navigation.navigate(nombre_seccion,{texto_seccion});
  };
  if(id_menu == 'DelyFull')
  {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo_seccion}>SANDWICH</Text>
          <DelyFullSubseccion items={Sandwich}/>
        <Text style={styles.titulo_seccion}>ENSALADAS</Text>
          <DelyFullSubseccion items={Ensaladas}/>
        <Text style={styles.titulo_seccion}>CIABATTAS</Text>
          <DelyFullSubseccion items={Ciabattas}/>
        <Text style={styles.titulo_seccion}>HEALTHY BURGERS</Text>
          <DelyFullSubseccion items={HealthyBurgers}/>
        <Text style={styles.titulo_seccion}>PARA LAS MAÑANAS</Text>
          <DelyFullSubseccion items={Mañanas}/>
        <Text style={styles.titulo_seccion}>CAFÉ RECIEN MOLIDO</Text>
          <DelyFullSubseccion items={Cafe}/>
        <Text style={styles.titulo_seccion}>JUGOS COLD PRESS</Text>
          <DelyFullSubseccion items={Jugos}/>
        <Text style={styles.titulo_seccion}>SMOOTHIES</Text>
          <DelyFullSubseccion items={Smoothies}/>
        <Text style={styles.titulo_seccion}>ANTOJOS</Text>
          <DelyFullSubseccion items={Antojos}/>
        <Text style={styles.titulo_seccion}>COLD TEAS</Text>
          <DelyFullSubseccion items={ColdTeas}/>
        <Text style={styles.titulo_seccion}>COMBOS</Text>
          <DelyFullSubseccion items={Combos}/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: anchoVentana,
    maxWidth: 800,
    alignSelf: 'center',
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

export default DelyFullProductos;