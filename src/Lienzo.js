import React, {Component} from 'react';
import Articulos from './Articulos';
import Pedidos from './Pedidos';
import Bebidas from './Bebidas';

class Lienzo extends Component {
    render(){
        return (
            <div className="container">
                <div className="jumbotron">
                <h2>Nombre de tienda</h2>
                </div>
                
                <div className="row">
                <Bebidas />
                <Pedidos />
                </div>
            </div>
        )
    }
}

export default Lienzo;