import React, { Component } from 'react';


class Navegation extends Component {

    render() {
        return (
            <nav className="navbar navbar.dark bg-dark">
                <a href="" className="text-white">
                {this.props.title}
                <span className="badge badge-pill badge-light ml-2"> 
                {this.props.count}
                </span>
                </a>
                
            </nav>
        )
    }
}

export default  Navegation



//todos los componentes tienen un metodo llamado RENDER
