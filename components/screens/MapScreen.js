import React, { useRef, useState } from 'react';
import { View, StyleSheet, Dimensions, Image, ActivityIndicator } from 'react-native';
import { PanGestureHandler, PinchGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import ImageMapper from '../general_components/ImageMapper';

// Importar imágenes
import mapa_final from '../../images/map/mapa_final.png';
import mapa_edificio_a from '../../images/map/mapa_edificio_a.png';
import mapa_edificio_b from '../../images/map/mapa_edificio_b.png';
import mapa_edificio_c from '../../images/map/mapa_edificio_c.png';
import mapa_edificio_d from '../../images/map/mapa_edificio_d.png';
import mapa_edificio_e from '../../images/map/mapa_edificio_e.png';
import mapa_gimnasio from '../../images/map/mapa_gimnasio.png';
import mapa_cuckoo from '../../images/map/mapa_cuckoo.png';
import mapa_SUM from '../../images/map/mapa_SUM.png';
import mapa_cancha_basquet from '../../images/map/mapa_cancha_basquet.png';
import mapa_usos from '../../images/map/mapa_usos.png';
import mapa_capilla from '../../images/map/mapa_capilla.png';
import mapa_cancha_fut from '../../images/map/mapa_cancha_fut.png';
import mapa_cancha_fut_r from '../../images/map/mapa_cancha_fut_r.png';
import mapa_cancha_tenis from '../../images/map/mapa_cancha_tenis.png';
import mapa_estacionamiento_1 from '../../images/map/mapa_estacionamiento_1.png';
import mapa_estacionamiento_2 from '../../images/map/mapa_estacionamiento_2.png';
import mapa_estacionamiento_d from '../../images/map/mapa_estacionamiento_d.png';
import mapa_plaza_central from '../../images/map/mapa_plaza_central.png';
import mapa_edificio_f from '../../images/map/mapa_edificio_f.png';
import mapa_delyfull from '../../images/map/mapa_delyfull.png';
import mapa_cuckoo_box from '../../images/map/mapa_cuckoo_box.png';

const window = Dimensions.get('window');

// Mapa de imágenes
const imageMap = {
  'mapa_final': mapa_final,
  'mapa_edificio_a': mapa_edificio_a,
  'mapa_edificio_b': mapa_edificio_b,
  'mapa_edificio_c': mapa_edificio_c,
  'mapa_edificio_d': mapa_edificio_d,
  'mapa_edificio_e': mapa_edificio_e,
  'mapa_gimnasio': mapa_gimnasio,
  'mapa_cuckoo': mapa_cuckoo,
  'mapa_SUM': mapa_SUM,
  'mapa_cancha_basquet': mapa_cancha_basquet,
  'mapa_usos': mapa_usos,
  'mapa_capilla': mapa_capilla,
  'mapa_cancha_fut': mapa_cancha_fut,
  'mapa_cancha_fut_r': mapa_cancha_fut_r,
  'mapa_cancha_tenis': mapa_cancha_tenis,
  'mapa_estacionamiento_1': mapa_estacionamiento_2,
  'mapa_estacionamiento_2': mapa_estacionamiento_1,
  'mapa_estacionamiento_d': mapa_estacionamiento_d,
  'mapa_plaza_central': mapa_plaza_central,
  'mapa_edificio_f': mapa_edificio_f,
  'mapa_delyfull': mapa_delyfull,
  'mapa_cuckoo_box': mapa_cuckoo_box,
};

const MapScreen = () => {
  const scale = useSharedValue(1);
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);
  const [selectedAreaId, setSelectedAreaId] = useState([]);
  const [imgSource, setImgSource] = useState(imageMap['mapa_final']);
  const [loading, setLoading] = useState(false);
  const [nextImgSource, setNextImgSource] = useState(null);

  const panRef = useRef();
  const pinchRef = useRef();

  const onPanGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = offsetX.value;
      ctx.startY = offsetY.value;
    },
    onActive: (event, ctx) => {
      const maxOffsetX = (window.width * (scale.value - 1)) / 2;
      const maxOffsetY = (window.height * (scale.value - 1)) / 2;

      let newOffsetX = ctx.startX + event.translationX;
      let newOffsetY = ctx.startY + event.translationY;

      newOffsetX = Math.max(Math.min(newOffsetX, maxOffsetX), -maxOffsetX);
      newOffsetY = Math.max(Math.min(newOffsetY, maxOffsetY), -maxOffsetY);

      offsetX.value = newOffsetX;
      offsetY.value = newOffsetY;
    },
    onEnd: () => {
      offsetX.value = withSpring(offsetX.value);
      offsetY.value = withSpring(offsetY.value);
    },
  });

  const onPinchGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startScale = scale.value;
    },
    onActive: (event, ctx) => {
      let newScale = ctx.startScale * event.scale;
      newScale = Math.max(1, Math.min(newScale, 3)); // Limita la escala entre 1 y 3
      scale.value = newScale;
    },
    onEnd: () => {
      scale.value = withSpring(scale.value);
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: offsetX.value },
        { translateY: offsetY.value },
        { scale: scale.value },
      ],
    };
  });

  const mapperAreaClickHandler = (item, idx, event) => {
    setNextImgSource(imageMap[item.image]);
    setLoading(true);
  };

  const handleImageLoad = () => {
    setImgSource(nextImgSource);
    setLoading(false);
    setNextImgSource(null);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <PanGestureHandler
          ref={panRef}
          onGestureEvent={onPanGestureEvent}
          simultaneousHandlers={pinchRef}>
          <Animated.View style={styles.wrapper}>
            <PinchGestureHandler
              ref={pinchRef}
              onGestureEvent={onPinchGestureEvent}
              simultaneousHandlers={panRef}>
              <Animated.View style={styles.wrapper} collapsable={false}>
                <Animated.View style={[styles.mapContainer, animatedStyle]}>
                  {loading && (
                    <ActivityIndicator
                      size="large"
                      color="#cabec8"
                      style={styles.loadingIndicator}
                    />
                  )}
                  <ImageMapper
                    imgHeight={window.height}
                    imgWidth={window.width}
                    imgSource={imgSource}
                    imgMap={RECTANGLE_MAP}
                    onPress={mapperAreaClickHandler}
                    containerStyle={{ flex: 1 }}
                    selectedAreaId={selectedAreaId}
                    multiselect
                  />
                  {nextImgSource && (
                    <Image
                      source={nextImgSource}
                      style={styles.hiddenImage}
                      onLoad={handleImageLoad}
                    />
                  )}
                </Animated.View>
              </Animated.View>
            </PinchGestureHandler>
          </Animated.View>
        </PanGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

const RECTANGLE_MAP = [
  {
    id: '1',
    name: 'Edificio A',
    shape: 'circle',
    x1: 142.5,
    y1: 392,
    radius: 17,
    image: 'mapa_edificio_a',
  },
  {
    id: '2',
    name: 'Edificio B',
    shape: 'circle',
    x1: 110,
    y1: 375.5,
    radius: 17,
    image: 'mapa_edificio_b',
  },
  {
    id: '3',
    name: 'Edificio C',
    shape: 'circle',
    x1: 226,
    y1: 348,
    radius: 16,
    image: 'mapa_edificio_c',
  },
  {
    id: '4',
    name: 'Edificio D',
    shape: 'circle',
    x1: 198,
    y1: 339,
    radius: 16,
    image: 'mapa_edificio_d',
  },
  {
    id: '5',
    name: 'Edificio E',
    shape: 'circle',
    x1: 257,
    y1: 368,
    radius: 16,
    image: 'mapa_edificio_e',
  },
  {
    id: '6',
    name: 'Gimnasio UAO',
    shape: 'circle',
    x1: 170,
    y1: 308,
    radius: 16,
    image: 'mapa_gimnasio',
  },
  {
    id: '7',
    name: 'Cuckoo',
    shape: 'circle',
    x1: 79,
    y1: 354,
    radius: 16,
    image: 'mapa_cuckoo',
  },
  {
    id: '8',
    name: 'Auditorio SUM',
    shape: 'circle',
    x1: 60.5,
    y1: 370,
    radius: 16,
    image: 'mapa_SUM',
  },
  {
    id: '9',
    name: 'Canchas de Basquetbol',
    shape: 'circle',
    x1: 132,
    y1: 335,
    radius: 9,
    image: 'mapa_cancha_basquet',
  },
  {
    id: '10',
    name: 'Salón de Usos Múltiples',
    shape: 'circle',
    x1: 143,
    y1: 354.5,
    radius: 9,
    image: 'mapa_usos',
  },
  {
    id: '11',
    name: 'Capilla',
    shape: 'circle',
    x1: 128,
    y1: 356,
    radius: 9,
    image: 'mapa_capilla',
  },
  {
    id: '12',
    name: 'Cancha de Fútbol',
    shape: 'circle',
    x1: 148.5,
    y1: 321.5,
    radius: 10,
    image: 'mapa_cancha_fut',
  },
  {
    id: '13',
    name: 'Cancha de Fútbol Rápido',
    shape: 'circle',
    x1: 191,
    y1: 325.5,
    radius: 9,
    image: 'mapa_cancha_fut_r',
  },
  {
    id: '15',
    name: 'Canchas de Tenis',
    shape: 'circle',
    x1: 111,
    y1: 318.5,
    radius: 9,
    image: 'mapa_cancha_tenis',
  },
  {
    id: '16',
    name: 'Estacionamiento 1',
    shape: 'circle',
    x1: 69,
    y1: 324,
    radius: 17,
    image: 'mapa_estacionamiento_1',
  },
  {
    id: '17',
    name: 'Estacionamiento 2',
    shape: 'circle',
    x1: 317,
    y1: 363,
    radius: 16,
    image: 'mapa_estacionamiento_2',
  },
  {
    id: '18',
    name: 'Estacionamiento para Docentes',
    shape: 'circle',
    x1: 68,
    y1: 410,
    radius: 17,
    image: 'mapa_estacionamiento_d',
  },
  {
    id: '19',
    name: 'Plaza Central',
    shape: 'circle',
    x1: 177,
    y1: 364,
    radius: 10,
    image: 'mapa_plaza_central',
  },
  {
    id: '20',
    name: 'Edificio ACI',
    shape: 'circle',
    x1: 212,
    y1: 318,
    radius: 16,
    image: 'mapa_edificio_f',
  },
  {
    id: '21',
    name: 'Delyfull',
    shape: 'circle',
    x1: 243,
    y1: 344,
    radius: 9,
    image: 'mapa_delyfull',
  },
  {
    id: '22',
    name: 'CuckooBox',
    shape: 'circle',
    x1: 279,
    y1: 361,
    radius: 9,
    image: 'mapa_cuckoo_box',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cabec8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  mapContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  loadingIndicator: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -25,
    marginLeft: -25,
    zIndex: 1,
  },
  hiddenImage: {
    width: 0,
    height: 0,
    position: 'absolute',
    opacity: 0,
  },
});

export default MapScreen;
