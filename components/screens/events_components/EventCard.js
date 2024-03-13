import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EventCard = ({ name, date, score, images }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate("DetallesEvento")}>
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
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    cardContainer: {
      backgroundColor: '#ffffff',
      borderRadius: 10,
      marginRight: 10,
      marginBottom: 10,
      marginLeft: 10,
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
      //margin: 15,
      marginTop: 15,
      marginBottom: 15,
    }
  });

  export default EventCard;
