import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { HomeIcon, DirectoryIcon, MapIcon, FoodIcon, EventsIcon } from './CustomIcons';

//screens
import HomeScreen from './screens/HomeScreen';
import EventsScreen from './screens/EventsScreen';
import DirectoryScreen from './screens/DirectoryScreen';
import MapScreen from './screens/MapScreen';
import FoodScreen from './screens/FoodScreen';
import GroupsStackScreen from './screens/events_components/group_screens/GroupsStackScreen';
import CuckooScreen from "./screens/CuckooScreen";

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
                        <EventsIcon style={{color: color, width: size, height: size}} />
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

const Tab = createBottomTabNavigator();

function MyTabs() {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#FFFFFF',
                tabBarInactiveTintColor: '#FFFFFF',
                tabBarLabelStyle: {
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

                    if (focused) {
                        color = 'white'; // Cambiar el color del ícono si la pestaña está activa
                    }

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
                        <HomeIcon style={{color: color, width: size, height: size}} />
                    )
                }}
            />
            <Tab.Screen 
                name="Directorio" 
                component={DirectoryScreen} 
                options={{
                    tabBarLabel: 'Directorio',
                    tabBarIcon: ({ color, size }) => (
                        <DirectoryIcon style={{color: color, width: size, height: size}} />
                    )
                }}
            />
            <Tab.Screen 
                name="Mapa" 
                component={MapScreen} 
                options={{
                    tabBarLabel: 'Mapa',
                    tabBarIcon: ({ color, size }) => (
                        <MapIcon style={{color: color, width: size, height: size}} />
                    )
                }}
            />
            <Tab.Screen 
                name="Comida" 
                component={CuckooScreen} 
                options={{
                    tabBarLabel: 'Comida',
                    tabBarIcon: ({ color, size }) => (
                        <FoodIcon style={{color: color, width: size, height: size}} />
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
                        <EventsIcon style={{color: color, width: size, height: size}} />
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
