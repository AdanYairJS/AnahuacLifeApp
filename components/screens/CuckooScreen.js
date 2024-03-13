// import { StatusBar , StatusBarHeight } from 'expo-status-bar';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, Platform, StatusBar} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; //npx expo install expo-linear-gradient
import { SliderBox } from 'react-native-image-slider-box';
import CuckooMenu from './cuckoo_components/CuckooMenu';

const anchoVentana = Dimensions.get('window').width;
const altoVentana = Dimensions.get('window').height;

const images = [
  require('../../images/cuckoo/pina_coco.png'),
  require('../../images/cuckoo/calabaza.png'),
  require('../../images/cuckoo/fresa.png'),
  require('../../images/cuckoo/patatalab.png'),
]

export default function CuckooScreen() {
  // StatusBar.setBackgroundColor('#fff');
  // if (Platform.OS === 'android') {
  //   StatusBar.setTranslucent(true);
  // }
  return (
    <LinearGradient 
      colors={['#13aed1','#014955']}
      style={styles.container}
    >
      {/* <StatusBar backgroundColor='#014955' barStyle='light-content'></StatusBar> */}
      <View style={styles.fondo}>
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
        <View style={styles.barra_superior}>
          <Image source={require('../../images/cuckoo/logo.png')} style={styles.imagen_superior}></Image>
        </View>
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
            <CuckooMenu/>
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
    fontWeight: 'bold',
    color: '#FFF',
    // textShadowColor: 'rgba(0, 0, 0, 0.4)', 
    // textShadowOffset: { width: 0.05, height: 0.05 }, 
    // textShadowRadius: 1,
    marginTop: altoVentana*0.015,
    marginBottom: altoVentana*0.015,
  }
});