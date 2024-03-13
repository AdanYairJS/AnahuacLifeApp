import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
//import { HomeIcon, DirectoryIcon, MapIcon, FoodIcon, EventsIcon } from './CustomIcons';
import HomeIcon from '../images/icons/home_icon.svg';
import DirectoryIcon from '../images/icons/directorio_icon.svg';
import MapIcon from '../images/icons/mapa_icon.svg';
import FoodIcon from '../images/icons/comida_icon.svg';
import EventsIcon from '../images/icons/eventos_icon.svg';
// import { HomeIcon, DirectoryIcon, MapIcon, FoodIcon, EventsIcon } from './CustomIcons';
import { Image } from 'react-native';

//screens
import HomeScreen from './screens/HomeScreen';
import EventsScreen from './screens/EventsScreen';
import DirectoryScreen from './screens/DirectoryScreen';
import MapScreen from './screens/MapScreen';
import GroupsStackScreen from './screens/events_components/GroupsStackScreen';
import DetailedEvent from './screens/events_components/DetailedEvent.js';
import CuckooScreen from "./screens/CuckooScreen";
import CuckooSeccion from "./screens/cuckoo_components/CuckooSeccion";
import CuckooHeader from "./screens/cuckoo_components/CuckooHeader";
import CuckooItem from "./screens/cuckoo_components/CuckooItem";

var tamano = 35;

const EventsStackNavigator = createNativeStackNavigator();
const CuckooStackNavigator = createNativeStackNavigator();

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
                }}
            />
        </EventsStackNavigator.Navigator>
    )
}

function LogoHeader() {
    return (
        <Image
            style={{ width: 400, height: 50,}}
            source={require('../images/cuckoo/logo.png')}
        />
    )
}

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
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#FFFFFF',
                tabBarInactiveTintColor: '#FFFFFF',
                tabBarLabelStyle: {
                    fontFamily: 'lexend-light',
                    fontSize: 11,
                    marginBottom: 5,
                },
                tabBarStyle: {
                    backgroundColor: '#FD5900', // Color de fondo naranja
                    height: 60, // Altura aumentada
                    borderTopWidth: 0, // Oculta el borde superior
                    display: 'flex',
                },
                tabBarIconStyle: {
                    marginTop: 5, // Ajusta la distancia entre el borde superior de los íconos y el fin de la barra de menú
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconComponent;

                    // if (focused) {
                    //     color = '#000000'; // Cambiar el color del ícono si la pestaña está activa
                    // }

                    return iconComponent;
                },
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({ color, size }) => (
                        <HomeIcon width={tamano} height={tamano} style={{color: color, width: size, height: size}} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen 
                name="Directorio" 
                component={DirectoryScreen} 
                options={{
                    tabBarLabel: 'Directorio',
                    tabBarIcon: ({ color, size }) => (
                        <DirectoryIcon width={tamano} height={tamano} style={{color: color, width: size, height: size}} />
                    )
                }}
            />
            <Tab.Screen 
                name="Mapa" 
                component={MapScreen} 
                options={{
                    tabBarLabel: 'Mapa',
                    tabBarIcon: ({ color, size }) => (
                        <MapIcon width={tamano} height={tamano} style={{color: color, width: size, height: size}} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen 
                name="Comida" 
                component={CuckooStack} 
                options={{
                    tabBarLabel: 'Comida',
                    tabBarIcon: ({ color, size }) => (
                        <FoodIcon width={tamano} height={tamano} style={{color: color, width: size, height: size}} />
                    ),
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
                    tabBarIcon: ({ color, size }) => (
                        <EventsIcon width={tamano} height={tamano} style={{color: color, width: size, height: size}} />
                    ),
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
