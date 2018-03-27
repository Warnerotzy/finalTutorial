import React, { Component } from 'react';
import VarTiendaController from './tiendaController';
import Ordenar from './Ordenar';
import logo from "./logo.svg";
import './Articulos.css';

class Articulos extends Component {
    render(){

        let Articulos_div = [];

        const llenar_array_Articulos_div =
            VarTiendaController.Articulos.forEach(
                (value,index) => (
                    Articulos_div.push(
                        <div className="list-group-item" key={index}>
                            <div className="panel-body">
                                <img role="presentation" src={logo} className="ImagenArticulo"/>
                                <h2 className="TitleArticulo">{value.nombre}</h2>
                                <div className="DescripcionArticulo">{value.descripcion}</div>
                                <Ordenar precio={value.precio} indice={index} 
                                    hacerPedido={(indice, evento)=>{
                                        VarTiendaController.ponerEnLaOrden(indice, evento)
                                    }} 
                                />
                            </div>
                        </div>
                    )
                )
            );

        return(
            <div className="container col-md-6">
                <div>
                    <div className="panel panel-primary">
                        <div className="list-group Articulo-Menu">
                            {Articulos_div}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Articulos;