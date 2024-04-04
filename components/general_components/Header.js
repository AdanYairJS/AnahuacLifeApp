import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';


const Header = ({text,imagen}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.pop()} style={styles.chevron}>
          <ArrowIcon name="left" size={26} color='#FD5900' />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.groupName}>{text}</Text>
        </View>
        {imagen && <Image source={imagen} style={styles.logo} />}
       {/* <Image source={imagen} style={styles.logo} /> */}
        {/* <Image source={require('../../images/eventos/grupos/vertice.png')} style={styles.logo} /> */}
    </View>   
  );
};

const styles = StyleSheet.create({
    header: {
        // marginTop: Constants.statusBarHeight,
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 15,
        // height: 80,
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
    logo: {
      width: 60,
      height: 60,
    },
    chevron:{
      //borderWidth: 1,
      //borderColor: 'green',
      height: '100%',
      justifyContent: 'center',
    },
});

export default Header;
