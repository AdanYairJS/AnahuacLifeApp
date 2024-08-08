import React, {useState} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, Modal, Pressable} from 'react-native';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import FillIcon from 'react-native-vector-icons/Ionicons';

const Class = ({ dia, hora, longitud, color, nombre, lugar, inicio, fin}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const anchoCelda = (Dimensions.get('window').width) / 7.4;
  const altoCelda = ((Dimensions.get('window').height) / 33) - 0.6;
  const columna = dia * anchoCelda;
  const fila = hora * altoCelda - 1.5;

  const styles = StyleSheet.create({
    cardContainer: {
      marginLeft: columna + 0.5,
      marginTop: fila + 5, //5 representa el padding del header
      width: anchoCelda - 1.5,
      height: (altoCelda * longitud),
      backgroundColor: color,
      borderRadius: 7,
      padding: 2,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 3,
      display: 'flex',
      justifyContent: 'space-between',
      position: 'absolute',
    },
    preferencesContainer: {
      width: '100%',
    },
    subcontainer: {
      width: '100%',
      //flexDirection: 'row',
      display: 'flex',
      justifyContent: 'flex-start',
      padding: 1,
      marginVertical: 5,
    },
    preferencia: {
      width: '80%',
      display: 'flex',
      textAlign: 'left',
      fontFamily: 'lexend-regular',
      fontSize: 10,
      color: '#ffffff',
      textAlignVertical: 'center',
    },
    flecha: {
      width: '15%',
      alignItems: 'center',
      justifyContent: 'right',
      marginRight: 10,
    },
    area: {
      height: '100%',
      width: '100%',
    },
    modalContent: {
      width: '85%',
      height: '40%',
      backgroundColor: '#ffffff',
      borderRadius: 10,
      marginRight: 15,
      //marginTop: 15,
      marginLeft: 15,
      padding: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 6,
      display: 'flex',
      //justifyContent: 'space-between',
      alignContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      marginTop: '30%',
    },
    buttonClose: {
      alignSelf: 'flex-end',
      alignContent: 'flex-end',
      alignItems: 'flex-end',
      margin: 6,
      //backgroundColor: 'red',
      height: '8%',
      width: '8%',
    },
    contenedor_texto: {
      width: '100%',
      paddingHorizontal: 15,
      flex: 1,
      //backgroundColor: 'green',
    },
    subcontenedor: {
      flexWrap: 'wrap',
      paddingVertical: 12,
      flexDirection: 'row',
      //backgroundColor: 'pink',
      alignContent: 'center',
      alignItems: 'center',
      //justifyContent: 'center',
    },
    categoria: {
      //height: '100%',
      fontFamily: 'lexend-bold',
      fontSize: 16,
    },
    texto: {
      fontFamily: 'lexend-regular',
      fontSize: 16,
    },
    mancha: {
      height: '90%',
      width: '8%',
      backgroundColor: 'blue',
      borderRadius: 100,
    },
    buttonFill: {
      alignSelf: 'flex-start',
      alignContent: 'flex-start',
      alignItems: 'flex-start',
      //margin: 6,
      marginTop: 5,
      //backgroundColor: 'red',
      height: '15%',
      width: '15%',
    },
  });

  return (
    <View style={styles.cardContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>

        <View style={styles.modalContent}>
          <TouchableOpacity
            style={[styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}>
            <CloseIcon name="closecircleo" size={24} color="#000"/>
          </TouchableOpacity>

          <View style={styles.contenedor_texto}>
            <View style={styles.subcontenedor}>
              <Text style={styles.categoria}>Actividad: </Text><Text style={styles.texto}>{nombre}</Text>
            </View>
            <View style={styles.subcontenedor}>
              <Text style={styles.categoria}>Inicio: </Text><Text style={styles.texto}>{inicio} hrs.</Text>
            </View>
            <View style={styles.subcontenedor}>
              <Text style={styles.categoria}>Fin: </Text><Text style={styles.texto}>{fin} hrs.</Text>
            </View>
            <View style={styles.subcontenedor}>
              <Text style={styles.categoria}>Lugar: </Text><Text style={styles.texto}>{lugar}</Text>
            </View>
            {/* <View style={styles.subcontenedor}>
              <Text style={styles.categoria}>Seleccionar color: </Text><TouchableOpacity style={styles.mancha}></TouchableOpacity>
            </View> */}
            <TouchableOpacity
            style={[styles.buttonFill]}>
              <FillIcon name="color-fill" size={40} color={color}/>
          </TouchableOpacity>
          </View>
        </View>

      </Modal>

      <TouchableOpacity 
      onPress={() => setModalVisible(true)}
      style={styles.area}>
        <View style={styles.preferencesContainer}>
          <View style={styles.subcontainer}>
            <Text style={styles.preferencia}>{nombre}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Class;
