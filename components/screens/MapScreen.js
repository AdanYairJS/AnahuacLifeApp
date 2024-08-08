import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Dimensions, Image, ActivityIndicator, Platform } from 'react-native';
import { PanGestureHandler, PinchGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useRoute } from '@react-navigation/native'; // Importa useRoute
import ImageMapper from '../general_components/ImageMapper';
import CustomModal from '../general_components/CustomModal';  // Asegúrate de que la ruta sea correcta

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

const adjustCoordinates = (x1, y1) => {
  // if (Platform.OS === 'ios') {
  //   //iOS
  //   return { x1: x1 + 7, y1: y1 + 33 };
  // } else 
  if (Platform.OS === 'android') {
    //Android
    return { x1: x1 * 1.0475, y1: y1 * 0.99 };
  }
  return { x1, y1 };
};

const RECTANGLE_MAP = [
  { id: '1', name: 'Edificio A', shape: 'circle', ...adjustCoordinates(146.5, 426), radius: 17, image: mapa_edificio_a, color_p: '#faae30', color_s: '#f7712e', /*prefill: 'rgba(0,0,255,0.5)', fill: 'blue'*/ },
  { id: '2', name: 'Edificio B', shape: 'circle', ...adjustCoordinates(112, 409), radius: 17, image: mapa_edificio_b, color_p: '#e33f91', color_s: '#e44060', /*prefill: 'rgba(0,0,255,0.5)', fill: 'blue'*/ },
  { id: '3', name: 'Edificio C', shape: 'circle', ...adjustCoordinates(231.5, 381), radius: 16, image: mapa_edificio_c, color_p: '#10bbed', color_s: '#197aa4', /*prefill: 'rgba(0,0,255,0.5)', fill: 'blue'*/ },
  { id: '4', name: 'Edificio D', shape: 'circle', ...adjustCoordinates(202.5, 370), radius: 16, image: mapa_edificio_d, color_p: '#994e37', color_s: '#5d3626', /*prefill: 'rgba(0,0,255,0.5)', fill: 'blue'*/ },
  { id: '5', name: 'Edificio E', shape: 'circle', ...adjustCoordinates(263, 401), radius: 16, image: mapa_edificio_e, color_p: '#20b545', color_s: '#166834', /*prefill: 'rgba(0,0,255,0.5)', fill: 'blue'*/ },
  { id: '6', name: 'Gimnasio UAO', shape: 'circle', ...adjustCoordinates(174, 340), radius: 16, image: mapa_gimnasio, color_p: '#f7d32d', color_s: '#f59730', /*prefill: 'rgba(0,0,255,0.5)', fill: 'blue'*/ },
  { id: '7', name: 'Cuckoo', shape: 'circle', ...adjustCoordinates(81, 387), radius: 16, image: mapa_cuckoo, color_p: '#342620', color_s: '#563b33', /*prefill: 'rgba(0,0,255,0.5)', fill: 'blue'*/ },
  { id: '8', name: 'Auditorio SUM', shape: 'circle', ...adjustCoordinates(62.5, 403), radius: 16, image: mapa_SUM, color_p: '#e2f828', color_s: '#eaed24', /*prefill: 'rgba(0,0,255,0.5)', fill: 'blue'*/ },
  { id: '9', name: 'Canchas de Basquetbol', shape: 'circle', ...adjustCoordinates(135, 366.5), radius: 9, image: mapa_cancha_basquet, color_p: '#0184da', color_s: '#0184da', /*prefill: 'rgba(0,0,255,0.5)', fill: 'blue'*/ },
  { id: '10', name: 'Salón de Usos Múltiples', shape: 'circle', ...adjustCoordinates(147, 387), radius: 9, image: mapa_usos, color_p: '#dfd300', color_s: '#f6bd03', /*prefill: 'rgba(0,0,255,0.5)', fill: 'blue'*/ },
  { id: '11', name: 'Capilla', shape: 'circle', ...adjustCoordinates(131, 389), radius: 9, image: mapa_capilla, color_p: '#9fce2d', color_s: '#64ba20', /*prefill: 'rgba(0,0,255,0.5)', fill: 'blue'*/ },
  { id: '12', name: 'Cancha de Fútbol', shape: 'circle', ...adjustCoordinates(152, 352.5), radius: 10, image: mapa_cancha_fut, color_p: '#7522bd', color_s: '#31ccbe', /*prefill: 'rgba(0,0,255,0.5)', fill: 'blue'*/ },
  { id: '13', name: 'Cancha de Fútbol Rápido', shape: 'circle', ...adjustCoordinates(196, 356.5), radius: 9, image: mapa_cancha_fut_r, color_p: '#219bbc', color_s: '#5f2fd0', /*prefill: 'rgba(0,0,255,0.5)', fill: 'blue'*/ },
  { id: '15', name: 'Canchas de Tenis', shape: 'circle', ...adjustCoordinates(114, 349), radius: 9, image: mapa_cancha_tenis, color_p: '#b6444d', color_s: '#a34837', /*prefill: 'rgba(0,0,255,0.5)', fill: 'blue'*/ },
  { id: '16', name: 'Estacionamiento 1', shape: 'circle', ...adjustCoordinates(71, 356), radius: 17, image: mapa_estacionamiento_2, color_p: '#ce324c', color_s: '#bb3222', /*prefill: 'rgba(0,0,255,0.5)', fill: 'blue'*/ },
  { id: '17', name: 'Estacionamiento 2', shape: 'circle', ...adjustCoordinates(325, 396), radius: 16, image: mapa_estacionamiento_1, color_p: '#c2256f', color_s: '#c2256f', /*prefill: 'rgba(0,0,255,0.5)', fill: 'blue'*/ },
  { id: '18', name: 'Estacionamiento para Docentes', shape: 'circle', ...adjustCoordinates(70, 446), radius: 17, image: mapa_estacionamiento_d, color_p: '#3270ce', color_s: '#203cba', /*prefill: 'rgba(0,0,255,0.5)', fill: 'blue'*/ },
  { id: '19', name: 'Plaza Central', shape: 'circle', ...adjustCoordinates(181, 397), radius: 10, image: mapa_plaza_central, color_p: '#d951be', color_s: '#c4498f', /*prefill: 'rgba(0,0,255,0.5)', fill: 'blue'*/ },
  { id: '20', name: 'Edificio ACI', shape: 'circle', ...adjustCoordinates(216, 348), radius: 16, image: mapa_edificio_f, color_p: '#622838', color_s: '#963952', /*prefill: 'rgba(0,0,255,0.5)', fill: 'blue'*/ },
  { id: '21', name: 'Delyfull', shape: 'circle', ...adjustCoordinates(249, 376), radius: 9, image: mapa_delyfull, color_p: '#1C5865', color_s: '#1E6A60', /*prefill: 'rgba(0,0,255,0.5)', fill: 'blue'*/ },
  { id: '22', name: 'CuckooBox', shape: 'circle', ...adjustCoordinates(286, 394), radius: 9, image: mapa_cuckoo_box, color_p: '#601C65', color_s: '#4F1F67', /*prefill: 'rgba(0,0,255,0.5)', fill: 'blue'*/ },
];

const MapScreen = () => {
  const route = useRoute();
  const { itemId } = route.params || {}; // Obtener itemId de los parámetros de la ruta

  const scale = useSharedValue(1);
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);
  const [selectedAreaId, setSelectedAreaId] = useState([]);
  const [imgSource, setImgSource] = useState(mapa_final);
  const [loading, setLoading] = useState(false);
  const [nextImgSource, setNextImgSource] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalItem, setModalItem] = useState({ name: '', color_p: '' });

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

  const mapperAreaClickHandler = (item) => {
    setNextImgSource(item.image);
    setModalItem({ name: item.name, color_p: item.color_p });
    setLoading(true);
  };

  useEffect(() => {
    if (itemId) {
      const selectedItem = RECTANGLE_MAP.find(item => item.id === itemId.toString());
      if (selectedItem) {
        mapperAreaClickHandler(selectedItem);
      }
    }
  }, [itemId]);

  const handleImageLoad = () => {
    setImgSource(nextImgSource);
    setLoading(false);
    setNextImgSource(null);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setImgSource(mapa_final);
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
                      color="#0000ff"
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

        <CustomModal
          visible={modalVisible}
          onClose={handleModalClose}
          item={modalItem}
        />
      </View>
    </GestureHandlerRootView>
  );
};

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
