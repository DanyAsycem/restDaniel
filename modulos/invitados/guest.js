//aqui va el metodo para listar invitados
const { func } = require("../Configuracion/Config");
const dbCon = require("../Configuracion/Config");

function listaInvitados(req,res,next){
    dbCon.any('SELECT * FROM guest')
    .then(function(data){
        res.json({
            status:"ok",
            result:data,
            mensaje:"Lista de invitados ok"
        })
    })
}

function registrarInvitado(req, res, next){
    const query = "INSERT INTO guest (name, last_name, created_by, updated_by)" 
    + "VALUES ($[name], $[last_name], $[user_id], $[user_id])";
    dbCon.any(query, req.body)
    .then(function(data){
        res.json({
            status:"ok",
            result:data,
            mensaje:"Invitado registrado con éxito"
        })
    })
    .catch(function(errorbd){
        res.json({
            status:"error",
            result:"sin información",
            mensaje:errorbd

        })
    })
}

function eliminarInvitado(req, res, next){
    var guest_id = parseInt(req.params.id);
    dbCon.any("DELETE FROM guest WHERE name = $1", [guest_id])
    .then(function(data){
        res.json({
            status:"ok",
            result:"sin información",
            mensaje:"invitado eliminado con éxito"
        })    
    })
    .catch(function(errorbd){
        res.json({
            status:"error",
            result:"No se pudo eliminar",
            mensaje:errorbd
        })
    })
}


module.exports= {
    listaInvitados: listaInvitados,
    registrarInvitado: registrarInvitado,
    eliminarInvitado: eliminarInvitado
}