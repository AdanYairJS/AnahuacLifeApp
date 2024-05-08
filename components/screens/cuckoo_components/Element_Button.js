import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import CustomSwitch from '../../general_components/CustomSwitch';
import RadioButton from '../../general_components/RadioButton';

const Element_Button = ({text}) => {
  return (
    <View style={styles.subcontainer}>
        <Text style={styles.preferencia}>{text}</Text>
        <View style={styles.flecha}>
            <RadioButton/>
        </View> 
    </View>        
  );
};

const styles = StyleSheet.create({
    subcontainer: {
         //borderWidth: 2,
         //borderColor: 'green',
        width: '100%',
        flexDirection: 'row',
        display: 'flex',
        //justifyContent: 'flex-start',
        justifyContent: 'center',
        paddingVertical: 10,
        marginVertical: 5,
        //paddingHorizontal: 20,
        paddingRight: 0,        
      },
      preferencia:{
         //borderWidth: 2,
         //borderColor: 'blue',
        width: '80%',
        display: 'flex',
        textAlign: 'left',
        fontFamily: 'lexend-regular',
        fontSize: 17,
        marginLeft: 20,
        textAlignVertical: 'center',
      },
      flecha:{
         //borderWidth: 2,
         //borderColor: 'black',
        width: '15%',
        alignItems: 'center',
        paddingTop: 1,
        justifyContent: 'flex-start',
        //justifyContent: 'center',
      },
});

export default Element_Button;
