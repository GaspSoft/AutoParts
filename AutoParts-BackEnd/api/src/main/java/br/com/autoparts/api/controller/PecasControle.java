package br.com.autoparts.api.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import br.com.autoparts.api.model.Pecas;
import br.com.autoparts.api.service.PecasServico;
import lombok.extern.slf4j.Slf4j;

@CrossOrigin(origins = "*")
@RestController
@Slf4j
public class PecasControle {
    
    @Autowired
    private PecasServico servico;

    @PostMapping(value = { "/pecas" }, consumes = { "multipart/form-data" })
    public ResponseEntity<?> salvar(@RequestPart("peca") String pecaJson,
                                     @RequestPart("foto") MultipartFile foto) throws IOException {
    
        // Converter o JSON da peça para um objeto Pecas
        ObjectMapper objectMapper = new ObjectMapper();
        Pecas peca = objectMapper.readValue(pecaJson, Pecas.class);

        // Salvar a imagem como array de bytes no objeto Pecas
        peca.setFoto(foto.getBytes());

        // Salvar o objeto Pecas no banco de dados usando o serviço
        return servico.cadastrarPecas(peca);
        
    }


    @GetMapping("/pecas")
    public List<Pecas> listarTodos() {
        return servico.listarTodos();
    }

    @GetMapping("/pecas/{id}")
    public ResponseEntity<?> listarPorId(Integer id) {
        return servico.buscarPeca(id);
    }
    
}
