import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';

const Header = ({text,backTo}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate(backTo)}>
          <ArrowIcon name="left" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.groupName}>{text}</Text>
        </View>
    </View>   
  );
};

const styles = StyleSheet.create({
    header: {
        marginTop: Constants.statusBarHeight,
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    groupName: {
        fontSize: 24,
        marginLeft: 20,
        marginRight: 'auto',
        fontFamily: 'lexend-medium',
    },
});

export default Header;
