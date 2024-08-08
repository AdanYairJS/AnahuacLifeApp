import React, {useContext} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import themeContext from '../../theme/themeContext';

const EventCard = ({ name, date, score, images }) => {
  const navigation = useNavigation();
  const theme = useContext(themeContext);

  const styles = StyleSheet.create({
    cardContainer: {
      backgroundColor: theme.backgroundCard,
      borderRadius: 10,
      marginRight: 5,
      marginBottom: 10,
      marginLeft: 12,
      padding: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 4,
      width: 250,
      height: 200,
      justifyContent: 'space-between',
    },
    textContainer: {
      margin: 12,
    },
    activityName: {
      color: theme.color,
      fontSize: 16,
      fontFamily: 'lexend-medium',
      marginBottom: 5,
    },
    activityDate: {
      color: theme.color,
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

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate("DetallesEvento")}>
      <View style={styles.textContainer}>
        <Text style={styles.activityName}>{name}</Text>
        <Text style={styles.activityDate}>{date}</Text>
        <Text style={styles.activityScore}>Puntos Nova: {score}</Text>
      </View>
      <View style={styles.imageContainer}>
          {images.map((image, index) => (
           <Image key={index} source={image} style={styles.image}/>
          ))}
      </View>
    </TouchableOpacity>
  );
};

  export default EventCard;
