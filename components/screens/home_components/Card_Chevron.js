import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import ArrowIcon from 'react-native-vector-icons/AntDesign';

const Card_Chevron = ({text}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.preferencesContainer}>
        <TouchableOpacity style={styles.subcontainer}>
          <Text style={styles.preferencia}>{text}</Text>
          <View style={styles.flecha}>
            <ArrowIcon name="right" size={26} color="#FD5900"/>
          </View>              
        </TouchableOpacity>
      </View>          
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
      //marginTop: 105,
      width: '90%',
      backgroundColor: '#ffffff',
      borderRadius: 10,
      marginRight: 15,
      marginTop: 15,
      marginLeft: 15,
      padding: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 4,
      display: 'flex',
      justifyContent: 'space-between',
      alignSelf: 'center',
    },
    preferencesContainer:{
      // borderWidth: 2,
      // borderColor: 'red',
      //marginVertical: 10,
      width: '100%',
    },
    subcontainer: {
      // borderWidth: 2,
      // borderColor: 'green',
      width: '100%',
      flexDirection: 'row',
      display: 'flex',
      justifyContent: 'flex-start',
      paddingVertical: 10,
      //paddingHorizontal: 20,
      paddingRight: 20,
      marginVertical: 5,
    },
    iconos:{
      width: '10%',
      justifyContent: 'center',
      alignItems: 'center',
      // borderWidth: 2,
      // borderColor: 'red',
    },
    preferencia:{
      // borderWidth: 2,
      // borderColor: 'blue',
      width: '80%',
      display: 'flex',
      textAlign: 'left',
      fontFamily: 'lexend-regular',
      fontSize: 17,
      marginLeft: 20,
      textAlignVertical: 'center',
    },
    flecha:{
      // borderWidth: 2,
      // borderColor: 'black',
      width: '15%',
      alignItems: 'center',
      justifyContent: 'right',
      marginRight: 10,
    },
});

export default Card_Chevron;
