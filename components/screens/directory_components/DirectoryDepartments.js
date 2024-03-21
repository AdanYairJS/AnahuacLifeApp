import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import DirectoryWorkers from './DirectoryWorkers';
import DirectoryDepartmentTarjeta from './DirectoryDepartmentTarjeta';
//Imagenes
// import a_enchiladas from '../../../images/cuckoo/a_enchiladas.jpg';
// import b_caramel from '../../../images/cuckoo/b_caramel.jpg';
// import d_sandwich from '../../../images/cuckoo/d_sandwich.jpg';
// import e_cuckoo from '../../../images/cuckoo/e_cuckoo.jpg';
import s_desayunos from '../../../images/cuckoo/s_desayunos.jpeg';
import s_antojitos from '../../../images/cuckoo/s_antojitos.jpg';
import s_platillos from '../../../images/cuckoo/s_platillos.png';

import ss_huevos from '../../../images/cuckoo/ss_huevos.jpg';
import ss_enchiladas from '../../../images/cuckoo/ss_enchiladas.jpg';
import ss_dulce from '../../../images/cuckoo/ss_dulce.jpg';
import ss_pan from '../../../images/cuckoo/ss_pan.jpg';
import ss_bebidas from '../../../images/cuckoo/ss_bebidas.jpg';
// import { ScrollView } from 'react-native-gesture-handler';



const anchoVentana = Dimensions.get('window').width;
const altoVentana = Dimensions.get('window').height;


const DirectoryDepartments = ({id_menu}) => {
  const navigation = useNavigation();
  let departamentos;

  basico = [
    {nombre: '--', 
    correo: '--', },
  ];
  
  caja = [
    {nombre: 'Carolina Lopez Reyes', 
    puesto: 'Asistente Dirección de Administración y Finanzas',
    correo: 'carolina.lopezre@anahuac.mx', 
    imagen: require('../../../images/directorios/w_Carolina.jpeg')},
  ];
  t_caja = [
    'Pago Inicial',
    'Pago de Reinscripción',
    'Pago de Colegiatura',
    'Facturación'
  ];

  cobranza = [
    {nombre: 'Elizabeth Cruz Zafra',
    puesto: 'Especialista en Cobranza',
    correo: 'elizabeth.cruzz@anahuac.mx',
    imagen: require('../../../images/directorios/w_elizabeth_cruz.jpeg') },
  ];
  t_cobranza = [
    'Descuento por pronto pago',
    'Costo por Crédito',
    'Pagos domiciliados',
    'Blindaje Anáhuac',
  ];

  administracion_escolar = [
    {nombre: 'Amitsadai Camacho Cervantes',
    puesto: 'Auxiliar de servicios escolares',
    correo: 'amitsadai.camacho@anahuac.mx',
    imagen: require('../../../images/directorios/w_Amitsadai.jpeg')},
    {nombre: 'Arely Amador Gerónimo',
    puesto: 'Auxiliar Administrativo de Servicios Escolares',
    correo: 'arely.amador@anahuac.mx',
    imagen: require('../../../images/directorios/w_Arely.jpeg')},
  ];
  t_administracion_escolar = [
    'Verificación de Retenciones',
    'Solicitud de Constancias o Historial',
    'Baja de materia',
    'Movilidad y Transferencia',
    'Baja temporal o definitiva',
    'Cambio de carrera',
  ];

  operacion_academica = [
    {nombre: 'Dalia Alarcón Gonzalez',
    puesto: 'Coordinadora de operación académica y normatividad',
    correo: 'dalia.alarcon@anahuac.mx',
    imagen: require('../../../images/directorios/w_Dalia_Alarcon.jpeg')},
    {nombre: 'Roberto Geovanni Lopez Curiel',
    puesto: 'Operación Académica',
    correo: 'geovanni.curiel@anahuac.mx',
    imagen: require('../../../images/directorios/a_estandar.jpg')
    },
    {nombre: 'Noemi Esmeralda Hernández Alavez',
    puesto: 'Asistente de la  Dirección de Servicios Institucionales',
    correo: 'noemi.hernandez@anahuac.mx',
    imagen: require('../../../images/directorios/a_estandar.jpg')
    },
  ];
  t_operacion_academica = [
    'Exámenes de suficiencia',
    'Exámenes extraordinarios',
    'Examen EGEL - CENEVAL',
    'MINORS',
    'Alta y baja de cursos',
  ];

  or_psicologica = [
    {nombre: 'Nelly Tanivet Lopez Martinez',
    correo: 'nelly.lopezm76@anahuac.mx',
    imagen: require('../../../images/directorios/w_Nelly_Tanivet.jpeg')},
    {nombre: 'Ariana Solano Zaragoza',
    correo: 'ariana.solanoz48@anahuac.mx',
    imagen: require('../../../images/directorios/w_Ariana_Solano.jpeg')},
  ];
  t_or_psicologica = [
    'Cita de orientación psicológica',
    'Programas de desarrollo',
  ];

  tutorias = [
    {nombre: 'Luisa Miriam Toledo Ramos',
    puesto: 'Coordinadora de tutorías y apoyo académico',
    correo: 'luisa.toledo@anahuac.mx',
    imagen: require('../../../images/directorios/w_Miriam_Toledo.jpeg')},
    {nombre: 'Esmeralda Orozco López',
    puesto: 'Tutora en Coordinación de tutorías',
    correo: 'esmeralda.orozcol@anahuac.mx',
    imagen: require('../../../images/directorios/a_estandar.jpg')},
  ];
  t_tutorias = [
    'Citas de tutoría',
    'Programas de apoyo académico',
  ];

  soporte = [
    {nombre: 'Edgar Joel Jimenez Carrasco',
    puesto: 'Auxiliar de Soporte Técnico',
    correo: 'edgarjoel.jimenez@anahuac.mx',
    imagen: require('../../../images/directorios/a_estandar.jpg')},
  ];
  t_soporte = [
    'Error de acceso a plataformas o apps',
    'Sistema de Listas',
    'Office 365',
  ];

  becas = [
    {nombre: 'Veronica Ivonne Lopez Garcia',
    correo: 'ivonne.lopezga@anahuac.mx',
    imagen: require('../../../images/directorios/w_Ivonne_Lopez.jpeg')},
  ];
  t_becas = [
    'Nuevas Becas',
    'Incremento de becas',
    'Recuperación de becas',
    'Permanencia de beca',
    'Requisitos y solicitudes',
  ];

  biblioteca = [
  ];
  t_biblioteca = [
    'Multas',
    'Asesorías',
    'Retenciones',
  ];

  form_integral = [
    {nombre: 'Erwin Garcia Acevedo',
    puesto: 'Coordinador de Compromiso Social',
    correo: 'erwin.garcia@anahuac.mx',
    imagen: require('../../../images/directorios/w_Erwin_Garcia.jpeg')},
    {nombre: 'Jorge Francisco Morales Mejía',
    puesto: 'Coordinador de Pastoral Universitaria',
    correo: 'jorge.moralesme@anahuac.mx',
    imagen: require('../../../images/directorios/w_Francisco_Morales.jpeg')},
    {nombre: 'José Lorenzo Martinez Valencia',
    puesto: 'Coordinador de Deportes',
    correo: 'jose.martinezval@anahuac.mx',
    imagen: require('../../../images/directorios/w_Jose_Martinez.jpeg')},
    {nombre: 'Concepción Jazmín Santos Estrada',
    puesto: 'Coordinación de Arte y Cultura',
    correo: 'concepcion.santoses@anahuac.mx',
    imagen: require('../../../images/directorios/w_Jazmin_Santos.jpeg')},
    {nombre: 'Francisco Javier Marquez Torres',
    puesto: 'Coordinador de Programas de Liderazgo',
    correo: 'javier.marquezt@anahuac.mx',
    imagen: require('../../../images/directorios/a_estandar.jpg')},
  ];
  t_form_integral = [
    'Coordinadores',
    'Grupos de Liderazgo',
    'Grupos representativos y clubs',
  ];

  internacional = [
    {nombre: 'Diego Arroyo Celaya',
    puesto: 'Coordinador Centro de lenguas e Internacionalización',
    correo: 'diego.arroyo@anahuac.mx',
    imagen: require('../../../images/directorios/a_estandar.jpg')},
  ];
  t_internacional = [
    'Intercambios académicos internacionales',
    'Experiencias interculturales',
    'Internacionalización en campus',
    'Prácticas profesionales',
    'Requisitos y periodos de internacionalización',
  ];

  directores = [
    {nombre: 'Martin Garnica Hernandez',
    puesto: 'Director Escuela de Ingeniería',
    correo: 'martin.garnica@anahuac.mx',
    imagen: require('../../../images/directorios/w_Martin_Garnica.jpeg')},
    {nombre: 'Rodrigo Felguerez Allende',
    puesto: 'Director Escuela de Psicología',
    correo: 'rodrigo.felguerez@anahuac.mx',
    imagen: require('../../../images/directorios/w_Rodrigo_Felguerez.jpeg')},
    {nombre: 'David Ricardo Mayren Garcia',
    puesto: 'Director Escuela de Medicina',
    correo: 'david.mayren@anahuac.mx',
    imagen: require('../../../images/directorios/w_Ricardo_Mayren.jpeg')},
    {nombre: 'Hector Humberto Vásquez Quevedo',
    puesto: 'Director Escuela de Ciencias Jurídicas y Sociales',
    correo: 'hector.vasquez@anahuac.mx',
    imagen: require('../../../images/directorios/a_estandar.jpg')},
    {nombre: 'Yvette Flor Solano Carrillo',
    puesto: 'Directora Escuela de Comunicación',
    correo: 'yvette.solanoca@anahuac.mx',
    imagen: require('../../../images/directorios/a_estandar.jpg')},
    {nombre: 'Maria del Pilar Aguilar Beristain',
    puesto: 'Directora Escuela de Diseño',
    correo: 'maria.aguilarna@anahuac.mx',
    imagen: require('../../../images/directorios/a_estandar.jpg')},
    {nombre: 'Carlos Alberto Olavarría Zárate',
    puesto: 'Director Escuela de Economía y Negocios',
    correo: 'carlos.olavarria@anahuac.mx',
    imagen: require('../../../images/directorios/w_Carlos_Olavarria.jpeg')},
    {nombre: 'Marisol Chavez Bautista',
    puesto: 'Directora Escuela de Turismo y Gastronomía',
    correo: 'marisol.chavez@anahuac.mx',
    imagen: require('../../../images/directorios/w_Marisol_Chavez.jpeg')},
  ];

  egresados = [
    {nombre: 'Alina Hernández Nieto',
    puesto: 'Coordinadora de Vinculación Eventos y Egresados',
    correo: 'alina.hernandez@anahuac.mx',
    imagen: require('../../../images/directorios/w_Alina_Nieto.jpeg')},
  ];

  sorteo_anahuac = [
    {nombre: 'Diana Velasco Rodríguez',
    puesto: 'Enlaces Operativos Sorteo Anáhuac',
    correo: 'diana.velascoro@anahuac.mx',
    imagen: require('../../../images/directorios/w_Diana_Velasco.jpeg')},
  ];


  departamentos = [
    {nombre: 'Caja' , 
    imagen: require('../../../images/directorios/d_becas.jpg'), 
    texto: 'Caja', 
    correo:'caja.uao@anahuac.mx' , 
    tramites: t_caja, 
    ubicacion: 'Edificio B, planta alta', 
    id_ubicacion: 2, 
    trabajadores: caja},

    {nombre: 'Cobranza' , 
    imagen: require('../../../images/directorios/d_becas.jpg'), 
    texto: 'Cobranza', 
    correo:'cobranza.uao@anahuac.mx' , 
    tramites: t_cobranza, 
    ubicacion: 'Edificio B, planta alta', 
    id_ubicacion: 2, 
    trabajadores: cobranza},

    {nombre: 'AdministraciónEscolar' , 
    imagen: require('../../../images/directorios/d_becas.jpg'), 
    texto: 'Administración Escolar', 
    correo:'aescolar.uao@anahuac.mx' , 
    tramites: t_administracion_escolar, 
    ubicacion: 'Edificio B, planta alta', 
    id_ubicacion: 2, 
    trabajadores: administracion_escolar},

    {nombre: 'OperacionAcademica' , 
    imagen: require('../../../images/directorios/d_becas.jpg'), 
    texto: 'Operación Académica', 
    correo:'operacionacademica.uao@anahuac.mx' , 
    tramites: t_operacion_academica, 
    ubicacion: 'Edificio E, planta alta', 
    id_ubicacion: 5, 
    trabajadores: operacion_academica},

    {nombre: 'OrientacionPsicologica' , 
    imagen: require('../../../images/directorios/d_becas.jpg'), 
    texto: 'Orientación Psicológica', 
    correo:'orientacionpsicologica.uao@anahuac.mx' , 
    tramites: t_or_psicologica, 
    ubicacion: 'Edificio B, planta baja', 
    id_ubicacion: 2, 
    trabajadores: or_psicologica},

    {nombre: 'Tutorias' , 
    imagen: require('../../../images/directorios/d_becas.jpg'), 
    texto: 'Tutorías', 
    correo:'tutorias.uao@anahuac.mx', 
    tramites: t_tutorias, 
    ubicacion: 'Edificio B, planta baja', 
    id_ubicacion: 2, 
    trabajadores: tutorias},

    {nombre: 'SoporteTecnico' , 
    imagen: require('../../../images/directorios/d_becas.jpg'), 
    texto: 'Soporte Técnico', 
    correo:'soporte.uao@anahuac.mx' , 
    tramites: t_soporte, 
    ubicacion: 'Edificio B, planta alta', 
    id_ubicacion: 2, 
    trabajadores: soporte},

    {nombre: 'Becas' , 
    imagen: require('../../../images/directorios/d_becas.jpg'), 
    texto: 'Becas', 
    tramites: t_becas, 
    ubicacion: 'Edificio B, planta baja', 
    id_ubicacion: 2, 
    trabajadores: becas},

    {nombre: 'Biblioteca' , 
    imagen: require('../../../images/directorios/d_becas.jpg'), 
    texto: 'Biblioteca', 
    correo:'bibliotecauao@anahuac.mx' , 
    tramites: t_biblioteca, 
    ubicacion: 'Edificio C, planta baja', 
    id_ubicacion: 2,
    trabajadores: basico},

    {nombre: 'FormacionIntegral' , 
    imagen: require('../../../images/directorios/d_becas.jpg'), 
    texto: 'Formación Integral',
    tramites: t_form_integral, 
    ubicacion: 'Edificio B, planta baja', 
    id_ubicacion: 2, 
    trabajadores: form_integral},

    {nombre: 'Internacionalizacion' , 
    imagen: require('../../../images/directorios/d_becas.jpg'), 
    texto: 'Internacionalización', 
    tramites: t_internacional, 
    ubicacion: 'Edificio G, planta alta', 
    id_ubicacion: 2, 
    trabajadores: internacional},

    {nombre: 'DirectoresEscuelas' , 
    imagen: require('../../../images/directorios/d_becas.jpg'), 
    texto: 'Directores de Escuela',
    ubicacion: 'Edificio E, planta alta', 
    id_ubicacion: 5,
    trabajadores: directores},

    {nombre: 'EgresadosVinculacion' , 
    imagen: require('../../../images/directorios/d_becas.jpg'), 
    texto: 'Egresados y vinculación',
    ubicacion: 'Edificio E, planta alta', 
    id_ubicacion: 5, 
    trabajadores: egresados},

    {nombre: 'SorteoAnahuac' , 
    imagen: require('../../../images/directorios/d_becas.jpg'), 
    texto: 'Sorteo Anáhuac', 
    ubicacion: 'Edificio B, planta baja', 
    id_ubicacion: 2, 
    trabajadores: sorteo_anahuac},

    {nombre: 'Defensoria' , 
    imagen: require('../../../images/directorios/d_becas.jpg'), 
    texto: 'Defensoría', 
    correo:'defensoria.uao@anahuac.mx' , 
    ubicacion: 'Edificio B', 
    id_ubicacion: 2, 
    trabajadores: basico},

    {nombre: 'Casa' , 
    imagen: require('../../../images/directorios/d_becas.jpg'), 
    texto: 'CASA', 
    correo:'atencionalumnos.uao@anahuac.mx' , 
    ubicacion: 'Edificio B, planta baja', 
    id_ubicacion: 2, 
    trabajadores: basico},

    {nombre: 'ConsultorioMedico' , 
    imagen: require('../../../images/directorios/d_becas.jpg'), 
    texto: 'Consultorio Médico', 
    correo:'medico1@anahuac.mx' , 
    ubicacion: 'Edificio C, planta baja', 
    id_ubicacion: 3, 
    trabajadores: basico},

  ];
    const handlePress = (seccion) => {
        let nombre_seccion = seccion.nombre;
        let texto_seccion = seccion.texto;
        // Aquí puedes navegar a la nueva ventana con el título de la sección
        // navigation.navigate('NuevaVentana', { titulo: seccion.nombre });
        navigation.navigate(nombre_seccion,{texto_seccion});
    };
    return (
      <View style={styles.container}>
      {departamentos.map((departamento, index) => (        
          <DirectoryDepartmentTarjeta key={index} {...departamento} />        
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: anchoVentana,
    maxWidth: 800,
    alignSelf: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 20,
    marginTop: Constants.statusBarHeight + 60,
  },
  icono: {
    width: '45%',
    aspectRatio: 0.75,
    // width: 100,
    // height: 100,
    margin: '2%',
    // borderRadius: 20,
    // borderWidth: 2,
    // borderColor: '#FD5900',
    elevation: 4,
    shadowColor: '#000000',
    // shadowOffset: ,
    // shadowOpacity: 20,
    overflow: 'hidden',
  },
  imagen: {
    width: '100%',
    height: '80%',
    resizeMode: 'cover',
    borderRadius: 25,
  },
  titulo: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    // textShadowColor: 'rgba(0, 0, 0, 0.4)', 
    // textShadowOffset: { width: 0.05, height: 0.05 }, 
    // textShadowRadius: 1,
    marginTop: 5,
    marginBottom: 5,
  },
  titulo_seccion: {
    width: '100%',
    fontSize: 20,
    // fontWeight: 'bold',
    fontFamily: 'lexend-extrabold',
    color: '#FFF',
    textAlign: 'left',
    marginLeft: 40,
    marginBottom: 5,
  },
  contendor_scroll: {
    //margin: 15,
    marginTop: 15,
    marginBottom: 15,
  },
});

export default DirectoryDepartments;