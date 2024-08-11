const express = require('express');
const pessoas = require('./pessoasRoute.js');
const cursos = require('./cursosRoute.js');
const categorias = require('./categoriasRoute.js');

module.exports = app =>{
  app.use(
    express.json(),
    pessoas,
    categorias,
    cursos
  );
};
