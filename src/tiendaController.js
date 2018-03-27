import { extendObservable } from 'mobx';

class TiendaController {
    constructor(){
        extendObservable(this,
            {
                platillos: [
                    {
                        nombre: "primero",
                        descripcion: "platillo1",
                        precio: 100,
                        cantidad: 0
                    },
                    {
                        nombre: "segundo",
                        descripcion: "platillo2",
                        precio: 80,
                        cantidad: 0
                    }, 
                    {
                        nombre: "tercer",
                        descripcion: "platillo3",
                        precio: 20,
                        cantidad: 0
                    },
                ],
                bebidas: [
                    {
                        nombre: "bebida1",
                        descripcion: "bebida1",
                        precio: 54,
                        cantidad: 0
                    },
                    {
                        nombre: "bebida2",
                        descripcion: "bebida2",
                        precio:10,
                        cantidad: 0
                    },
                    {
                        nombre: "bebida3",
                        descripcion: "bebida3",
                        precio: 30,
                        cantidad: 0
                    },
                ]
            }
        )
    }

    ponerEnLaOrden(indice, cantidad){
        this.platillos.forEach((value, index) => {
            if(index===indice){
                this.platillos[index].cantidad = cantidad;
            }
        });
    };

    bebidasEnLaOrden(indice, cantidad){
        this.bebidas.forEach((value, index) => {
            if(index===indice){
                this.bebidas[index].cantidad = cantidad;
            }
        });
    }


}

var VarTiendaController = new TiendaController();

export default VarTiendaController;