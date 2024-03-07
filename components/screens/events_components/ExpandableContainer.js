import React, { useState, } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; //npm i @expo/vector-icons

const ExpandableContainer = ({ title, imageSource }) => {
    const [expanded, setExpanded] = useState(false);
    const [rotation] = useState(new Animated.Value(0));
    const [containerHeight] = useState(new Animated.Value(100));
    const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

    const rotateArrow = () => {
      Animated.timing(rotation, {
        toValue: expanded ? 0 : 1,
        duration: 300,
        useNativeDriver: true
      }).start();
    };
  
    const toggleExpand = () => {
      setExpanded(!expanded);
      rotateArrow();
      Animated.timing(containerHeight, {
        toValue: expanded ? 100 : imageDimensions.height + 100,
        duration: 300,
        useNativeDriver: false
      }).start();
    };
  
    const spin = rotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg']
    });
  
    return (
      <Animated.View style={styles.container_eventos}>
        <TouchableOpacity style={styles.titleContainer_eventos} onPress={toggleExpand}>
          <Text style={styles.titleText_eventos}>{title}</Text>
          <View style={styles.arrowCircle}>
            <Animated.View style={{ transform: [{ rotate: spin }] }}>
              <Ionicons name="chevron-down-outline" size={24} style={styles.arrowIcon} />
            </Animated.View>
          </View>
        </TouchableOpacity>
        <Animated.View style={{ overflow: 'hidden' }}>
          {expanded && (
            <Image source={imageSource} style={{ flex: 1, width: '100%', height: 207, resizeMode: 'contain' }} />
          )}
        </Animated.View>
      </Animated.View>
    );
};

const styles = StyleSheet.create({
      container_eventos: {
        backgroundColor: '#FD5900',
        borderRadius: 12,
        margin: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      titleContainer_eventos: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
      },
      titleText_eventos: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
      },
      arrowCircle: {
        backgroundColor: '#fff',
        borderRadius: 50,
        padding: 5,
        marginRight: 10,
      },
      arrowIcon: {
        color: '#9368DC',
      },      
});

export default ExpandableContainer;