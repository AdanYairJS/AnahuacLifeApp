import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {

  return (
    <View style={styles.container}>
        <Text style={styles.texto}>Pestana home</Text>              
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 30,
    textAlign: "center",
    marginTop: "20%"
  },
});

export default HomeScreen;