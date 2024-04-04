import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import Card_Chevron from '../Card_Chevron';

const ActivityScreen = ( ) => {
  return (
    <View style={styles.container}>
      <Card_Chevron text={"Historial Cuckoo"}/> 
      <Card_Chevron text={"Historial Dely Full"}/> 
      <Card_Chevron text={"Eventos inscrito"}/> 
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    paddingTop: 90,
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
});

export default ActivityScreen;
