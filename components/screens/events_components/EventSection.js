import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import EventCard from './EventCard';

const EventSection = () => {
  const events = [
    {
      name: 'Nombre de evento uno',
      date: '12 de marzo, 2024',
      score: 50,
      images: [require('../../../images/eventos/grupos/vertice.png'), require('../../../images/eventos/grupos/asua.png')],
    },
    {
      name: 'Nombre de evento dos',
      date: '20 de abril, 2024',
      score: 'No aplica',
      images: [require('../../../images/eventos/grupos/accion.png')],
    },
    {
        name: 'Nombre de evento tres',
        date: '12 de marzo, 2024',
        score: 100,
        images: [require('../../../images/eventos/grupos/vertice.png'), require('../../../images/eventos/grupos/leones.png')],
    }
  ];

  return (
    <ScrollView horizontal style={styles.contendor_scroll} showsHorizontalScrollIndicator={false}>
      {events.map((event, index) => (        
          <EventCard key={index} {...event} />        
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contendor_scroll: {
    //margin: 15,
    marginTop: 15,
    marginBottom: 15,
  }
});

export default EventSection;
