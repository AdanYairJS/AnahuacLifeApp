/*
IMPORTANTÍSIMO EJECUTAR LOS COMANDOS
npm install pg
npm install express
*/

const express=require('express');
const app=express();
const port = 3333;
const { Pool } = require('pg');

const bodyParser=require('body-parser'); 

app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json());

const config = 
{
    user: 'postgres',
    port: '5433',
    password: 'oracle',
    database: 'alife_prueba3',
    client_encoding: 'utf8',
    server_encoding: 'utf8',
    charset: 'utf8',
};

const pool = new Pool(config);

app.post('/lugares', async (req,res) =>{
    console.log('Consulta en LUGARES');
    const respuesta = await getLugares();
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.send(respuesta);
});

const getLugares = async () => {
    try
    {
        const res = await pool.query('SELECT * FROM lugares');
        const query = res.rows;
        // console.log(query);
        return query;
    }
    catch(e)
    {
        console.log(e);
        const error = e.toString();
        return error;
    }
};

app.post('/departamentos', async (req,res) =>{
    console.log('Consulta en DEPARTAMENTOS');
    const respuesta = await getDeptos();
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.send(respuesta);
});

const getDeptos = async () => {
    try
    {
        const res = await pool.query('SELECT d.id_depto AS id_depto, d.nombre AS nombre, d.correo AS correo, to_char(d.hora_ap1, \'HH:MIPM\') AS hora_ap1,to_char(d.hora_ci1, \'HH:MIPM\') AS hora_ci1,l.id_lugar AS id_lugar, l.nombre AS nombre_lugar FROM departamentos d JOIN lugares l ON d.id_lugar = l.id_lugar ORDER BY nombre ASC');
        const query = res.rows;
        console.log(query);
        return query;
    }
    catch(e)
    {
        console.log(e);
        const error = e.toString();
        return error;
    }
};

app.post('/trabajadores', async (req,res) =>{
    console.log('Consulta en TRABAJADORES');
    const { id_depto } = req.body;
    let arr = [id_depto];
    const respuesta = await getTrabajadores(arr);
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.send(respuesta);
});

const getTrabajadores = async (arr) => {
    try
    {
        const texto_consulta = 'SELECT nombre || \' \' || apellido_p || \' \' || apellido_m AS nombre, puesto, correo, imagen FROM trabajadores WHERE id_depto = $1 ORDER BY nombre';
        const res = await pool.query(texto_consulta,arr);
        const query = res.rows;
        console.log(query);
        return query;
    }
    catch(e)
    {
        console.log(e);
        const error = e.toString();
        return error;
    }
};

app.post('/tramites', async (req,res) =>{
    console.log('Consulta en TRAMITES');
    const { id_depto } = req.body;
    let arr = [id_depto];
    const respuesta = await getTramites(arr);
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.send(respuesta);
});

const getTramites = async (arr) => {
    try
    {
        // console.log(arr);
        const texto_consulta = 'SELECT nombre FROM tramites WHERE id_depto = $1 ORDER BY nombre';
        const res = await pool.query(texto_consulta,arr);
        const query = res.rows;
        console.log(query);
        // JSON.parse( JSON.stringify( query ) );
        return query;
    }
    catch(e)
    {
        console.log(e);
        const error = e.toString();
        return error;
    }
};

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});