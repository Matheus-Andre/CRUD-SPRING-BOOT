import React, { Component } from 'react';
import SolicitacaoService from '../services/SolicitacaoService';

class UpdateSolicitacaoComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            user_id: '',
            anl_id: '',
            data: '',
            status: 'PENDENTE'
        };
        this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
        this.changeAnlIdHandler = this.changeAnlIdHandler.bind(this);
        this.changeDataHandler = this.changeDataHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.updateSolicitacao = this.updateSolicitacao.bind(this);
    }

    componentDidMount() {
        SolicitacaoService.getSolicitacaoById(this.state.id).then((res) => {
            let solicitacao = res.data;
            this.setState({
                user_id: solicitacao.user_id,
                anl_id: solicitacao.anl_id,
                data: solicitacao.data,
                status: solicitacao.status
            });
        });
    }

    updateSolicitacao = (e) => {
        e.preventDefault();
        let solicitacao = {
            user_id: this.state.user_id,
            anl_id: this.state.anl_id,
            data: this.state.data,
            status: this.state.status
        };
        console.log('solicitacao => ' + JSON.stringify(solicitacao));
        console.log('id => ' + JSON.stringify(this.state.id));
        SolicitacaoService.updateSolicitacao(solicitacao, this.state.id).then((res) => {
            this.props.history.push('/solicitacoes');
        });
    };

    changeUserIdHandler = (event) => {
        this.setState({ user_id: event.target.value });
    };

    changeAnlIdHandler = (event) => {
        this.setState({ anl_id: event.target.value });
    };

    changeDataHandler = (event) => {
        this.setState({ data: event.target.value });
    };

    changeStatusHandler = (event) => {
        this.setState({ status: event.target.value });
    };

    cancel() {
        this.props.history.push('/solicitacoes');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Solicitação</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> User ID: </label>
                                        <input
                                            placeholder="User ID"
                                            name="user_id"
                                            className="form-control"
                                            value={this.state.user_id}
                                            onChange={this.changeUserIdHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label> Analista ID: </label>
                                        <input
                                            placeholder="Analista ID"
                                            name="anl_id"
                                            className="form-control"
                                            value={this.state.anl_id}
                                            onChange={this.changeAnlIdHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label> Data: </label>
                                        <input
                                            type="date"
                                            placeholder="Data"
                                            name="data"
                                            className="form-control"
                                            value={this.state.data}
                                            onChange={this.changeDataHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label> Status: </label>
                                        <select
                                            name="status"
                                            className="form-control"
                                            value={this.state.status}
                                            onChange={this.changeStatusHandler}
                                        >
                                            <option value="PENDENTE">PENDENTE</option>
                                            <option value="APROVADO">APROVADO</option>
                                            <option value="REJEITADO">REJEITADO</option>
                                        </select>
                                    </div>

                                    <button className="btn btn-success" onClick={this.updateSolicitacao}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateSolicitacaoComponent;