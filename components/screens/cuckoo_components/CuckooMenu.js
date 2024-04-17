// import React from 'react';
// import { View, TouchableOpacity, Text, Image, StyleSheet, Dimensions } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// //Imagenes
// // import a_enchiladas from '../../../images/cuckoo/a_enchiladas.jpg';
// // import b_caramel from '../../../images/cuckoo/b_caramel.jpg';
// // import d_sandwich from '../../../images/cuckoo/d_sandwich.jpg';
// // import e_cuckoo from '../../../images/cuckoo/e_cuckoo.jpg';
// import s_desayunos from '../../../images/cuckoo/s_desayunos.jpeg';
// import s_antojitos from '../../../images/cuckoo/s_antojitos.jpg';
// import s_platillos from '../../../images/cuckoo/s_platillos.png';

// import ss_huevos from '../../../images/cuckoo/ss_huevos.jpg';
// import ss_enchiladas from '../../../images/cuckoo/ss_enchiladas.jpg';
// import ss_dulce from '../../../images/cuckoo/ss_dulce.jpg';
// import ss_pan from '../../../images/cuckoo/ss_pan.jpg';
// import ss_bebidas from '../../../images/cuckoo/ss_bebidas.jpg';

// const anchoVentana = Dimensions.get('window').width;
// const altoVentana = Dimensions.get('window').height;

// const CuckooMenu = ({id_menu}) => {
//   const navigation = useNavigation();
//   let secciones;
  
//   if(id_menu == 'CuckooScreen')
//   {
//     secciones = [
//       // { nombre: 'e_cuckoo' , imagen: e_cuckoo, texto: 'Ensaladas' },
//       // { nombre: 'CuckooSeccion' , imagen: e_cuckoo, texto: 'Ensaladas' },
//       // { nombre: 'd_sandwich' , imagen: d_sandwich , texto: 'Desayunos'},
//       // { nombre: 'a_enchiladas' , imagen: a_enchiladas , texto: 'Antojitos' },
//       // { nombre: 'b_caramel' , imagen: b_caramel , texto: 'Bebidas'},
//       {nombre: 'CuckooSeccion' , imagen: s_desayunos, texto: 'Desayunos'},
//       {nombre: 'CuckooSeccion' , imagen: s_antojitos, texto: 'Antojitos'},
//       {nombre: 'CuckooSeccion' , imagen: s_platillos, texto: 'Platillos'},
//     ];
//   }

//   if(id_menu == 'Desayunos')
//   {
//     secciones = [
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Huevos'},
//       {nombre: 'CuckooSeccion' , imagen: ss_enchiladas, texto: 'Maíz'},
//       {nombre: 'CuckooSeccion' , imagen: ss_dulce, texto: 'Dulce'},
//       {nombre: 'CuckooSeccion' , imagen: ss_pan, texto: 'Pan'},
//       {nombre: 'CuckooSeccion' , imagen: ss_bebidas, texto: 'Bebidas'},
//     ];
//   }

//   if(id_menu == 'Huevos')
//   {
//     secciones = [
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Huevos revueltos'},
//       {nombre: 'CuckooSeccion' , imagen: ss_enchiladas, texto: 'Huevos estrellados'},
//       {nombre: 'CuckooSeccion' , imagen: ss_dulce, texto: 'Huevos divorciados'},
//       {nombre: 'CuckooSeccion' , imagen: ss_pan, texto: 'Huevos rancheros'},
//       {nombre: 'CuckooSeccion' , imagen: ss_bebidas, texto: 'Omelette con queso'},
//       {nombre: 'CuckooSeccion' , imagen: ss_bebidas, texto: 'Omelette de claras'},
//       {nombre: 'CuckooSeccion' , imagen: ss_bebidas, texto: 'Omelette especial'},
//       {nombre: 'CuckooSeccion' , imagen: ss_bebidas, texto: 'Salsa de huevo'},
//       {nombre: 'CuckooSeccion' , imagen: ss_bebidas, texto: 'Salsa de queso o quesillo'},
//     ];
//   }

//   if(id_menu == 'Maiz')
//   {
//     secciones = [
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Chilaquiles (Huevo)'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Chilaquiles (Cecina,Chorizo o Pollo)'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Chilaquiles (Tasajo)'},
//       {nombre: 'CuckooSeccion' , imagen: ss_enchiladas, texto: 'Chilaquiles divorciados (Huevo)'},
//       {nombre: 'CuckooSeccion' , imagen: ss_enchiladas, texto: 'Chilaquiles divorciados (Cecina,Chorizo o Pollo)'},
//       {nombre: 'CuckooSeccion' , imagen: ss_enchiladas, texto: 'Chilaquiles divorciados (Tasajo)'},
//       {nombre: 'CuckooSeccion' , imagen: ss_enchiladas, texto: 'Entomatadas (Huevo)'},
//       {nombre: 'CuckooSeccion' , imagen: ss_enchiladas, texto: 'Entomatadas (Cecina, Chorizo o Pollo)'},
//       {nombre: 'CuckooSeccion' , imagen: ss_enchiladas, texto: 'Entomatadas (Tasajo)'},
//       {nombre: 'CuckooSeccion' , imagen: ss_enchiladas, texto: 'Enfrijoladas (Huevo)'},
//       {nombre: 'CuckooSeccion' , imagen: ss_enchiladas, texto: 'Enfrijoladas (Cecina, Chorizo o Pollo)'},
//       {nombre: 'CuckooSeccion' , imagen: ss_enchiladas, texto: 'Enfrijoladas (Tasajo)'},
//       {nombre: 'CuckooSeccion' , imagen: ss_enchiladas, texto: 'Chilaquiles Cuckoo'},
//       {nombre: 'CuckooSeccion' , imagen: ss_dulce, texto: 'Enchiladas Suizas'},
//       {nombre: 'CuckooSeccion' , imagen: ss_pan, texto: 'Enchiladas divorciadas'},
//       {nombre: 'CuckooSeccion' , imagen: ss_bebidas, texto: 'Enchiladas oaxaqueñas'},
//       {nombre: 'CuckooSeccion' , imagen: ss_bebidas, texto: 'Enmoladas'},
//       {nombre: 'CuckooSeccion' , imagen: ss_bebidas, texto: 'Enfrijoladas Cuckoo'},
//     ];
//   }

//   if(id_menu == 'Dulce')
//   {
//     secciones = [
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Pan francés'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Pan francés con Nutella'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Pan francés con Nutella y plátano'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Coctel de frutas'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Tazón de avena con leche'},
//     ];
//   }

//   if(id_menu == 'Pan')
//   {
//     secciones = [
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Molletes (Quesillo o manchego)'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Molletes (Cecina, jamón, chorizo o tocino)'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Molletes (Tasajo)'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Grill sándwich con queso'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Sándwich montecristo'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Sándwich inglés'},
//     ];
//   }

//   if(id_menu == 'Bebidas')
//   {
//     secciones = [
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Jugo (Uva, manzana, arándano o durazno)'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Licuado (Avena, plátano, manzana, Nesquik chocolate, Nesquik fresa o Nesquik vainilla)'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Malteada (Oreo, Carlos V, Bubulubu, Emperador)'},
//     ];
//   }

//   if(id_menu == 'Rincon Oaxaqueño')
//   {
//     secciones = [
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Memelita'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Quesadillas fritas (3 pzas)'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Tacos dorados (3 pzas)'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Tacos blando con quesillo'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Tacos blando preparado'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Taco blando de tasajo'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Tostadas'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Tlayuda'},
//     ];
//   }

//   if(id_menu == 'Tortas')
//   {
//     secciones = [
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Torta de quesillo'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Torta de jamón con quesillo'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Torta de choriqueso'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Torta de tinga con quesillo'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Torta de milanesa con quesillo'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Torta de pierna con quesillo'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Torta de tasajo con quesillo'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Torta de chorizo con huevo'},
//     ];
//   }

//   if(id_menu == 'Tortas Especiales')
//   {
//     secciones = [
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Torta al pastor'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Torta cubana'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Torta hawaiana'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Torta oaxaqueña'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Torta regia'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Torta de alambre'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Torta Cuckoo'},
//     ];
//   }

//   if(id_menu == 'Snacks')
//   {
//     secciones = [
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Sincronizada'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Sincronizada manchego'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Sincronizada tres quesos'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Sincronizada champiñones'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Sincronizada cubana'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Dobladitas'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Dobladitas con chorizo'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Gringa al pastor'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Suiza de tasajo'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Hot dog'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Hamburguesa'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Club Sándwich'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Papas a la francesa'},
//     ];
//   }

//   if(id_menu == 'Carnes')
//   {
//     secciones = [
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Cecina asada'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Pechuga de pollo a la plancha'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Pechuga de pollo gratinada'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Tasajo asado'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Tampiqueña de res'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Tampiqueña de res toreada'},
//     ];
//   }

//   if(id_menu == 'Pastas')
//   {
//     secciones = [
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Boloñesa'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Arrabiata'},
//     ];
//   }

//   if(id_menu == 'Alambres')
//   {
//     secciones = [
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Alambre de bistec'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Alambre de cecina'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Alambre de pastor'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Alambre de pollo'},
//     ];
//   }

//   if(id_menu == 'Queso fundido')
//   {
//     secciones = [
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Orden de queso fundido (pastor)'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Orden de queso fundido (chorizo)'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Orden de queso fundido (cecina)'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Orden de queso fundido (bistec)'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Orden de queso fundido (champiñones)'},
//     ];
//   }

//   if(id_menu == 'Milanesas Cuckoo')
//   {
//     secciones = [
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Clásica empanizada'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Milanesa italiana'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Milanesa Capresse'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Milanesa Napolitana'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Milanesa Hawaiana'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Milanesa con Pepperoni'},
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Milanesa con Morrón'},
//     ];
//   }

//   if(id_menu == 'Ensaladas')
//   {
//     secciones = [
//       {nombre: 'CuckooSeccion' , imagen: ss_huevos, texto: 'Ensalada Capresse'},
//     ];
//   }

//   const handlePress = (seccion) => {
//     let nombre_seccion = seccion.nombre;
//     let texto_seccion = seccion.texto;
//     // Aquí puedes navegar a la nueva ventana con el título de la sección
//     // navigation.navigate('NuevaVentana', { titulo: seccion.nombre });
//     navigation.navigate(nombre_seccion,{texto_seccion});
//   };
//   return (
//     <View style={styles.container}>
//       {secciones.map((seccion, index) => (
//         <TouchableOpacity key={index} style={styles.icono} onPress={() => handlePress(seccion)}>
//           <Image source={seccion.imagen} style={styles.imagen} />
//           <Text style={styles.titulo}>{seccion.texto}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     width: anchoVentana,
//     maxWidth: 800,
//     alignSelf: 'center',
//   },
//   icono: {
//     width: '45%',
//     aspectRatio: 0.75,
//     // width: 100,
//     // height: 100,
//     margin: '2%',
//     // borderRadius: 20,
//     // borderWidth: 2,
//     // borderColor: '#FD5900',
//     elevation: 4,
//     shadowColor: '#000000',
//     // shadowOffset: ,
//     // shadowOpacity: 20,
//     overflow: 'hidden',
//   },
//   imagen: {
//     width: '100%',
//     height: '80%',
//     resizeMode: 'cover',
//     borderRadius: 25,
//   },
//   titulo: {
//     alignSelf: 'center',
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#FFF',
//     // textShadowColor: 'rgba(0, 0, 0, 0.4)', 
//     // textShadowOffset: { width: 0.05, height: 0.05 }, 
//     // textShadowRadius: 1,
//     marginTop: 5,
//     marginBottom: 5,
//   }
// });

// export default CuckooMenu;