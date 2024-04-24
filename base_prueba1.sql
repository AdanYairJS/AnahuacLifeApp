CREATE DATABASE ALIFE_PRUEBA1;
\l
\c alife_prueba1;

--TABLA LUGARES
CREATE TABLE lugares(
    id_lugar SERIAL PRIMARY KEY NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    coord_x FLOAT,
    coord_y FLOAT,
    alto FLOAT,
    ancho FLOAT,
    color_p VARCHAR(7) NOT NULL,
    color_s VARCHAR(7) NOT NULL,
    imagen VARCHAR(200),
    globo VARCHAR(200)
);

--TABLA ESCUELAS
CREATE TABLE escuelas(
    id_escuela SERIAL PRIMARY KEY NOT NULL,
    nombre VARCHAR(100) NOT NULL CONSTRAINT U_NOMBRE_ESCUELAS UNIQUE,
    color VARCHAR(7) NOT NULL
);

--TABLA AREAS
CREATE TABLE areas(
    id_area SERIAL CONSTRAINT PK_ID_AREAS PRIMARY KEY NOT NULL,
    nombre VARCHAR(100) CONSTRAINT U_NOMBRE_AREAS UNIQUE NOT NULL,
    foto VARCHAR(200)
);

--TABLA CATEGORÍAS
CREATE TABLE categorias(
    id_categoria SERIAL CONSTRAINT PK_ID_CATEGORIAS PRIMARY KEY NOT NULL,
    nombre VARCHAR(100) CONSTRAINT U_NOMBRE_CATEGORIAS UNIQUE NOT NULL,
    descripcion VARCHAR(200)
);

--TABLA PROFESORES
CREATE TABLE profesores(
    id_profesor SERIAL CONSTRAINT PK_ID_PROFESORES PRIMARY KEY NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    apellido_p VARCHAR(40) NOT NULL,
    apellido_m VARCHAR(40) NOT NULL,
    correo VARCHAR(100) CONSTRAINT U_CORREO_PROFESORES UNIQUE NOT NULL,
    foto VARCHAR(200)
);

--TABLA RESTAURANTES
CREATE TABLE restaurantes(
    id_restaurante SERIAL CONSTRAINT PK_ID_RESTAURANTES PRIMARY KEY NOT NULL,
    nombre VARCHAR(100) CONSTRAINT U_NOMBRE_RESTAURANTES UNIQUE NOT NULL,
    num_cuenta INT CONSTRAINT U_NUM_CUENTA_RESTAURANTES UNIQUE,
    telefono INT CONSTRAINT U_TELEFONO_RESTAURANTES UNIQUE,
    id_lugar INT CONSTRAINT FK_ID_LUGAR_RESTAURANTES REFERENCES lugares (id_lugar)
);

--TABLA DEPARTAMENTOS
CREATE TABLE departamentos(
    id_depto SERIAL CONSTRAINT PK_ID_DEPARTAMENTOS PRIMARY KEY NOT NULL,
    nombre VARCHAR(100) CONSTRAINT U_NOMBRE_DEPARTAMENTOS UNIQUE NOT NULL,
    correo VARCHAR(50),
    hora_ap1 TIME NOT NULL,
    hora_ci1 TIME NOT NULL,
    hora_ap2 TIME,
    hora_ci2 TIME,
    id_lugar INT CONSTRAINT FK_ID_LUGAR_DEPARTAMENTOS REFERENCES lugares (id_lugar)
);

--TABLA ALUMNOS
CREATE TABLE alumnos(
    id_alumno INT CONSTRAINT PK_ID_ALUMNOS PRIMARY KEY NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    apellido_p VARCHAR(40) NOT NULL,
    apellido_m VARCHAR(40) NOT NULL,
    correo VARCHAR(100) CONSTRAINT U_CORREO_ALUMNOS UNIQUE NOT NULL,
    contraseña VARCHAR(100) NOT NULL,
    salt VARCHAR(10) CONSTRAINT U_SALT_ALUMNOS UNIQUE NOT NULL,
    foto VARCHAR(200),
    id_escuela INT CONSTRAINT FK_ID_ESCUELA_ALUMNOS REFERENCES escuelas (id_escuela)
);

-- --TABLA EVENTOS
-- CREATE TABLE eventos(
--     id_evento SERIAL CONSTRAINT PK_ID_EVENTOS PRIMARY KEY NOT NULL,
--     descripcion VARCHAR(200) NOT NULL,
--     fecha DATE,
--     puntos_social INT,
--     puntos_liderazgo INT,
--     puntos_profesional INT,
--     puntos_espiritual INT,
--     direccion VARCHAR(200),
--     id_lugar INT CONSTRAINT FK_ID_LUGAR_EVENTOS REFERENCES lugares (id_lugar),
--     id_area INT CONSTRAINT FK_ID_AREA_EVENTOS REFERENCES areas (id_area)
-- );

--TABLA EVENTOS
CREATE TABLE eventos(
    id_evento SERIAL CONSTRAINT PK_ID_EVENTOS PRIMARY KEY NOT NULL,
    descripcion VARCHAR(200) NOT NULL,
    fecha DATE,
    puntos_social INT,
    puntos_liderazgo INT,
    puntos_profesional INT,
    puntos_espiritual INT,
    direccion VARCHAR(200),
    id_lugar INT CONSTRAINT FK_ID_LUGAR_EVENTOS REFERENCES lugares (id_lugar),
    id_area INT CONSTRAINT FK_ID_AREA_EVENTOS REFERENCES areas (id_area),
    id_categoria1 INT CONSTRAINT FK_ID_CATEGORIA1_EVENTOS REFERENCES categorias(id_categoria),
    id_categoria2 INT CONSTRAINT FK_ID_CATEGORIA2_EVENTOS REFERENCES categorias(id_categoria),
    id_categoria3 INT CONSTRAINT FK_ID_CATEGORIA3_EVENTOS REFERENCES categorias(id_categoria)
);

-- --TABLA CLASES
-- CREATE TABLE clases(
--     nrc INT CONSTRAINT PK_NRC_CLASES PRIMARY KEY NOT NULL,
--     nombre VARCHAR(100),
--     id_profesor INT CONSTRAINT FK_ID_PROFESOR_CLASES REFERENCES profesores (id_profesor)
-- );

--TABLA CLASES
CREATE TABLE clases(
    nrc INT CONSTRAINT PK_NRC_CLASES PRIMARY KEY NOT NULL,
    nombre VARCHAR(100),
    id_profesor INT CONSTRAINT FK_ID_PROFESOR_CLASES REFERENCES profesores (id_profesor),
    dia1 VARCHAR(10) CONSTRAINT CHK_DIA1_CLASES CHECK(dia1 IN ('LUNES','MARTES','MIERCOLES','JUEVES','VIERNES','SABADO')) NOT NULL,
    hora_ini1 TIME NOT NULL,
    hora_fin1 TIME NOT NULL,
    aula1 VARCHAR(20),
    id_lugar1 INT CONSTRAINT FK_ID_LUGAR1_CLASES REFERENCES lugares (id_lugar) NOT NULL,
    dia2 VARCHAR(10) CONSTRAINT CHK_DIA2_CLASES CHECK(dia2 IN ('LUNES','MARTES','MIERCOLES','JUEVES','VIERNES','SABADO')),
    hora_ini2 TIME,
    hora_fin2 TIME,
    aula2 VARCHAR(20),
    id_lugar2 INT CONSTRAINT FK_ID_LUGAR2_CLASES REFERENCES lugares (id_lugar),
    dia3 VARCHAR(10) CONSTRAINT CHK_DIA3_CLASES CHECK(dia3 IN ('LUNES','MARTES','MIERCOLES','JUEVES','VIERNES','SABADO')),
    hora_ini3 TIME,
    hora_fin3 TIME,
    aula3 VARCHAR(20),
    id_lugar3 INT CONSTRAINT FK_ID_LUGAR3_CLASES REFERENCES lugares (id_lugar)
);

--TABLA TRABAJADORES
CREATE TABLE trabajadores(
    id_trabajador SERIAL CONSTRAINT PK_ID_TRABAJADORES PRIMARY KEY NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    apellido_p VARCHAR(40) NOT NULL,
    apellido_m VARCHAR(40) NOT NULL,
    correo VARCHAR(100) CONSTRAINT U_CORREO_TRABAJADORES UNIQUE NOT NULL,
    -- telefono INT CONSTRAINT U_TELEFONO_TRABAJADORES UNIQUE,
    telefono INT,
    -- puesto VARCHAR(100) NOT NULL,
    puesto VARCHAR(100),
    imagen VARCHAR(200),
    id_depto INT CONSTRAINT FK_ID_DEPTO_TRABAJADORES REFERENCES departamentos (id_depto)
);

--TABLA ORDENES
CREATE TABLE ordenes(
    id_orden SERIAL CONSTRAINT PK_ID_ORDENES PRIMARY KEY NOT NULL,
    fecha_entrega date NOT NULL,
    hora_entrega time NOT NULL,
    id_alumno INT CONSTRAINT FK_ID_ALUMNO_ORDENES REFERENCES alumnos (id_alumno)
);

--TABLA SECCIONES
CREATE TABLE secciones(
    id_seccion SERIAL CONSTRAINT PK_ID_SECCIONES PRIMARY KEY NOT NULL,
    nombre VARCHAR(40) NOT NULL,
    id_restaurante INT CONSTRAINT FK_ID_RESTAURANTE_SECCIONES REFERENCES restaurantes (id_restaurante)
);

--TABLA SUBSECCIONES
CREATE TABLE subsecciones(
    id_subseccion SERIAL CONSTRAINT PK_ID_SUBSECCIONES PRIMARY KEY NOT NULL,
    nombre VARCHAR(40) NOT NULL,
    id_seccion INT CONSTRAINT FK_ID_SECCION_SUBSECCIONES REFERENCES secciones (id_seccion)
);

--TABLA HORARIOS
CREATE TABLE horarios(
    id_horario SERIAL CONSTRAINT PK_ID_HORARIOS PRIMARY KEY NOT NULL,
    periodo VARCHAR(20) NOT NULL,
    id_alumno INT CONSTRAINT FK_ID_ALUMNO_HORARIOS REFERENCES alumnos (id_alumno)
);

-- --TABLA CLASES_LUGARES
-- CREATE TABLE clases_lugares(
--     nrc INT CONSTRAINT FK_NRC_CLASES_LUGARES REFERENCES clases (nrc) NOT NULL,
--     dia VARCHAR(10) CONSTRAINT CHK_DIA_CLASES_LUGARES CHECK(dia IN ('LUNES','MARTES','MIERCOLES','JUEVES','VIERNES','SABADO')) NOT NULL,
--     hora_ini TIME NOT NULL,
--     hora_fin TIME NOT NULL,
--     aula VARCHAR(20),
--     id_lugar INT CONSTRAINT FK_ID_LUGAR_CLASES_LUGARES REFERENCES lugares (id_lugar) NOT NULL
-- );

--TABLA EVENTOS_CATEGORIAS
CREATE TABLE eventos_categorias(
    id_evento INT CONSTRAINT FK_ID_EVENTO_EVENTOS_CATEGORIAS REFERENCES eventos (id_evento) NOT NULL,
    id_categoria INT CONSTRAINT FK_ID_CATEGORIA_EVENTOS_CATEGORIAS REFERENCES categorias (id_categoria) NOT NULL
);

--TABLA PLATILLOS
CREATE TABLE platillos(
    id_platillo SERIAL CONSTRAINT PK_ID_PLATILLOS PRIMARY KEY NOT NULL,
    nombre VARCHAR(50),
    precio FLOAT NOT NULL,
    descripcion VARCHAR(200),
    imagen VARCHAR(200),
    id_subseccion INT CONSTRAINT FK_ID_SUBSECCION_PLATILLOS REFERENCES subsecciones (id_subseccion)
);

--TABLA ORDENES_PLATILLOS
CREATE TABLE ordenes_platillos(
    id_orden INT CONSTRAINT FK_ID_ORDEN_ORDENES_PLATILLOS REFERENCES ordenes (id_orden) NOT NULL,
    id_platillo INT CONSTRAINT FK_ID_PLATILLO_ORDENES_PLATILLOS REFERENCES platillos (id_platillo) NOT NULL
);

--TABLA CLASES_HORARIOS
CREATE TABLE clases_horarios(
    nrc INT CONSTRAINT FK_ID_CLASE_CLASES_HORARIOS REFERENCES clases (nrc) NOT NULL,
    id_horario INT CONSTRAINT FK_ID_HORARIO_CLASES_HORARIOS REFERENCES horarios (id_horario) NOT NULL
);

--TABLA TRÁMITES
CREATE TABLE tramites(
    id_tramite SERIAL CONSTRAINT PK_ID_TRAMITES PRIMARY KEY NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    id_depto INT CONSTRAINT FK_ID_DEPTO_TRAMITES REFERENCES departamentos (id_depto) NOT NULL
);

--CREACIÓN DE LA TABLA SABORES
CREATE TABLE sabores(
    id_sabor SERIAL CONSTRAINT PK_ID_SABORES PRIMARY KEY NOT NULL,
    nombre VARCHAR(50),
    imagen VARCHAR(200),
    id_platillo INT CONSTRAINT FK_ID_SABOR_PLATILLOS REFERENCES platillos (id_platillo)
);

--CREACIÓN DE LA TABLA EXTRAS
CREATE TABLE extras(
    id_extra SERIAL CONSTRAINT PK_ID_EXTRAS PRIMARY KEY NOT NULL,
    nombre VARCHAR(50),
    precio INTEGER
);

--CREACIÓN DE LA TABLA PLATILLOS_EXTRAS
CREATE TABLE platillos_extras(
    id_platillo INT CONSTRAINT FK_ID_PLATILLO_PLATILLOS_EXTRAS REFERENCES platillos (id_platillo),
    id_extra INT CONSTRAINT FK_ID_EXTRAS_PLATILLOS_EXTRAS REFERENCES extras (id_extra)
);

--INSERCIÓN DE VALORES EN TABLA LUGARES
INSERT INTO lugares (id_lugar,nombre,color_p,color_s) VALUES(1,'Edificio A','#faae30','#f7712e');
INSERT INTO lugares (id_lugar,nombre,color_p,color_s) VALUES(2,'Edificio B','#e33f91','#e44060');
INSERT INTO lugares (id_lugar,nombre,color_p,color_s) VALUES(3,'Edificio C','#10bbed','#197aa4');
INSERT INTO lugares (id_lugar,nombre,color_p,color_s) VALUES(4,'Edificio D','#994e37','#5d3626');
INSERT INTO lugares (id_lugar,nombre,color_p,color_s) VALUES(5,'Edificio E','#20b545','#166834');
INSERT INTO lugares (id_lugar,nombre,color_p,color_s) VALUES(6,'Edificio G','#f7d32d','#f59730');
INSERT INTO lugares (id_lugar,nombre,color_p,color_s) VALUES(7,'Cuckoo','#563b33','#342620');
INSERT INTO lugares (id_lugar,nombre,color_p,color_s) VALUES(8,'Auditorio SUM','#e2f828','#eaed24');
INSERT INTO lugares (id_lugar,nombre,color_p,color_s) VALUES(9,'Canchas de Basket','#10d0f4','#0184da');
INSERT INTO lugares (id_lugar,nombre,color_p,color_s) VALUES(10,'Salón de Usos Multiples','#dfd300','#f6bd03');
INSERT INTO lugares (id_lugar,nombre,color_p,color_s) VALUES(11,'Capilla','#9fce2d','#64ba20');
INSERT INTO lugares (id_lugar,nombre,color_p,color_s) VALUES(12,'Cancha de Futbol','#31ccbe','#219bbc');
INSERT INTO lugares (id_lugar,nombre,color_p,color_s) VALUES(13,'Cancha de Futbol Rápido','#5f2fd0','#7522bd');
INSERT INTO lugares (id_lugar,nombre,color_p,color_s) VALUES(14,'Cancha de Basketball','#0dd2f1','#008cdd');
INSERT INTO lugares (id_lugar,nombre,color_p,color_s) VALUES(15,'Canchas de Tenis','#b6444d','#a34837');
INSERT INTO lugares (id_lugar,nombre,color_p,color_s) VALUES(16,'Estacionamiento 1','#c2256f','#c2256f');
INSERT INTO lugares (id_lugar,nombre,color_p,color_s) VALUES(17,'Estacionamiento 2','#ce324c','#bb3222');
INSERT INTO lugares (id_lugar,nombre,color_p,color_s) VALUES(18,'Estacionamiento Docentes','#3270ce','#203cba');
INSERT INTO lugares (id_lugar,nombre,color_p,color_s) VALUES(19,'Plaza Central','#d951be','#c4498f');
INSERT INTO lugares (id_lugar,nombre,color_p,color_s) VALUES(20,'Edificio F','#9a3a54','#5f2636');
INSERT INTO lugares (id_lugar,nombre,color_p,color_s) VALUES(21,'DelyFull','#1c5b64','#1e6a62');
INSERT INTO lugares (id_lugar,nombre,color_p,color_s) VALUES(22,'CuckooBox','#531f69','#5e1b62');


--INSERCIÓN DE VALORES EN TABLA DEPARTAMENTOS
INSERT INTO departamentos (id_depto,nombre,correo,hora_ap1,hora_ci1,id_lugar) VALUES (1,'Caja','caja.uao@anahuac.mx','9:00','18:00',2);
INSERT INTO departamentos (id_depto,nombre,correo,hora_ap1,hora_ci1,id_lugar) VALUES (2,'Cobranza','cobranza.uao@anahuac.mx','9:00','18:00',2);
INSERT INTO departamentos (id_depto,nombre,correo,hora_ap1,hora_ci1,id_lugar) VALUES (3,'Administración Escolar','aescolar.uao@anahuac.mx','9:00','18:00',2);
INSERT INTO departamentos (id_depto,nombre,correo,hora_ap1,hora_ci1,id_lugar) VALUES (4,'Operación Académica','operacionacademica.uao@anahuac.mx','9:00','18:00',2);
INSERT INTO departamentos (id_depto,nombre,correo,hora_ap1,hora_ci1,id_lugar) VALUES (5,'Orientación psicológica','orientacionpsicologica.uao@anahuac.mx','9:00','18:00',2);
INSERT INTO departamentos (id_depto,nombre,correo,hora_ap1,hora_ci1,id_lugar) VALUES (6,'Tutorías','tutorias.uao@anahuac.mx','9:00','18:00',2);
INSERT INTO departamentos (id_depto,nombre,correo,hora_ap1,hora_ci1,id_lugar) VALUES (7,'Soporte Técnico','soporte.uao@anahuac.mx','9:00','18:00',2);
INSERT INTO departamentos (id_depto,nombre,correo,hora_ap1,hora_ci1,id_lugar) VALUES (8,'BECAS',NULL,'9:00','18:00',2);
INSERT INTO departamentos (id_depto,nombre,correo,hora_ap1,hora_ci1,id_lugar) VALUES (9,'Biblioteca','bibliotecauao@anahuac.mx','7:00','20:00',3);
INSERT INTO departamentos (id_depto,nombre,correo,hora_ap1,hora_ci1,id_lugar) VALUES (10,'Formación Integral',NULL,'9:00','18:00',2);
INSERT INTO departamentos (id_depto,nombre,correo,hora_ap1,hora_ci1,id_lugar) VALUES (11,'Internacionalización',NULL,'9:00','18:00',6);
INSERT INTO departamentos (id_depto,nombre,correo,hora_ap1,hora_ci1,id_lugar) VALUES (12,'Directores de Escuela',NULL,'9:00','18:00',2);
INSERT INTO departamentos (id_depto,nombre,correo,hora_ap1,hora_ci1,id_lugar) VALUES (13,'Egresados y vinculación',NULL,'9:00','18:00',2);
INSERT INTO departamentos (id_depto,nombre,correo,hora_ap1,hora_ci1,id_lugar) VALUES (14,'Sorteo Anáhuac',NULL,'9:00','18:00',2);
INSERT INTO departamentos (id_depto,nombre,correo,hora_ap1,hora_ci1,id_lugar) VALUES (15,'Defensoría','defensoria.uao@anahuac.mx','9:00','18:00',2);
INSERT INTO departamentos (id_depto,nombre,correo,hora_ap1,hora_ci1,id_lugar) VALUES (16,'CASA','atencionalumnos.uao@anahuac.mx','9:00','18:00',2);
INSERT INTO departamentos (id_depto,nombre,correo,hora_ap1,hora_ci1,id_lugar) VALUES (17,'Consultorio Médico','medico1@anahuac.mx','9:00','18:00',3);

--INSERCIÓN DE VALORES EN TABLA TRAMITES
INSERT INTO tramites VALUES (1,'Pago Inicial ',1);
INSERT INTO tramites VALUES (2,'Pago de Reinscripción',1);
INSERT INTO tramites VALUES (3,'Pago de Colegiatura',1);
INSERT INTO tramites VALUES (4,'Descuento por pronto pago',2);
INSERT INTO tramites VALUES (5,'Costo por Crédito',2);
INSERT INTO tramites VALUES (6,'Facturación',1);
INSERT INTO tramites VALUES (7,'Pagos domiciliados',2);
INSERT INTO tramites VALUES (8,'Blindaje Anáhuac',2);
INSERT INTO tramites VALUES (9,'Verificación de Retenciones',3);
INSERT INTO tramites VALUES (10,'Solicitud de Constancias o Historial',3);
INSERT INTO tramites VALUES (11,'Baja de materia',3);
INSERT INTO tramites VALUES (12,'Movilidad y Transferencia',3);
INSERT INTO tramites VALUES (13,'Baja temporal o definitiva',3);
INSERT INTO tramites VALUES (14,'Cambio de carrera',3);
INSERT INTO tramites VALUES (15,'Exámenes de suficiencia',4);
INSERT INTO tramites VALUES (16,'Exámenes extraordinarios',4);
INSERT INTO tramites VALUES (17,'Examen EGEL - CENEVAL',4);
INSERT INTO tramites VALUES (18,'MINORS',4);
INSERT INTO tramites VALUES (19,'Alta y baja de cursos',4);
INSERT INTO tramites VALUES (20,'Cita de orientación psicológica',5);
INSERT INTO tramites VALUES (21,'Citas de tutoría',6);
INSERT INTO tramites VALUES (22,'Programas de apoyo académico',6);
INSERT INTO tramites VALUES (23,'Programas de desarrollo',5);
INSERT INTO tramites VALUES (24,'Error de acceso a plataformas o apps',7);
INSERT INTO tramites VALUES (25,'Sistema de Listas',7);
INSERT INTO tramites VALUES (26,'Office 365',7);
INSERT INTO tramites VALUES (27,'Nuevas Becas',8);
INSERT INTO tramites VALUES (28,'Incremento de becas',8);
INSERT INTO tramites VALUES (29,'Recuperación de becas',8);
INSERT INTO tramites VALUES (30,'Permanencia de beca',8);
INSERT INTO tramites VALUES (31,'Requisitos y solicitudes',8);
INSERT INTO tramites VALUES (32,'Multas',9);
INSERT INTO tramites VALUES (33,'Asesorías',9);
INSERT INTO tramites VALUES (34,'Retenciones',9);
INSERT INTO tramites VALUES (35,'Coordinadores',10);
INSERT INTO tramites VALUES (36,'Grupos de Liderazgo',10);
INSERT INTO tramites VALUES (37,'Grupos representativos y clubs',10);
INSERT INTO tramites VALUES (38,'Intercambios académicos internacionales',11);
INSERT INTO tramites VALUES (39,'Experiencias interculturales',11);
INSERT INTO tramites VALUES (40,'Internacionalización en campus',11);
INSERT INTO tramites VALUES (41,'Prácticas profesionales',11);
INSERT INTO tramites VALUES (42,'Requisitos y periodos de internacionalización',11);

--INSERCIÓN EN LA TABLA TRABAJADORES
\COPY trabajadores FROM 'Trabajadores.csv' WITH (FORMAT CSV, HEADER, NULL 'NULL');

-- --INSERCIÓN DE VALORES EN TABLA TRABAJADORES 2
-- UPDATE trabajadores
-- SET imagen = '../../../images/directorios/w_default.jpg'
-- WHERE imagen = NULL;

--== SECCIÓN COMIDA ==--
--INSERCIÓN EN TABLA RESTAURANTES
INSERT INTO restaurantes (id_restaurante,nombre,id_lugar) VALUES (1,'Cuckoo',7);
INSERT INTO restaurantes (id_restaurante,nombre,id_lugar) VALUES (2,'Cuckoo Coffee',7);
INSERT INTO restaurantes (id_restaurante,nombre,id_lugar) VALUES (3,'CuckooBox',22);
INSERT INTO restaurantes (id_restaurante,nombre,id_lugar) VALUES (4,'Dellyful',21);

--INSERCIÓN EN TABLA SECCIONES
INSERT INTO secciones (id_seccion,nombre,id_restaurante) VALUES (1,'Desayunos',1);
INSERT INTO secciones (id_seccion,nombre,id_restaurante) VALUES (2,'Antojitos',1);
INSERT INTO secciones (id_seccion,nombre,id_restaurante) VALUES (3,'Platillos',1);
INSERT INTO secciones (id_seccion,nombre,id_restaurante) VALUES (4,'Cuckoo Coffee',2);
INSERT INTO secciones (id_seccion,nombre,id_restaurante) VALUES (5,'Base Café',3);
INSERT INTO secciones (id_seccion,nombre,id_restaurante) VALUES (6,'Alternativas sin Café',3);
INSERT INTO secciones (id_seccion,nombre,id_restaurante) VALUES (7,'Delyfull',4);

--INSERCIÓN EN LA TABLA SUBSECCIONES
\COPY subsecciones FROM 'Subsecciones.csv' WITH (FORMAT CSV, HEADER);

--INSERCIÓN EN LA TABLA PLATILLOS
\COPY platillos FROM 'Platillos.csv' WITH (FORMAT CSV, HEADER, NULL '');

--INSERCIÓN EN LA TABLA SABORES
\COPY sabores FROM 'Sabores.csv' WITH (FORMAT CSV, HEADER, NULL 'NULL');

--INSERCIÓN EN LA TABLA EXTRAS
\COPY extras FROM 'Extras.csv' WITH (FORMAT CSV, HEADER, NULL 'NULL');

--INSERCIÓN EN LA TABLA PLATILLOS_EXTRAS
\COPY platillos_extras FROM 'Platillos_extras.csv' WITH (FORMAT CSV, HEADER, NULL 'NULL');


SELECT ss.id_subseccion, ss.nombre, s.id_seccion, s.nombre
FROM subsecciones ss JOIN secciones s
ON (ss.id_seccion = s.id_seccion)
WHERE ss.id_seccion = 1;