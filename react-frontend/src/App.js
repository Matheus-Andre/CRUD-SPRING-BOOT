import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListSolicitacaoComponent from './components/ListSolicitacaoComponent';
import CreateSolicitacaoComponent from './components/CreateSolicitacaoComponent';
import ViewSolicitacaoComponent from './components/ViewSolicitacaoComponent';
import UpdateSolicitacaoComponent from './components/UpdateSolicitacaoComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent />
                <div className="container">
                    <Switch>
                        <Route path="/" exact component={ListSolicitacaoComponent}></Route>
                        <Route path="/solicitacoes" component={ListSolicitacaoComponent}></Route>
                        <Route path="/add-solicitacao/:id" component={CreateSolicitacaoComponent}></Route>
                        <Route path="/view-solicitacao/:id" component={ViewSolicitacaoComponent}></Route>
                        <Route path="/update-solicitacao/:id" component={UpdateSolicitacaoComponent}></Route>
                    </Switch>
                </div>
                <FooterComponent />
            </Router>
        </div>
    );
}

export default App;