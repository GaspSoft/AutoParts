package br.com.autoparts.api.controller.Interfaces;

import java.io.IOException;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import br.com.autoparts.api.model.Pecas;

public interface IPecaController {
     ResponseEntity<?> salvar(@RequestPart("peca") String pecaJson, @RequestPart("foto") MultipartFile foto) throws IOException;
     ResponseEntity<?> alterar(@RequestPart("peca") String pecaJson, @RequestPart("foto") MultipartFile foto) throws IOException;
    List<Pecas> listarTodos();
    ResponseEntity<?> listarPorId(@PathVariable Integer pecas_id);
    ResponseEntity<?> deletar(@PathVariable Integer pecas_id);
}
