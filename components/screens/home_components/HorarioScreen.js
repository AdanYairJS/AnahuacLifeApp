import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, Dimensions, ScrollView, Text, StyleSheet, Image, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import HomeMenu from './HomeMenu';
import Class from './Class';

const anchoCelda = (Dimensions.get('window').width) / 7.4;
const altoCelda = (Dimensions.get('window').height) / 33;

function horaAMinutos(hora) {
  const [horas, minutos] = hora.split(':').map(Number);
  return horas * 60 + minutos;
}

function calcularMediasHoras(horaInicio, horaTermino) {
  const minutosInicio = horaAMinutos(horaInicio);
  const minutosTermino = horaAMinutos(horaTermino);
  const diferenciaMinutos = Math.abs(minutosTermino - minutosInicio);
  const mediasHoras = Math.ceil(diferenciaMinutos / 30);
  return mediasHoras;
}

const actividades = [
  {
    name: 'Electricidad y Magnetismo',
    place: 'A21',
    start: '10:30',
    end: '12:00',
    color: '#9169DC',
    days: [1, 3]
  },
  {
    name: 'Electricidad y Magnetismo',
    place: 'A21',
    start: '12:00',
    end: '13:30',
    color: '#9169DC',
    days: [5]
  },
  {
    name: 'Redes Avanzadas',
    place: 'CISCO',
    start: '12:00',
    end: '13:30',
    color: '#3B4FE6',
    days: [1] 
  },
  {
    name: 'Redes Avanzadas',
    place: 'CISCO',
    start: '10:30',
    end: '13:30',
    color: '#3B4FE6',
    days: [2] 
  },
  {
    name: 'Sistemas Operativos',
    place: 'Online',
    start: '15:00',
    end: '18:00',
    color: '#46C63D',
    days: [1] 
  },
  {
    name: 'Sistemas Operativos',
    place: 'Online',
    start: '15:00',
    end: '16:30',
    color: '#46C63D',
    days: [2] 
  },
  {
    name: 'Ecuaciones Diferenciales',
    place: 'C27',
    start: '09:00',
    end: '10:30',
    color: '#FFBB40',
    days: [2,3] 
  },
  {
    name: 'Ecuaciones Diferenciales',
    place: 'C27',
    start: '12:00',
    end: '13:30',
    color: '#FFBB40',
    days: [4] 
  },
  {
    name: 'Algoritmos de Optimización',
    place: 'C12',
    start: '16:30',
    end: '18:00',
    color: '#DB1E72',
    days: [3] 
  },
  {
    name: 'Algoritmos de Optimización',
    place: 'C12',
    start: '15:00',
    end: '18:00',
    color: '#DB1E72',
    days: [5] 
  },
  {
    name: 'Ingeniería de Software',
    place: 'CISCO',
    start: '18:00',
    end: '21:00',
    color: '#67D2DC',
    days: [3] 
  },
  {
    name: 'Bases de Datos Avanzadas',
    place: 'CISCO',
    start: '18:00',
    end: '21:00',
    color: '#DC68B1',
    days: [4] 
  },
];

const HorarioScreen = () => {
  const navigation = useNavigation();

  const horas = [];
  for (let hora = 7; hora <= 21; hora++) {
    for (let minuto of ['00', '30']) {
      horas.push(`${hora.toString().padStart(2, '0')}:${minuto}`);
    }
  }

  const dias = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sab'];

  const renderedClasses = [];
  for (let actividad of actividades) {
    for (let dia of actividad.days) {
      renderedClasses.push(
        <Class key={`${actividad.name}-${dia}`} dia={dia} hora={calcularMediasHoras('07:00', actividad.start)+1} 
        longitud={calcularMediasHoras(actividad.start, actividad.end)} color={actividad.color} 
        nombre={actividad.name} lugar={actividad.place} inicio={actividad.start} fin={actividad.end}/>
      );
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <HomeMenu />

      <ScrollView style={styles.horario}>
        <View style={styles.headerRow}>
          <View style={styles.headerCell}></View>
          {dias.map((dia, index) => (
            <Text key={index} style={styles.headerCell}>{dia}</Text>
          ))}
        </View>
        {horas.map((hora, index) => (
          <View key={index} style={styles.Row}>
            <Text style={styles.Cell}>{hora}</Text>
            {dias.map((dia, index) => (
              <View key={index} style={styles.Cell}></View>
            ))}
          </View>
        ))}
        {renderedClasses}
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingTop: 60 + Constants.statusBarHeight,
  },
  horario: {
    paddingTop: 10,
    alignSelf: 'center',
    height: '100%',
  },
  headerRow: {
    flexDirection: 'row',
    width: anchoCelda * 7,
    borderColor: 'gray',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  headerCell: {
    fontFamily: 'lexend-bold',
    fontSize: 15,
    width: anchoCelda,
    textAlign: 'center',
    height: '100%',
    borderBottomWidth: 1,
  },
  Row: {
    flexDirection: 'row',
    width: anchoCelda * 7,
    height: 25,
    borderColor: 'gray',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  Cell: {
    fontFamily: 'lexend-light',
    fontSize: 11,
    width: anchoCelda,
    textAlign: 'center',
    textAlignVertical: 'center',
    height: altoCelda,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'gray',
    opacity: 0.6,
  },
  CellActive: {
    width: anchoCelda,
    textAlign: 'center',
    height: altoCelda,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'orange',
    backgroundColor: 'orange',
  },
});

export default HorarioScreen;