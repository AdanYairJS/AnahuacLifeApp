import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import utf8 from 'utf8';

//

const DelyFullTarjeta = ({ id_platillo, nombre, imagen, precio}) => {
  const navigation = useNavigation();

  function replaceVowelSequences(str) {
    return str
        .replace(/a\+/g, 'á')
        .replace(/e\+/g, 'é')
        .replace(/i\+/g, 'í')
        .replace(/o\+/g, 'ó')
        .replace(/u\+/g, 'ú')
        .replace(/n\+/g, 'ñ');
  }

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate("DelyFullItem",{id_platillo,nombre,precio,imagen})}>
      <Image source={{uri: imagen}} style={styles.image}/>
      <View style={styles.textContainer}>
        {/* <Text style={styles.activityName}>{utf8.decode(nombre)}</Text> */}
        <Text style={styles.activityName}>{replaceVowelSequences(nombre)}</Text>
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
    },
    textContainer: {
        margin: 12,
        height: '30%',

    },
    activityName: {
      fontSize: 15,
      fontFamily: 'lexend-medium',
      fontWeight: 'bold',
      marginBottom: 5,
    },
    activityDate: {
      fontFamily: 'lexend-regular',
      fontSize: 14,
      marginBottom: 5,
    },
    image: {
      width: '100%',
      height: '60%',
      resizeMode: 'cover',
      alignSelf: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
  });

  export default DelyFullTarjeta;