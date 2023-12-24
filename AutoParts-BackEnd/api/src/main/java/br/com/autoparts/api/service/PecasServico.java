package br.com.autoparts.api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
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
    private PecasRepositorio repository;
    @Autowired
    private FornecedorRepositorio fornecedorRepository;

    public ResponseEntity<?> cadastrarPecas(Pecas pecas) {
        List<Fornecedor> fornecedorPorCnpj = fornecedorRepository.findByCnpj(pecas.getFornecedor().getCnpj());

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

        Optional<Pecas> pecaExistenteOptional = repository.findById(pecas.getId());
        if (pecaExistenteOptional.isPresent()) {
            Pecas pecaExistente = pecaExistenteOptional.get();

            if (pecas.getFoto() == null || pecas.getFoto().length == 0 ) {
                pecas.setFoto(pecaExistente.getFoto());
            }
        }
        pecas.setFornecedor(fornecedorPorCnpj.get(0));
        repository.save(pecas);
        retorno.setMensagem("Peça salva com sucesso.");
        return ResponseEntity.created(null).body(retorno);

    }

    public ResponseEntity<?> alterarPecas(Pecas peca) {
        return cadastrarPecas(peca);
    }

    public List<Pecas> listarTodos() {
        return repository.findAll();
    }

    public List<Pecas> listarPorFornecedor(Fornecedor fornecedor) {
        return repository.findByFornecedor(fornecedor);
    }

    public ResponseEntity<?> buscarPeca(Integer id) {

        Optional<Pecas> peca = repository.findById(id);
        if (peca.isPresent()) {
            return ResponseEntity.ok(peca.get());
        } else {
            retorno.setMensagem("Peça não encontrada.");
            return ((BodyBuilder) ResponseEntity.notFound()).body(retorno);
        }           
    }

    public ResponseEntity<?> deletarPeca(Integer id) {
        Optional<Pecas> peca = repository.findById(id);
        if (peca.isPresent()) {
            repository.deleteById(id);
            retorno.setMensagem("Peça salva com sucesso.");
            return ResponseEntity.ok(retorno);
        } else {
            retorno.setMensagem("Peça não encontrada.");
            return ((BodyBuilder) ResponseEntity.notFound()).body(retorno);
        }
    }

    public void diminuirEstoque(Integer id) {
        Optional<Pecas> peca = repository.findById(id);
        if (peca.isPresent()) {
            Pecas p = peca.get();
            p.setQuantidade(p.getQuantidade() - 1);
            repository.save(p);
        }
    }

}
