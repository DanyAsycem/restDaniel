const dbCon = require("../Configuracion/config");

function listaStatus(req, res, next){
    dbCon.any('SELECT * FROM status_assistance')
    .then(function(data){
        res.json({
            status:"ok",
            resultado:data,
            mensaje:"Lista de Asistencia"
        })
    })
}

module.exports = {listaStatus:listaStatus}