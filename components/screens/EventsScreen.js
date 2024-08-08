import React, { useState, useRef, useContext } from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet, Text, StatusBar } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box'; //yarn add megamaxs1234/react-native-image-slider-box (te amo megamax1234)
import { LinearGradient } from 'expo-linear-gradient'; //npx expo install expo-linear-gradient
import GroupsSection from './events_components/GroupsSection';
import EventSection from './events_components/EventSection';
import LeadershipPrograms from './events_components/LeadershipPrograms';
import Card_Chevron from './home_components/Card_Chevron';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import themeContext from '../theme/themeContext';

const EventsScreen = ({  }) => {
    const navigation = useNavigation();
    const theme = useContext(themeContext);

    const images = [
        require('../../images/eventos/evento1.png'),
        require('../../images/eventos/evento2.png'),
        require('../../images/eventos/evento3.png'),
      ]

      const styles = StyleSheet.create({
        principal: {
           // backgroundColor: '#F8F8F8',
           backgroundColor: theme.backgroundColor,
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
            marginTop: 45,
            alignItems: 'left',
            margin: 15,
            marginBottom: 5,
            marginLeft: 25,        
        },
        titulo: {
            textAlign: 'left',
            fontFamily: 'lexend-extrabold',
            fontSize: 20,
            color: '#FD5900',
            // textShadowColor: 'rgba(0, 0, 0, 0.4)', 
            // textShadowOffset: { width: 0.05, height: 0.05 }, 
            // textShadowRadius: 1, 
        },
        contenedor_tituloG: {
            //backgroundColor: 'red',
            marginTop: 30,
            alignItems: 'center',
            margin: 15,
            marginBottom: 30,
        },
        tituloG: {
            textAlign: 'center',
            fontFamily: 'lexend-extrabold',
            fontSize: 20,
            color: '#FD5900',
            // textShadowColor: 'rgba(0, 0, 0, 0.4)', 
            // textShadowOffset: { width: 0.05, height: 0.05 }, 
            // textShadowRadius: 1, 
        },
        cardContainer: {
            //marginTop: 105,
            width: '90%',
            backgroundColor: theme.backgroundCard,
            borderRadius: 10,
            marginRight: 15,
            marginTop: 15,
            marginLeft: 15,
            padding: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 4,
            display: 'flex',
            justifyContent: 'space-between',
            alignSelf: 'center',
          },
          preferencesContainer:{
            // borderWidth: 2,
            // borderColor: 'red',
            //marginVertical: 10,
            width: '100%',
          },
          subcontainer: {
            // borderWidth: 2,
            // borderColor: 'green',
            width: '100%',
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'flex-start',
            paddingVertical: 10,
            //paddingHorizontal: 20,
            paddingRight: 20,
            marginVertical: 5,
          },
          iconos:{
            width: '10%',
            justifyContent: 'center',
            alignItems: 'center',
            // borderWidth: 2,
            // borderColor: 'red',
          },
          preferencia:{
            // borderWidth: 2,
            // borderColor: 'blue',
            width: '80%',
            display: 'flex',
            textAlign: 'left',
            marginLeft: 20,
            textAlignVertical: 'center',
            fontFamily: 'lexend-bold',
            fontSize: 17,
            color: '#FD5900',
          },
          flecha:{
            // borderWidth: 2,
            // borderColor: 'black',
            width: '15%',
            alignItems: 'center',
            justifyContent: 'right',
            marginRight: 10,
          }, 
    });    

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
                    circleLoop={true}
                    autoplay={true} 
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
                {/* <Card_Chevron text={"TODOS LOS EVENTOS"}></Card_Chevron>  */}
                <View style={styles.cardContainer}>
                    <View style={styles.preferencesContainer}>
                        <TouchableOpacity style={styles.subcontainer}  onPress={() => navigation.navigate("TodosEventos")}>
                        <Text style={styles.preferencia}>TODOS LOS EVENTOS</Text>
                        <View style={styles.flecha}>
                            <ArrowIcon name="right" size={26} color="#FD5900"/>
                        </View>              
                        </TouchableOpacity>
                    </View>          
                </View>          
                {/* <ExpandableContainer title="COMUNIDAD UNIVERSITARIA" imageSource={require('../../images/eventos/contenedorcomunidad_eventos.png')} />
                <ExpandableContainer title="GRUPOS DE LIDERAZGO" imageSource={require('../../images/eventos/contenedorcomunidad_eventos.png')} /> */}
                <View style={styles.contenedor_titulo}>
                    <Text style={styles.titulo}>COMUNIDAD UNIVERSITARIA</Text>
                </View>
                <EventSection/>
                {/* <View style={styles.divider} />  */}
                <View style={styles.contenedor_titulo}>
                    <Text style={styles.titulo}>GRUPOS LIDERAZGO</Text>
                </View>
                <EventSection/>
                <View style={styles.contenedor_titulo}>
                    <Text style={styles.titulo}>PUNTOS NOVA</Text>
                </View>
                <EventSection/>
                <View style={styles.divider}/>    
                <View style={styles.contenedor_tituloG}>
                    <Text style={styles.tituloG}>GRUPOS UNIVERSITARIOS</Text>
                </View>
                <GroupsSection/>
                <View style={styles.contenedor_tituloG}>
                    <Text style={styles.tituloG}>PROGRAMAS DE LIDERAZGO</Text>
                </View>
                <LeadershipPrograms/>
                {/* <View style={styles.divider}/> */}
            </ScrollView>
        </LinearGradient>
    );
};

export default EventsScreen;




