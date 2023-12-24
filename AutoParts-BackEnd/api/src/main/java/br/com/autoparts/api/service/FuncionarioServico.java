package br.com.autoparts.api.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.autoparts.api.model.Funcionario;
import br.com.autoparts.api.model.Retorno;
import br.com.autoparts.api.repository.FuncionarioRepositorio;
import br.com.autoparts.api.service.Interfaces.IFuncionarioServico;

@Service
public class FuncionarioServico implements IFuncionarioServico{
    @Autowired
    private FuncionarioRepositorio repository;
    @Autowired
    private Retorno retorno;

    public ResponseEntity<?> cadastrarFuncionario(Funcionario funcionario) {
        if (funcionario.getCpf() == null) {
            retorno.setMensagem("Insira um CPF.");
            return ResponseEntity.badRequest().body(retorno);
        }
        if (funcionario.getNome() == null || funcionario.getNome().isEmpty()) {
            retorno.setMensagem("Insira um nome.");
            return ResponseEntity.badRequest().body(retorno);
        }
        if (funcionario.getEmail() == null || funcionario.getEmail().isEmpty()) {
            retorno.setMensagem("Insira um e-mail.");
            return ResponseEntity.badRequest().body(retorno);
        }
        if (funcionario.getSenha() == null || funcionario.getSenha().isEmpty()) {
            retorno.setMensagem("Insira uma senha.");
            return ResponseEntity.badRequest().body(retorno);
        }
        if (funcionario.getTipoPessoa() == null) {
            retorno.setMensagem("Insira um cargo.");
            return ResponseEntity.badRequest().body(retorno);
        }
        Optional<Funcionario> funcionariosByEmail = repository.findByEmail(funcionario.getEmail());
        if (!funcionariosByEmail.isEmpty() ){
             retorno.setMensagem("Email já registrado.");
            return ResponseEntity.badRequest().body(retorno);
        }
        Optional<Funcionario> funcionariosByCpf = repository.findByCpf(funcionario.getCpf());
        if (!funcionariosByCpf.isEmpty() ){
            retorno.setMensagem("CPF já registrado.");
            return ResponseEntity.badRequest().body(retorno);
        }
        
        retorno.setMensagem("Funcionário salvo com sucesso");
        return ResponseEntity.created(null).body(retorno);
    }

    public ResponseEntity<?> alterarFuncionario(Funcionario funcionario) {
        if (funcionario.getId() == null) {
            retorno.setMensagem("O identificador do funcionário não foi informado");

            return ResponseEntity.badRequest().body(retorno);
        } else if (repository.existsById(funcionario.getId())) {
            if (funcionario.getCpf() == null) {
                retorno.setMensagem("Insira um CPF.");
                return ResponseEntity.badRequest().body(retorno);
            }
            if (funcionario.getNome() == null || funcionario.getNome().isEmpty()) {
                retorno.setMensagem("Insira um nome.");
                return ResponseEntity.badRequest().body(retorno);
            }
            if (funcionario.getEmail() == null || funcionario.getEmail().isEmpty()) {
                retorno.setMensagem("Insira um e-mail.");
                return ResponseEntity.badRequest().body(retorno);
            }
            if (funcionario.getSenha() == null || funcionario.getSenha().isEmpty()) {
                retorno.setMensagem("Insira uma senha.");
                return ResponseEntity.badRequest().body(retorno);
            }
            if (funcionario.getTipoPessoa() == null) {
                retorno.setMensagem("Insira um cargo.");
                return ResponseEntity.badRequest().body(retorno);
            }
            return new ResponseEntity<>(repository.save(funcionario),HttpStatus.OK);
        }
        retorno.setMensagem("O identificador do funcionário não foi encontrado");
        return ResponseEntity.badRequest().body(retorno);

    }

    public ResponseEntity<?> listarFuncionarios() {
        return ResponseEntity.ok(repository.findAll());
    }

    public ResponseEntity<?> deletarFuncionario(Integer id) {
        if (id == null) {
            retorno.setMensagem("O identificador do funcionário não foi informado");

            return ResponseEntity.badRequest().body(retorno);
        } else if (repository.existsById(id)) {
            Funcionario funcionarioById = repository.findByFuncionarioId(id);
            repository.delete(funcionarioById);
            return (ResponseEntity<?>) ResponseEntity.ok();
        }
        retorno.setMensagem("O identificador do funcionário não foi encontrado");
        return ResponseEntity.badRequest().body(retorno);
    }

    public ResponseEntity<?> ListarPorId(Integer id) {
        if (id == null) {
            retorno.setMensagem("O identificador do funcionário não foi informado");

            return ResponseEntity.badRequest().body(retorno);
        } else if (repository.existsById(id)) {
            return ResponseEntity.ok(repository.findByFuncionarioId(id));
        }
        retorno.setMensagem("O identificador do funcionário não foi encontrado");
        return ResponseEntity.badRequest().body(retorno);
    }
}