import axios from 'axios';

const SOLICITACAO_API_BASE_URL = "http://localhost:8080/api/v1/solicitacao";

class SolicitacaoService {

    getSolicitacoes() {
        return axios.get(SOLICITACAO_API_BASE_URL);
    }

    createSolicitacao(solicitacao) {
        return axios.post(SOLICITACAO_API_BASE_URL, solicitacao);
    }

    getSolicitacaoById(solicitacaoId) {
        return axios.get(SOLICITACAO_API_BASE_URL + '/' + solicitacaoId);
    }

    updateSolicitacao(solicitacao, solicitacaoId) {
        return axios.put(SOLICITACAO_API_BASE_URL + '/' + solicitacaoId, solicitacao);
    }

    deleteSolicitacao(solicitacaoId) {
        return axios.delete(SOLICITACAO_API_BASE_URL + '/' + solicitacaoId);
    }
}

export default new SolicitacaoService();