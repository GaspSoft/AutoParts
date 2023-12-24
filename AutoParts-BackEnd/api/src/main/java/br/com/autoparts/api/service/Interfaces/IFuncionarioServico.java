package br.com.autoparts.api.service.Interfaces;

import org.springframework.http.ResponseEntity;

import br.com.autoparts.api.model.Funcionario;

public interface IFuncionarioServico {
     ResponseEntity<?> cadastrarFuncionario(Funcionario funcionario);
     ResponseEntity<?> alterarFuncionario(Funcionario funcionario);
     ResponseEntity<?> listarFuncionarios();
     ResponseEntity<?> deletarFuncionario(Integer id);
     ResponseEntity<?> ListarPorId(Integer id);
}
