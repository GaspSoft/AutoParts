package br.com.autoparts.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseStatus;

import br.com.autoparts.api.model.Funcionario;
import br.com.autoparts.api.model.Pessoa;
import br.com.autoparts.api.model.Retorno;
import br.com.autoparts.api.repository.FuncionarioRepositorio;

@Service
public class FuncionarioServices {
    @Autowired
    private FuncionarioRepositorio repoFunc;
    @Autowired
    private Retorno retorno;

    public ResponseEntity<?> cadastrarFuncionario(Funcionario obj) {
        if (obj.getNome().equals("")) {
            retorno.setMensagem("Nome Inválido!");

            return new ResponseEntity<>(retorno,HttpStatus.BAD_REQUEST);
        }
        ////validação de idade pode ser feita com um date type;
        if (obj.getDataNasc() < 0) {
            retorno.setMensagem("Idade Inválida");
            return new ResponseEntity<>(retorno, HttpStatus.BAD_REQUEST);
        } 
        if (obj.getEmail().equals("")){
            retorno.setMensagem("Email Inválido");
            return new ResponseEntity<>(retorno, HttpStatus.BAD_REQUEST);
        }
        if (obj.getSenha().equals("")){
            retorno.setMensagem("senha Inválida");
            return new ResponseEntity<>(retorno, HttpStatus.BAD_REQUEST);
        }
        ////fazer validação de cpf;
          if (obj.getCpf() == null){
            retorno.setMensagem("senha Inválida");
            return new ResponseEntity<>(retorno, HttpStatus.BAD_REQUEST);
        }
        else {
            
            return new ResponseEntity<>(repoFunc.save(obj), HttpStatus.CREATED);
        }

}
}
