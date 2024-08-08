import React,{useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import CustomSwitch from '../../general_components/CustomSwitch';
import themeContext from '../../theme/themeContext';

const Element_Switch = ({text}) => {
  const theme = useContext(themeContext);

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
      color: theme.color,
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

  return (
    <View style={styles.subcontainer}>
        <Text style={styles.preferencia}>{text}</Text>
        <View style={styles.flecha}>
            <CustomSwitch/>
        </View> 
    </View>        
  );
};

export default Element_Switch;
