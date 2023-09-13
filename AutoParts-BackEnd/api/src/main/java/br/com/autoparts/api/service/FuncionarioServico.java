package br.com.autoparts.api.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.autoparts.api.model.Funcionario;
import br.com.autoparts.api.model.Retorno;
import br.com.autoparts.api.repository.FuncionarioRepositorio;

@Service
public class FuncionarioServico {
    @Autowired
    private FuncionarioRepositorio repoFunc;
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
        Optional<Funcionario> funcionariosByEmail = repoFunc.findByEmail(funcionario.getEmail());
        if (funcionariosByEmail !=null ){
             retorno.setMensagem("Email já registrado.");
            return ResponseEntity.badRequest().body(retorno);
        }
        Optional<Funcionario> funcionariosByCpf = repoFunc.findByCpf(funcionario.getCpf());
        if (funcionariosByCpf !=null ){
            retorno.setMensagem("CPF já registrado.");
            return ResponseEntity.badRequest().body(retorno);
        }
        return new ResponseEntity<>(repoFunc.save(funcionario), HttpStatus.CREATED);
    }

    public ResponseEntity<?> alterarFuncionario(Funcionario funcionario) {
        if (funcionario.getFuncionario_id() == null) {
            retorno.setMensagem("ID não informado");

            return new ResponseEntity<>(retorno, HttpStatus.BAD_REQUEST);
        } else if (repoFunc.existsById(funcionario.getFuncionario_id())) {
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
            cadastrarFuncionario(funcionario);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        retorno.setMensagem("ID não existente");
        return new ResponseEntity<>(retorno, HttpStatus.BAD_REQUEST);

    }

    public ResponseEntity<?> listarFuncionarios() {

        return new ResponseEntity<>(repoFunc.findAll(), HttpStatus.OK);

    }

    public ResponseEntity<?> deletarFuncionario(Integer obj) {
        if (obj == null) {
            retorno.setMensagem("ID não informado");

            return new ResponseEntity<>(retorno, HttpStatus.BAD_REQUEST);
        } else if (repoFunc.existsById(obj)) {
            Funcionario funcionario = repoFunc.findByFuncionarioId(obj);
            repoFunc.delete(funcionario);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        retorno.setMensagem("ID não existente");
        return new ResponseEntity<>(retorno, HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<?> ListarPorId(Integer id) {
        if (id == null) {
            retorno.setMensagem("ID não informado");

            return new ResponseEntity<>(retorno, HttpStatus.BAD_REQUEST);
        } else if (repoFunc.existsById(id)) {

            return new ResponseEntity<>(repoFunc.findByFuncionarioId(id), HttpStatus.OK);
        }
        retorno.setMensagem("ID não existente");
        return new ResponseEntity<>(retorno, HttpStatus.BAD_REQUEST);
    }

}