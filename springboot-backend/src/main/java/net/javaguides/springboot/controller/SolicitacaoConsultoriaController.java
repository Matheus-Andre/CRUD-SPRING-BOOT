package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.entity.SolicitacaoConsultoria;
import net.javaguides.springboot.repository.SolicitacaoConsultoriaRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class SolicitacaoConsultoriaController {

    @Autowired
    private SolicitacaoConsultoriaRepository solicitacaoConsultoriaRepository;
    
    // get all solicitacoes
    @GetMapping("/solicitacao")
    public List<SolicitacaoConsultoria> getAllSolicitacoes(){
        return solicitacaoConsultoriaRepository.findAll();
    }        
    
    // create solicitacao rest api
    @PostMapping("/solicitacao")
    public SolicitacaoConsultoria createSolicitacao(@RequestBody SolicitacaoConsultoria solicitacao) {
        return solicitacaoConsultoriaRepository.save(solicitacao);
    }
    
    // get solicitacao by id rest api
    @GetMapping("/solicitacao/{id}")
    public ResponseEntity<SolicitacaoConsultoria> getSolicitacaoById(@PathVariable Long id) {
        SolicitacaoConsultoria solicitacao = solicitacaoConsultoriaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Solicitacao not exist with id :" + id));
        return ResponseEntity.ok(solicitacao);
    }
    
    // update solicitacao rest api
    @PutMapping("/solicitacao/{id}")
    public ResponseEntity<SolicitacaoConsultoria> updateSolicitacao(@PathVariable Long id, @RequestBody SolicitacaoConsultoria solicitacaoDetails){
        SolicitacaoConsultoria solicitacao = solicitacaoConsultoriaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Solicitacao not exist with id :" + id));
        
        solicitacao.setUser_id(solicitacaoDetails.getUser_id());
        solicitacao.setAnl_id(solicitacaoDetails.getAnl_id());
        solicitacao.setData(solicitacaoDetails.getData());
        solicitacao.setStatus(solicitacaoDetails.getStatus());
        
        SolicitacaoConsultoria updatedSolicitacao = solicitacaoConsultoriaRepository.save(solicitacao);
        return ResponseEntity.ok(updatedSolicitacao);
    }
    
    // delete solicitacao rest api
    @DeleteMapping("/solicitacao/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteSolicitacao(@PathVariable Long id){
        SolicitacaoConsultoria solicitacao = solicitacaoConsultoriaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Solicitacao not exist with id :" + id));
        
        solicitacaoConsultoriaRepository.delete(solicitacao);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}