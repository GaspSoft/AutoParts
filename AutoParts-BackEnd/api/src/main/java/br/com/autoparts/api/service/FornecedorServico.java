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

    public ResponseEntity<?> cadastrarFornecedor(Fornecedor fornecedor){

        if (fornecedor.getCnpj() == null) {
            retorno.setMensagem("Insira o CNPJ da empresa.");
            return ResponseEntity.badRequest().body(retorno);
        }
        if (fornecedor.getNome() == null || fornecedor.getNome().isEmpty()) {
            retorno.setMensagem("Insira o nome da empresa.");
            return ResponseEntity.badRequest().body(retorno);
        }

        if (fornecedor.getCnpj() != null) {
            List<Fornecedor> fornecedoresByCnpj = repository.findByCnpj(fornecedor.getCnpj());
            if (!fornecedoresByCnpj.isEmpty()) {
                retorno.setMensagem("CNPJ já cadastrado.");
                return ResponseEntity.badRequest().body(retorno);
            } else {
                retorno.setMensagem("Fornecedor cadastrado com sucesso.");
                repository.save(fornecedor);
                return ResponseEntity.ok(fornecedor);
            }
        } else {
            retorno.setMensagem("O CNPJ do fornecedor é inválido.");
            return ResponseEntity.badRequest().body(retorno);
        }
    }

    public ResponseEntity<?> listarTodos() {
        return ResponseEntity.ok(repository.findAll());
    }

    public ResponseEntity<?> deletarFornecedor(Integer id) {
        Fornecedor fornecedorById = repository.findById(id).get();
        List<Pecas> pecasListFornecedor = pecasService.listarPorFornecedor(fornecedorById);
        if (!pecasListFornecedor.isEmpty()) {
            retorno.setMensagem("Não é possível deletar o fornecedor, pois existem peças cadastradas em seu nome.");
            return ResponseEntity.badRequest().body(retorno);
        } else {

            retorno.setMensagem("Fornecedor deletado com sucesso.");
            repository.delete(fornecedorById);
            return ResponseEntity.ok(fornecedorById);
        }

    }

    public ResponseEntity<?> selecionarPorID(Integer id) {
        if (id != null) {
            Fornecedor fornecedorById = repository.findById(id).get();
            return ResponseEntity.ok(fornecedorById);
        } else {
            retorno.setMensagem("O identificador do fornecedor é inválido.");
            return ResponseEntity.badRequest().body(retorno);
        }
    }

    public ResponseEntity<?> alterarFornecedor(Fornecedor fornecedor) {
        if (fornecedor.getId() != null) {
            Fornecedor fornecedorById = repository.findById(fornecedor.getId()).get();
            if (fornecedorById == null) {
                retorno.setMensagem("Forcedor não encontrado.");
                return ResponseEntity.badRequest().body(retorno);
            } else {
                if (fornecedor.getCnpj() == null) {
                    retorno.setMensagem("Insira o CNPJ da empresa.");
                    return ResponseEntity.badRequest().body(retorno);
                }
                if (fornecedor.getNome() == null || fornecedor.getNome().isEmpty()) {
                    retorno.setMensagem("Insira o nome da empresa.");
                    return ResponseEntity.badRequest().body(retorno);
                }
                retorno.setMensagem("Fornecedor alterado com sucesso.");
                fornecedorById.setNome(fornecedor.getNome());
                repository.save(fornecedorById);
                return ResponseEntity.ok(fornecedorById);
            }
        } else {
            retorno.setMensagem("O identificador do fornecedor é inválido.");
            return ResponseEntity.badRequest().body(retorno);
        }
    }

}
