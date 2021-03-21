//Obtengo la entidad "Bicicleta" con todos sus atributos, propiedades y metodos
var Bicicleta = require('../../models/bicicleta');

exports.bicicleta_list = function(req, res){
    res.status(200).json({
        bicicletas: Bicicleta.allBicis
    })
}

exports.bicicleta_create = function(req, res){
    var auxBici = new Bicicleta(req.body.id, req.body.modelo, req.body.color);

    auxBici.ubicacion = [req.body.lat, req.body.lng];

    Bicicleta.add(auxBici);

    res.status(200).json({
        bicicleta: auxBici
    })
}

exports.bicicleta_update = function(req, res){
    var auxBici = Bicicleta.findById(req.body.id);
    
    auxBici.id = req.body.id;
    auxBici.modelo = req.body.modelo;
    auxBici.color = req.body.color;
    auxBici.ubicacion = [req.body.lat, req.body.lng];

    res.status(200).json({
        bicicleta: auxBici
    })
}

exports.bicicleta_delete = function(req, res){
    Bicicleta.removeById(req.body.id);

    res.status(204).send();
}
