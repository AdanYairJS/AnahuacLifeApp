import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

let url = 'https://raw.githack.com/AdanYairJS/AnahuacLifeApp/main/images/directorios/d_administracion_escolar.jpg';

const MapScreen = () => {
  return (
    <View>
      {/* <Text>MapScreen</Text> */}
      <Image source={{uri : url}} style={styles.imagen}></Image>
    </View>
  )
}

const styles = StyleSheet.create({
  imagen: {
    width: 500,
    height: 500,
  },
});

export default MapScreen

