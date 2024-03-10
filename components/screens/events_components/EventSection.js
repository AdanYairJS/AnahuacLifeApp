import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

const EventCard = ({ name, date, score, images }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.activityName}>{name}</Text>
        <Text style={styles.activityDate}>{date}</Text>
        <Text style={styles.activityScore}>Puntos Nova: {score}</Text>
      </View>
      <View style={styles.imageContainer}>
          {images.map((image, index) => (
            <Image key={index} source={image} style={styles.image} />
          ))}
      </View>
    </View>
  );
};

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
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
    marginLeft: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 250,
    height: 200,
    justifyContent: 'space-between',
  },
  textContainer: {
    margin: 12,
  },
  activityName: {
    fontSize: 16,
    fontFamily: 'lexend-medium',
    marginBottom: 5,
  },
  activityDate: {
    fontFamily: 'lexend-regular',
    fontSize: 14,
    marginBottom: 5,
  },
  activityScore: {
    fontFamily: 'lexend-light',
    fontSize: 14,
    color: 'gray',
  },
  imageContainer: {
    flexDirection: 'row',
    //justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  image: {
    width: 57,
    height: 57,
    resizeMode: 'contain',
    marginRight: 5,
    alignSelf: 'flex-end',
  },
  contendor_scroll: {
    margin: 15,
  }
});

export default EventSection;
