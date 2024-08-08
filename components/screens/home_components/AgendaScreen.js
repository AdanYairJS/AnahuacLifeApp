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
    { id: '1', label: 'Opción 1' },
    { id: '2', label: 'Opción 2' },
    { id: '3', label: 'Opción 3' },
    {id: '4', label: 'Opción 4'},
  ];

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
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    cardContainer:{
      margin: 15,
      marginBottom: 60,
      borderRadius: 10,
      backgroundColor: '#fff',
      elevation: 4,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    fila:{
      flexDirection: 'row',
      display: 'flex',
      justifyContent: 'flex-start',
      paddingVertical: 10,
      paddingHorizontal: '5%',
      width: '95%',
      marginVertical: 5,
      borderWidth: 2,
      borderColor: 'green',
    },
    boton:{
      backgroundColor: 'blue',
    },
    evento:{
      backgroundColor: 'red',
      width: '95%'
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
          />
          <Text style={styles.titulo}>INFORMACIÓN DEL MES</Text>
          <View style={styles.cardContainer}>
          {data.map(item => (
            <View key={item.id} style={styles.itemContainer}>
              <View style={styles.fila}>
                <View style={styles.boton}>
                  <RadioButton
                  value={item.id}
                  status={selectedValue === item.id ? 'checked' : 'unchecked'}
                  onPress={() => setSelectedValue(item.id)}
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

