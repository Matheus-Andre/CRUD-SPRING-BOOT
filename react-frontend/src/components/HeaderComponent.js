import React, { Component } from 'react';
import logo from '../assets/financas.png'; // Adicione o logo na pasta assets
import '../custom.css'; // Importar o arquivo CSS personalizado

class HeaderComponent extends Component {
    render() {
        return (
            <div>
<<<<<<< HEAD
                <header className="header">
                    <img src={logo} alt="Logo" className="header-logo" />
                    <div className="header-title">iFinanças</div>
=======
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="" className="navbar-brand">Employee Management App</a></div>
                    </nav>
>>>>>>> f1c5f80 (SolicitacaoConsultoria)
                </header>
            </div>
        );
    }
}

export default HeaderComponent;