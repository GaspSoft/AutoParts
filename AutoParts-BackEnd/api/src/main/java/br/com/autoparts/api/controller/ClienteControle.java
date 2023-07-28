package br.com.autoparts.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.autoparts.api.model.Cliente;
import br.com.autoparts.api.model.Endereco;
import br.com.autoparts.api.repository.ClienteRepositorio;
import br.com.autoparts.api.service.ClienteServico;

@RestController
public class ClienteControle {
    @Autowired
    private ClienteServico servico;

    // Status da API
    @GetMapping("/status")
    public ResponseEntity<?> status(){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // Cadastrar endereço
    // @PostMapping("/endereco")
    // public ResponseEntity<?> cadastrarEndereco(@RequestBody Endereco e){
    //     return servico.cadastrarEndereço(e);
    // }


    // Cadastrar cliente pelo serviço
    @PostMapping("/cliente")
    public ResponseEntity<?> cadastrarCliente(@RequestBody Cliente c){
        return servico.cadastrarCliente(c);
    }

    // @PutMapping("/cliente")
    //  public ResponseEntity<?> alterarCliente(@RequestBody Cliente c){
    //     return servico.alterarCliente(c);
    // }

    // @DeleteMapping("/cliente")
    // public ResponseEntity<?> deletarCliente(@RequestBody Cliente c){
    //     return servico.deletarCliente(c);
    // }

}
