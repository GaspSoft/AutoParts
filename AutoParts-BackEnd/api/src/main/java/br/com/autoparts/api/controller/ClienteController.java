package br.com.autoparts.api.controller;

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

import br.com.autoparts.api.controller.Interfaces.IClienteController;
import br.com.autoparts.api.model.Cliente;
import br.com.autoparts.api.model.Endereco;
import br.com.autoparts.api.service.ClienteServico;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/cliente")
public class ClienteController implements IClienteController {

    @Autowired
    private ClienteServico servico;

    // Cadastrar cliente
    @PostMapping()
    public ResponseEntity<?> cadastrarCliente(@RequestBody Cliente c){
        return servico.cadastrarCliente(c);
    }

    // Alterar cliente
    @PutMapping()
      public ResponseEntity<?> alterarCliente(@RequestBody Cliente c){
         return servico.alterarCliente(c);
     }

     // Listar todos os cliente
     @GetMapping()
     public ResponseEntity<?> todosClientes(){
        return servico.listarTodos();
     }

    // Deletar cliente
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletarCliente(@PathVariable Integer id){
        return servico.deletarCliente(id);
    }

    // Selecionar pelo id
    @GetMapping("/{id}")
    public ResponseEntity<?> selecionarPorId(@PathVariable Integer id){
        return servico.selecionarPorID(id);
    }

    // Alterar endereço
    @PutMapping("/{id}")
      public ResponseEntity<?> alterarEndereco(@PathVariable Integer id, @RequestBody Endereco e){
         return servico.editarEndereco(id, e);
    }

    
}
