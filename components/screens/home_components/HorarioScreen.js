import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const HorarioScreen = () => {
  // Función para generar las horas del horario
  const generarHoras = () => {
    const horas = [];
    for (let i = 7; i <= 23; i++) {
      const hora = i < 10 ? `0${i}` : `${i}`;
      horas.push(<Text key={hora} style={styles.hora}>{hora}:00</Text>);
      horas.push(<Text key={`${hora}-30`} style={styles.hora}>{hora}:30</Text>);
    }
    return horas;
  };

  // Función para generar las celdas del horario
  const generarCeldas = () => {
    const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const celdas = diasSemana.map(dia => (
      <View key={dia} style={styles.columna}>
        <Text style={styles.dia}>{dia}</Text>
        <View style={styles.horario}>
          {generarHoras()}
        </View>
      </View>
    ));
    return celdas;
  };

  return (
    <View style={styles.container}>
      <View style={styles.horarioHeader}>
        <Text style={styles.dia}>Hora</Text>
        <View style={styles.diasHeader}>
          <Text style={styles.dia}>Lunes</Text>
          <Text style={styles.dia}>Martes</Text>
          <Text style={styles.dia}>Miércoles</Text>
          <Text style={styles.dia}>Jueves</Text>
          <Text style={styles.dia}>Viernes</Text>
          <Text style={styles.dia}>Sábado</Text>
        </View>
      </View>
      <View style={styles.horarioContainer}>
        {generarCeldas()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  horarioHeader: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  diasHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  columna: {
    flex: 1,
  },
  horario: {
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 5,
  },
  hora: {
    fontSize: 12,
    marginBottom: 5,
  },
  dia: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
});

export default HorarioScreen;
