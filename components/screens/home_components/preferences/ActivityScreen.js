import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import Header from '../../../general_components/Header';

const ActivityScreen = ( ) => {
  return (
    <View style={styles.container}>
        <StatusBar translucent backgroundColor="#ffffff" barStyle="dark-content" /> 
        {/* <Header text="Tu actividad" backTo="HomeScreen" /> */}
        
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8F8',
        flex: 1,
    },
});

export default ActivityScreen;
