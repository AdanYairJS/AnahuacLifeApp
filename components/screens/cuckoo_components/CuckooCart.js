import React, { useState , useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'; 
import Iconos from 'react-native-vector-icons/AntDesign';

const CuckooCart = ({navigation , route}) => {
  const {color_1, color_2, id_platillo, nombre, cantidad, precio} = route.params;
  const item = `${nombre} \n$${precio.toFixed(2)}`

  const [cont, setCantidad] = useState(cantidad);

  const handleIncrement = () => {
    setCantidad(cont + 1);
  };

  const handleDecrement = () => {
    if (cont > 1) {
      setCantidad(cont - 1);
    }
  };

  return (
    <LinearGradient 
        colors={[color_1,color_2]}
        style={styles.container}
    >
        <View>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
            {/* <Text>{nombre} {cantidad} {precio}</Text> */}
            <View style={styles.cardContainer}>
                <View style={styles.preferencesContainer}>
                    <Text style={styles.preferencia}>{item}</Text>
                    <View style={styles.cantidad}>
                      <TouchableOpacity onPress={handleDecrement}><Iconos name="minuscircleo" size={26} color='#FD5900'/></TouchableOpacity>
                        <Text style={{fontFamily: 'lexend-regular', fontSize: 18}}>{cont}</Text>
                      <TouchableOpacity onPress={handleIncrement}><Iconos name="pluscircleo" size={26} color='#FD5900'/></TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    },
     cardContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginRight: 15,
        marginLeft: 15,
        marginTop: 20,
        //marginBottom: 5,
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
        width: '94%',
      },
      preferencesContainer:{
        // borderWidth: 2,
        // borderColor: 'red',
        marginVertical: 10,
        width: '100%',
        flexDirection: 'row',
      },
      preferencia:{
        //borderWidth: 2,
        //borderColor: 'blue',
       width: '68%',
       display: 'flex',
       textAlign: 'left',
       fontFamily: 'lexend-regular',
       fontSize: 17,
       marginLeft: 20,
       textAlignVertical: 'center',
     },
     cantidad: {
      flexDirection: 'row',
      width: '25%',
        //borderWidth: 2,
      justifyContent: 'space-between',
      alignContent: 'center',
      alignItems: 'flex-start',
     }
  });

  export default CuckooCart;