import React,{createContext, useContext, useState} from 'react';
import { View, TouchableOpacity, Dimensions, ScrollView, Text, StyleSheet, Image, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import themeContext from '../../theme/themeContext';
import { RadioButton } from 'react-native-paper';

LocaleConfig.locales['mx'] = {
  monthNames: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ],
  monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
  dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
  today: "Hoy"
};
LocaleConfig.defaultLocale = 'mx';

const anchoVentana = Dimensions.get('window').width;

const AgendaScreen = () => {
  const navigation = useNavigation();
  const theme = useContext(themeContext);

  const [selectedValue, setSelectedValue] = useState(null);

  const data = [
    { id: '1', color: '#053A8A', label: 'Selección de cursos' },
    { id: '2', color: '#FF9D0A', label: 'Bienvenida Integral Universitaria BIU' },
    { id: '3', color: '#00A7CC', label: 'Selección de cursos nuevo ingreso' },
    { id: '4', color: '#01DFAF', label: 'Inicio del periodo académica agosto diciembre'},
    { id: '5', color: '#F40162', label: 'Inicio del primer periodo bimestral de idiomas' },
    { id: '6', color: '#016CDF', label: 'Periodo de altas y bajas de materias' },
    { id: '7', color: '#E60BFE', label: 'Limite solicitud examen de suficiencia' },
    { id: '8', color: '#71FEF5', label: 'Pago primera colegiatura'},
    { id: '9', color: '#6D02CA', label: 'Pago 1: primer periodo bimestral de lenguas'},
  ];

  const data1 = {key: '1', color: '#053A8A'};
  const data2 = {key: '2', color: '#FF9D0A'};
  const data3 = {key: '3', color: '#00A7CC'};
  const data4 = {key: '4', color: '#01DFAF'};
  const data5 = {key: '5', color: '#F40162'};
  const data6 = {key: '6', color: '#016CDF'};
  const data7 = {key: '7', color: '#E60BFE'};
  const data8 = {key: '8', color: '#71FEF5'};
  const data9 = {key: '9', color: '#6D02CA'};

  // const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
  // const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
  // const workout = {key: 'workout', color: 'green'};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
      paddingTop: 10 + Constants.statusBarHeight,
    },
    menu: {
      paddingTop: Constants.statusBarHeight,
      height: 60 + Constants.statusBarHeight,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.backgroundCard, // Fondo blanco
      // paddingVertical: 10,
      // paddingHorizontal: 20,
      shadowColor: '#000', // Color de la sombra
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5, // Elevación para Android
      position: 'absolute', // Posición absoluta para mantener fijo
      top: 0, // Coloca el encabezado en la parte superior
      left: 0,
      right: 0,
      zIndex: 1,
    },
    tab:{
      width: anchoVentana/3,
      height: '100%',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    tab_name_active: {
      marginBottom: 12,
      textAlign: 'center',
      fontFamily: 'lexend-regular',
      color: '#FD5900',
      fontSize: 17,
    },
    tab_name: {
      marginBottom: 15,
      textAlign: 'center',
      fontFamily: 'lexend-regular',
      color: 'gray',
      fontSize: 17,
    },
    line: {
      height: 3,
      width: '100%',
      backgroundColor: '#FD5900',
      borderRadius: 5,
    },
    contenedor_titulo: {
      marginTop: 30,
      alignItems: 'center',
      margin: 15,
      marginBottom: 30,
    },
    titulo: {
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'center',
        fontFamily: 'lexend-extrabold',
        fontSize: 20,
        color: '#FD5900',
    },
    calendario: {
      elevation: 4,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      margin: 15,
      borderRadius: 10,
      padding: 5,
    },
    cardContainer:{
      paddingVertical: 25,
      margin: 15,
      marginBottom: 60,
      borderRadius: 10,
      backgroundColor: theme.backgroundCard,
      elevation: 4,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 25,
      paddingVertical: 10,
      //borderBottomWidth: 1,
      //borderBottomColor: '#ccc',
    },
    fila:{
      flexDirection: 'row',
      display: 'flex',
      justifyContent: 'flex-start',
      //paddingVertical: 10,
      //paddingHorizontal: 1,
      width: '85%',
      marginVertical: 5,
      //borderWidth: 2,
      //borderColor: 'green',
      alignItems: 'center',
    },
    boton:{
      //backgroundColor: 'blue',
    },
    evento:{
      //backgroundColor: 'red',
      color: theme.color,
      marginLeft: 20,
      width: '89%',
      fontFamily: 'lexend-light',
      fontSize: 16,
    },
  });  

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" /> 
      <View style={styles.menu}>
        <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate("HomeScreen")}> 
          <Text style={styles.tab_name}> Perfil</Text>      
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate("Horario")}> 
          <Text style={styles.tab_name}> Horario</Text>
        </TouchableOpacity>
        <View style={styles.tab}> 
          <Text style={styles.tab_name_active}> Agenda</Text>
          <View style={styles.line} />
        </View>
      </View>

      <ScrollView style={styles.container}>    
          <Text style={styles.titulo}>CALENDARIO ACADÉMICO</Text>
          <Calendar style={styles.calendario}
            minDate={"2024-07-01"}
            maxDate={"2025-01-31"}
            theme={{
              calendarBackground: theme.backgroundCard,
              todayTextColor: '#FD5900',
              //arrowColor: '#FD5900',
              monthTextColor: '#FD5900',
              dayTextColor: theme.color,
              //textDisabledColor: 'gray',
              textMonthFontSize: 20,
              textDayFontFamily: 'lexend-light',
              textMonthFontFamily: 'lexend-bold',
              textDayHeaderFontFamily: 'lexend-light',
            }}
            renderArrow={direction => <ArrowIcon name={direction} size={19} color="#FD5900"/>}
            enableSwipeMonths={true}
            /*markingType={'multi-dot'}
            markedDates={{
              // '2024-08-25': {dots: [vacation, massage, workout], selected: true, selectedColor: 'red'},
              // '2024-08-26': {dots: [massage, workout]}
              '2024-08-01': {dots: [data1]},
              '2024-08-02': {dots: [data1,data2]},
              '2024-08-03': {dots: [data1,data2,data3]},
              '2024-08-04': {dots: [data1,data2,data3]},
              '2024-08-05': {dots: [data1]},
              '2024-08-06': {dots: [data1]},
              '2024-08-07': {dots: [data1]},
              '2024-08-08': {dots: [data1]},
              '2024-08-09': {dots: [data1]},
              '2024-08-10': {dots: [data1]},
              '2024-08-11': {dots: [data1]},
              '2024-08-12': {dots: [data4,data5,data6]},
              '2024-08-13': {dots: [data6]},
              '2024-08-14': {dots: [data6]},
              '2024-08-15': {dots: [data6]},
              '2024-08-16': {dots: [data6]},
              '2024-08-23': {dots: [data7]},
              '2024-08-29': {dots: [data8,data9]},
            }}*/
            markingType="multi-period"
            markedDates={{
              '2024-08-01':{
                periods: [
                  {startingDay: true, endingDay: true, color: data1.color},
                ]
              },
              '2024-08-02':{
                periods: [
                  {startingDay: true, endingDay: true, color: data1.color},
                ]
              },
              '2024-08-03':{
                periods: [
                  {startingDay: true, endingDay: true, color: data1.color},
                ]
              },
              '2024-08-04':{
                periods: [
                  {startingDay: true, endingDay: true, color: data1.color},
                ]
              },
              '2024-08-05':{
                periods: [
                  {startingDay: true, endingDay: true, color: data1.color},
                ]
              },
              '2024-08-06':{
                periods: [
                  {startingDay: true, endingDay: true, color: data1.color},
                ]
              },
              '2024-08-07':{
                periods: [
                  {startingDay: true, endingDay: true, color: data1.color},
                  {startingDay: true, endingDay: true, color: data2.color},
                ]
              },
              '2024-08-08':{
                periods: [
                  {startingDay: true, endingDay: true, color: data1.color},
                  {startingDay: true, endingDay: true, color: data2.color},
                  {startingDay: true, endingDay: true, color: data3.color},
                ]
              },
              '2024-08-09':{
                periods: [
                  {startingDay: true, endingDay: true, color: data1.color},
                  {startingDay: true, endingDay: true, color: data2.color},
                  {startingDay: true, endingDay: true, color: data3.color},
                ]
              },
              '2024-08-10':{
                periods: [
                  {startingDay: true, endingDay: true, color: data1.color},
                ]
              },
              '2024-08-11':{
                periods: [
                  {startingDay: true, endingDay: true, color: data1.color},
                ]
              },
              '2024-08-12':{
                periods: [
                  {startingDay: true, endingDay: true, color: data6.color},
                  {startingDay: true, endingDay: true, color: data4.color},
                  {startingDay: true, endingDay: true, color: data5.color},
                ]
              },
              '2024-08-13':{
                periods: [
                  {startingDay: true, endingDay: true, color: data6.color},
                ]
              },
              '2024-08-14':{
                periods: [
                  {startingDay: true, endingDay: true, color: data6.color},
                ]
              },
              '2024-08-15':{
                periods: [
                  {startingDay: true, endingDay: true, color: data6.color},
                ]
              },
              '2024-08-16':{
                periods: [
                  {startingDay: true, endingDay: true, color: data6.color},
                ]
              },
              '2024-08-23':{
                periods: [
                  {startingDay: true, endingDay: true, color: data7.color},
                ]
              },
              '2024-08-29':{
                periods: [
                  {startingDay: true, endingDay: true, color: data8.color},
                  {startingDay: true, endingDay: true, color: data9.color},
                ]
              }
            }}
          />
          <Text style={styles.titulo}>INFORMACIÓN DEL MES</Text>
          <View style={styles.cardContainer}>
          {data.map(item => (
            <View key={item.id} style={styles.itemContainer}>
              <View style={styles.fila}>
                <View style={styles.boton}>
                  <RadioButton
                  value={item.id}
                  status={selectedValue === item.id ? 'checked' : 'checked'}
                  onPress={() => setSelectedValue(item.id)}
                  color = {item.color}
                  />
                </View>
                <Text style={styles.evento}>{item.label}</Text>
              </View>
            </View>
          ))}
          </View>
      </ScrollView>
    </View>
  );
};

export default AgendaScreen;

