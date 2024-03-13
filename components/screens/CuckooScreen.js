// import { StatusBar , StatusBarHeight } from 'expo-status-bar';
import React, { useState } from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, Platform, StatusBar, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; //npx expo install expo-linear-gradient
import { SliderBox } from 'react-native-image-slider-box';
import CuckooMenu from './cuckoo_components/CuckooMenu';
import CuckooSubseccion from './cuckoo_components/CuckooSubseccion';
import CuckooProductos from './cuckoo_components/CuckooProductos'

const anchoVentana = Dimensions.get('window').width;
const altoVentana = Dimensions.get('window').height;

const images = [
  require('../../images/cuckoo/pina_coco.png'),
  require('../../images/cuckoo/calabaza.png'),
  require('../../images/cuckoo/fresa.png'),
  require('../../images/cuckoo/patatalab.png'),
]

export default function CuckooScreen({ route }) {
  // StatusBar.setBackgroundColor('#fff');
  // if (Platform.OS === 'android') {
  //   StatusBar.setTranslucent(true);
  // }
  const [sec, setSec] = useState('Desayunos');

  const cambiarSec = (nombre) => 
  {
    setSec(nombre);
  }

  const {color_1, color_2} = route.params;
  const id_menu = 'Cuckoo';
  if(id_menu == 'Cuckoo')
  {
    secciones = [
      {nombre: 'Desayunos'},
      {nombre: 'Antojitos'},
      {nombre: 'Platillos'},
    ];
  }
  return (
    <LinearGradient 
      colors={[color_1,color_2]}
      style={styles.container}
    >
      {/* <StatusBar backgroundColor='#014955' barStyle='light-content'></StatusBar> */}
      <View style={styles.fondo}>
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
        {/* <View style={styles.barra_superior}>
          <Image source={require('../../images/cuckoo/logo.png')} style={styles.imagen_superior}></Image>
        </View> */}
        <ScrollView>
          <Text style={styles.titulo}>NOVEDADES</Text>
          <SliderBox 
                  images = {images} 
                  dotStyle = {{height: 8, width: 8, borderRadius: 50}} 
                  circleLoop autoplay={true} 
                  autoplayInterval={4000} 
                  disableOnPress
                  firstItem={0}
                  resizeMode={'cover'}
                  paginationBoxVerticalPadding={20}
                  paginationBoxStyle={{
                    position: 'absolute', 
                  }}
                  sliderBoxHeight={200}
                  ImageComponentStyle={{borderRadius: 15, width: '90%', marginTop: 5}}
                  // sliderBoxHeight={altoVentana*.30}
          />
          <Text style={styles.titulo}>MENÚ</Text>
          <View>
            {/* <CuckooMenu id_menu='CuckooScreen'/> */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.botonera}>
                  {secciones.map((seccion,index) => (
                    <TouchableOpacity key={index} style={[styles.boton_seccion,{backgroundColor: color_2}]} onPress={() => cambiarSec(seccion.nombre)}>
                      <Text style={[styles.titulo,{fontSize: 20, fontWeight: 'normal', marginTop: 12, marginBottom: 12}]}>{seccion.nombre}</Text>
                    </TouchableOpacity>
                  ))}
            </ScrollView>
            <CuckooProductos id_menu={sec}/>
          </View>
        </ScrollView>
        {/* <StatusBar style="auto" /> */}
        {/* <Text>Cuck</Text> */}
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
    // alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'flex-start',
  },
  barra_superior: {
    // position: 'absolute',
    // top: 0,
    paddingTop: Constants.statusBarHeight,
    // paddingBottom: '9%',
    height: 120,
    width: anchoVentana,
    backgroundColor: '#014955',
    display: 'flex',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    // borderColor: 'red',
    // borderWidth: 2,
  },
  imagen_superior: {
    // width: '1%',
    width: anchoVentana*0.9,
    maxWidth: 500,
    resizeMode: 'contain',
    marginTop: '5%',
    marginBottom: '5%',
    // borderColor: 'green',
    // borderWidth: 2,
    // backgroundColor: '#014955',
  },
  contenedor_slider: {
    height: altoVentana * .30,
    borderRadius: 20,
  },
  titulo: {
    alignSelf: 'center',
    fontSize: 30,
    // fontWeight: 'bold',
    color: '#FFF',
    fontFamily: 'lexend-extrabold',
    // textShadowColor: 'rgba(0, 0, 0, 0.4)', 
    // textShadowOffset: { width: 0.05, height: 0.05 }, 
    // textShadowRadius: 1,
    marginTop: altoVentana*0.05,
    marginBottom: altoVentana*0.03,
  },
  botonera: 
  {
    marginBottom: 30,
  },
  boton_seccion: {
    // backgroundColor: color_1,
    borderRadius: 25,
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 15,
    marginRight: -10,
    // borderWidth: 2,
    // borderColor: '#FFF',
    
  }
});