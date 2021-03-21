var express = require("express");
var router = express.Router();
var bicicletasController = require("../../controllers/api/bicicletaControllerAPI"); 

router.get('/', bicicletasController.bicicleta_list);
router.post('/alta', bicicletasController.bicicleta_create);
router.post('/modificar', bicicletasController.bicicleta_update);
router.delete('/baja', bicicletasController.bicicleta_delete);

module.exports = router;