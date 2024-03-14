import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CuckooSubseccion from './CuckooSubseccion';
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

const CuckooMenu = ({id_menu}) => {
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

  if(id_menu == 'Desayunos')
  {
    // secciones = [
    //   {nombre: 'Huevos' , imagen: require('../../../images/cuckoo/p_huevos_revueltos.jpg'), texto: 'Huevos revueltos', precio: 40},
    //   {nombre: 'Huevos' , imagen: require('../../../images/cuckoo/p_huevos_estrellados.jpeg'), texto: 'Huevos estrellados', precio: 43},
    //   {nombre: 'Huevos' , imagen: require('../../../images/cuckoo/p_huevos_divorciados.jpg'), texto: 'Huevos divorciados', precio: 43},
    //   {nombre: 'Huevos' , imagen: require('../../../images/cuckoo/p_huevos_rancheros.jpg'), texto: 'Huevos rancheros', precio: 47},
    //   {nombre: 'Huevos' , imagen: require('../../../images/cuckoo/p_omelette_queso.jpg'), texto: 'Omelette con queso', precio: 47},
    //   {nombre: 'Huevos' , imagen: require('../../../images/cuckoo/p_omelette_claras.jpg'), texto: 'Omelette de claras', precio: 50},
    //   {nombre: 'Huevos' , imagen: require('../../../images/cuckoo/p_omelette_especial.jpeg'), texto: 'Omelette especial', precio: 54},
    //   {nombre: 'Huevos' , imagen: require('../../../images/cuckoo/p_salsa_huevo.png'), texto: 'Salsa de huevo', precio: 45},
    //   {nombre: 'Huevos' , imagen: require('../../../images/cuckoo/p_salsa_queso.jpg'), texto: 'Salsa de queso o quesillo', precio: 45},
    //   {nombre: 'Maiz' , imagen: require('../../../images/cuckoo/p_chilaquiles_huevo.jpg'), texto: 'Chilaquiles (Huevo)', precio: 43},
    //   {nombre: 'Maiz' , imagen: require('../../../images/cuckoo/p_chilaquiles_chorizo.jpg'), texto: 'Chilaquiles (Cecina,Chorizo o Pollo)', precio: 50},
    //   {nombre: 'Maiz' , imagen: require('../../../images/cuckoo/p_chilaquiles_tasajo.jpg'), texto: 'Chilaquiles (Tasajo)', precio: 55},
    //   {nombre: 'Maiz' , imagen: require('../../../images/cuckoo/p_chilaquiles_divorciados_huevo.jpg'), texto: 'Chilaquiles divorciados (Huevo)', precio: 45},
    //   {nombre: 'Maiz' , imagen: require('../../../images/cuckoo/p_chilaquiles_divorciados_chorizo.jpg'), texto: 'Chilaquiles divorciados (Cecina,Chorizo o Pollo)', precio: 52},
    //   {nombre: 'Maiz' , imagen: require('../../../images/cuckoo/p_chilaquiles_divorciados_tasajo.jpg'), texto: 'Chilaquiles divorciados (Tasajo)', precio: 57},
    //   {nombre: 'Maiz' , imagen: require('../../../images/cuckoo/p_entomatadas_huevo.jpg'), texto: 'Entomatadas (Huevo)', precio: 43},
    //   {nombre: 'Maiz' , imagen: require('../../../images/cuckoo/p_entomatadas_pollo.jpg'), texto: 'Entomatadas (Cecina, Chorizo o Pollo)', precio: 50},
    //   {nombre: 'Maiz' , imagen: require('../../../images/cuckoo/p_entomatadas_tasajo.jpg'), texto: 'Entomatadas (Tasajo)', precio: 57},
    //   {nombre: 'Maiz' , imagen: require('../../../images/cuckoo/p_enfrijoladas_huevo.jpg'), texto: 'Enfrijoladas (Huevo)', precio: 43},
    //   {nombre: 'Maiz' , imagen: require('../../../images/cuckoo/p_enfrijoladas_chorizo.jpg'), texto: 'Enfrijoladas (Cecina, Chorizo o Pollo)', precio: 50},
    //   {nombre: 'Maiz' , imagen: require('../../../images/cuckoo/p_enfrijoladas_tasajo.jpg'), texto: 'Enfrijoladas (Tasajo)', precio: 55},
    //   {nombre: 'Maiz' , imagen: require('../../../images/cuckoo/p_chilaquiles_cuckoo.jpg'), texto: 'Chilaquiles Cuckoo', precio: 62},
    //   {nombre: 'Maiz' , imagen: require('../../../images/cuckoo/p_enchiladas_suizas.jpeg'), texto: 'Enchiladas Suizas', precio: 58},
    //   {nombre: 'Maiz' , imagen: require('../../../images/cuckoo/p_enchiladas_divorciadas.jpg'), texto: 'Enchiladas divorciadas', precio: 60},
    //   {nombre: 'Maiz' , imagen: require('../../../images/cuckoo/p_enchiladas_oaxaqueñas.jpg'), texto: 'Enchiladas oaxaqueñas', precio: 58},
    //   {nombre: 'Maiz' , imagen: require('../../../images/cuckoo/p_enmoladas.jpg'), texto: 'Enmoladas', precio: 58},
    //   {nombre: 'Maiz' , imagen: require('../../../images/cuckoo/p_enfrijoladas_cuckoo.jpg'), texto: 'Enfrijoladas Cuckoo', precio: 60},
    //   {nombre: 'Dulce' , imagen: require('../../../images/cuckoo/p_pan_frances.jpeg'), texto: 'Pan francés', precio: 36},
    //   {nombre: 'Dulce' , imagen: require('../../../images/cuckoo/p_pan_frances_nutella.jpg'), texto: 'Pan francés con Nutella', precio: 40},
    //   {nombre: 'Dulce' , imagen: require('../../../images/cuckoo/p_pan_frances_nutella_platano.jpeg'), texto: 'Pan francés con Nutella y plátano', precio: 45},
    //   {nombre: 'Dulce' , imagen: require('../../../images/cuckoo/p_coctel_frutas.jeg'), texto: 'Coctel de frutas', precio: 30},
    //   {nombre: 'Dulce' , imagen: require('../../../images/cuckoo/p_tazon_avena_leche.jpg'), texto: 'Tazón de avena con leche', precio: 29},
    //   {nombre: 'Pan' , imagen: require('../../../images/cuckoo/p_molletes_queso.jpg'), texto: 'Molletes (Quesillo o manchego)', precio: 35},
    //   {nombre: 'Pan' , imagen: require('../../../images/cuckoo/p_molletes_jamon.jpg'), texto: 'Molletes (Cecina, jamón, chorizo o tocino)', precio: 42},
    //   {nombre: 'Pan' , imagen: require('../../../images/cuckoo/p_molletes_tasajo.jpg'), texto: 'Molletes (Tasajo)', precio: 45},
    //   {nombre: 'Pan' , imagen: require('../../../images/cuckoo/p_grill_sandwich_queso.jpg'), texto: 'Grill sándwich con queso', precio: 45},
    //   {nombre: 'Pan' , imagen: require('../../../images/cuckoo/p_sandwich_montecristo.jpg'), texto: 'Sándwich montecristo', precio: 50},
    //   {nombre: 'Pan' , imagen: require('../../../images/cuckoo/p_sandwich_ingles.jpg'), texto: 'Sándwich inglés', precio: 52},
    //   {nombre: 'Bebidas' , imagen: require('../../../images/cuckoo/p_jugo_uva.jpg'), texto: 'Jugo (Uva, manzana, arándano o durazno)', precio: 20},
    //   {nombre: 'Bebidas' , imagen: require('../../../images/cuckoo/p_licuado_platano.jpeg'), texto: 'Licuado (Avena, plátano, manzana, Nesquik chocolate, Nesquik fresa o Nesquik vainilla)', precio: 25},
    //   {nombre: 'Bebidas' , imagen: require('../../../images/cuckoo/p_malteada_oreo.jpeg'), texto: 'Malteada (Oreo, Carlos V, Bubulubu, Emperador)', precio: 38},
    // ];
      huevos = [
      {nombre: 'Huevos' , imagen: require('../../../images/cuckoo/p_huevos_revueltos.jpg'), texto: 'Huevos revueltos', precio: 40},
      {nombre: 'Huevos' , imagen: require('../../../images/cuckoo/p_huevos_estrellados.jpeg'), texto: 'Huevos estrellados', precio: 43},
      {nombre: 'Huevos' , imagen: require('../../../images/cuckoo/p_huevos_divorciados.jpg'), texto: 'Huevos divorciados', precio: 43},
      {nombre: 'Huevos' , imagen: require('../../../images/cuckoo/p_huevos_rancheros.jpg'), texto: 'Huevos rancheros', precio: 47},
      {nombre: 'Huevos' , imagen: require('../../../images/cuckoo/p_omelette_queso.jpg'), texto: 'Omelette con queso', precio: 47},
      {nombre: 'Huevos' , imagen: require('../../../images/cuckoo/p_omelette_claras.jpeg'), texto: 'Omelette de claras', precio: 50},
      {nombre: 'Huevos' , imagen: require('../../../images/cuckoo/p_omelette_especial.jpeg'), texto: 'Omelette especial', precio: 54},
      {nombre: 'Huevos' , imagen: require('../../../images/cuckoo/p_salsa_huevo.png'), texto: 'Salsa de huevo', precio: 45},
      {nombre: 'Huevos' , imagen: require('../../../images/cuckoo/p_salsa_queso.jpg'), texto: 'Salsa de queso', precio: 45, cabecera_sabor: 'Elige el ingrediente de tu salsa:', sabores: [['Queso',0],['Quesillo',0]]},
    ];
    maiz=[
      {nombre: 'Maiz' , imagen: require('../../../images/cuckoo/p_chilaquiles_huevo.jpg'), texto: 'Chilaquiles', precio: 43, cabecera_sabor: 'Elige un ingrediente para acompañar tus chilaquiles:', sabores: [['Huevo',0],['Cecina',7],['Chorizo',7],['Pollo',7],['Tasajo',12]]},
      // {nombre: 'Maiz' , imagen: require('../../../images/cuckoo/p_chilaquiles_chorizo.jpg'), texto: 'Chilaquiles (Cecina, Chorizo o Pollo)', precio: 50, cabecera_sabor: 'Elige la carne para tus chilaquiles:', sabores: ['Cecina','Chorizo','Pollo']},
      // {nombre: 'Maiz' , imagen: require('../../../images/cuckoo/p_chilaquiles_tasajo.jpg'), texto: 'Chilaquiles con tasajo', precio: 55},
      {nombre: 'Maiz' , imagen: require('../../../images/cuckoo/p_chilaquiles_divorciados_huevo.jpg'), texto: 'Chilaquiles divorciados', precio: 45, cabecera_sabor: 'Elige un ingrediente para acompañar tus chilaquiles divorciados:', sabores: [['Huevo',0],['Cecina',7],['Chorizo',7],['Pollo',7],['Tasajo',12]]},
      // {nombre: 'Maiz' , imagen: require('../../../images/cuckoo/p_chilaquiles_divorciados_chorizo.jpg'), texto: 'Chilaquiles divorciados (Cecina, Chorizo o Pollo)', precio: 52, cabecera_sabor: 'Elige la carne para tus chilaquiles:', sabores: ['Cecina','Chorizo','Pollo']},
      // {nombre: 'Maiz' , imagen: require('../../../images/cuckoo/p_chilaquiles_divorciados_tasajo.jpg'), texto: 'Chilaquiles divorciados con tasajo', precio: 57},
      {nombre: 'Maiz' , imagen: require('../../../images/cuckoo/p_entomatadas_huevo.jpg'), texto: 'Entomatadas', precio: 43, cabecera_sabor: 'Elige un ingrediente para acompañar tus entomatadas:', sabores: [['Huevo',0],['Cecina',7],['Chorizo',7],['Pollo',7],['Tasajo',12]]},
      // {nombre: 'Maiz' , imagen: require('../../../images/cuckoo/p_entomatadas_pollo.jpg'), texto: 'Entomatadas (Cecina, Chorizo o Pollo)', precio: 50, cabecera_sabor: 'Elige la carne para tus entomatadas:', sabores: ['Cecina','Chorizo','Pollo']},
      // {nombre: 'Maiz' , imagen: require('../../../images/cuckoo/p_entomatadas_tasajo.jpg'), texto: 'Entomatadas con tasajo', precio: 57},
      {nombre: 'Maiz' , imagen: require('../../../images/cuckoo/p_enfrijoladas_huevo.jpg'), texto: 'Enfrijoladas', precio: 43, cabecera_sabor: 'Elige un ingrediente para acompañar tus enfrijoladas:', sabores: [['Huevo',0],['Cecina',7],['Chorizo',7],['Pollo',7],['Tasajo',12]]},
      // {nombre: 'Maiz' , imagen: require('../../../images/cuckoo/p_enfrijoladas_chorizo.jpg'), texto: 'Enfrijoladas (Cecina, Chorizo o Pollo)', precio: 50, cabecera_sabor: 'Elige la carne para tus enfrijoladas:', sabores: ['Cecina','Chorizo','Pollo']},
      // {nombre: 'Maiz' , imagen: require('../../../images/cuckoo/p_enfrijoladas_tasajo.jpg'), texto: 'Enfrijoladas con tasajo', precio: 55},
      {nombre: 'Maiz' , imagen: require('../../../images/cuckoo/p_chilaquiles_cuckoo.jpg'), texto: 'Chilaquiles Cuckoo', precio: 62},
      {nombre: 'Maiz' , imagen: require('../../../images/cuckoo/p_enchiladas_suizas.jpeg'), texto: 'Enchiladas Suizas', precio: 58},
      {nombre: 'Maiz' , imagen: require('../../../images/cuckoo/p_enchiladas_divorciadas.jpg'), texto: 'Enchiladas divorciadas', precio: 60},
      {nombre: 'Maiz' , imagen: require('../../../images/cuckoo/p_enchiladas_oaxaqueñas.jpg'), texto: 'Enchiladas oaxaqueñas', precio: 58},
      {nombre: 'Maiz' , imagen: require('../../../images/cuckoo/p_enmoladas.jpg'), texto: 'Enmoladas', precio: 58},
      {nombre: 'Maiz' , imagen: require('../../../images/cuckoo/p_enfrijoladas_cuckoo.jpg'), texto: 'Enfrijoladas Cuckoo', precio: 60},
    ];
    dulce=[
      {nombre: 'Dulce' , imagen: require('../../../images/cuckoo/p_pan_frances.jpeg'), texto: 'Pan francés', precio: 36},
      {nombre: 'Dulce' , imagen: require('../../../images/cuckoo/p_pan_frances_nutella.jpg'), texto: 'Pan francés con Nutella', precio: 40},
      {nombre: 'Dulce' , imagen: require('../../../images/cuckoo/p_pan_frances_nutella_platano.jpeg'), texto: 'Pan francés con Nutella y plátano', precio: 45},
      {nombre: 'Dulce' , imagen: require('../../../images/cuckoo/p_coctel_frutas.jpg'), texto: 'Coctel de frutas', precio: 30},
      {nombre: 'Dulce' , imagen: require('../../../images/cuckoo/p_tazon_avena_leche.jpg'), texto: 'Tazón de avena con leche', precio: 29},
    ];
    pan=[
      {nombre: 'Pan' , imagen: require('../../../images/cuckoo/p_molletes_queso.jpg'), texto: 'Molletes con queso', precio: 35, cabecera_sabor: 'Elige un ingrediente para acompañar tus molletes:', sabores: [['Quesillo',0],['Manchego',0],['Cecina',7],['Jamón',7],['Chorizo',7],['Tasajo',7],['Tasajo',12]]},
      // {nombre: 'Pan' , imagen: require('../../../images/cuckoo/p_molletes_jamon.jpg'), texto: 'Molletes con carne', precio: 42, cabecera_sabor: 'Elige la carne para tus molletes:', sabores: ['Cecina','Jamón','Chorizo','Tocino']},
      // {nombre: 'Pan' , imagen: require('../../../images/cuckoo/p_molletes_tasajo.jpeg'), texto: 'Molletes con tasajo', precio: 45},
      {nombre: 'Pan' , imagen: require('../../../images/cuckoo/p_grill_sandwich_queso.jpg'), texto: 'Grill sándwich con queso', precio: 45},
      {nombre: 'Pan' , imagen: require('../../../images/cuckoo/p_sandwich_montecristo.jpg'), texto: 'Sándwich montecristo', precio: 50},
      {nombre: 'Pan' , imagen: require('../../../images/cuckoo/p_sandwich_ingles.jpg'), texto: 'Sándwich inglés', precio: 52},
    ];
    bebidas=[
      {nombre: 'Bebidas' , imagen: require('../../../images/cuckoo/p_jugo_uva.jpg'), texto: 'Jugo', precio: 20, cabecera_sabor: 'Elige un ingrediente para acompañar tus molletes:', sabores: [['Uva',0],['Manzana',0],['Arándano',0],['Durazno',0]]},
      {nombre: 'Bebidas' , imagen: require('../../../images/cuckoo/p_licuado_platano.jpeg'), texto: 'Licuado', precio: 25, cabecera_sabor: 'Elige sabor de tu licuado:', sabores: [['Avena',0],['Plátano',0],['Manzana',0],['Nesquik Chocolate',0],['Nesquik Fresa',0],['Nesquik Vainilla',0]]},
      {nombre: 'Bebidas' , imagen: require('../../../images/cuckoo/p_malteada_oreo.jpeg'), texto: 'Malteada', precio: 38, cabecera_sabor: 'Elige sabor de tu licuado:', sabores: [['Oreo',0],['Carlos V',0],['Bubulubu',0],['Emperador',0]]},
    ];
  }

  if(id_menu == 'Antojitos')
  {
    // secciones = [
    //   {nombre: 'Rincon Oaxaqueno' , imagen: require('../../../images/cuckoo/p_memelita.jpg'), texto: 'Memelita', precio: 16},
    //   {nombre: 'Rincon Oaxaqueno' , imagen: require('../../../images/cuckoo/p_quesadillas_fritas.jpg'), texto: 'Quesadillas fritas (3 pzas)', precio: 48},
    //   {nombre: 'Rincon Oaxaqueno' , imagen: require('../../../images/cuckoo/p_tacos_dorados.jpg'), texto: 'Tacos dorados (3 pzas)', precio: 45},
    //   {nombre: 'Rincon Oaxaqueno' , imagen: require('../../../images/cuckoo/p_taco_blando_quesillo.jpg'), texto: 'Taco blando con quesillo', precio: 20},
    //   {nombre: 'Rincon Oaxaqueno' , imagen: require('../../../images/cuckoo/p_taco_blando_preparado.jpg'), texto: 'Taco blando preparado', precio: 25},
    //   {nombre: 'Rincon Oaxaqueno' , imagen: require('../../../images/cuckoo/p_taco_blando_tasajo.jpg'), texto: 'Taco blando de tasajo', precio: 28},
    //   {nombre: 'Rincon Oaxaqueno' , imagen: require('../../../images/cuckoo/p_tostadas.jpg'), texto: 'Tostadas', precio: 20},
    //   {nombre: 'Rincon Oaxaqueno' , imagen: require('../../../images/cuckoo/p_tlayuda.jpg'), texto: 'Tlayuda', precio: 45},
    //   {nombre: 'Tortas' , imagen: require('../../../images/cuckoo/p_torta_quesillo.jpg'), texto: 'Torta de quesillo', precio: 20},
    //   {nombre: 'Tortas' , imagen: require('../../../images/cuckoo/p_torta_jamon_quesillo.jpg'), texto: 'Torta de jamón con quesillo', precio: 25},
    //   {nombre: 'Tortas' , imagen: require('../../../images/cuckoo/p_torta_choriqueso.jpg'), texto: 'Torta de choriqueso', precio: 32},
    //   {nombre: 'Tortas' , imagen: require('../../../images/cuckoo/p_torta_tinga_quesillo.jpg'), texto: 'Torta de tinga con quesillo', precio: 32},
    //   {nombre: 'Tortas' , imagen: require('../../../images/cuckoo/p_torta_milanesa.jpg'), texto: 'Torta de milanesa con quesillo', precio: 32},
    //   {nombre: 'Tortas' , imagen: require('../../../images/cuckoo/p_torta_pierna.jpg'), texto: 'Torta de pierna con quesillo', precio: 32},
    //   {nombre: 'Tortas' , imagen: require('../../../images/cuckoo/p_torta_tasajo.jpg'), texto: 'Torta de tasajo con quesillo', precio: 39},
    //   {nombre: 'Tortas' , imagen: require('../../../images/cuckoo/p_torta_chorizo_huevo.jpg'), texto: 'Torta de chorizo con huevo', precio: 37},
    //   {nombre: 'Tortas Especiales' , imagen: require('../../../images/cuckoo/p_torta_pastor.jpg'), texto: 'Torta al pastor', precio: 35},
    //   {nombre: 'Tortas Especiales' , imagen: require('../../../images/cuckoo/p_torta_cubana.jpg'), texto: 'Torta cubana', precio: 38},
    //   {nombre: 'Tortas Especiales' , imagen: require('../../../images/cuckoo/p_torta_hawaiana.jpg'), texto: 'Torta hawaiana', precio: 38},
    //   {nombre: 'Tortas Especiales' , imagen: require('../../../images/cuckoo/p_torta_oaxaquena.jpeg'), texto: 'Torta oaxaqueña', precio: 40},
    //   {nombre: 'Tortas Especiales' , imagen: require('../../../images/cuckoo/p_torta_regia.jpeg'), texto: 'Torta regia', precio: 40},
    //   {nombre: 'Tortas Especiales' , imagen: require('../../../images/cuckoo/p_torta_alambre.jpg'), texto: 'Torta de alambre', precio: 42},
    //   {nombre: 'Tortas Especiales' , imagen: require('../../../images/cuckoo/p_torta_cuckoo.jpeg'), texto: 'Torta Cuckoo', precio: 60},
    //   {nombre: 'Snacks' , imagen: require('../../../images/cuckoo/p_sincronizada.jpg'), texto: 'Sincronizada', precio: 20},
    //   {nombre: 'Snacks' , imagen: require('../../../images/cuckoo/p_sincronizada_manchego.jpeg'), texto: 'Sincronizada manchego', precio: 28},
    //   {nombre: 'Snacks' , imagen: require('../../../images/cuckoo/p_sincronizada_tres_quesos.jpg'), texto: 'Sincronizada tres quesos', precio: 28},
    //   {nombre: 'Snacks' , imagen: require('../../../images/cuckoo/p_sincronizada_champinones.jpg'), texto: 'Sincronizada champiñones', precio: 28},
    //   {nombre: 'Snacks' , imagen: require('../../../images/cuckoo/p_sincronizada_cubana.jpeg'), texto: 'Sincronizada cubana', precio: 30},
    //   {nombre: 'Snacks' , imagen: require('../../../images/cuckoo/p_dobladitas.jpg'), texto: 'Dobladitas', precio: 28},
    //   {nombre: 'Snacks' , imagen: require('../../../images/cuckoo/p_dobladitas_chorizo.jpg'), texto: 'Dobladitas con chorizo', precio: 39},
    //   {nombre: 'Snacks' , imagen: require('../../../images/cuckoo/p_gringa_pastor.jpg'), texto: 'Gringa al pastor', precio: 20},
    //   {nombre: 'Snacks' , imagen: require('../../../images/cuckoo/p_suiza_tasajo.jpg'), texto: 'Suiza de tasajo', precio: 23},
    //   {nombre: 'Snacks' , imagen: require('../../../images/cuckoo/p_hot_dog.jpg'), texto: 'Hot dog', precio: 20},
    //   {nombre: 'Snacks' , imagen: require('../../../images/cuckoo/p_hamburguesa.jpeg'), texto: 'Hamburguesa', precio: 45},
    //   {nombre: 'Snacks' , imagen: require('../../../images/cuckoo/p_club_sandwich.jpg'), texto: 'Club Sándwich', precio: 30},
    //   {nombre: 'Snacks' , imagen: require('../../../images/cuckoo/p_papas_francesa.jpg'), texto: 'Papas a la francesa', precio: 40},
    // ];
    rincon_oaxaqueno = [
      {nombre: 'Rincon Oaxaqueno' , imagen: require('../../../images/cuckoo/p_memelita.jpg'), texto: 'Memelita', precio: 16},
      {nombre: 'Rincon Oaxaqueno' , imagen: require('../../../images/cuckoo/p_quesadillas_fritas.jpg'), texto: 'Quesadillas fritas (3 pzas)', precio: 48},
      {nombre: 'Rincon Oaxaqueno' , imagen: require('../../../images/cuckoo/p_tacos_dorados.jpg'), texto: 'Tacos dorados (3 pzas)', precio: 45},
      {nombre: 'Rincon Oaxaqueno' , imagen: require('../../../images/cuckoo/p_taco_blando_quesillo.jpeg'), texto: 'Taco blando con quesillo', precio: 20},
      {nombre: 'Rincon Oaxaqueno' , imagen: require('../../../images/cuckoo/p_taco_blando_preparado.jpg'), texto: 'Taco blando preparado', precio: 25},
      {nombre: 'Rincon Oaxaqueno' , imagen: require('../../../images/cuckoo/p_taco_blando_tasajo.jpg'), texto: 'Taco blando de tasajo', precio: 28},
      {nombre: 'Rincon Oaxaqueno' , imagen: require('../../../images/cuckoo/p_tostadas.jpg'), texto: 'Tostadas', precio: 20},
      {nombre: 'Rincon Oaxaqueno' , imagen: require('../../../images/cuckoo/p_tlayuda.jpg'), texto: 'Tlayuda', precio: 45},
    ];
    tortas=[
      {nombre: 'Tortas' , imagen: require('../../../images/cuckoo/p_torta_quesillo.jpg'), texto: 'Torta de quesillo', precio: 20},
      {nombre: 'Tortas' , imagen: require('../../../images/cuckoo/p_torta_jamon_quesillo.jpeg'), texto: 'Torta de jamón con quesillo', precio: 25},
      {nombre: 'Tortas' , imagen: require('../../../images/cuckoo/p_torta_choriqueso.jpg'), texto: 'Torta de choriqueso', precio: 32},
      {nombre: 'Tortas' , imagen: require('../../../images/cuckoo/p_torta_tinga_quesillo.jpg'), texto: 'Torta de tinga con quesillo', precio: 32},
      {nombre: 'Tortas' , imagen: require('../../../images/cuckoo/p_torta_milanesa.jpg'), texto: 'Torta de milanesa con quesillo', precio: 32},
      {nombre: 'Tortas' , imagen: require('../../../images/cuckoo/p_torta_pierna.jpg'), texto: 'Torta de pierna con quesillo', precio: 32},
      {nombre: 'Tortas' , imagen: require('../../../images/cuckoo/p_torta_tasajo.jpg'), texto: 'Torta de tasajo con quesillo', precio: 39},
      {nombre: 'Tortas' , imagen: require('../../../images/cuckoo/p_torta_chorizo_huevo.jpg'), texto: 'Torta de chorizo con huevo', precio: 37},
    ];
    tortas_especiales=[
      {nombre: 'Tortas Especiales' , imagen: require('../../../images/cuckoo/p_torta_pastor.jpg'), texto: 'Torta al pastor', precio: 35},
      {nombre: 'Tortas Especiales' , imagen: require('../../../images/cuckoo/p_torta_cubana.jpg'), texto: 'Torta cubana', precio: 38},
      {nombre: 'Tortas Especiales' , imagen: require('../../../images/cuckoo/p_torta_hawaiana.jpg'), texto: 'Torta hawaiana', precio: 38},
      {nombre: 'Tortas Especiales' , imagen: require('../../../images/cuckoo/p_torta_oaxaquena.jpeg'), texto: 'Torta oaxaqueña', precio: 40},
      {nombre: 'Tortas Especiales' , imagen: require('../../../images/cuckoo/p_torta_regia.jpeg'), texto: 'Torta regia', precio: 40},
      {nombre: 'Tortas Especiales' , imagen: require('../../../images/cuckoo/p_torta_alambre.jpg'), texto: 'Torta de alambre', precio: 42},
      {nombre: 'Tortas Especiales' , imagen: require('../../../images/cuckoo/p_torta_cuckoo.jpeg'), texto: 'Torta Cuckoo', precio: 60},
    ];
    snacks=[
      {nombre: 'Snacks' , imagen: require('../../../images/cuckoo/p_sincronizada.jpg'), texto: 'Sincronizada', precio: 20},
      {nombre: 'Snacks' , imagen: require('../../../images/cuckoo/p_sincronizada_manchego.jpeg'), texto: 'Sincronizada manchego', precio: 28},
      {nombre: 'Snacks' , imagen: require('../../../images/cuckoo/p_sincronizada_tres_quesos.jpg'), texto: 'Sincronizada tres quesos', precio: 28},
      {nombre: 'Snacks' , imagen: require('../../../images/cuckoo/p_sincronizada_champinones.jpg'), texto: 'Sincronizada champiñones', precio: 28},
      {nombre: 'Snacks' , imagen: require('../../../images/cuckoo/p_sincronizada_cubana.jpeg'), texto: 'Sincronizada cubana', precio: 30},
      {nombre: 'Snacks' , imagen: require('../../../images/cuckoo/p_dobladitas.jpg'), texto: 'Dobladitas', precio: 28},
      {nombre: 'Snacks' , imagen: require('../../../images/cuckoo/p_dobladitas_chorizo.jpg'), texto: 'Dobladitas con chorizo', precio: 39},
      {nombre: 'Snacks' , imagen: require('../../../images/cuckoo/p_gringa_pastor.jpg'), texto: 'Gringa al pastor', precio: 20},
      {nombre: 'Snacks' , imagen: require('../../../images/cuckoo/p_suiza_tasajo.jpg'), texto: 'Suiza de tasajo', precio: 23},
      {nombre: 'Snacks' , imagen: require('../../../images/cuckoo/p_hot_dog.jpg'), texto: 'Hot dog', precio: 20},
      {nombre: 'Snacks' , imagen: require('../../../images/cuckoo/p_hamburguesa.jpeg'), texto: 'Hamburguesa', precio: 45},
      {nombre: 'Snacks' , imagen: require('../../../images/cuckoo/p_club_sandwich.jpg'), texto: 'Club Sándwich', precio: 30},
      {nombre: 'Snacks' , imagen: require('../../../images/cuckoo/p_papas_francesa.jpg'), texto: 'Papas a la francesa', precio: 40},
    ];
  }

  if(id_menu == 'Platillos')
  {
    // secciones = [
    //   {nombre: 'Carnes' , imagen: require('../../../images/cuckoo/p_cecina_asada.jpg'), texto: 'Cecina asada', precio: 56},
    //   {nombre: 'Carnes' , imagen: require('../../../images/cuckoo/p_pechuga_pollo_plancha.jpeg'), texto: 'Pechuga de pollo a la plancha', precio: 56},
    //   {nombre: 'Carnes' , imagen: require('../../../images/cuckoo/p_pechuga_pollo_gratinada.jpg'), texto: 'Pechuga de pollo gratinada', precio: 62},
    //   {nombre: 'Carnes' , imagen: require('../../../images/cuckoo/p_pechuga_tasajo_asado.jpg'), texto: 'Tasajo asado', precio: 69},
    //   {nombre: 'Carnes' , imagen: require('../../../images/cuckoo/p_tampiquena_res.jpg'), texto: 'Tampiqueña de res', precio: 69},
    //   {nombre: 'Carnes' , imagen: require('../../../images/cuckoo/p_tampiquena_res_toreada.jpg'), texto: 'Tampiqueña de res toreada', precio: 69},
    //   {nombre: 'Pastas' , imagen: require('../../../images/cuckoo/p_bolonesa.jpg'), texto: 'Boloñesa', precio: 49},
    //   {nombre: 'Pastas' , imagen: require('../../../images/cuckoo/arrabiata.jpg'), texto: 'Arrabiata', precio: 59},
    //   {nombre: 'Alambres' , imagen: require('../../../images/cuckoo/alambre_bistec.jpg'), texto: 'Alambre de bistec', precio: 65},
    //   {nombre: 'Alambres' , imagen: require('../../../images/cuckoo/alambre_cecina.jpg'), texto: 'Alambre de cecina', precio: 65},
    //   {nombre: 'Alambres' , imagen: require('../../../images/cuckoo/alambre_pastor.png'), texto: 'Alambre de pastor', precio: 65},
    //   {nombre: 'Alambres' , imagen: require('../../../images/cuckoo/alambre_pollo.png'), texto: 'Alambre de pollo', precio: 65},
    //   {nombre: 'Queso fundido' , imagen: require('../../../images/cuckoo/queso_fundido_pastor.jpeg'), texto: 'Orden de queso fundido (pastor)', precio: 60},
    //   {nombre: 'Queso fundido' , imagen: require('../../../images/cuckoo/queso_fundido_chorizo.jpg'), texto: 'Orden de queso fundido (chorizo)', precio: 60},
    //   {nombre: 'Queso fundido' , imagen: require('../../../images/cuckoo/queso_fundido_cecina.jpg'), texto: 'Orden de queso fundido (cecina)', precio: 60},
    //   {nombre: 'Queso fundido' , imagen: require('../../../images/cuckoo/queso_fundido_bistec.jpg'), texto: 'Orden de queso fundido (bistec)', precio: 60},
    //   {nombre: 'Queso fundido' , imagen: require('../../../images/cuckoo/queso_fundido_champinones.jpg'), texto: 'Orden de queso fundido (champiñones)', precio: 60},
    //   {nombre: 'Milanesas Cuckoo' , imagen: require('../../../images/cuckoo/milanesa_clasica.jpeg'), texto: 'Clásica empanizada', precio: 60},
    //   {nombre: 'Milanesas Cuckoo' , imagen: require('../../../images/cuckoo/milanesa_italiana.jpg'), texto: 'Milanesa italiana', precio: 65},
    //   {nombre: 'Milanesas Cuckoo' , imagen: require('../../../images/cuckoo/milanesa_capresse.jpeg'), texto: 'Milanesa Capresse', precio: 65},
    //   {nombre: 'Milanesas Cuckoo' , imagen: require('../../../images/cuckoo/milanesa_napolitana.jpeg'), texto: 'Milanesa Napolitana', precio: 68},
    //   {nombre: 'Milanesas Cuckoo' , imagen: require('../../../images/cuckoo/milanesa_hawaiana.jpeg'), texto: 'Milanesa Hawaiana', precio: 65},
    //   {nombre: 'Milanesas Cuckoo' , imagen: require('../../../images/cuckoo/milanesa_pepperoni.jpg'), texto: 'Milanesa con Pepperoni', precio: 65},
    //   {nombre: 'Milanesas Cuckoo' , imagen: require('../../../images/cuckoo/milanesa_morron.jpg'), texto: 'Milanesa con Morrón', precio: 65},
    //   {nombre: 'Ensaladas' , imagen: require('../../../images/cuckoo/ensalada_capresse.jpeg'), texto: 'Ensalada Capresse', precio: 38},
    // ];
    carnes = [
      {nombre: 'Carnes' , imagen: require('../../../images/cuckoo/p_cecina_asada.jpg'), texto: 'Cecina asada', precio: 56},
      {nombre: 'Carnes' , imagen: require('../../../images/cuckoo/p_pechuga_pollo_plancha.jpeg'), texto: 'Pechuga de pollo a la plancha', precio: 56},
      {nombre: 'Carnes' , imagen: require('../../../images/cuckoo/p_pechuga_pollo_gratinada.jpg'), texto: 'Pechuga de pollo gratinada', precio: 62},
      {nombre: 'Carnes' , imagen: require('../../../images/cuckoo/p_tasajo_asado.jpg'), texto: 'Tasajo asado', precio: 69},
      {nombre: 'Carnes' , imagen: require('../../../images/cuckoo/p_tampiquena_res.jpg'), texto: 'Tampiqueña de res', precio: 69},
      {nombre: 'Carnes' , imagen: require('../../../images/cuckoo/p_tampiquena_res_toreada.jpg'), texto: 'Tampiqueña de res toreada', precio: 69},
    ];
    pastas = [
      {nombre: 'Pastas' , imagen: require('../../../images/cuckoo/p_bolonesa.jpg'), texto: 'Boloñesa', precio: 49},
      {nombre: 'Pastas' , imagen: require('../../../images/cuckoo/p_arrabiata.jpg'), texto: 'Arrabiata', precio: 59},
    ];
    alambres = [
      {nombre: 'Alambres' , imagen: require('../../../images/cuckoo/p_alambre_bistec.jpg'), texto: 'Alambre de bistec', precio: 65},
      {nombre: 'Alambres' , imagen: require('../../../images/cuckoo/p_alambre_cecina.jpg'), texto: 'Alambre de cecina', precio: 65},
      {nombre: 'Alambres' , imagen: require('../../../images/cuckoo/p_alambre_pastor.png'), texto: 'Alambre de pastor', precio: 65},
      {nombre: 'Alambres' , imagen: require('../../../images/cuckoo/p_alambre_pollo.png'), texto: 'Alambre de pollo', precio: 65},
    ];
    queso_fundido = [
      {nombre: 'Queso fundido' , imagen: require('../../../images/cuckoo/p_queso_fundido_pastor.jpeg'), texto: 'Queso fundido (pastor)', precio: 60},
      {nombre: 'Queso fundido' , imagen: require('../../../images/cuckoo/p_queso_fundido_chorizo.jpg'), texto: 'Queso fundido (chorizo)', precio: 60},
      {nombre: 'Queso fundido' , imagen: require('../../../images/cuckoo/p_queso_fundido_cecina.jpg'), texto: 'Queso fundido (cecina)', precio: 60},
      {nombre: 'Queso fundido' , imagen: require('../../../images/cuckoo/p_queso_fundido_bistec.jpg'), texto: 'Queso fundido (bistec)', precio: 60},
      {nombre: 'Queso fundido' , imagen: require('../../../images/cuckoo/p_queso_fundido_champinones.jpg'), texto: 'Queso fundido (champiñones)', precio: 60},
    ];
    milanesas = [
      {nombre: 'Milanesas Cuckoo' , imagen: require('../../../images/cuckoo/p_milanesa_clasica.jpeg'), texto: 'Clásica empanizada', precio: 60},
      {nombre: 'Milanesas Cuckoo' , imagen: require('../../../images/cuckoo/p_milanesa_italiana.jpg'), texto: 'Milanesa italiana', precio: 65},
      {nombre: 'Milanesas Cuckoo' , imagen: require('../../../images/cuckoo/p_milanesa_capresse.jpeg'), texto: 'Milanesa Capresse', precio: 65},
      {nombre: 'Milanesas Cuckoo' , imagen: require('../../../images/cuckoo/p_milanesa_napolitana.jpeg'), texto: 'Milanesa Napolitana', precio: 68},
      {nombre: 'Milanesas Cuckoo' , imagen: require('../../../images/cuckoo/p_milanesa_hawaiana.jpeg'), texto: 'Milanesa Hawaiana', precio: 65},
      {nombre: 'Milanesas Cuckoo' , imagen: require('../../../images/cuckoo/p_milanesa_pepperoni.jpg'), texto: 'Milanesa con Pepperoni', precio: 65},
      {nombre: 'Milanesas Cuckoo' , imagen: require('../../../images/cuckoo/p_milanesa_morron.jpg'), texto: 'Milanesa con Morrón', precio: 65},
    ];
    ensaladas = [
      {nombre: 'Ensaladas' , imagen: require('../../../images/cuckoo/p_ensalada_capresse.jpeg'), texto: 'Ensalada Capresse', precio: 38},
    ];
  }

  const handlePress = (seccion) => {
    let nombre_seccion = seccion.nombre;
    let texto_seccion = seccion.texto;
    // Aquí puedes navegar a la nueva ventana con el título de la sección
    // navigation.navigate('NuevaVentana', { titulo: seccion.nombre });
    navigation.navigate(nombre_seccion,{texto_seccion});
  };
  if(id_menu == 'Desayunos')
  {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo_seccion}>HUEVOS</Text>
          <CuckooSubseccion items={huevos}/>
        <Text style={styles.titulo_seccion}>MAIZ</Text>
          <CuckooSubseccion items={maiz}/>
        <Text style={styles.titulo_seccion}>DULCE</Text>
          <CuckooSubseccion items={dulce}/>
        <Text style={styles.titulo_seccion}>PAN</Text>
          <CuckooSubseccion items={pan}/>
        <Text style={styles.titulo_seccion}>BEBIDAS</Text>
          <CuckooSubseccion items={bebidas}/>
      </View>
    );
  }
  else if(id_menu == 'Antojitos')
  {
    return(      
      <View style={styles.container}>
        <Text style={styles.titulo_seccion}>RINCÓN OAXAQUEÑO</Text>
          <CuckooSubseccion items={rincon_oaxaqueno}/>
        <Text style={styles.titulo_seccion}>TORTAS</Text>
          <CuckooSubseccion items={tortas}/>
        <Text style={styles.titulo_seccion}>TORTAS ESPECIALES</Text>
          <CuckooSubseccion items={tortas_especiales}/>
        <Text style={styles.titulo_seccion}>SNACKS</Text>
          <CuckooSubseccion items={snacks}/>
      </View>
    );
  }
  else if(id_menu == 'Platillos')
  {
    return(
      <View style={styles.container}>
        <Text style={styles.titulo_seccion}>CARNES</Text>
          <CuckooSubseccion items={carnes}/>
        <Text style={styles.titulo_seccion}>PASTAS</Text>
          <CuckooSubseccion items={pastas}/>
        <Text style={styles.titulo_seccion}>ALAMBRES</Text>
          <CuckooSubseccion items={alambres}/>
        <Text style={styles.titulo_seccion}>QUESO FUNDIDO</Text>
          <CuckooSubseccion items={queso_fundido}/>
        <Text style={styles.titulo_seccion}>MILANESAS CUCKOO</Text>
          <CuckooSubseccion items={milanesas}/>
        <Text style={styles.titulo_seccion}>ENSALADAS</Text>
          <CuckooSubseccion items={ensaladas}/>
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

export default CuckooMenu;