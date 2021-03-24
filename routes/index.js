var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//aqui definimos el endpoint (la url para acceder al recurso listarInvitados)
const invitados= require("../modulos/invitados/guest");
router.get('/v1/guest', invitados.listaInvitados)
router.post('/v1/guest', invitados.registrarInvitado)
router.delete('/v1/guest', invitados.eliminarInvitado)

//Métodos para usuarios
const usuarios = require("../modulos/usuarios/usuarios");
router.get('/v1/user', usuarios.listaUsuarios)

const status = require("../modulos/estatus/status");
const { registrarInvitado } = require('../modulos/invitados/guest');
router.get('/v1/status', status.listaStatus)
module.exports = router;
