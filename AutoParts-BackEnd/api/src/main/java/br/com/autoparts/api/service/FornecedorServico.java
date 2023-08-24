package br.com.autoparts.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

    public ResponseEntity<?> cadastrarFornecedor(Fornecedor f) {

        if (f.getCnpj() == null) {
            retorno.setMensagem("Insira o CNPJ da empresa.");
            return ResponseEntity.badRequest().body(retorno);
        }
        if(f.getNome() == null || f.getNome().isEmpty()) {
            retorno.setMensagem("Insira o nome da empresa.");
            return ResponseEntity.badRequest().body(retorno);
        }

        if (f.getCnpj() != null) {
            List<Fornecedor> fornecedoresByCnpj = fornecedorRepositorio.findByCnpj(f.getCnpj());
            if (!fornecedoresByCnpj.isEmpty()) {
                retorno.setMensagem("CNPJ já cadastrado.");
                return ResponseEntity.badRequest().body(retorno);
            } else {
                retorno.setMensagem("Fornecedor cadastrado com sucesso.");
                fornecedorRepositorio.save(f);
                return ResponseEntity.ok(f);
            }
        } else {
            retorno.setMensagem("O CNPJ do fornecedor é nulo.");
            return ResponseEntity.badRequest().body(retorno);
        }
    }

    public List<Fornecedor> listarTodos() {
        return fornecedorRepositorio.findAll();
    }

    public ResponseEntity<?> deletarFornecedor(Integer fornecedor_id) {
        if (fornecedor_id != null) {
            fornecedorRepositorio.deleteById(fornecedor_id);
            retorno.setMensagem("Fornecedor deletado com sucesso.");
            return ResponseEntity.ok(retorno);
        } else {
            retorno.setMensagem("O ID do fornecedor é nulo.");
            return ResponseEntity.badRequest().body(retorno);
        }
    }

    public ResponseEntity<?> selecionarPorID(Integer fornecedor_id) {
        if (fornecedor_id != null) {
            Fornecedor fornecedor = fornecedorRepositorio.findById(fornecedor_id).get();
            return ResponseEntity.ok(fornecedor);
        } else {
            retorno.setMensagem("O ID do fornecedor é nulo.");
            return ResponseEntity.badRequest().body(retorno);
        }
    }

    public ResponseEntity<?> alterarFornecedor(Fornecedor f) {
        if (f.getFornecedor_id() != null) {
            Fornecedor fornecedor = fornecedorRepositorio.findById(f.getFornecedor_id()).get();
            if (fornecedor == null) {
                retorno.setMensagem("Forcedor não encontrado.");
                return ResponseEntity.badRequest().body(retorno);
            } else {
                retorno.setMensagem("Fornecedor alterado com sucesso.");
                fornecedor.setNome(f.getNome());
                fornecedorRepositorio.save(fornecedor);
                return ResponseEntity.ok(fornecedor);
            }
        } else {
            retorno.setMensagem("O Id do fornecedor é nulo.");
            return ResponseEntity.badRequest().body(retorno);
        }
    }

}
