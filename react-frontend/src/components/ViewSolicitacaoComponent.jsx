import React, { Component } from 'react';
import SolicitacaoService from '../services/SolicitacaoService';

class ViewSolicitacaoComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            solicitacao: {}
        };
    }

    componentDidMount() {
        SolicitacaoService.getSolicitacaoById(this.state.id).then((res) => {
            this.setState({ solicitacao: res.data });
        });
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Solicitação Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> User ID: </label>
                            <div> {this.state.solicitacao.user_id}</div>
                        </div>
                        <div className="row">
                            <label> Analista ID: </label>
                            <div> {this.state.solicitacao.anl_id}</div>
                        </div>
                        <div className="row">
                            <label> Data: </label>
                            <div> {this.state.solicitacao.data}</div>
                        </div>
                        <div className="row">
                            <label> Status: </label>
                            <div> {this.state.solicitacao.status}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewSolicitacaoComponent;