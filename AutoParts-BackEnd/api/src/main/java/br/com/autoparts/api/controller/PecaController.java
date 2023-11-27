package br.com.autoparts.api.controller;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;

import br.com.autoparts.api.controller.Interfaces.IPecaController;
import br.com.autoparts.api.model.Pecas;
import br.com.autoparts.api.service.PecasServico;

@CrossOrigin(origins = "*")
@RestController

public class PecaController implements IPecaController{
    
    @Autowired
    private PecasServico servico;

    @PostMapping(value = { "/pecas" }, consumes = { "multipart/form-data" })
    public ResponseEntity<?> salvar(@RequestPart("peca") String pecaJson,
                                     @RequestPart("foto") MultipartFile foto) throws IOException {
    
        ObjectMapper objectMapper = new ObjectMapper();
        Pecas peca = objectMapper.readValue(pecaJson, Pecas.class);
        if (foto != null) {
            peca.setFoto(foto.getBytes());
        }

        return servico.cadastrarPecas(peca);
        
    }

    @PutMapping(value = { "/pecas" }, consumes = { "multipart/form-data" })
    public ResponseEntity<?> alterar(@RequestPart("peca") String pecaJson,
                                     @RequestPart("foto") MultipartFile foto) throws IOException {
    
        ObjectMapper objectMapper = new ObjectMapper();
        Pecas peca = objectMapper.readValue(pecaJson, Pecas.class);

        if (foto != null) {
            peca.setFoto(foto.getBytes());
        }


        return servico.alterarPecas(peca);
        
    }

    @GetMapping("/pecas")
    public List<Pecas> listarTodos() {
        List<Pecas> pecasList = servico.listarTodos();

        for (Pecas peca : pecasList) {
            if (peca.getFoto() != null) {
                byte[] fotoBytes = peca.getFoto();
                String base64Foto = Base64.getEncoder().encodeToString(fotoBytes);
                peca.setBase64("\n"+base64Foto);
            }
        }
        return pecasList;
    }

    @GetMapping("/pecas/{pecas_id}")
    public ResponseEntity<?> listarPorId(@PathVariable Integer pecas_id) {
         List<Pecas> pecasList = servico.listarTodos();
        Pecas pecaExist = new Pecas();

        for (Pecas peca : pecasList) {
            if(peca.getPecas_id() == pecas_id){
                pecaExist = peca;
                byte[] fotoBytes = peca.getFoto();
                String base64Foto = Base64.getEncoder().encodeToString(fotoBytes);
                pecaExist.setBase64("\n"+base64Foto);

            }
        }
            return new ResponseEntity<>(pecaExist, HttpStatus.OK);  
    
    }

    @DeleteMapping("/pecas/{pecas_id}")
    public ResponseEntity<?> deletar(@PathVariable Integer pecas_id) {
        return servico.deletarPeca(pecas_id);
    }
    
}
