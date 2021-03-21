var Bicicleta = function(id, modelo, color, ubicacion){
    this.id = id;
    this.modelo = modelo;
    this.color = color;
    this.ubicacion = ubicacion;
}

//Declaro un array de bicicletas
Bicicleta.allBicis = [];

//Add function, agrego una bici al array de bicis
Bicicleta.add = function(aBici){
    Bicicleta.allBicis.push(aBici);
}

//Funcion para Buscar bici por ID
Bicicleta.findById = function(aBiciId){
    //busco en el array de bicicletas, si el ID coincide con alguno existente
    var aBici = Bicicleta.allBicis.find(x => x.id == aBiciId);
    
    //Si existe, retorno bici sino tiro una exception
    if(aBici){
        return aBici;
    }else{
        console.log(aBiciId);
        throw new Error(`No existe una bicicleta con el id ${aBiciId}`);
    }
}

//Funcion para eliminar una Bici por ID, Tomo un ID y si
// coincide con el de una bici, elimino esa bici 
Bicicleta.removeById = function(aBiciId){
    for (let i = 0; i < Bicicleta.allBicis.length; i++) {

        //Si existe, elimino la bici sino tiro una exception
        if(Bicicleta.allBicis[i].id == aBiciId){
            Bicicleta.allBicis.splice(i, 1);
            break;
        }
    }
}

var biciUno = new Bicicleta(1, "mountanBike", "negro", [-34.823967, -58.441790]);
var biciDos = new Bicicleta(2, "playera", "roja", [-34.823148, -58.441060]);

Bicicleta.add(biciUno);
Bicicleta.add(biciDos);

module.exports = Bicicleta;