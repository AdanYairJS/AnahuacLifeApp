import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const FoodScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Pestana comida</Text>
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

export default FoodScreen;