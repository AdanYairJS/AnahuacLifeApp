import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, Animated, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import ExpandableContainerDirectorio from './directory_components/ExpandableContainerDirectorio';

const DirectoryScreen = () => {
  const [selectedTab, setSelectedTab] = useState('eventos'); // Estado para rastrear la pestaña actual
  const [selectedImage, setSelectedImage] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const menuAnimation = useRef(new Animated.Value(0)).current;
  const overlayAnimation = useRef(new Animated.Value(0)).current;

  const handleImagePress = (image) => {
    setSelectedImage(image);
  };

  const handleTabPress = (tab) => { // Función para cambiar la pestaña actual
    setSelectedTab(tab);
  };

  const toggleMenu = () => {
    const newValue = !showMenu;
    setShowMenu(newValue);
    Animated.timing(overlayAnimation, {
      toValue: newValue ? 1 : 0,
      duration: 250,
      useNativeDriver: false,
    }).start(() => {
      if (newValue) {
        Animated.timing(menuAnimation, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
        }).start();
      } else {
        Animated.timing(menuAnimation, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }).start(() => {
          setShowMenu(false);
        });
      }
    });
  };
  
  const closeMenu = () => {
    Animated.timing(overlayAnimation, {
      toValue: 0,
      duration: 250,
      useNativeDriver: false,
    }).start(() => {
      setShowMenu(false);
    });
    Animated.timing(menuAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const menuTranslateX = menuAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-300, 0],
  });

  const overlayOpacity = overlayAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.5],
  });

  return (
            <ScrollView>
              <ExpandableContainerDirectorio title="Operación Académica" subContainers={[
                { title: <Text style={styles.subtitle}>Roberto Geovanni Lopez Curiel</Text>, subContainers: [
                  <Text style={styles.subContainerText}>Solicitud de examen extraordinario</Text>,
                  <Text style={styles.subContainerText}>Exámenes de suficiencia académica</Text>,
                  <Text style={styles.subContainerText}>Solicitud de salones libres</Text>,
                  <Text style={styles.subContainerText}>Aplicación de examen EGEL-CENEVAL</Text>,
                  <View style={styles.subContainer}>
                  <Text style={styles.subContainerText}>Correo: geovanni.curiel@anahuac.mx</Text>
                  <Text style={styles.subContainerText}>Teléfono: --</Text>
                  <Text style={styles.subContainerText}>Ver en Mapa</Text>
                  </View>
                ] },
                { title: <Text style={styles.subtitle}>Dalia Alarcón Gonzalez</Text>, subContainers: [
                  <Text style={styles.subContainerText}>Corrección de calificaciones</Text>,
                  <Text style={styles.subContainerText}>Solicitud de espacios para carga de materias</Text>,
                  <Text style={styles.subContainerText}>Carga de materias RUA</Text>,
                  <Text style={styles.subContainerText}>Carga de MINORS</Text>,
                ] }
              ]}/>

              <ExpandableContainerDirectorio title="Formación Integral" subContainers={[
                { title: <Text style={styles.subtitle}>Lluvia Itaií Ruiz Ramos</Text>, subContainers: [
                  <Text style={styles.subContainerText}>Aprobación Puntos NOVA de Liderazgo</Text>,
                  <Text style={styles.subContainerText}>Organización eventos de vida universitaria</Text>,
                  <Text style={styles.subContainerText}>Grupo de Liderazgo Académico y Desarrollo Humano Vértice</Text>,
                ] },
                { title: <Text style={styles.subtitle}>Jose Lorenzo Martinez Valencia</Text>, subContainers: [
                  <Text style={styles.subContainerText}>Administración de talento deportivo</Text>,
                  <Text style={styles.subContainerText}>Grupo de Liderazgo Deportico Acción</Text>,
                  <Text style={styles.subContainerText}>Inscripción a grupos representativos de deportes</Text>,
                ] },
                { title: <Text style={styles.subtitle}>Concepcion Jazmin Santos Estrada</Text>, subContainers: [
                  <Text style={styles.subContainerText}>Registro eventos de Espacio Cultural</Text>,
                  <Text style={styles.subContainerText}>Grupo de Liderazgo Cultural Cúlmen</Text>,
                  <Text style={styles.subContainerText}>Administración de Talento Cultural</Text>,
                ] },
                { title: <Text style={styles.subtitle}>Francisco Morales Mejía</Text>, subContainers: [
                  <Text style={styles.subContainerText}>Misas, Misiones y eventos espirituales</Text>,
                  <Text style={styles.subContainerText}>Grupo de vida espiritual PASTORAL</Text>,
                  <Text style={styles.subContainerText}>Grupos Hope, Contagía Alegría, Gaudium, Alpha</Text>,
                ] }
              ]}/>

              <ExpandableContainerDirectorio title="Caja y Administración Escolar" subContainers={[
                { title: <Text style={styles.subtitle}>Elizabeth Cruz Zafra</Text>, subContainers: [
                  <Text style={styles.subContainerText}>Pago Inicial o reinscripción</Text>,
                  <Text style={styles.subContainerText}>Pago de colegiatura y fechas de pago</Text>,
                  <Text style={styles.subContainerText}>Costos de créditos</Text>,
                  <Text style={styles.subContainerText}>Prorrogas y cambios de fechas</Text>
                ] },
                { title: <Text style={styles.subtitle}>Carolina López Reyes</Text>, subContainers: [
                  <Text style={styles.subContainerText}>Verificación de Retenciones</Text>,
                  <Text style={styles.subContainerText}>Solicitud de Constancias o Historial</Text>,
                  <Text style={styles.subContainerText}>Baja de Materias</Text>,
                  <Text style={styles.subContainerText}>Movilidad y Transferencia</Text>,
                ] }
              ]}/>

              <ExpandableContainerDirectorio title="Orientación Psicológica" subContainers={[
                { title: <Text style={styles.subtitle}>Nelly Tanivet López Martínez</Text>, subContainers: [
                  <Text style={styles.subContainerText}>Primeros Auxilios Psicológicos</Text>,
                  <Text style={styles.subContainerText}>Orientación psicológica</Text>,
                  <Text style={styles.subContainerText}>Tutoría</Text>
                ] },
                { title: <Text style={styles.subtitle}>Luisa Miriam Toledo Ramos</Text>, subContainers: [
                  <Text style={styles.subContainerText}>Tutoría y Orientación Vocacional</Text>,
                  <Text style={styles.subContainerText}>Entrevista para cambio de carrera</Text>,
                  <Text style={styles.subContainerText}>Coordinación de tutorías y apoyo académico </Text>,
                  <Text style={styles.subContainerText}>Psicólogos Externos</Text>,
                ] }
              ]}/>

              <ExpandableContainerDirectorio title="BECAS" subContainers={[
                { title: <Text style={styles.subtitle}>Veronica Ivonne Lopez Garcia</Text>, subContainers: [
                  <Text style={styles.subContainerText}>Tramite de nueva beca</Text>,
                  <Text style={styles.subContainerText}>Incremento de beca</Text>,
                  <Text style={styles.subContainerText}>Recuperación de beca</Text>,
                  <Text style={styles.subContainerText}>Permanencia de beca</Text>,
                ] },
              ]}/>

              <ExpandableContainerDirectorio title="Internacionalización" subContainers={[
                { title: <Text style={styles.subtitle}>Diego Arroyo Celaya</Text>, subContainers: [
                  <Text style={styles.subContainerText}>Intercambios académicos internacionales</Text>,
                  <Text style={styles.subContainerText}>Experiencias interculturales</Text>,
                  <Text style={styles.subContainerText}>Internacionalización en campus</Text>,
                  <Text style={styles.subContainerText}>Prácticas profesionales</Text>,
                  <Text style={styles.subContainerText}>Requisitos y periodos de internacionalización</Text>,
                ] },
              ]}/>

            </ScrollView> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    marginBottom: 80,
  },
  header: {
    paddingTop: Constants.statusBarHeight,
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  menuButton: {
    position: 'absolute',
    top: Constants.statusBarHeight + 20,
    left: 0,
    zIndex: 1,
  },
  menuIcon: {
    width: 30,
    height: 40,
  },
  headerImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    padding: 4,
    backgroundColor: '#f0f0f0',
  },
  menu: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 80,
    backgroundColor: '#FD5900',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  image: {
    width: 65,
    height: 65,
  },
  sideMenu: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '60%',
    backgroundColor: '#ffffff',
    elevation: 4,
    shadowColor: '#000000',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 20,
    zIndex: 2,
  },
  closeButton: {
    position: 'absolute',
    top: Constants.statusBarHeight + 20,
    right: -30,
    zIndex: 3,
  },
  closeIcon: {
    width: 30,
    height: 40,
  },
  sideMenuItem: {
    top: Constants.statusBarHeight + 20,
    paddingTop: 10,
    fontSize: 14,
    fontFamily: 'Araboto',
    color: '#333',
    textAlign: 'left',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0, 
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 1,
  },
  // Estilos para ExpandableContainer
  container_eventos: {
    backgroundColor: '#FD5900',
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titleContainer_eventos: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  titleText_eventos: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  arrowCircle: {
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 5,
    marginRight: 10,
  },
  arrowIcon: {
    color: '#9368DC',
  },
  subContainer: {
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  subContainerItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#FD5900',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  subSubContainer: {
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  subContainerText: {
    color: '#333',
    fontSize: 14,
    textAlign: 'left',
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },

});

export default DirectoryScreen;