import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { PanGestureHandler, PinchGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const window = Dimensions.get('window');

const MapScreen = () => {
  const scale = useSharedValue(1);
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);

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
                <Animated.Image
                  source={require('../../images/map/mapa_principal.png')} // Cambia esto por la ruta a tu imagen
                  style={[styles.map, animatedStyle]}
                  resizeMode="contain"
                />
              </Animated.View>
            </PinchGestureHandler>
          </Animated.View>
        </PanGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

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
  map: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default MapScreen;
