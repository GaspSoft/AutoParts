package br.com.autoparts.api.controller.Interfaces;

import java.security.SignatureException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

import br.com.autoparts.api.model.Pessoa;
import jakarta.servlet.http.HttpServletRequest;

public interface IController {
    ResponseEntity<?> status();
    ResponseEntity<?> login(@RequestBody Pessoa p);
    ResponseEntity<?> logins(HttpServletRequest request) throws SignatureException;
}
