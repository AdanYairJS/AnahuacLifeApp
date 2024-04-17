// import { StatusBar , StatusBarHeight } from 'expo-status-bar';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, Platform, StatusBar, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; //npx expo install expo-linear-gradient
import { SliderBox } from 'react-native-image-slider-box';
import CuckooMenu from '../cuckoo_components/CuckooMenu';
import CuckooProductos from '../cuckoo_components/CuckooProductos';
import { FontAwesome6 } from '@expo/vector-icons';
// import { Picker } from 'react-native-picker/picker';
// import { useNavigation } from '@react-navigation/native';

import s_desayunos from '../../../images/cuckoo/s_desayunos.jpeg';
import s_antojitos from '../../../images/cuckoo/s_antojitos.jpg';

const anchoVentana = Dimensions.get('window').width;
const altoVentana = Dimensions.get('window').height;

const images = [
  require('../../../images/cuckoo/pina_coco.png'),
  require('../../../images/cuckoo/calabaza.png'),
  require('../../../images/cuckoo/fresa.png'),
  require('../../../images/cuckoo/patatalab.png'),
]

export default function DelyFullItem({ navigation , route }) {
    // const navigation = useNavigation();

  const {color_1, color_2, nombre, imagen, texto, precio, cabecera_sabor, sabores} = route.params;
  console.log(cabecera_sabor);
  console.log(sabores);
//   const item = route.params.item;

//   if(cabecera_sabor !== undefined)
//   {
//     return (
//         <LinearGradient 
//           // colors={['#13aed1','#014955']}
//           colors={[color_1,color_2]}
//           style={styles.container}
//         >
//           <View style={styles.fondo}>
//             <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
//             <ScrollView>
//               <View style={styles.view_return}>
//                 <TouchableOpacity styles={styles.boton_return} onPress={() => navigation.goBack()}>
//                   <FontAwesome6 name="chevron-left" size={30} color="white" />
//                 </TouchableOpacity>
//                 {/* <Text style={styles.titulo}>ENSALADAS</Text> */}
//                 {/* <Text style={styles.titulo}>{route.params.texto_seccion}</Text> */}
//                 {/* <Text style={styles.titulo}>{texto_may}</Text> */}
//               </View>
//               <View style={[styles.view_return,{justifyContent: 'center'}]}>
//                 <Image source={imagen} style={styles.imagen}/>
//               </View>
//             <Text style={styles.titulo}>{texto}</Text>
//             <Text style={styles.subtitulo}>${precio.toFixed(2)}</Text>
//             <Text style={styles.subtitulo2}> {cabecera_sabor} </Text>
//             </ScrollView>
//           </View>
//         </LinearGradient>
//       );
//   }
//   else
//   {
    return (
        <LinearGradient 
          // colors={['#13aed1','#014955']}
          colors={[color_1,color_2]}
          style={styles.container}
        >
          <View style={styles.fondo}>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
            <ScrollView>
              <View style={styles.view_return}>
                <TouchableOpacity styles={styles.boton_return} onPress={() => navigation.goBack()}>
                  <FontAwesome6 name="chevron-left" size={30} color="white" />
                </TouchableOpacity>
                {/* <Text style={styles.titulo}>ENSALADAS</Text> */}
                {/* <Text style={styles.titulo}>{route.params.texto_seccion}</Text> */}
                {/* <Text style={styles.titulo}>{texto_may}</Text> */}
              </View>
              <View style={[styles.view_return,{justifyContent: 'center'}]}>
                <Image source={imagen} style={styles.imagen}/>
              </View>
            <Text style={styles.titulo}>{texto}</Text>
            <Text style={styles.subtitulo}>${precio.toFixed(2)}</Text>
            <TouchableOpacity style= {[styles.boton_seccion,{backgroundColor: '#FFF'}]}>
            <   Text style={[styles.titulo,{color: color_2,fontSize: 20, fontWeight: 'normal', marginTop: 12, marginBottom: 12}]}>Ordenar</Text>
            </TouchableOpacity>
            {/* <Text style={styles.titulo}>Hora de entrega</Text> */}
            </ScrollView>
          </View>
        </LinearGradient>
      );
  }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fondo: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  barra_superior: {
    paddingTop: Constants.statusBarHeight,
    height: 120,
    width: anchoVentana,
    backgroundColor: '#014955',
    display: 'flex',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagen_superior: {
    width: anchoVentana*0.9,
    maxWidth: 500,
    resizeMode: 'contain',
    marginTop: '5%',
    marginBottom: '5%',
  },
  contenedor_slider: {
    height: altoVentana * .30,
    borderRadius: 20,
  },
  titulo: {
    alignSelf: 'center',
    textAlign: 'center',
    // paddingRight: 24,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: altoVentana*0.005,
    // marginBottom: 5,
    width: '90%',
    // borderColor: 'red',
    // borderWidth: 3,
  },
  subtitulo: {
    alignSelf: 'center',
    textAlign: 'center',
    // paddingRight: 24,
    fontSize: 25,
    fontWeight: '100',
    color: '#FFF',
    // marginTop: 5,
    marginBottom: 5,
    width: '90%',
    // borderColor: 'red',
    // borderWidth: 3,
  },
  subtitulo2: {
    alignSelf: 'center',
    textAlign: 'left',
    // paddingRight: 24,
    fontSize: 18,
    fontWeight: 'normal',
    color: '#FFF',
    marginTop: 30,
    marginBottom: 5,
    width: '90%',
    // borderColor: 'red',
    // borderWidth: 3,
  },
  view_return: {
    height: 'auto',
    // width: '100%',
    width: anchoVentana,
    flexDirection: 'row',
    // alignItems: 'flex-start',
    // alignContent: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10,
    // borderColor: 'purple',
    // borderWidth: 3,
  },
  boton_return: {
    width: anchoVentana,
    borderColor: 'yellow',
    borderWidth: 3,
  },
  imagen: {
    // marginTop: 30,
    paddingTop: 20,
    width: '90%',
    aspectRatio: 1/1,
    borderRadius: 30,
  },    
  boton_seccion: {
    // backgroundColor: color_1,
    borderRadius: 25,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 15,
    marginBottom: 30,
    marginLeft: 70,
    marginRight: 70,
    // borderWidth: 2,
    // borderColor: '#FFF',
    
  }
});