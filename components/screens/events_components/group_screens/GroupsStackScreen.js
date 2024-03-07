// import React from "react";
// import { StyleSheet, Text, View } from 'react-native';

// const GroupsStackScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.texto}>FFFFFFFFFFFFFFFUCK VERTICE</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   texto: {
//     fontSize: 30,
//     textAlign: "center",
//     marginTop: "20%"
//   },
// });

// export default GroupsStackScreen;

import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';

const GroupsStackScreen = () => {
  const eventos = [
    {
      imagen: require('../../../../images/eventos/evento1.png'),
      fecha: 'Sábado 10 de Abril, 2024',
      correo: 'contacto@vertice.com',
      linkRegistro: 'https://www.ejemplolinkregistro.com/evento1'
    },
    {
      imagen: require('../../../../images/eventos/evento2.png'),
      fecha: 'Viernes 16 de Abril, 2024',
      correo: 'contacto@vertice.com',
      linkRegistro: 'https://www.ejemplolinkregistro.com/evento2'
    },
    // Agrega más eventos según sea necesario
  ];

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {/* Información General */}
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Vértice</Text>
        <Text style={{ fontSize: 16, marginBottom: 10 }}>
          Vértice Anáhuac es un Programa de Excelencia y Desarrollo Humano enfocado en la formación integral de alumnos destacados en su carrera y con alto potencial de liderazgo. En Vértice, buscamos potenciar las habilidades de liderazgo y desarrollo humano en estudiantes sobresalientes, ofreciéndoles una experiencia única de formación integral.
        </Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/vertice')}>
          <Image source={require('../../../../images/eventos/grupos/vertice.png')} style={{ width: 100, height: 100 }} />
        </TouchableOpacity>
      </View>

      {/* Próximos Eventos */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Próximos Eventos</Text>
      {eventos.map((evento, index) => (
        <View key={index} style={{ marginBottom: 20 }}>
          <Image source={evento.imagen} style={{ width: '100%', height: 200, marginBottom: 10 }} />
          <Text style={{ fontSize: 16, marginBottom: 5 }}>{evento.fecha}</Text>
          <Text style={{ marginBottom: 5 }}>Contacto: {evento.correo}</Text>
          <TouchableOpacity onPress={() => Linking.openURL(evento.linkRegistro)}>
            <Text style={{ color: 'blue' }}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default GroupsStackScreen;
