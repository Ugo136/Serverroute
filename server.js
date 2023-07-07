const { Router } = require('express');
const express = require ('express');
const app = express();

app.use(Router);

app.listen('3345',()=> console.log('Servidor rodando na porta:3345!'));