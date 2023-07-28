package br.com.autoparts.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.autoparts.api.model.Cliente;

import br.com.autoparts.api.service.ClienteServico;

@RestController
public class ClienteControle {
    @Autowired
    private ClienteServico servico;

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

    @PutMapping("/cliente")
      public ResponseEntity<?> alterarCliente(@RequestBody Cliente c){
         return servico.alterarCliente(c);
     }

     @GetMapping("/cliente")
     public List<Cliente> todosClientes(){
        return servico.listarTodos();
     }

    // @DeleteMapping("/cliente")
    // public ResponseEntity<?> deletarCliente(@RequestBody Cliente c){
    //     return servico.deletarCliente(c);
    // }

}
