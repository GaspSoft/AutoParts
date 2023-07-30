package br.com.autoparts.api.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.autoparts.api.model.Funcionario;
import br.com.autoparts.api.model.Retorno;
import br.com.autoparts.api.repository.FuncionarioRepositorio;

@Service
public class FuncionarioServices {
    @Autowired
    private FuncionarioRepositorio repoFunc;
    @Autowired
    private Retorno retorno;

    public ResponseEntity<?> cadastrarFuncionario(Funcionario obj) {
   
            return new ResponseEntity<>(repoFunc.save(obj), HttpStatus.CREATED);
         }

    public ResponseEntity<?> alterarFuncionario(Funcionario obj){
       if (obj.getFuncionario_id()==null){
        retorno.setMensagem("ID não informado");
        
    return new ResponseEntity<>(retorno,HttpStatus.BAD_REQUEST);
    }
    else if(repoFunc.existsById(obj.getFuncionario_id()))
    {
     cadastrarFuncionario(obj);               
    }
return null;
}



}
