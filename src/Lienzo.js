import React, {Component} from 'react';
import Platillos from './Platillos';
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
                <Platillos />
                <Pedidos />
                </div>
            </div>
        )
    }
}

export default Lienzo;