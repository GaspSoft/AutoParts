package br.com.autoparts.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.autoparts.api.model.Fornecedor;
import br.com.autoparts.api.model.Retorno;
import br.com.autoparts.api.repository.FornecedorRepositorio;

@Service
public class FornecedorServico {
    @Autowired
    private Retorno retorno;

    @Autowired
    private FornecedorRepositorio fornecedorRepositorio;

    public ResponseEntity<?> cadastrarFornecedor(Fornecedor f){
        if (f.getCnpj() != null) {
            List<Fornecedor> fornecedoresByCnpj = fornecedorRepositorio.findByCnpj(f.getCnpj());
            if (!fornecedoresByCnpj.isEmpty()) {
                retorno.setMensagem("CNPJ já cadastrado.");
                return ResponseEntity.badRequest().body(retorno);
            } else{
                retorno.setMensagem("Fornecedor cadastrado com sucesso.");
                fornecedorRepositorio.save(f);
                 return ResponseEntity.ok(f);
        }
        } else {
            retorno.setMensagem("O CNPJ do fornecedor é nulo.");
            return ResponseEntity.badRequest().body(retorno);
        }
    }

    public List<Fornecedor> listarTodos(){
        return fornecedorRepositorio.findAll();
    }

}
