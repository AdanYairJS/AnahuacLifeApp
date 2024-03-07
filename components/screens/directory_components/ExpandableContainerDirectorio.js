import React, { useState, } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';

 // Función de retorno para ExpandableContainer
  const ExpandableContainerDirectorio = ({ title, subContainers }) => {
    const [expanded, setExpanded] = useState(false);
    const [rotation] = useState(new Animated.Value(0));
    const [containerHeight] = useState(new Animated.Value(100));
  
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
      if (expanded) {
        Animated.timing(containerHeight, {
          toValue: 100,
          duration: 300,
          useNativeDriver: false
        }).start();
      } else {
        Animated.timing(containerHeight, {
          toValue: 200 + subContainers.length * 140, // Ajusta la altura según la cantidad de subcontenedores
          duration: 300,
          useNativeDriver: false
        }).start();
      }
    };
  
    const spin = rotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg']
    });
  
    return (
      <Animated.View style={[styles.container_eventos, { height: containerHeight }]}>
        <TouchableOpacity style={styles.titleContainer_eventos} onPress={toggleExpand}>
          <Text style={styles.titleText_eventos}>{title}</Text>
          <View style={styles.arrowCircle}>
            <Animated.View style={{ transform: [{ rotate: spin }] }}>
              <Ionicons name="chevron-down-outline" size={24} style={styles.arrowIcon} />
            </Animated.View>
          </View>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.subContainer}>
            {subContainers.map((subContainer, index) => (
              <View key={index} style={styles.subContainerItem}>
                <Text style={styles.subContainerText}>{subContainer.title}</Text>
                {subContainer.subContainers.map((subSubContainer, subIndex) => (
                  <View key={subIndex} style={styles.subSubContainer}>
                    {subSubContainer}
                  </View>
                ))}
              </View>
            ))}
          </View>
        )}
      </Animated.View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollView: {
      flex: 1,
      marginBottom: 80,
    },
    header: {
      paddingTop: Constants.statusBarHeight,
      height: 130,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff',
    },
    menuButton: {
      position: 'absolute',
      top: Constants.statusBarHeight + 20,
      left: 0,
      zIndex: 1,
    },
    menuIcon: {
      width: 30,
      height: 40,
    },
    headerImage: {
       height: '100%',
    //   width: '100%',
    //   height: 100,
      resizeMode: 'contain',
    },
    content: {
      flex: 1,
      padding: 4,
      backgroundColor: '#f0f0f0',
    },
    menu: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      height: 80,
      backgroundColor: '#FD5900',
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    image: {
      width: 65,
      height: 65,
    },
    sideMenu: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      width: '60%',
      backgroundColor: '#ffffff',
      elevation: 4,
      shadowColor: '#000000',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      paddingLeft: 20,
      zIndex: 2,
    },
    closeButton: {
      position: 'absolute',
      top: Constants.statusBarHeight + 20,
      right: -30,
      zIndex: 3,
    },
    closeIcon: {
      width: 30,
      height: 40,
    },
    sideMenuItem: {
      top: Constants.statusBarHeight + 20,
      paddingTop: 10,
      fontSize: 14,
      fontFamily: 'Araboto',
      color: '#333',
      textAlign: 'left',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0, 
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      zIndex: 1,
    },
    // Estilos para ExpandableContainer
    container_eventos: {
      backgroundColor: '#FD5900',
      borderRadius: 10,
      margin: 10,
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
    subContainer: {
      backgroundColor: '#FFF',
      marginHorizontal: 10,
      borderRadius: 8,
      marginTop: 10,
    },
    subContainerItem: {
      borderBottomWidth: 1,
      borderBottomColor: '#FD5900',
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    subSubContainer: {
      backgroundColor: '#FFF',
      marginHorizontal: 10,
      paddingVertical: 5,
      paddingHorizontal: 10,
    },
    subContainerText: {
      color: '#333',
      fontSize: 14,
      textAlign: 'left',
    },
    subtitle: {
      fontWeight: 'bold',
      fontSize: 16,
      color: '#333',
    },
  
  });
  
  export default ExpandableContainerDirectorio;