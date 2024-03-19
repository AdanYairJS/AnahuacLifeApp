import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HorarioScreen = () => {
  // Generar un arreglo de 17 elementos para representar las filas
  const rows = Array.from({ length: 17 }, (_, index) => index + 1);

  // Texto para las columnas
  const days = ['', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const currentMonthYear = "Marzo 2024"; // Texto para el mes y año actual

  return (
    <View style={styles.container}>
      {rows.map((row, rowIndex) => (
        <View key={row} style={styles.row}>
          {/* Generar una celda por cada columna */}
          {days.map((day, columnIndex) => (
            <View key={columnIndex} style={styles.cell}>
              {/* Agregar el texto en la primera fila y primera columna */}
              {rowIndex === 0 && columnIndex === 0 ? (
                <Text>{currentMonthYear}</Text>
              ) : (
                <Text>{row === 1 && columnIndex >= 1 && columnIndex <= 6 ? day : ''}</Text>
              )}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  cell: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HorarioScreen;

