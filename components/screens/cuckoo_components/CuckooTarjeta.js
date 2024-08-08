import React, {useContext} from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import themeContext from '../../theme/themeContext';
// import utf8 from 'utf8';

//

const CuckooTarjeta = ({ id_platillo, nombre, imagen, precio, descripcion}) => {
  const navigation = useNavigation();
  const theme = useContext(themeContext);

  const styles = StyleSheet.create({
    cardContainer: {
      //backgroundColor: theme.backgroundColor,
      backgroundColor: theme.backgroundCardCuckoo,
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
      color: theme.color,
      fontSize: 15,
      fontFamily: 'lexend-medium',
      fontWeight: 'bold',
      marginBottom: 5,
    },
    activityDate: {
      color: theme.color,
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

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate("CuckooItem",{id_platillo,nombre,precio,imagen, descripcion})}>
      <Image source={{uri: imagen}} style={styles.image}/>
      <View style={styles.textContainer}>
        {/* <Text style={styles.activityName}>{utf8.decode(nombre)}</Text> */}
        <Text style={styles.activityName}>{nombre}</Text>
        <Text style={styles.activityDate}>${precio.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CuckooTarjeta;