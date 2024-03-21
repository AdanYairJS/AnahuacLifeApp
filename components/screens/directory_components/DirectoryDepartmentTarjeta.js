import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ArrowIcon from 'react-native-vector-icons/AntDesign';

const DirectoryWorkerTarjeta = ({ nombre, imagen, puesto, texto, correo, tramites, ubicacion, id_ubicacion, trabajadores}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate("DirectoryWorkers",{texto,correo,tramites,ubicacion,id_ubicacion,trabajadores})}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{texto.toUpperCase()}</Text>
      </View>
      <ArrowIcon name="right" size={30} color="#FD5900" style={styles.image}/>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    // marginHorizontal: -15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '90%',
    height: 'auto',
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  //   justifyContent: 'space-evenly',
  },
  textContainer: {
      margin: 12,
      // textAlignVertical: 'center',
      // borderColor: 'blue',
      // borderWidth: 2,
      width: '80%',
      height: 'auto',
      // alignContent: 'center',
      justifyContent: 'flex-end',
      alignContent: 'center',
      // alignItems: 'center',
      textAlign: 'center',
      textAlignVertical: 'center',
  },
  name: {
    fontSize: 15,
    fontFamily: 'lexend-bold',
    // fontWeight: 'bold',
    // marginBottom: 5,
    // textAlignVertical: 'center',
    // alignSelf: 'center',
    // alignContent: 'center',
    // justifyContent: 'center'
    // borderWidth: 'green',
    // borderWidth: 3,
  },
  image: {
    // borderColor: 'blue',
    // borderWidth: 3,
    marginRight: 10,
    alignSelf: 'center',
    // height: 50,
    // width: '25%',
    // aspectRatio: 1/1,
    // resizeMode: 'cover',
    // alignSelf: 'center',
    // borderRadius: 100,
    // marginLeft: 15,
    // borderColor: 'red',
    // borderWidth: 3,
  },
    // cardContainer: {
    //   backgroundColor: '#ffffff',
    //   borderRadius: 10,
    //   marginRight: 20,
    //   marginBottom: 20,
    //   marginLeft: 20,
    //   // paddingLeft: 20,
    //   // paddingRight: 10,
    //   // overflow: 'visible',
    // //   padding: 10,
    //   shadowColor: '#000',
    //   shadowOffset: {
    //     width: 0,
    //     height: 2,
    //   },
    //   shadowOpacity: 0.25,
    //   shadowRadius: 3.84,
    //   elevation: 5,
    //   width: '95%',
    //   height: 100,
    //   // height: 'auto',
    //   justifyContent: 'space-between',
    //   // alignContent: 'center',
    //   display: 'flex',
    //   alignItems: 'center',
    //   flexDirection: 'row',
    // //   justifyContent: 'space-evenly',
    // },
    // contenedor_interior: {
    //   flexDirection: 'row',
    //   borderColor: 'red',
    //   borderWidth: 3,
    //   width: '100%',
    //   // paddingLeft: 20,
    //   // paddingRight: 10,
    //   justifyContent: 'space-between',
    //   alignItems: 'center',
    // },
    // textContainer: {
    //     margin: 12,
    //     // textAlignVertical: 'center',
    //     borderColor: 'red',
    //     borderWidth: 2,
    //     // width: '70%',
    //     // display: 'flex',
    //     height: '30%',
    //     width: 'auto',
    //     alignContent: 'center',
    //     justifyContent: 'center',
    // },
    // activityName: {
    //   fontSize: 24,
    //   fontFamily: 'lexend-extrabold',
    //   // color: '#36454F',
    //   // marginBottom: 5,
    //   // marginLeft: 
    //   textAlign: 'left',
    //   display: 'flex',
    //   // borderColor: 'red',
    //   // borderWidth: 3,
    //   // textAlignVertical: 'center',
    // },
    // flecha: {
    //   marginHorizontal: 10,

    // },
    // activityDate: {
    //   fontFamily: 'lexend-regular',
    //   fontSize: 14,
    //   marginBottom: 5,
    // },
    // activityScore: {
    //   fontFamily: 'lexend-light',
    //   fontSize: 14,
    //   color: 'gray',
    // },
    // imageContainer: {
    //   flexDirection: 'row',
    //   //justifyContent: 'flex-end',
    //   alignItems: 'flex-end',
    // },
    // image: {
    //   width: '100%',
    //   height: '60%',
    // //   aspectRatio: 1/1,
    //   resizeMode: 'cover',
    // //   marginRight: 5,
    //   alignSelf: 'center',
    // //   borderRadius: 10,
    //     borderTopLeftRadius: 10,
    //     borderTopRightRadius: 10,
    // },
    contendor_scroll: {
      //margin: 15,
      marginTop: 15,
      marginBottom: 15,
    }
  });

  export default DirectoryWorkerTarjeta;