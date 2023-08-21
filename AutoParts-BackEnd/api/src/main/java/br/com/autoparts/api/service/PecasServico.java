package br.com.autoparts.api.service;

import java.util.Base64;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;

import org.hibernate.mapping.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import br.com.autoparts.api.model.Fornecedor;
import br.com.autoparts.api.model.Funcionario;
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
            return new ResponseEntity<>(p, HttpStatus.CREATED);
        
    }
    

    public List<Pecas> listarTodos() {
         return pecasRepositorio.findAll();
    }

    public ResponseEntity<?> buscarPeca(Integer id) {
        try {
            Pecas peca = pecasRepositorio.findById(id).get();
            return new ResponseEntity<>(peca, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Peça não encontrada.");
        }
    }
    
   
    
    
}
