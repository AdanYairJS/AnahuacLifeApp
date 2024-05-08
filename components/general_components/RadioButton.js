import React, {useState} from "react";
import {View,TouchableOpacity, StyleSheet} from 'react-native';

const RadioButton = () => {
    const [isOn,setIsOn] = useState(false)
    function toogleSwitch(){
        setIsOn(isOn => !isOn)
    }
    return(
        <TouchableOpacity 
        style={[styles.outter2,isOn?{backgroundColor:'#F65805'} : {backgroundColor:'#B5B7BB'}]} activeOpacity={1} 
        onPress={toogleSwitch}>
            <View style={[styles.inner2,isOn?{backgroundColor:'#ffffff'} : {backgroundColor:'#ffffff'}]} activeOpacity={1} 
            onPress={toogleSwitch}>
                <View style={styles.shadow}></View>
            </View>
        </TouchableOpacity>
    );
};

export default RadioButton;

const styles = StyleSheet.create({
    outter2:{
        width: 25,
        height: 25,
        backgroundColor: '#B5B7BB',
        borderRadius: 25,
        //alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inner2: {
        width: 15,
        height: 15,
        borderRadius: 15,
        backgroundColor: '#B5B7BB',
        //elevation: 6,
        //overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    shadow: {
        width: 13,
        height: 13,
        borderRadius: 15,
        backgroundColor: '#ffffff',
        elevation: 6,
        overflow: 'hidden',
    },
});