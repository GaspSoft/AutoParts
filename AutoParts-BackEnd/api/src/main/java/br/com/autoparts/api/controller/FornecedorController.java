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
import org.springframework.web.bind.annotation.RestController;

import br.com.autoparts.api.controller.Interfaces.IFornecedorController;
import br.com.autoparts.api.model.Fornecedor;
import br.com.autoparts.api.service.FornecedorServico;

@CrossOrigin(origins = "*")
@RestController
public class FornecedorController implements IFornecedorController {
    @Autowired
    private FornecedorServico servico;


    @PostMapping("/fornecedor")
    public ResponseEntity<?> cadastrarFornecedor(@RequestBody Fornecedor f){
        return servico.cadastrarFornecedor(f);
    }
    @GetMapping("/fornecedor")
    public ResponseEntity<?> todosFornecedores(){
        return servico.listarTodos();
    }

    @GetMapping("/fornecedor/{fornecedor_id}")
    public ResponseEntity<?> selecionarPorId(@PathVariable Integer fornecedor_id){
        return servico.selecionarPorID(fornecedor_id);
    }

    @DeleteMapping("/fornecedor/{fornecedor_id}")
    public ResponseEntity<?> deletarFornecedor(@PathVariable Integer fornecedor_id){
        
        return servico.deletarFornecedor(fornecedor_id);
    }
    
    @PutMapping("/fornecedor")
    public ResponseEntity<?> alterarFornecedor(@RequestBody Fornecedor f){
        return servico.alterarFornecedor(f);
    }
}
