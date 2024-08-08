import React, {useContext} from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import EventCard from './EventCard';
import themeContext from '../../theme/themeContext';

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

  const theme = useContext(themeContext);

  const styles = StyleSheet.create({
    contendor_scroll: {
      backgroundColor: theme.backgroundColor,
      //margin: 15,
      marginTop: 15,
      marginBottom: 15,
    }
  });

  return (
    <ScrollView horizontal style={styles.contendor_scroll} showsHorizontalScrollIndicator={false}>
      {events.map((event, index) => (        
          <EventCard key={index} {...event} />        
      ))}
    </ScrollView>
  );
};

export default EventSection;
