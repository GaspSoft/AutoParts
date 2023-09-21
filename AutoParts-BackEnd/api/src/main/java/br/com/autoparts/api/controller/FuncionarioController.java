package br.com.autoparts.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import br.com.autoparts.api.controller.Interfaces.IFuncionarioController;
import br.com.autoparts.api.model.Funcionario;
import br.com.autoparts.api.service.FuncionarioServico;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@CrossOrigin(origins = "*")
@RestController
public class FuncionarioController  implements IFuncionarioController{
    @Autowired
    FuncionarioServico funcionario;

    @PostMapping("/funcionario")
    public ResponseEntity<?> cadastrarFuncionario(@RequestBody Funcionario f) {

        return funcionario.cadastrarFuncionario(f);
    }

    @PutMapping("/funcionario")
    public ResponseEntity<?> alterarFuncionario(@RequestBody Funcionario f) {

        return funcionario.alterarFuncionario(f);
    }

    @GetMapping("/funcionario")
    public ResponseEntity<?> listarFuncionarios() {
        return funcionario.listarFuncionarios();
    }

    @GetMapping("/funcionario/{id}")
    public ResponseEntity<?> selecionarioPorId(@PathVariable Integer id) {
        return funcionario.ListarPorId(id);
    }

    @DeleteMapping("/funcionario/{id}")
    public ResponseEntity<?> deletaPorId(@PathVariable Integer id) {

        return funcionario.deletarFuncionario(id);
    }
}
