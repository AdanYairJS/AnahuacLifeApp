import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import Card_Chevron from '../Card_Chevron';
import themeContext from '../../../theme/themeContext';

const ActivityScreen = ( ) => {
  const theme = useContext(themeContext);

  const styles = StyleSheet.create({
    container:{
      paddingTop: 90,
      flex: 1,
      backgroundColor: theme.backgroundColor,
    },
  });

  return (
    <View style={styles.container}>
      <Card_Chevron text={"Historial Cuckoo"}/> 
      <Card_Chevron text={"Historial Dely Full"}/> 
      <Card_Chevron text={"Eventos inscrito"}/> 
    </View>
  );
};

export default ActivityScreen;
