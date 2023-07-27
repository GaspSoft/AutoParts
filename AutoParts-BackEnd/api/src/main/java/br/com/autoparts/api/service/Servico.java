package br.com.autoparts.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.autoparts.api.model.Cliente;
import br.com.autoparts.api.model.Endereco;
import br.com.autoparts.api.model.Retorno;
import br.com.autoparts.api.repository.ClienteRepositorio;
import br.com.autoparts.api.repository.EnderecoRepositorio;

@Service
public class Servico {

    @Autowired
    private Retorno retorno;

    @Autowired
    private ClienteRepositorio clienteRepositorio;

    @Autowired
    private EnderecoRepositorio enderecoRepositorio;
    
    // Método para cadastrar endereços
    // public ResponseEntity<?> cadastrarEndereço(Endereco e){
    //    enderecoRepositorio.save(e);
    //    return new ResponseEntity<>(enderecoRepositorio.save(e), HttpStatus.CREATED);
    //}

    public ResponseEntity<?> cadastrarCliente(Cliente cliente){
    // Verifica se o endereço foi fornecido no JSON
    if (cliente.getEndereco() != null) {
        // Salva primeiro o endereço no banco de dados
        enderecoRepositorio.save(cliente.getEndereco());
        clienteRepositorio.save(cliente);   

        return new ResponseEntity<>(cliente, HttpStatus.CREATED);
    } else{    
        retorno.setMensagem("Nenhum endereço foi associado!");
        return new ResponseEntity<>(retorno, HttpStatus.BAD_REQUEST);
    }

    
}

    
}
