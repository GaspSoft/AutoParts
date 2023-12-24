package br.com.autoparts.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.autoparts.api.model.Fornecedor;
import br.com.autoparts.api.model.Pecas;
import br.com.autoparts.api.model.Retorno;
import br.com.autoparts.api.repository.FornecedorRepositorio;
import br.com.autoparts.api.service.Interfaces.IFornecedorServico;;
@Service
public class FornecedorServico implements IFornecedorServico{
    @Autowired
    private Retorno retorno;

    @Autowired
    private FornecedorRepositorio repository;

    @Autowired
    private PecasServico pecasService;

    public ResponseEntity<?> cadastrarFornecedor(Fornecedor f){

        if (f.getCnpj() == null) {
            retorno.setMensagem("Insira o CNPJ da empresa.");
            return ResponseEntity.badRequest().body(retorno);
        }
        if (f.getNome() == null || f.getNome().isEmpty()) {
            retorno.setMensagem("Insira o nome da empresa.");
            return ResponseEntity.badRequest().body(retorno);
        }

        if (f.getCnpj() != null) {
            List<Fornecedor> fornecedoresByCnpj = repository.findByCnpj(f.getCnpj());
            if (!fornecedoresByCnpj.isEmpty()) {
                retorno.setMensagem("CNPJ já cadastrado.");
                return ResponseEntity.badRequest().body(retorno);
            } else {
                retorno.setMensagem("Fornecedor cadastrado com sucesso.");
                repository.save(f);
                return ResponseEntity.ok(f);
            }
        } else {
            retorno.setMensagem("O CNPJ do fornecedor é nulo.");
            return ResponseEntity.badRequest().body(retorno);
        }
    }

    public ResponseEntity<?> listarTodos() {
        return ResponseEntity.ok(repository.findAll());
    }

    public ResponseEntity<?> deletarFornecedor(Integer fornecedor_id) {
        Fornecedor fornecedor = repository.findById(fornecedor_id).get();
        List<Pecas> pecasListFornecedor = pecasService.listarPorFornecedor(fornecedor);
        if (!pecasListFornecedor.isEmpty()) {
            retorno.setMensagem("Não é possível deletar o fornecedor, pois existem peças cadastradas.");
            return ResponseEntity.badRequest().body(retorno);
        } else {

            retorno.setMensagem("Fornecedor deletado com sucesso.");
            repository.delete(fornecedor);
            return ResponseEntity.ok(fornecedor);
        }

    }

    public ResponseEntity<?> selecionarPorID(Integer fornecedor_id) {
        if (fornecedor_id != null) {
            Fornecedor fornecedor = repository.findById(fornecedor_id).get();
            return ResponseEntity.ok(fornecedor);
        } else {
            retorno.setMensagem("O ID do fornecedor é nulo.");
            return ResponseEntity.badRequest().body(retorno);
        }
    }

    public ResponseEntity<?> alterarFornecedor(Fornecedor f) {
        if (f.getId() != null) {
            Fornecedor fornecedor = repository.findById(f.getId()).get();
            if (fornecedor == null) {
                retorno.setMensagem("Forcedor não encontrado.");
                return ResponseEntity.badRequest().body(retorno);
            } else {
                if (f.getCnpj() == null) {
                    retorno.setMensagem("Insira o CNPJ da empresa.");
                    return ResponseEntity.badRequest().body(retorno);
                }
                if (f.getNome() == null || f.getNome().isEmpty()) {
                    retorno.setMensagem("Insira o nome da empresa.");
                    return ResponseEntity.badRequest().body(retorno);
                }
                retorno.setMensagem("Fornecedor alterado com sucesso.");
                fornecedor.setNome(f.getNome());
                repository.save(fornecedor);
                return ResponseEntity.ok(fornecedor);
            }
        } else {
            retorno.setMensagem("O Id do fornecedor é nulo.");
            return ResponseEntity.badRequest().body(retorno);
        }
    }

}
