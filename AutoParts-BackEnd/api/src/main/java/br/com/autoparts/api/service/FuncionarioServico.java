package br.com.autoparts.api.service;

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

    public ResponseEntity<?> cadastrarFuncionario(Funcionario obj) {
        if (obj.getNome().equals("")) {
            retorno.setMensagem("Nome Inválido!");

            return new ResponseEntity<>(retorno, HttpStatus.BAD_REQUEST);
        }
        //// validação de idade pode ser feita com um date type;
        if (obj.getEmail().equals("")) {
            retorno.setMensagem("Email Inválido");
            return new ResponseEntity<>(retorno, HttpStatus.BAD_REQUEST);
        }
        if (obj.getSenha().equals("")) {
            retorno.setMensagem("senha Inválida");
            return new ResponseEntity<>(retorno, HttpStatus.BAD_REQUEST);
        }
        //// fazer validação de cpf;
        if (obj.getCpf() == null) {
            retorno.setMensagem("senha Inválida");
            return new ResponseEntity<>(retorno, HttpStatus.BAD_REQUEST);
        } else {

            return new ResponseEntity<>(repoFunc.save(obj), HttpStatus.CREATED);
        }
    }

    public ResponseEntity<?> alterarFuncionario(Funcionario obj) {
        if (obj.getFuncionario_id() == null) {
            retorno.setMensagem("ID não informado");

            return new ResponseEntity<>(retorno, HttpStatus.BAD_REQUEST);
        } else if (repoFunc.existsById(obj.getFuncionario_id())) {
            cadastrarFuncionario(obj);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        retorno.setMensagem("ID não existente");
        return new ResponseEntity<>(retorno, HttpStatus.BAD_REQUEST);

    }
    public ResponseEntity<?> listarFuncionarios (){

        return  new ResponseEntity<>(repoFunc.findAll(), HttpStatus.OK);
        
    }
    public ResponseEntity<?> deletarFuncionario (Integer obj){
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
    public ResponseEntity<?> ListarPorId (Integer id){
        if (id == null) {
            retorno.setMensagem("ID não informado");

            return new ResponseEntity<>(retorno, HttpStatus.BAD_REQUEST);
        } else if (repoFunc.existsById(id)) {
            
            return new ResponseEntity<>(repoFunc.findByFuncionarioId(id),HttpStatus.OK);
        }
        retorno.setMensagem("ID não existente");
        return new ResponseEntity<>(retorno, HttpStatus.BAD_REQUEST);
    }




}