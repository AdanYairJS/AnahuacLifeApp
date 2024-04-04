import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import CustomSwitch from '../../general_components/CustomSwitch';

const Element_Switch = ({text}) => {
  return (
    <View style={styles.subcontainer}>
        <Text style={styles.preferencia}>{text}</Text>
        <View style={styles.flecha}>
            <CustomSwitch/>
        </View> 
    </View>        
  );
};

const styles = StyleSheet.create({
    subcontainer: {
        // borderWidth: 2,
        // borderColor: 'green',
        width: '100%',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'flex-start',
        paddingVertical: 10,
        marginVertical: 5,
        //paddingHorizontal: 20,
        paddingRight: 20,        
      },
      preferencia:{
        // borderWidth: 2,
        // borderColor: 'blue',
        width: '80%',
        display: 'flex',
        textAlign: 'left',
        fontFamily: 'lexend-regular',
        fontSize: 17,
        marginLeft: 20,
        textAlignVertical: 'center',
      },
      flecha:{
        // borderWidth: 2,
        // borderColor: 'black',
        width: '15%',
        alignItems: 'center',
        justifyContent: 'center',
      },
});

export default Element_Switch;
