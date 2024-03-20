import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DirectoryWorkerTarjeta = ({ nombre, imagen, texto, trabajadores}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate("DirectoryWorkers",{texto,trabajadores})}>
      <Image source={imagen} style={styles.image}/>
      <View style={styles.textContainer}>
        <Text style={styles.activityName}>{texto.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    cardContainer: {
      backgroundColor: '#ffffff',
      borderRadius: 10,
      marginRight: 20,
      marginBottom: 20,
      marginLeft: 20,
    //   padding: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      width: '95%',
      height: 300,
    //   justifyContent: 'space-evenly',
    },
    textContainer: {
        margin: 12,
        //   textAlignVertical: 'top',
        // borderColor: 'red',
        // borderWidth: 2,
        height: '30%',
        alignContent: 'center',
        justifyContent: 'center',
    },
    activityName: {
      fontSize: 20,
      fontFamily: 'lexend-extrabold',
      // color: '#36454F',
      // marginBottom: 5,
      textAlign: 'center',
      
      // borderColor: 'red',
      // borderWidth: 3,
      // textAlignVertical: 'center',
    },
    activityDate: {
      fontFamily: 'lexend-regular',
      fontSize: 14,
      marginBottom: 5,
    },
    activityScore: {
      fontFamily: 'lexend-light',
      fontSize: 14,
      color: 'gray',
    },
    imageContainer: {
      flexDirection: 'row',
      //justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    image: {
      width: '100%',
      height: '60%',
    //   aspectRatio: 1/1,
      resizeMode: 'cover',
    //   marginRight: 5,
      alignSelf: 'center',
    //   borderRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    contendor_scroll: {
      //margin: 15,
      marginTop: 15,
      marginBottom: 15,
    }
  });

  export default DirectoryWorkerTarjeta;