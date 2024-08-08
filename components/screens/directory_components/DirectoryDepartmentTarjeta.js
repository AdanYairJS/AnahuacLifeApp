import React, {useContext} from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import themeContext from '../../theme/themeContext';
// import utf8 from 'utf8';

const DirectoryWorkerTarjeta = ({nombre, id_depto, correo, hora_ap1, hora_ci1, id_lugar, nombre_lugar}) => {
  const navigation = useNavigation();
  const theme = useContext(themeContext);

  const styles = StyleSheet.create({
    cardContainer: {
      backgroundColor: theme.backgroundCard,
      borderRadius: 10,
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
    },
    textContainer: {
      margin: 15,
    },
    name: {
      color: theme.color,
      fontSize: 17,
      fontFamily: 'lexend-regular',
    },
    image: {
      marginRight: 10,
      alignSelf: 'center',
    },
    contendor_scroll: {
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
        .replace(/u\+/g, 'ú');
}

  return(
    <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate("DirectoryWorkers",{id_depto, correo, nombre, hora_ap1, hora_ci1, id_lugar, nombre_lugar})}>
      <View style={styles.textContainer}>
        {/* <Text style={styles.name}>{utf8.decode(nombre)}</Text> */}
        <Text style={styles.name}>{ replaceVowelSequences(nombre)}</Text>
      </View>
      <ArrowIcon name="right" size={26} color="#FD5900" style={styles.image}/>
    </TouchableOpacity>
  );
};

  export default DirectoryWorkerTarjeta;