// import React, { useRef } from 'react';
// import { View, StyleSheet, Dimensions } from 'react-native';
// import { PanGestureHandler, PinchGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
// import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
// import EmailLink from '../general_components/ImageMapper';


// const window = Dimensions.get('window');

// const MapScreen = () => {
//   const scale = useSharedValue(1);
//   const offsetX = useSharedValue(0);
//   const offsetY = useSharedValue(0);

//   const panRef = useRef();
//   const pinchRef = useRef();

//   const onPanGestureEvent = useAnimatedGestureHandler({
//     onStart: (_, ctx) => {
//       ctx.startX = offsetX.value;
//       ctx.startY = offsetY.value;
//     },
//     onActive: (event, ctx) => {
//       const maxOffsetX = (window.width * (scale.value - 1)) / 2;
//       const maxOffsetY = (window.height * (scale.value - 1)) / 2;

//       let newOffsetX = ctx.startX + event.translationX;
//       let newOffsetY = ctx.startY + event.translationY;

//       newOffsetX = Math.max(Math.min(newOffsetX, maxOffsetX), -maxOffsetX);
//       newOffsetY = Math.max(Math.min(newOffsetY, maxOffsetY), -maxOffsetY);

//       offsetX.value = newOffsetX;
//       offsetY.value = newOffsetY;
//     },
//     onEnd: () => {
//       offsetX.value = withSpring(offsetX.value);
//       offsetY.value = withSpring(offsetY.value);
//     },
//   });

//   const onPinchGestureEvent = useAnimatedGestureHandler({
//     onStart: (_, ctx) => {
//       ctx.startScale = scale.value;
//     },
//     onActive: (event, ctx) => {
//       let newScale = ctx.startScale * event.scale;
//       newScale = Math.max(1, Math.min(newScale, 3)); // Limita la escala entre 1 y 3
//       scale.value = newScale;
//     },
//     onEnd: () => {
//       scale.value = withSpring(scale.value);
//     },
//   });

//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [
//         { translateX: offsetX.value },
//         { translateY: offsetY.value },
//         { scale: scale.value },
//       ],
//     };
//   });

//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <View style={styles.container}>
//         <PanGestureHandler
//           ref={panRef}
//           onGestureEvent={onPanGestureEvent}
//           simultaneousHandlers={pinchRef}>
//           <Animated.View style={styles.wrapper}>
//             <PinchGestureHandler
//               ref={pinchRef}
//               onGestureEvent={onPinchGestureEvent}
//               simultaneousHandlers={panRef}>
//               <Animated.View style={styles.wrapper} collapsable={false}>
//                 <Animated.Image
//                   source={require('../../images/map/mapa_principal.png')} // Cambia esto por la ruta a tu imagen
//                   style={[styles.map, animatedStyle]}
//                   resizeMode="contain"
//                 />
//               </Animated.View>
//             </PinchGestureHandler>
//           </Animated.View>
//         </PanGestureHandler>
//       </View>
//     </GestureHandlerRootView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   wrapper: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
//   map: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
// });

// export default MapScreen;

//
//
//
//

// // Image Mapper in React Native to Create Clickable Areas on Image
// // https://aboutreact.com/react-native-image-mapper/

// // Import React
// import React, { useState } from 'react';
// // Import Required Components
// import { View, Text } from 'react-native';

// // Import ImageMapper Component
// import ImageMapper from '../general_components/ImageMapper';

// const getRandomColor = () => {
//   // Function to return random color
//   // To highlight the mapping area
//   const letters = '0123456789ABCDEF';
//   let color = '#';
//   for (var i = 0; i < 6; i++)
//     color += letters[Math.floor(Math.random() * 16)];
//   return color;
// };

// const App = () => {
//   // State for the selected area
//   const [selectedAreaId, setSelectedAreaId] = useState([]);

//   const mapperAreaClickHandler = async (item, idx, event) => {
//     const currentSelectedAreaId = selectedAreaId;
//     if (Array.isArray(currentSelectedAreaId)) {
//       const indexInState = currentSelectedAreaId.indexOf(item.id);
//       if (indexInState !== -1) {
//         console.log('Removing id', item.id);
//         setSelectedAreaId([
//           ...currentSelectedAreaId.slice(0, indexInState),
//           ...currentSelectedAreaId.slice(indexInState + 1),
//         ]);
//       } else {
//         alert(`Clicked Item Id: ${item.id}`);
//         console.log('Setting Id', item.id);
//         setSelectedAreaId([...currentSelectedAreaId, item.id]);
//       }
//     } else {
//       if (item.id === currentSelectedAreaId) {
//         setSelectedAreaId(null);
//       } else {
//         setSelectedAreaId(item.id);
//       }
//     }
//   };

//   return (
//     <View style={{ flex: 1, alignItems: 'center', padding: 30 }}>
//       <Text
//         style={{
//           fontSize: 30,
//           textAlign: 'center',
//           marginTop: 40
//         }}>
//         Image Mapper Example in React Native
//       </Text>
//       <Text
//           style={{
//             fontSize: 25,
//             marginTop: 20,
//             marginBottom: 30,
//             textAlign: 'center',
//           }}>
//           www.aboutreact.com
//         </Text>
//       <ImageMapper
//         imgHeight={551}
//         imgWidth={244}
//         imgSource={{
//           uri:
//             'https://raw.githubusercontent.com/msalo3/react-native-image-mapper/master/Examples/human.png',
//         }}
//         imgMap={RECTANGLE_MAP}
//         onPress={
//           (item, idx, event) => 
//             mapperAreaClickHandler(item, idx, event)
//         }
//         containerStyle={{ top: 10 }}
//         selectedAreaId={selectedAreaId}
//         multiselect
//       />
//     </View>
//   );

// };

// export default App;

// // Maps to Create Clickable Areas
// const RECTANGLE_MAP = [
//   {
//     id: '0',
//     name: 'Left Foot',
//     shape: 'rectangle',
//     x2: 110,
//     y2: 540,
//     x1: 80,
//     y1: 500,
//     prefill: getRandomColor(),
//     fill: 'blue',
//   },
//   {
//     id: '1',
//     name: 'Right Foot',
//     shape: 'rectangle',
//     x2: 155,
//     y2: 540,
//     x1: 125,
//     y1: 500,
//     prefill: getRandomColor(),
//     fill: 'blue',
//   },
//   {
//     id: '2',
//     name: 'Left Knee',
//     shape: 'rectangle',
//     x2: 110,
//     y2: 400,
//     x1: 80,
//     y1: 370,
//     prefill: getRandomColor(),
//     fill: 'blue',
//   },
//   {
//     id: '3',
//     name: 'Right Knee',
//     shape: 'rectangle',
//     x2: 155,
//     y2: 400,
//     x1: 125,
//     y1: 370,
//     prefill: getRandomColor(),
//     fill: 'blue',
//   },
//   {
//     id: '4',
//     name: 'Stomach',
//     shape: 'rectangle',
//     x2: 155,
//     y2: 240,
//     x1: 80,
//     y1: 165,
//     prefill: getRandomColor(),
//     fill: 'blue',
//   },
//   {
//     id: '5',
//     name: 'Left Hand',
//     shape: 'rectangle',
//     x2: 40,
//     y2: 315,
//     x1: 5,
//     y1: 250,
//     prefill: getRandomColor(),
//     fill: 'blue',
//   },
//   {
//     id: '6',
//     name: 'Right Hand',
//     shape: 'rectangle',
//     x2: 235,
//     y2: 315,
//     x1: 200,
//     y1: 250,
//     prefill: getRandomColor(),
//     fill: 'blue',
//   },
//   {
//     id: '7',
//     name: 'Face',
//     shape: 'rectangle',
//     x2: 145,
//     y2: 70,
//     x1: 90,
//     y1: 30,
//     prefill: getRandomColor(),
//     fill: 'blue',
//   },
//   {
//     id: '8',
//     name: 'Head',
//     shape: 'rectangle',
//     x2: 145,
//     y2: 30,
//     x1: 90,
//     y1: 0,
//     prefill: getRandomColor(),
//     fill: 'blue',
//   },
// ];

import React, { useRef, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { PanGestureHandler, PinchGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import ImageMapper from '../general_components/ImageMapper';

const window = Dimensions.get('window');

const MapScreen = () => {
  const scale = useSharedValue(1);
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);
  const [selectedAreaId, setSelectedAreaId] = useState([]);

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
      newScale = Math.max(1, Math.min(newScale, 7)); // Limita la escala entre 1 y 3
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
    console.log(item.name);
    const currentSelectedAreaId = selectedAreaId;
    if (Array.isArray(currentSelectedAreaId)) {
      const indexInState = currentSelectedAreaId.indexOf(item.id);
      if (indexInState !== -1) {
        setSelectedAreaId([
          ...currentSelectedAreaId.slice(0, indexInState),
          ...currentSelectedAreaId.slice(indexInState + 1),
        ]);
      } else {
        setSelectedAreaId([...currentSelectedAreaId, item.id]);
      }
    } else {
      if (item.id === currentSelectedAreaId) {
        setSelectedAreaId(null);
      } else {
        setSelectedAreaId(item.id);
      }
    }
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
                  <ImageMapper
                    imgHeight={window.height}
                    imgWidth={window.width}
                    imgSource={require('../../images/map/mapa_final.png')}
                    imgMap={RECTANGLE_MAP}
                    onPress={mapperAreaClickHandler}
                    containerStyle={{ flex: 1 }}
                    selectedAreaId={selectedAreaId}
                    multiselect
                  />
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
    image: '../../images/map/mapa_edificio_a.png',
  },
  {
    id: '2',
    name: 'Edificio B',
    shape: 'circle',
    x1: 110,
    y1: 375.5,
    radius: 17,
    image: '../../images/map/mapa_edificio_b.png',
  },
  {
    id: '3',
    name: 'Edificio C',
    shape: 'circle',
    x1: 226,
    y1: 348,
    radius: 16,
    image: '../../images/map/mapa_edificio_c.png',
  },
  {
    id: '4',
    name: 'Edificio D',
    shape: 'circle',
    x1: 198,
    y1: 339,
    radius: 16,
    image: '../../images/map/mapa_edificio_d.png',
  },
  {
    id: '5',
    name: 'Edificio E',
    shape: 'circle',
    x1: 257,
    y1: 368,
    radius: 16,
    image: '../../images/map/mapa_edificio_e.png',
  },
  {
    id: '6',
    name: 'Gimnasio UAO',
    shape: 'circle',
    x1: 170,
    y1: 308,
    radius: 16,
    image: '../../images/map/mapa_gimnasio.png',
  },
  {
    id: '7',
    name: 'Cuckoo',
    shape: 'circle',
    x1: 79,
    y1: 354,
    radius: 16,
    image: '../../images/map/mapa_cuckoo.png',
  },
  {
    id: '8',
    name: 'Auditorio SUM',
    shape: 'circle',
    x1: 60.5,
    y1: 370,
    radius: 16,
    image: '../../images/map/mapa_SUM.png',
  },
  {
    id: '9',
    name: 'Canchas de Basquetbol',
    shape: 'circle',
    x1: 132,
    y1: 335,
    radius: 9,
    image: '../../images/map/mapa_cancha_basquet.png',
  },
  {
    id: '10',
    name: 'Salón de Usos Múltiples',
    shape: 'circle',
    x1: 143,
    y1: 354.5,
    radius: 9,
    image: '../../images/map/mapa_usos.png',
  },
  {
    id: '11',
    name: 'Capilla',
    shape: 'circle',
    x1: 128,
    y1: 356,
    radius: 9,
    image: '../../images/map/mapa_capilla.png',
  },
  {
    id: '12',
    name: 'Cancha de Fútbol',
    shape: 'circle',
    x1: 148.5,
    y1: 321.5,
    radius: 10,
    image: '../../images/map/mapa_cancha_fut.png',
  },
  {
    id: '13',
    name: 'Cancha de Fútbol Rápido',
    shape: 'circle',
    x1: 191,
    y1: 325.5,
    radius: 9,
    image: '../../images/map/mapa_cancha_fut_r.png',
  },
  {
    id: '15',
    name: 'Canchas de Tenis',
    shape: 'circle',
    x1: 111,
    y1: 318.5,
    radius: 9,
    image: '../../images/map/mapa_cancha_tenis.png',
  },
  {
    id: '16',
    name: 'Estacionamiento 1',
    shape: 'circle',
    x1: 69,
    y1: 324,
    radius: 17,
    image: '../../images/map/mapa_estacionamiento_1.png',
  },
  {
    id: '17',
    name: 'Estacionamiento 2',
    shape: 'circle',
    x1: 317,
    y1: 363,
    radius: 16,
    image: '../../images/map/mapa_estacionamiento_2.png',
  },
  {
    id: '18',
    name: 'Estacionamiento para Docentes',
    shape: 'circle',
    x1: 68,
    y1: 410,
    radius: 17,
    image: '../../images/map/mapa_estacionamiento_d.png',
  },
  {
    id: '19',
    name: 'Plaza Central',
    shape: 'circle',
    x1: 177,
    y1: 364,
    radius: 10,
    image: '../../images/map/mapa_plaza_central.png',
  },
  {
    id: '20',
    name: 'Edificio ACI',
    shape: 'circle',
    x1: 212,
    y1: 318,
    radius: 16,
    image: '../../images/map/mapa_edificio_f.png',
  },
  {
    id: '21',
    name: 'Delyfull',
    shape: 'circle',
    x1: 243,
    y1: 344,
    radius: 9,
    image: '../../images/map/mapa_delyfull.png',
  },
  {
    id: '22',
    name: 'CuckooBox',
    shape: 'circle',
    x1: 279,
    y1: 361,
    radius: 9,
    image: '../../images/map/mapa_cuckoo_box.png',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
});

export default MapScreen;

