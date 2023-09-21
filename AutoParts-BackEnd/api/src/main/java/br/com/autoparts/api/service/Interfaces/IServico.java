package br.com.autoparts.api.service.Interfaces;

import java.security.SignatureException;

import org.springframework.http.ResponseEntity;

import br.com.autoparts.api.model.Pessoa;

public interface IServico {
    ResponseEntity<?> verificarUser(Pessoa p);
    ResponseEntity<?> geraToken(Pessoa p);
    ResponseEntity<?> validarToken(String token) throws SignatureException;
}
