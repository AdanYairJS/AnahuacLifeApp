import React from 'react';
import { Image } from 'react-native';
import homeIcon from '../images/icons/home_icon.png';
import directoryIcon from '../images/icons/directorio_icon.png';
import mapIcon from '../images/icons/mapa_icon.png';
import foodIcon from '../images/icons/comida_icon.png';
import eventsIcon from '../images/icons/eventos_icon.png';

var size = 35;

export const HomeIcon = () => <Image source={homeIcon} style={{ width: size, height: size }} />;
export const DirectoryIcon = () => <Image source={directoryIcon} style={{ width: size, height: size }} />;
export const MapIcon = () => <Image source={mapIcon} style={{ width: size, height: size }} />;
export const FoodIcon = () => <Image source={foodIcon} style={{ width: size, height: size }} />;
export const EventsIcon = () => <Image source={eventsIcon} style={{ width: size, height: size }} />;