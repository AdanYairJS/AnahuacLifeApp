import React, { useRef, useState, useEffect } from "react";
import { Animated, Easing } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import HomeIcon from '../images/icons/home_icon.svg';
import DirectoryIcon from '../images/icons/directorio_icon.svg';
import MapIcon from '../images/icons/mapa_icon.svg';
import FoodIcon from '../images/icons/comida_icon.svg';
import EventsIcon from '../images/icons/eventos_icon.svg';

//screens
import HomeScreen from './screens/HomeScreen';
import EventsScreen from './screens/EventsScreen';
import DirectoryScreen from './screens/DirectoryScreen';
import MapScreen from './screens/MapScreen';
import CuckooScreen from "./screens/CuckooScreen";

//subscreens
import GroupsStackScreen from './screens/events_components/GroupsStackScreen';
import DetailedEvent from './screens/events_components/DetailedEvent.js';
import CuckooHeader from "./screens/cuckoo_components/CuckooHeader";
import CuckooItem from "./screens/cuckoo_components/CuckooItem";

//stack específica para eventos
const EventsStackNavigator = createNativeStackNavigator();

function MyStack() {
    return(
        <EventsStackNavigator.Navigator
            initialRouteName="EventosScreen"
        >
            <EventsStackNavigator.Screen
                name = "EventosScreen"
                component={EventsScreen}
                options={{
                    tabBarLabel: 'Eventos',
                    tabBarIcon: ({ color, size }) => (
                        <EventsIcon  width={tamano} height={tamano} style={{color: color, width: size, height: size}} />
                    ),
                    headerShown: false
                }}
            />
            <EventsStackNavigator.Screen
                name = "Vertice"
                component={GroupsStackScreen}
                options={{
                    headerBackTitle: false,
                    headerShown: false,
                }}
            />
            <EventsStackNavigator.Screen
                name = "DetallesEvento"
                component={DetailedEvent}
                options={{
                    headerBackTitle: false,
                    headerShown: false,
                }}
            />
        </EventsStackNavigator.Navigator>
    )
}

//stack espec
const CuckooStackNavigator = createNativeStackNavigator();

function CuckooStack() {
    const color_1 = '#005f28', color_2 = '005f28';
    return (
        <CuckooStackNavigator.Navigator
            initialRouteName="CuckooScreen"
        >
            <CuckooStackNavigator.Screen
                name = "CuckooScreen"
                component={CuckooScreen}
                initialParams={{color_1:'#13aed1',color_2:'#014955'}}
                options={{
                    header: () => <CuckooHeader ruta_imagen = {require('../images/cuckoo/logo.png')} color_fondo='#014955'/>
                }}
                />
            {/* <CuckooStackNavigator.Screen
                name = "CuckooSeccion"
                component={CuckooSeccion}
                // initialParams={{color_1:'#d8f26e',color_2:'#005f28'}}
                // initialParams={{color_1:'#d8f26e',color_2:'#1efed5'}}
                // initialParams={{color_1:'#53b1c7',color_2:'#005f28'}}
                // initialParams={{color_1:'#5faf71',color_2:'#005f28'}}
                // initialParams={{color_1:'#92dbac',color_2:'#005f28'}}
                //Esta es la buena
                //initialParams={{color_1:'#5faf71',color_2:'#003500'}}
                initialParams={{color_1:'#13aed1',color_2:'#014955'}}
                options={{
                    header: () => <CuckooHeader ruta_imagen = {require('../images/cuckoo/logo.png')} color_fondo='#014955'/>
                    //Logo Dely Full
                    // header: () => <CuckooHeader ruta_imagen = {require('../images/cuckoo/Logo Dely.png')} color_fondo='#005f28'/>
                }}
            /> */}
            <CuckooStackNavigator.Screen
                name = "CuckooItem"
                component={CuckooItem}
                initialParams={{color_1:'#13aed1',color_2:'#014955'}}
                options={{
                    header: () => <CuckooHeader ruta_imagen = {require('../images/cuckoo/logo.png')} color_fondo='#014955'/>
                }}
            />
        </CuckooStackNavigator.Navigator>
    )
}


const Tab = createBottomTabNavigator();

function MyTabs() {
    const [focusedIndex, setFocusedIndex] = useState(0);
    const circleSize = useRef(new Animated.Value(0)).current;

    const animateCircle = (toValue) => {
        Animated.timing(circleSize, {
            toValue,
            duration: 300,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
    };

    useEffect(() => {
        animateCircle(0); // Restaurar el círculo al tamaño inicial cuando el componente se monta
    }, []);

    const renderTabBarIcon = (route, focused, color, size) => {
        size=30
        if (focused) {
            animateCircle(size + 15); // Iniciar la animación solo cuando la pestaña está activa
        }

        return (
            <Animated.View
                style={{
                    position: 'relative',
                    width: size + 15,
                    height: size + 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {focused && ( // Solo mostrar el círculo cuando la pestaña está activa
                    <Animated.View
                        style={{
                            width: circleSize,
                            height: circleSize,
                            backgroundColor: '#D44709', // Color del círculo
                            borderRadius: circleSize.interpolate({
                                inputRange: [0, size + 15],
                                outputRange: [0, (size + 15) / 2], // Para hacerlo circular
                            }),
                            position: 'absolute',
                            bottom: 0,
                            alignSelf: 'center',
                        }}
                    />
                )}
                {route.name === 'Home' && (
                    <HomeIcon width={size} height={size} style={{ color }} />
                )}
                {route.name === 'Directorio' && (
                    <DirectoryIcon width={size} height={size} style={{ color }} />
                )}
                {route.name === 'Mapa' && (
                    <MapIcon width={size} height={size} style={{ color }} />
                )}
                {route.name === 'Comida' && (
                    <FoodIcon width={size} height={size} style={{ color }} />
                )}
                {route.name === 'Eventos' && (
                    <EventsIcon width={size} height={size} style={{ color }} />
                )}
            </Animated.View>
        );
    };

    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: '#822C07',
                tabBarInactiveTintColor: '#FFFFFF',
                tabBarLabelStyle: {
                    fontFamily: 'lexend-light',
                    fontSize: 11,
                    marginBottom: 5,
                },
                tabBarStyle: {
                    backgroundColor: '#FD5900', // Color de fondo
                    height: 70, // Altura del menú
                    borderTopWidth: 0, //Borde superior
                    display: 'flex',
                },
                tabBarIconStyle: {
                    marginTop: 7, // Distancia entre los íconos y el  borde superior de la barra de menú
                    alignSelf: 'center',
                },
                tabBarIcon: ({ focused, color, size }) => renderTabBarIcon(route, focused, color, size),
            })}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    tabBarLabel: 'Inicio',
                    headerShown: false,
                }}
            />
            <Tab.Screen 
                name="Directorio" 
                component={DirectoryScreen} 
                options={{
                    tabBarLabel: 'Directorio',
                }}
            />
            <Tab.Screen 
                name="Mapa" 
                component={MapScreen} 
                options={{
                    tabBarLabel: 'Mapa',
                    headerShown: false
                }}
            />
            <Tab.Screen 
                name="Comida" 
                component={CuckooStack} 
                options={{
                    tabBarLabel: 'Comida',
                    tabBarBadge: 1,
                    tabBarBadgeStyle: {
                        backgroundColor: 'black',
                    },
                    headerShown: false
                }}
            />
            <Tab.Screen 
                name="Eventos" 
                component={MyStack} 
                options={{
                    tabBarLabel: 'Eventos',
                    headerShown: false,
                    tabBarBadge: 13,
                    tabBarBadgeStyle: {
                        backgroundColor: 'black',
                    }
                }}                
            />
        </Tab.Navigator>
    );
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
}
