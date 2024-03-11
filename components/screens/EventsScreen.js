import React, { useState, useRef } from 'react';
import { View, ScrollView, StyleSheet, Text, StatusBar } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box'; //yarn add megamaxs1234/react-native-image-slider-box (te amo megamax1234)
import { LinearGradient } from 'expo-linear-gradient'; //npx expo install expo-linear-gradient
import GroupsSection from './events_components/GroupsSection';
import EventSection from './events_components/EventSection';
import LeadershipPrograms from './events_components/LeadershipPrograms';
import { useNavigation } from '@react-navigation/native';

const EventsScreen = ({  }) => {
    const navigation = useNavigation();

    const images = [
        require('../../images/eventos/evento1.png'),
        require('../../images/eventos/evento2.png'),
        require('../../images/eventos/evento3.png'),
      ]

    return (
        <LinearGradient 
            colors={['#f0f0f0','#F9F9F9']}
            style={styles.container}
        >      
            <ScrollView style={styles.principal} showsVerticalScrollIndicator={false}>
                <StatusBar  translucent backgroundColor="transparent" barStyle="dark-content" /> 
                <View style={{ marginBottom: 10 }}>
                    <SliderBox         
                    images = {images} 
                    dotStyle = {{height: 8, width: 8, borderRadius: 50}} 
                    circleLoop autoplay={true} 
                    autoplayInterval={4000}
                    firstItem={0}
                    resizeMode={'cover'}
                    paginationBoxVerticalPadding={15}
                    paginationBoxStyle={{
                    position: 'absolute', 
                    }}
                    sliderBoxHeight={320}                    
                    onCurrentImagePressed={() => navigation.navigate("DetallesEvento")}
                    />
                </View>            
                {/* <ExpandableContainer title="COMUNIDAD UNIVERSITARIA" imageSource={require('../../images/eventos/contenedorcomunidad_eventos.png')} />
                <ExpandableContainer title="GRUPOS DE LIDERAZGO" imageSource={require('../../images/eventos/contenedorcomunidad_eventos.png')} /> */}
                <View style={styles.contenedor_titulo}>
                    <Text style={styles.titulo}>Comunidad Universitaria</Text>
                </View>
                <EventSection/>
                {/* <View style={styles.divider} />  */}
                <View style={styles.contenedor_titulo}>
                    <Text style={styles.titulo}>Grupos de Liderazgo</Text>
                </View>
                <EventSection/>
                <View style={styles.contenedor_titulo}>
                    <Text style={styles.titulo}>Actividades con Puntos Nova</Text>
                </View>
                <EventSection/>
                <View style={styles.divider}/>    
                <View style={styles.contenedor_titulo}>
                    <Text style={styles.titulo}>Grupos Universitarios</Text>
                </View>
                <GroupsSection/>
                <View style={styles.contenedor_titulo}>
                    <Text style={styles.titulo}>Programas de Liderazgo</Text>
                </View>
                <LeadershipPrograms/>
                {/* <View style={styles.divider}/> */}
            </ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    principal: {
       // backgroundColor: '#F8F8F8',
    },
    divider: {
        borderBottomWidth: 0.5,
        //borderBottomColor: '#FD5900',
        borderBottomColor: '#fdfdfd',
        marginTop: 20,
        marginBottom: 10,
        elevation: 1,
        shadowColor: '#000000',
    },
    contenedor_titulo: {
        marginTop: 25,
        alignItems: 'center',
        margin: 15,
        marginBottom: 25,
    },
    titulo: {
        textAlign: 'center',
        fontFamily: 'lexend-regular',
        fontSize: 25,
        color: '#FD5900',
        textShadowColor: 'rgba(0, 0, 0, 0.4)', 
        textShadowOffset: { width: 0.05, height: 0.05 }, 
        textShadowRadius: 1, 
    }  
});

export default EventsScreen;




