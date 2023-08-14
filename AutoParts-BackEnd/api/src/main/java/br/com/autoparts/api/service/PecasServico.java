package br.com.autoparts.api.service;

import java.util.Base64;

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

    public ResponseEntity<?> cadastrarPecas(Pecas p){
            // Decodifica a imagem base64 para um array de bytes
            byte[] fotoBytes = Base64.getDecoder().decode(p.getFoto());
            p.setFoto(fotoBytes); // Atribui a imagem ao campo foto da instância de Pecas
            
            pecasRepositorio.save(p); // Salva a instância no banco de dados
            return new ResponseEntity<>(p, HttpStatus.CREATED);
    }
}
