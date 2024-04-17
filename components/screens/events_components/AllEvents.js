import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import AllCards from './AllCards';

const AllEvents = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Estado para mantener el índice del botón activo

  const handleCategoryPress = (index) => {
    setActiveIndex(index);
  //Pendiente cambiar la categoría activa
  };

  const events = [
        {
          name: 'Nombre de evento uno',
          date: '12 de marzo, 2024',
          score: 50,
          images: [require('../../../images/eventos/grupos/vertice.png'), require('../../../images/eventos/grupos/asua.png')],
          type: 'Deportes',
        },
        {
          name: 'Nombre de evento dos',
          date: '20 de abril, 2024',
          score: 'No aplica',
          images: [require('../../../images/eventos/grupos/accion.png')],
          type: 'Deportes',
        },
        {
            name: 'Nombre de evento tres',
            date: '12 de marzo, 2024',
            score: 100,
            images: [require('../../../images/eventos/grupos/vertice.png'), require('../../../images/eventos/grupos/leones.png')],
            type: 'Deportes',
        },
        {
            name: 'Nombre de evento uno',
            date: '12 de marzo, 2024',
            score: 50,
            images: [require('../../../images/eventos/grupos/vertice.png'), require('../../../images/eventos/grupos/asua.png')],
            type: 'Religión',
          },
          {
            name: 'Nombre de evento dos',
            date: '20 de abril, 2024',
            score: 'No aplica',
            images: [require('../../../images/eventos/grupos/accion.png')],
            type: 'Religión',
          },
          {
              name: 'Nombre de evento tres',
              date: '12 de marzo, 2024',
              score: 100,
              images: [require('../../../images/eventos/grupos/vertice.png'), require('../../../images/eventos/grupos/leones.png')],
              type: 'Cultura',
          },
          {
            name: 'Nombre de evento uno',
            date: '12 de marzo, 2024',
            score: 50,
            images: [require('../../../images/eventos/grupos/vertice.png'), require('../../../images/eventos/grupos/asua.png')],
            type: 'Cultura',
          },
          {
            name: 'Nombre de evento dos',
            date: '20 de abril, 2024',
            score: 'No aplica',
            images: [require('../../../images/eventos/grupos/accion.png')],
            type: 'Religión',
          },
          {
              name: 'Nombre de evento tres',
              date: '12 de marzo, 2024',
              score: 100,
              images: [require('../../../images/eventos/grupos/vertice.png'), require('../../../images/eventos/grupos/leones.png')],
              type: 'Religión',
          }
      ];

  const categories = ['Todos', 'Deportes', 'Cultura', 'Religión', 'Puntos nova'];

  return (
    <ScrollView style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingVertical: 5}}>
      {categories.map((category, index) => (
        <TouchableOpacity 
          key={index}
          style={[styles.filterButton, index === activeIndex && { backgroundColor: '#FD5900' , opacity: 1,}]}
          onPress={() => handleCategoryPress(index)}
        >
          <Text style={styles.filterButtonText}>{category}</Text>
        </TouchableOpacity>
      ))}
      </ScrollView>
      <View style={styles.eventsContainer}>
      {events.reduce((rows, key, index) => (index % 2 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []).map((row, rowIndex) => (
        <View key={rowIndex} style={styles.eventRow}>
          {/* Mapear cada par de eventos */}
          {row.map((item, index) => (
            <View key={index} style={styles.eventColumn}>
              <AllCards {...item} />
            </View>
          ))}
        </View>
      ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 95,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B5B7BB',
    opacity: 0.7,
    paddingLeft: 15,
    paddingRight: 10,
    paddingVertical: 5,
    marginHorizontal: 5,
    marginVertical: 15,
    borderRadius: 20,
    alignContent: 'center',
  },
  filterButtonText: {
    color: 'white',
    fontFamily: 'lexend-regular',
    marginRight: 5,
    alignSelf: 'center',
  },
  eventsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 100,
  },
  eventRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '100%',
  },
  eventColumn: {
    flex: 1,
    marginRight: 5,
  },
});

export default AllEvents;

// return (
//   <View style={styles.container}>
//     <TouchableOpacity style={styles.filterButton} onPress={() => setModalVisible(true)}>
//       <Text style={styles.filterButtonText}>{selectedCategory}</Text>
//       <AntDesign name="down" size={16} color="white" />
//     </TouchableOpacity>
//     <FlatList
//       data={events}
//       numColumns={2}
//       contentContainerStyle={styles.eventsContainer}
//       renderItem={({ item }) => <AllCards {...item} />}
//       keyExtractor={(item, index) => index.toString()}
//     />
//     <Modal animationType="fade" transparent visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
//       <View style={styles.modalContainer}>
//         <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
//           <AntDesign name="close" size={24} color="white" />
//         </TouchableOpacity>
//         <FlatList
//           data={categories}
//           renderItem={({ item }) => (
//             <TouchableOpacity style={styles.categoryItem} onPress={() => handleCategorySelect(item)}>
//               <Text style={styles.categoryText}>{item}</Text>
//             </TouchableOpacity>
//           )}
//           keyExtractor={(item, index) => index.toString()}
//         />
//       </View>
//     </Modal>
//   </View>
// );