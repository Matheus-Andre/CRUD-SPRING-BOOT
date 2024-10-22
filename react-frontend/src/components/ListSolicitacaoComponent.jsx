import React, { Component } from 'react';
import SolicitacaoService from '../services/SolicitacaoService';

class ListSolicitacaoComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            solicitacoes: []
        };
        this.addSolicitacao = this.addSolicitacao.bind(this);
        this.editSolicitacao = this.editSolicitacao.bind(this);
        this.deleteSolicitacao = this.deleteSolicitacao.bind(this);
    }

    componentDidMount() {
        SolicitacaoService.getSolicitacoes().then((res) => {
            this.setState({ solicitacoes: res.data });
        });
    }

    addSolicitacao() {
        this.props.history.push('/add-solicitacao/_add');
    }

    editSolicitacao(id) {
        this.props.history.push(`/add-solicitacao/${id}`);
    }

    deleteSolicitacao(id) {
        SolicitacaoService.deleteSolicitacao(id).then((res) => {
            this.setState({ solicitacoes: this.state.solicitacoes.filter(solicitacao => solicitacao.id !== id) });
        });
    }

    viewSolicitacao(id) {
        this.props.history.push(`/view-solicitacao/${id}`);
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Lista de solicitações</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addSolicitacao}> Criar Solicitação</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> User ID</th>
                                <th> Analista ID</th>
                                <th> Data</th>
                                <th> Status</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.solicitacao.map(
                                    solicitacao =>
                                        <tr key={solicitacao.id}>
                                            <td> {solicitacao.user_id} </td>
                                            <td> {solicitacao.anl_id} </td>
                                            <td> {solicitacao.data} </td>
                                            <td> {solicitacao.status} </td>
                                            <td>
                                                <button onClick={() => this.editSolicitacao(solicitacao.id)} className="btn btn-info">Update </button>
                                                <button onClick={() => this.deleteSolicitacao(solicitacao.id)} className="btn btn-danger" style={{ marginLeft: "10px" }}>Delete </button>
                                                <button onClick={() => this.viewSolicitacao(solicitacao.id)} className="btn btn-info" style={{ marginLeft: "10px" }}>View </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListSolicitacaoComponent;