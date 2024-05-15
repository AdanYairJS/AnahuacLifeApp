import React from "react";
import { Animated, Easing, Platform } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

//screens
import HomeScreen from './screens/HomeScreen';
import EventsScreen from './screens/EventsScreen';
import DirectoryScreen from './screens/DirectoryScreen';
import DirectoryWorkers from "./screens/directory_components/DirectoryWorkers.js";
import CopiaMapScreen from './screens/CopiaMapScreen';
import MapScreen from './screens/MapScreen';
import CuckooScreen from "./screens/CuckooScreen";
import DelyFullScreen from "./screens/DelyFullScreen.js";

//subscreens
import GroupsStackScreen from './screens/events_components/GroupsStackScreen';
import DetailedEvent from './screens/events_components/DetailedEvent.js';
import CuckooItem from "./screens/cuckoo_components/CuckooItem";
import HorarioScreen from "./screens/home_components/HorarioScreen.js";
import AgendaScreen from "./screens/home_components/AgendaScreen.js";
import ActivityScreen from "./screens/home_components/preferences/ActivityScreen.js";
import HelpScreen from "./screens/home_components/preferences/HelpScreen.js";
import DarkModeScreen from "./screens/home_components/preferences/DarkModeScreen.js";
import NotificationScreen from "./screens/home_components/preferences/NotificationsScreen.js";
import AllEvents from "./screens/events_components/AllEvents.js";
import DelyFullItem from "./screens/delyfull_components/DelyFullItem.js";

//íconos
import HomeIcon from '../images/icons/home_icon.svg';
import DirectoryIcon from '../images/icons/directorio_icon.svg';
import MapIcon from '../images/icons/mapa_icon.svg';
import FoodIcon from '../images/icons/comida_icon.svg';
import EventsIcon from '../images/icons/eventos_icon.svg';
import HomeIconActive from '../images/icons/home_icon_activo.svg';
import DirectoryIconActive from '../images/icons/directorio_icon_activo.svg';
import MapIconActive from '../images/icons/mapa_icon_activo.svg';
import FoodIconActive from '../images/icons/comida_icon_activo.svg';
import EventsIconActive from '../images/icons/eventos_icon_activo.svg';

//headers
import Header from "./general_components/Header.js";
import HeaderPrincipal from "./general_components/HeaderPrincipal.js";
import CuckooHeader from "./screens/cuckoo_components/CuckooHeader";
import DelyFullHeader from "./screens/delyfull_components/DelyFullHeader";

import utf8 from 'utf8';

const Tab = createBottomTabNavigator();
const EventsStackNavigator = createNativeStackNavigator();
const CuckooStackNavigator = createNativeStackNavigator();
const HomeStackNavigator = createNativeStackNavigator();

function HomeStack() {
    return (
        <EventsStackNavigator.Navigator initialRouteName="EventosScreen">
            <EventsStackNavigator.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({ color, size }) => (
                        <HomeIcon width={size} height={size} style={{ tintColor: color }} />
                    ),
                    headerShown: false,
                    animationTypeForReplace:'pop',
                    animation: 'fade',
                }}
            />
            <HomeStackNavigator.Screen
                name="Horario"
                component={HorarioScreen}
                options={{
                    headerBackTitle: false,
                    headerShown: false,
                    animationTypeForReplace:'pop',
                    animation: 'fade',
                }}
            />
            <HomeStackNavigator.Screen
                name="Agenda"
                component={AgendaScreen}
                options={{
                    headerBackTitle: false,
                    headerShown: false,
                    animationTypeForReplace:'pop',
                    animation: 'fade',
                }}
            />
            <HomeStackNavigator.Screen
                name="Actividad"
                component={ActivityScreen}
                options={{       
                    animation: 'slide_from_right',
                    header: ({route}) => <Header text={route.params.texto}/>
                }}
            />
            <HomeStackNavigator.Screen
                name="Notificaciones"
                component={NotificationScreen}
                options={{
                    animation: 'slide_from_right',
                    header: ({route}) => <Header text={route.params.texto}/>
                }}
            />
            <HomeStackNavigator.Screen
                name="ModoOscuro"
                component={DarkModeScreen}
                options={{
                    animation: 'slide_from_right',
                    header: ({route}) => <Header text={route.params.texto}/>
                }}
            />
            <HomeStackNavigator.Screen
                name="Ayuda"
                component={HelpScreen}
                options={{
                    animation: 'slide_from_right',
                    header: ({route}) => <Header text={route.params.texto}/>
                }}
            />
        </EventsStackNavigator.Navigator>
    );
}

const DirectoryStackNavigator = createNativeStackNavigator();

function DirectoryStack() {
    return(
        <DirectoryStackNavigator.Navigator
        initialRouteName="DirectoryScreen"
        >
            <DirectoryStackNavigator.Screen
                name="DirectoryScreen"
                component={DirectoryScreen}
                options={{
                    // headerShown: false,
                    title: 'Directorio',
                    //quitar esta parte
                    header: () => <HeaderPrincipal text='Directorio'/>,
                    
                    // headerTitleStyle: {
                    //     fontFamily: 'lexend-medium',
                    //     fontSize: 30,
                    //     headerTitleAlign: 'center',
                    //     // alignSelf: 'center',
                    // }
                }}
            >
            </DirectoryStackNavigator.Screen>
            <DirectoryStackNavigator.Screen
                name="DirectoryWorkers"
                component={DirectoryWorkers}
                options={{
                    // headerShown: false,
                    header: ({route}) => <Header text={utf8.decode(route.params.nombre)}/>
                }}
            >
            </DirectoryStackNavigator.Screen>
        </DirectoryStackNavigator.Navigator>
    )
}

function EventosStack() {
    return (
        <EventsStackNavigator.Navigator initialRouteName="EventosScreen">
            <EventsStackNavigator.Screen
                name="EventosScreen"
                component={EventsScreen}
                options={{
                    tabBarLabel: 'Eventos',
                    tabBarIcon: ({ color, size }) => (
                        <EventsIcon width={size} height={size} style={{ tintColor: color }} />
                        ),
                        headerShown: false
                    }}
            />
            <EventsStackNavigator.Screen
                name="Vertice"
                component={GroupsStackScreen}
                options={{
                    //animationTypeForReplace:'pop',
                    animation: 'slide_from_right',
                    transitionSpec: {
                        open: { animation: 'timing', config: { duration: 500 } }, // Duración para la entrada
                        close: { animation: 'timing', config: { duration: 500 } }, // Duración para la salida
                    },
                    header: ({route}) => <Header text={route.params.texto} imagen={route.params.imagen}/>,
                    
                }}
            />
            <EventsStackNavigator.Screen
                name="DetallesEvento"
                component={DetailedEvent}
                options={{
                    animation: 'slide_from_right',
                    transitionSpec: {
                        open: { animation: 'timing', config: { duration: 20 } }, // Duración para la entrada
                        close: { animation: 'timing', config: { duration: 20 } }, // Duración para la salida
                    },
                    header: ({route}) => <Header text="Detalles del evento"/>,
                }}
            />
            <EventsStackNavigator.Screen
                name="TodosEventos"
                component={AllEvents}
                options={{
                    animation: 'slide_from_right',
                    transitionSpec: {
                        open: { animation: 'timing', config: { duration: 20 } }, // Duración para la entrada
                        close: { animation: 'timing', config: { duration: 20 } }, // Duración para la salida
                    },
                    header: ({route}) => <Header text="Todos los eventos"/>,
                }}
            />
        </EventsStackNavigator.Navigator>
    );
}

function CuckooStack() {
    return (
        <CuckooStackNavigator.Navigator initialRouteName="CuckooScreen">
            <CuckooStackNavigator.Screen
                name="CuckooScreen"
                component={CuckooScreen}
                initialParams={{ color_1: '#13aed1', color_2: '#014955' }}
                options={{
                    header: () => <CuckooHeader ruta_imagen={require('../images/cuckoo/logo.png')} color_fondo='#014955' />
                }}
            />
            <CuckooStackNavigator.Screen
                name="CuckooItem"
                component={CuckooItem}
                initialParams={{ color_1: '#13aed1', color_2: '#014955' }}
                options={{
                    header: () => <CuckooHeader ruta_imagen={require('../images/cuckoo/logo.png')} color_fondo='#014955' />
                }}
            />
            <CuckooStackNavigator.Screen
                name="DelyFullScreen"
                component={DelyFullScreen}
                initialParams={{ color_1: '#419A6E', color_2: '#014B3C' }}
                options={{
                    header: () => <DelyFullHeader ruta_imagen={require('../images/cuckoo/Logo Dely.png')} color_fondo='#014B3C' />
                }}
            />
            <CuckooStackNavigator.Screen
                name="DelyFullItem"
                component={DelyFullItem}
                initialParams={{ color_1: '#419A6E', color_2: '#014B3C' }}
                options={{
                    header: () => <DelyFullHeader ruta_imagen={require('../images/cuckoo/Logo Dely.png')} color_fondo='#014B3C' />
                }}
            />
        </CuckooStackNavigator.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: '#FD5900',
                    tabBarInactiveTintColor: '#B5B7BB',
                    tabBarAllowFontScaling: true,
                    tabBarLabelStyle: {
                        fontFamily: 'lexend-light',
                        fontSize: 10,
                        marginBottom: Platform.OS === 'ios' ? -8 : 10,
                        marginTop: Platform.OS === 'ios' ? 8 : 0,
                    },
                    // tabBarLabelStyle: ({ focused }) => ({
                        //     fontFamily: 'lexend-light',
                        //     fontSize: focused ? 14 : 11,
                        //     marginBottom: Platform.OS === 'ios' ? 0 : 5,
                        //     marginTop: Platform.OS === 'ios' ? 5 : 0,
                        // }),
                        tabBarStyle: {
                            backgroundColor: '#FFFFFF', // Color de fondo
                            height: Platform.OS === 'ios' ? 75 : 60, // Altura del menú
                            borderTopWidth: 0, //Borde superior
                            display: 'flex',
                            ...Platform.select({
                                ios: {
                                    shadowColor: 'black',
                                    shadowOffset: { width: 0, height: 3 },
                                    shadowOpacity: 0.1,
                                    shadowRadius: 4,
                                },
                                android: {
                                    elevation: 8,
                                },
                            }),
                        },
                        tabBarIconStyle: {
                            marginTop: Platform.OS === 'ios' ? 12 : 6, // Distancia entre los íconos y el  borde superior de la barra de menú
                            alignSelf: 'center',
                        },
                        tabBarIcon: ({ focused, color, size }) => {
                            const iconSize = 30;
                            const iconSizef = 34;
                            ;
                            let icon;
                            
                            switch (route.name) {
                                case 'Home':
                                    icon = focused ? <HomeIconActive width={iconSizef} height={iconSizef} style={{ tintColor: color }} /> : <HomeIcon width={iconSize} height={iconSize} style={{ tintColor: color }} />;
                                    break;
                                    case 'Directorio':
                                        icon = focused ? <DirectoryIconActive width={iconSizef} height={iconSizef} style={{ tintColor: color }} /> : <DirectoryIcon width={iconSize} height={iconSize} style={{ tintColor: color }} />;
                                        break;
                                        case 'Mapa':
                                            icon = focused ? <MapIconActive width={iconSizef} height={iconSizef} style={{ tintColor: color }} /> : <MapIcon width={iconSize} height={iconSize} style={{ tintColor: color }} />;
                                            break;
                                            case 'Comida':
                                                icon = focused ? <FoodIconActive width={iconSizef} height={iconSizef} style={{ tintColor: color }} /> : <FoodIcon width={iconSize} height={iconSize} style={{ tintColor: color }} />;
                                                break;
                                                case 'Eventos':
                                                    icon = focused ? <EventsIconActive width={iconSizef} height={iconSizef} style={{ tintColor: color }} /> : <EventsIcon width={iconSize} height={iconSize} style={{ tintColor: color }} />;
                                                    break;
                                                    default:
                                                        break;
                                                    }
                                                    
                                                    return icon;
                                                },
                                            })}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeStack}
                    options={{
                        tabBarLabel: 'Inicio',
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name="Directorio"
                    component={DirectoryStack}
                    options={{
                        tabBarLabel: 'Directorio',
                        headerShown: false,
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
                    component={EventosStack}
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
        </NavigationContainer>
    );
}
