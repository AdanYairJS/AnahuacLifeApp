import React, {useState} from "react";
import {View,TouchableOpacity, StyleSheet} from 'react-native';

const CustomSwitch = () => {
    const [isOn,setIsOn] = useState(true)
    function toogleSwitch(){
        setIsOn(isOn => !isOn)
    }
    return(
        <TouchableOpacity style={[styles.outter,
        isOn?{justifyContent:'flex-end',backgroundColor:'#F65805'}:
        {justifyContent:'flex-start',backgroundColor:'#B5B7BB'}
        ]} activeOpacity={1} onPress={toogleSwitch}>
            <View style={styles.inner}/>
        </TouchableOpacity>
    );
};

export default CustomSwitch;

const styles = StyleSheet.create({
    inner:{
        width: 19,
        height: 19,
        backgroundColor: 'white',
        borderRadius: 15,
        elevation: 8,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.15,
        shadowRadius: 2,
        alignSelf: 'center',
    },
    outter:{
        flexDirection: 'row',
        paddingHorizontal: 3,
        //paddingBottom: 0.5,
        width: 38,
        height: 25,
        backgroundColor: 'gray',
        borderRadius: 15,
        alignItems: 'center',
        overflow: 'hidden',
    }
});