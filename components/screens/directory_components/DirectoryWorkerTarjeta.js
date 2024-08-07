import React, {useContext} from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EmailLink from '../../general_components/EmailLink';
import themeContext from '../../theme/themeContext';
// import Activity from '../../../images/directorios/w_default.jpg';
// import utf8 from 'utf8';

// const path = require('path');



const DirectoryWorkerTarjeta = ({ nombre, puesto, correo, imagen }) => {
  const navigation = useNavigation();
  const theme = useContext(themeContext);
  console.log(imagen);
  // const img = require(imagen);

  const styles = StyleSheet.create({
    cardContainer: {
      backgroundColor: theme.backgroundCard,
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
      width: '90%',
      height: 'auto',
      paddingTop: 10,
      paddingBottom: 10,
      flexDirection: 'row',
    //   justifyContent: 'space-evenly',
    },
    textContainer: {
        margin: 12,
        // textAlignVertical: 'center',
        // borderColor: 'blue',
        // borderWidth: 2,
        width: '63%',
        height: 'auto',
        // alignContent: 'center',
        justifyContent: 'center',
    },
    name: {
      color: theme.color,
      fontSize: 15,
      fontFamily: 'lexend-bold',
      // fontWeight: 'bold',
      marginBottom: 5,
    //   textAlignVertical: 'center',
    },
    job: {
      fontFamily: 'lexend-regular',
      fontSize: 13,
      marginBottom: 5,
    },
    mail: {
      fontFamily: 'lexend-regular',
      fontSize: 13,
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
      // height: 50,
      width: '25%',
      aspectRatio: 1/1,
      resizeMode: 'cover',
      alignSelf: 'center',
      borderRadius: 100,
      marginLeft: 15,
      // borderColor: 'red',
      // borderWidth: 3,
    },
    contendor_scroll: {
      //margin: 15,
      marginTop: 15,
      marginBottom: 15,
    }
  });

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
    <View style={styles.cardContainer}>
      <Image source={{uri: imagen}} style={styles.image}/>
      <View style={styles.textContainer}>
        {/* <Text style={styles.name}>{utf8.decode(nombre)}</Text> */}
        {/* <Text style={styles.name}>{nombre}</Text> */}
        <Text style={styles.name}>{replaceVowelSequences(nombre)}</Text>
        {/* {puesto && <Text style={styles.job}>{utf8.decode(puesto)}</Text>} */}
        {/* {puesto && <Text style={styles.job}>{puesto}</Text>} */}
        {puesto && <Text style={styles.job}>{replaceVowelSequences(puesto)}</Text>}
        <EmailLink email={correo}>{correo}</EmailLink>
      </View>
    </View>
  );
};

export default DirectoryWorkerTarjeta;