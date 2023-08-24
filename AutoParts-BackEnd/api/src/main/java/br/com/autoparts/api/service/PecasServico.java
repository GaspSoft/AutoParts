package br.com.autoparts.api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.autoparts.api.DTO.PecaEstoqueDTO;
import br.com.autoparts.api.model.Fornecedor;
import br.com.autoparts.api.model.Pecas;
import br.com.autoparts.api.model.Retorno;
import br.com.autoparts.api.repository.FornecedorRepositorio;
import br.com.autoparts.api.repository.PecasRepositorio;

@Service
public class PecasServico {
    @Autowired
    private Retorno retorno;
    @Autowired
    private PecasRepositorio pecasRepositorio;
    @Autowired
    private FornecedorRepositorio fornecedorRepositorio;
  
    public ResponseEntity<?> cadastrarPecas(Pecas p) {
        List<Fornecedor> fornecedorPorCnpj = fornecedorRepositorio.findByCnpj(p.getFornecedor().getCnpj());

        if(fornecedorPorCnpj.isEmpty()) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Fornecedor não encontrado.");
        p.setFornecedor(fornecedorPorCnpj.get(0));
        
            pecasRepositorio.save(p);
            retorno.setMensagem("Peça salva com sucesso.");
            return new ResponseEntity<>(retorno, HttpStatus.CREATED);
        
    }

    public ResponseEntity<?> alterarPecas(Pecas p) {
        return cadastrarPecas(p);
    }


    public List<Pecas> listarTodos() {
         return pecasRepositorio.findAll();
    }

    public ResponseEntity<?> buscarPeca(Integer pecas_id) {
       
            Optional<Pecas> peca = pecasRepositorio.findById(pecas_id);
            if (peca.isPresent()) return new ResponseEntity<>(peca.get(), HttpStatus.OK);
            else return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Peça não encontrada.");
        
    }

    public ResponseEntity<?> deletarPeca(Integer pecas_id) {
        Optional<Pecas> peca = pecasRepositorio.findById(pecas_id);
        if (peca.isPresent()) {
            pecasRepositorio.deleteById(pecas_id);
            retorno.setMensagem("Peça salva com sucesso.");
            return new ResponseEntity<>(retorno, HttpStatus.OK);
        } else return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Peça não encontrada.");
    }

    public void diminuirEstoque(Integer estoque, Integer pecas_id) {
        Optional<Pecas> peca = pecasRepositorio.findById(pecas_id);
        if (peca.isPresent()) {
            PecaEstoqueDTO pecaEstoqueDTO = new PecaEstoqueDTO();
            Pecas p = peca.get();
            p.setQuantidade(p.getQuantidade() - estoque);
            pecasRepositorio.save(p);
        }
    }

    }
    
   
    
    

