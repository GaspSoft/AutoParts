package br.com.autoparts.api.service;

import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.autoparts.api.model.Pecas;
import br.com.autoparts.api.model.Retorno;
import br.com.autoparts.api.repository.PecasRepositorio;

@Service
public class PecasServico {
    @Autowired
    private Retorno retorno;
    @Autowired
    private PecasRepositorio pecasRepositorio;
  
    public ResponseEntity<?> cadastrarPecas(Pecas p) {
        try {
            if (p.getFoto() == null || p.getFoto().length == 0) {
                return ResponseEntity.badRequest().body("A imagem é obrigatória.");
            }
            
            byte[] fotoBytes = Base64.getDecoder().decode(p.getFoto());
            p.setFoto(fotoBytes);
            
            
            pecasRepositorio.save(p);
            return new ResponseEntity<>(p, HttpStatus.CREATED);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao cadastrar peça.");
        }
    }
    

    public List<Pecas> listarTodos() {
        List<Pecas> pecasList = pecasRepositorio.findAll();
        
        return pecasList;
    }
    
    
    
}
