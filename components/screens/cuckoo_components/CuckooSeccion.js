// import { StatusBar , StatusBarHeight } from 'expo-status-bar';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, Platform, StatusBar, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; //npx expo install expo-linear-gradient
import { SliderBox } from 'react-native-image-slider-box';
import CuckooMenu from '../cuckoo_components/CuckooMenu';
import CuckooProductos from '../cuckoo_components/CuckooProductos';
import { FontAwesome6 } from '@expo/vector-icons';
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

export default function CuckooScreen({ navigation , route }) {
  
  const {color_1, color_2} = route.params;
  // console.log(route.params.texto_seccion);
  const texto_min = route.params.texto_seccion;
  const texto_may = texto_min.toUpperCase();
  // let secciones;
  // if(route.params.texto_seccion == 'Desayunos')
  // {
  //   secciones = [
  //     {nombre: 'CuckooSeccion' , imagen: s_desayunos, texto: 'Desayunos'},
  //     {nombre: 'CuckooSeccion' , imagen: s_antojitos, texto: 'Antojitos'},
  //   ];
  // }

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
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome6 name="chevron-left" size={24} color="white" />
            </TouchableOpacity>
            {/* <Text style={styles.titulo}>ENSALADAS</Text> */}
            {/* <Text style={styles.titulo}>{route.params.texto_seccion}</Text> */}
            <Text style={styles.titulo}>{texto_may}</Text>
          </View>
          <View>
            {/* <CuckooMenu id_menu={route.params.texto_seccion}/> */}
            {/* <CuckooMenu id_menu={texto_min}/> */}
            <CuckooProductos id_menu={texto_min}/>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

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
    paddingRight: 24,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: altoVentana*0.015,
    marginBottom: altoVentana*0.015,
    width: '90%',
  },
  view_return: {
    height: 100,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  boton_return: {

  },
});