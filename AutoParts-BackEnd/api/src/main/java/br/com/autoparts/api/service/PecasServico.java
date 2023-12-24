package br.com.autoparts.api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.autoparts.api.model.Fornecedor;
import br.com.autoparts.api.model.Pecas;
import br.com.autoparts.api.model.Retorno;
import br.com.autoparts.api.repository.FornecedorRepositorio;
import br.com.autoparts.api.repository.PecasRepositorio;
import br.com.autoparts.api.service.Interfaces.IPecasService;

@Service
public class PecasServico implements IPecasService{
    @Autowired
    private Retorno retorno;
    @Autowired
    private PecasRepositorio pecasRepositorio;
    @Autowired
    private FornecedorRepositorio fornecedorRepositorio;

    public ResponseEntity<?> cadastrarPecas(Pecas pecas) {
        List<Fornecedor> fornecedorPorCnpj = fornecedorRepositorio.findByCnpj(pecas.getFornecedor().getCnpj());

        if (pecas.getNome() == null || pecas.getNome().isEmpty()) {
            retorno.setMensagem("Insira um nome.");
            return ResponseEntity.badRequest().body(retorno);
        }
        if (pecas.getDescricao() == null || pecas.getDescricao().isEmpty()) {
            retorno.setMensagem("Insira uma descrição.");
            return ResponseEntity.badRequest().body(retorno);
        }
        if (pecas.getQuantidade() == null) {
            retorno.setMensagem("Coloque uma quantidade de peças.");
            return ResponseEntity.badRequest().body(retorno);
        }
        if (pecas.getMarca() == null || pecas.getMarca().isEmpty()) {
            retorno.setMensagem("Insira uma marca.");
            return ResponseEntity.badRequest().body(retorno);
        }
        if (pecas.getAno() == null) {
            retorno.setMensagem("Insira um ano.");
            return ResponseEntity.badRequest().body(retorno);
        }
        if (pecas.getPreco() == null) {
            retorno.setMensagem("Insira um preço.");
            return ResponseEntity.badRequest().body(retorno);
        }
        if (pecas.getModelo() == null || pecas.getModelo().isEmpty()) {
            retorno.setMensagem("Insira uma modelo.");
            return ResponseEntity.badRequest().body(retorno);
        }
        if (pecas.getFornecedor() == null) {
            retorno.setMensagem("Insira um fornecedor");
            return ResponseEntity.badRequest().body(retorno);
        }
        if (fornecedorPorCnpj == null || fornecedorPorCnpj.isEmpty()) {
            retorno.setMensagem("Fornecedor não encontrado.");
            return ResponseEntity.badRequest().body(retorno);
        }

        Optional<Pecas> pecaExistenteOptional = pecasRepositorio.findById(pecas.getId());
        if (pecaExistenteOptional.isPresent()) {
            Pecas pecaExistente = pecaExistenteOptional.get();

            if (pecas.getFoto() == null || pecas.getFoto().length == 0 ) {
                pecas.setFoto(pecaExistente.getFoto());
            }
        }
        pecas.setFornecedor(fornecedorPorCnpj.get(0));
        pecasRepositorio.save(pecas);
        retorno.setMensagem("Peça salva com sucesso.");
        return new ResponseEntity<>(retorno, HttpStatus.CREATED);

    }

    public ResponseEntity<?> alterarPecas(Pecas p) {
        return cadastrarPecas(p);
    }

    public List<Pecas> listarTodos() {
        return pecasRepositorio.findAll();
    }

    public List<Pecas> listarPorFornecedor(Fornecedor fornecedor) {
        return pecasRepositorio.findByFornecedor(fornecedor);
    }

    public ResponseEntity<?> buscarPeca(Integer pecas_id) {

        Optional<Pecas> peca = pecasRepositorio.findById(pecas_id);
        if (peca.isPresent())
            return new ResponseEntity<>(peca.get(), HttpStatus.OK);
        else
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Peça não encontrada.");

    }

    public ResponseEntity<?> deletarPeca(Integer pecas_id) {
        Optional<Pecas> peca = pecasRepositorio.findById(pecas_id);
        if (peca.isPresent()) {
            pecasRepositorio.deleteById(pecas_id);
            retorno.setMensagem("Peça salva com sucesso.");
            return new ResponseEntity<>(retorno, HttpStatus.OK);
        } else
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Peça não encontrada.");
    }

    public void diminuirEstoque(Integer pecas_id) {
        Optional<Pecas> peca = pecasRepositorio.findById(pecas_id);
        if (peca.isPresent()) {
            Pecas p = peca.get();
            p.setQuantidade(p.getQuantidade() - 1);
            pecasRepositorio.save(p);
        }
    }

}
