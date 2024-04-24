import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';

import bg_1 from '../../images/food/bg_cuckoo_resto.png';
import t_1 from '../../images/food/t_cuckoo_resto.png';
import bg_2 from '../../images/food/bg_cuckoo_coffee.png';
import t_2 from '../../images/food/t_cuckoo_coffee.png';
import bg_3 from '../../images/food/bg_cuckoo_box.png';
import t_3 from '../../images/food/t_cuckoo_box.png';
import bg_4 from '../../images/food/bg_delyfull.png';
import t_4 from '../../images/food/t_delyfull.png';

const FoodScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar  translucent backgroundColor="transparent" barStyle="dark-content" />
            <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate("CuckooScreen")}> 
                <Image source={t_1} style={styles.titulo} /> 
                <Image source={bg_1} style={styles.imagen} />       
            </TouchableOpacity > 
            <TouchableOpacity style={styles.cardContainer}>  
                <Image source={t_2} style={styles.titulo} />    
                <Image source={bg_2} style={styles.imagen} />        
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardContainer}>  
                <Image source={t_3} style={styles.titulo} />    
                <Image source={bg_3} style={styles.imagen} />          
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate("DelyFullScreen")}>   
                <Image source={t_4} style={styles.titulo_d} />    
                <Image source={bg_4} style={styles.imagen} />         
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 20,
    },
    cardContainer: {
        width: '90%',
        height: '23%',
        backgroundColor: '#000',
        borderRadius: 10,
        marginBottom: '4%',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      },
      imagen: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
        opacity: 0.7,
      },
      titulo:{
        height: '50%',
        resizeMode: 'contain',
        position: 'absolute',
        zIndex: 1,  
      },
      titulo_d:{
        height: '35%',
        resizeMode: 'contain',
        position: 'absolute',
        zIndex: 1,
      },
});

export default FoodScreen;