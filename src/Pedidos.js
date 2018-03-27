import React, { Component } from 'react';
import VarTiendaController from './tiendaController';
import { observer } from 'mobx-react';

class Pedidos extends Component {
    render() {
        
        let ArticulosPedidos = [];
        let BebidasPedidos = [];
        
        const llenar_ArticulosPedidos =
            VarTiendaController.Articulos.forEach(
                (value, index) => {
                    if(value.cantidad != 0){
                        ArticulosPedidos.push(
                            <div className="list-group-item" key={index}>
                                <div className="panel-body">
                                    <h4>{value.nombre}</h4><br />
                                    <div className="APrecioCantidad">
                                        <span>Cantidad: {value.cantidad}</span>
                                        <span className="PrecioArticulo">
                                            Precio: {value.cantidad * value.precio}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }
            );

        const llenar_BebidasPedidos =
            VarTiendaController.bebidas.forEach(
                (value, index) => {
                    if(value.cantidad != 0){
                        BebidasPedidos.push(
                            <div className="list-group-item" key={index}>
                                <div className="panel-body">
                                    <h4>{value.nombre}</h4><br />
                                    <div className="APrecioCantidad">
                                        <span>Cantidad: {value.cantidad}</span>
                                        <span className="PrecioArticulo">
                                            Precio: {value.cantidad * value.precio}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                }
            );

        return (
            <div className="container col-md-6">
                <div>
                    <div className="panel panel-primary">
                        <div className="list-group Pedidos-Menu">
                            {/*ArticulosPedidos*/}
                            {BebidasPedidos}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default observer(Pedidos);