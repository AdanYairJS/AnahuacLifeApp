import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking} from 'react-native';
import InstagramIcon from '../../../images/icons/instagram_icon.svg';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'; //npx expo install expo-linear-gradient
import EventSection from './EventSection';

//logos
import verticeImage from '../../../images/eventos/grupos/vertice.png';
import accionImage from '../../../images/eventos/grupos/accion.png';
import culmenImage from '../../../images/eventos/grupos/culmen.png';
import imefImage from '../../../images/eventos/grupos/imef.png';
import adefaImage from '../../../images/eventos/grupos/adefa.png';
import fesalImage from '../../../images/eventos/grupos/fesal.png';
import asuaImage from '../../../images/eventos/grupos/asua.png';
import pastoralImage from '../../../images/eventos/grupos/pastoral.png';
import espacioculturalImage from '../../../images/eventos/grupos/espaciocultural.png';
import leonesImage from '../../../images/eventos/grupos/leones.png';


const GroupsStackScreen = ({route}) => {
  const { id } = route.params;
  const navigation = useNavigation(); 

  const secciones = [
    { id : 1, nombre: 'Vértice', imagen: verticeImage, texto: 'Vértice Anáhuac es un Programa de Excelencia y Desarrollo Humano enfocado en la formación integral de alumnos destacados en su carrera y con alto potencial de liderazgo.', instagram: 'verticeoaxaca', rutaI: 'https://www.instagram.com/verticeoaxaca'},
    { id : 2, nombre: 'Acción', imagen: accionImage, texto: 'Es el Programa de Liderazgo Deportivo de la Universidad Anáhuac Oaxaca enfocado a alumnos con destacado rendimiento deportivo.', instagram: 'accionuao', rutaI: 'https://www.instagram.com/accionuao'},
    { id : 3, nombre: 'Culmen', imagen: culmenImage, texto: 'Culmen se enfoca en Arte y Cultura, potenciando el liderazgo positivo de sus integrantes a través del reconocimiento de contextos artísticos-culturales y la creación de proyectos que impacten a la comunidad.', instagram: 'culmen_uao', rutaI: 'https://www.instagram.com/culmen_uao'},
    { id : 4, nombre: 'Imef', imagen: imefImage, texto: 'IMEF es el Instituto Mexicano de Ejecutivos de Finanzas (IMEF) en su capítulo universitario. Reúne a estudiantes destacados y comprometidos con el entorno económico, financiero y empresarial de Oaxaca y el país.', instagram: 'imef_u', rutaI: 'https://www.instagram.com/imef_u'},
    { id : 5, nombre: 'Adefa', imagen: adefaImage, texto: 'ADEFA es la Asociación de Estudiantes Foráneos, para alumnos que inician su vida universitaria lejos de su hogar. Busca integrarlos con la universidad y la ciudad mediante actividades de formación, integración y acompañamiento.', instagram: 'adefa.uao', rutaI: 'https://www.instagram.com/adefa.uao'},
    { id : 6, nombre: 'Asua', imagen: asuaImage, texto: 'Acción Social de la Universidad Anáhuac (ASUA) es el programa de voluntariado de la Red de Universidades Anáhuac (RUA). Fomentamos en la Comunidad Universitaria una genuina conciencia social sustentada en valores universales a través de la participación en proyectos, actividades y acciones sociales', instagram: 'asuaoaxaca', rutaI: 'https://www.instagram.com/asuaoaxaca'},
    { id : 7, nombre: 'Fesal', imagen: fesalImage, texto: 'FESAL es la Federación de Sociedades de Alumnos, siendo la voz de los alumnos de la Universidad. Conformada por diferentes Sociedades de Alumnos, representa a todas las Licenciaturas, Escuelas y/o Facultades de nuestra Universidad.', instagram: 'fesal.oaxaca', rutaI: 'https://www.instagram.com/fesal.oaxaca'},
    { id : 8, nombre: 'Pastoral', imagen: pastoralImage, texto: 'PASTORAL: La vida espiritual en la universidad se nutre de espacios de reflexión y liderazgo que buscan impactar positivamente en la sociedad. Fomentamos el servicio y la entrega a los demás, siguiendo los principios del evangelio.', instagram: 'pastoraluao', rutaI: 'https://www.instagram.com/pastoraluao'},
    { id : 9, nombre: 'Leones', imagen: leonesImage, texto: 'Equipos representativos y clubes de deporte: En la Universidad Anáhuac Oaxaca se practican 13 disciplinas deportivas que nos representan en diversas competencias estatales, regionales, nacionales e internacionales.', instagram: 'leones.uao', rutaI: 'https://www.instagram.com/leones.uao'},
    { id : 10, nombre: 'Espacio Cultural', imagen: espacioculturalImage, texto: 'Los grupos representativos y clubes de espacio cultural son espacios de expresión donde además de practicar disciplinas artísticas, se crean lazos de convivencia con estudiantes de todas las licenciaturas.', instagram: 'espacioculturaluao', rutaI: 'https://www.instagram.com/espacioculturaluao'},
  ];

  const seccion = secciones.find((seccion) => seccion.id === id); 
  
  const {nombre,imagen,texto,instagram,rutaI} = seccion;

  return (
    <LinearGradient 
            colors={['#f0f0f0','#F9F9F9']}
            style={styles.container}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("EventosScreen")}>
            <ArrowIcon name="left" size={24} color="black" />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={styles.groupName}>{nombre}</Text>
            <Image source={imagen} style={styles.logo} />
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{texto}</Text>
        </View>
        <View style={styles.instagramContainer}>
          <TouchableOpacity style={styles.instagramContainer} onPress={() => Linking.openURL(rutaI)}>
            <InstagramIcon width={30} height={30} />
            <Text style={styles.instagramText}>{instagram}</Text>
          </TouchableOpacity>  
        </View>
        <View style={styles.divider}/>    
        <View style={styles.contenedor_titulo}>
            <Text style={styles.titulo}>Próximos eventos</Text>
        </View> 
        <EventSection/>     
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    flex: 1,
    //padding: 20,
  },
  header: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff', // Fondo blanco
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000', // Color de la sombra
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Elevación para Android
    position: 'absolute', // Posición absoluta para mantener fijo
    top: 0, // Coloca el encabezado en la parte superior
    left: 0,
    right: 0,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  groupName: {
    fontSize: 24,
    marginLeft: 20,
    marginRight: 'auto',
    fontFamily: 'lexend-medium', 
  },
  logo: {
    width: 60,
    height: 60,
  },
  descriptionContainer: {
    padding: 30,
    marginTop: 90,
    marginBottom: 25,
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
    fontFamily: 'lexend-regular', 
  },
  instagramContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15, 
  },
  instagramText: {
    fontSize: 18,
    marginLeft: 7,
    fontFamily: 'lexend-light', 
    textDecorationLine: 'underline',
  },
  divider: {
    borderBottomWidth: 0.5,
    //borderBottomColor: '#FD5900',
    borderBottomColor: '#fdfdfd',
    marginTop: 20,
    marginBottom: 10,
    elevation: 1,
    shadowColor: '#000000',
  },
  contenedor_titulo: {
      marginTop: 25,
      alignItems: 'center',
      margin: 15,
      marginBottom: 25,
  },
  titulo: {
      fontFamily: 'lexend-regular',
      fontSize: 25,
      color: '#000000',
      textShadowColor: 'rgba(0, 0, 0, 0.4)', 
      textShadowOffset: { width: 0.05, height: 0.05 }, 
      textShadowRadius: 1, 
  },
});

export default GroupsStackScreen;
