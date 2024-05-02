const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const config        = require('./config');
const integrantes   = require('./modulos/integrantes/rutas');
const usuarios      = require('./modulos/usuarios/rutas');
const provincias    = require('./modulos/provincias/rutas');
const localidad     = require('./modulos/localidad/rutas');
const grupos        = require('./modulos/grupos/rutas');

const entrenamiento = require('./modulos/entrenamiento/rutas');


const auth = require('./modulos/auth/rutas');
const error = require('./red/errors');

const app = express();

//Midleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));



// Configuracion
app.set('port', config.app.port);

// Rutas
app.use('/api/Integrantes',     integrantes);
app.use('/api/Usuarios',        usuarios);
app.use('/api/Provincias',      provincias);
app.use('/api/Localidad',       localidad);
app.use('/api/Grupos',          grupos);
app.use('/api/Entrenamiento',   entrenamiento);

app.use('/api/Auth',            auth);
app.use(error);


module.exports = app;