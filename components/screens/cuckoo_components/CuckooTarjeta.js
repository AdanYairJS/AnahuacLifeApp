import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import utf8 from 'utf8';

//

const CuckooTarjeta = ({ id_platillo, nombre, imagen, precio, descripcion}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate("CuckooItem",{id_platillo,nombre,precio,imagen,descripcion})}>
      <Image source={{uri: 'https://rawcdn.githack.com/AdanYairJS/AnahuacLifeApp/e1447b54be16cb89b7c425452a6c321bfe11225e/images/directorios/w_default.jpg'}} style={styles.image}/>
      <View style={styles.textContainer}>
        {/* <Text style={styles.activityName}>{utf8.decode(nombre)}</Text> */}
        <Text style={styles.activityName}>{nombre}</Text>
        <Text style={styles.activityDate}>${precio.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    cardContainer: {
      backgroundColor: '#ffffff',
      borderRadius: 10,
      marginRight: 5,
      marginBottom: 10,
      marginLeft: 15,
    //   padding: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      width: 140,
      height: 260,
    //   justifyContent: 'space-evenly',
    },
    textContainer: {
        margin: 12,
        //   textAlignVertical: 'top',
        // borderColor: 'red',
        // borderWidth: 2,
        height: '30%',

    },
    activityName: {
      fontSize: 15,
      fontFamily: 'lexend-medium',
      fontWeight: 'bold',
      marginBottom: 5,
    //   textAlignVertical: 'center',
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

  export default CuckooTarjeta;