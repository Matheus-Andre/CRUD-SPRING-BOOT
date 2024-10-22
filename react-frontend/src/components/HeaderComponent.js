import React, { Component } from 'react';
import logo from '../assets/financas.png'; // Adicione o logo na pasta assets
import '../custom.css'; // Importar o arquivo CSS personalizado

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header className="header">
                    <img src={logo} alt="Logo" className="header-logo" />
                    <div className="header-title">iFinanças</div>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;