package br.com.autoparts.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.autoparts.api.model.Pessoa;
import br.com.autoparts.api.model.Retorno;
import br.com.autoparts.api.repository.ClienteRepositorio;

@Service    
public class Servico {
    
    @Autowired
    private Retorno retorno;

    @Autowired
    private ClienteRepositorio clienteRepositorio;

    
    // Verifica o login 
    public ResponseEntity<?> verificarUser(Pessoa p){
        if(clienteRepositorio.findByEmail(p.getEmail()) == null && clienteRepositorio.findBySenha(p.getSenha()) == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else{
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
}
