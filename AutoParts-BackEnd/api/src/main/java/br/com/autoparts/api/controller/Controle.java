package br.com.autoparts.api.controller;

import java.security.SignatureException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException.BadRequest;

import br.com.autoparts.api.model.Pessoa;
import br.com.autoparts.api.service.Servico;
import jakarta.servlet.http.HttpServletRequest;

@CrossOrigin(origins = "*")
@RestController
public class Controle {

    @Autowired
    private Servico servico;
    @GetMapping("/status")
    public ResponseEntity<?> status(){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Pessoa p){
        return servico.geraToken(p);
    }

   @GetMapping("/login")
    public ResponseEntity<?> loginas(HttpServletRequest request) throws SignatureException{
        
        String authorizationHeader = request.getHeader("Authorization");

        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            // Se o cabeçalho de autorização existir e começar com "Bearer ",
            // você pode extrair o token JWT
            String token = authorizationHeader.substring(7); // Remove o "Bearer " do cabeçalho

            // Aqui, você pode processar o token JWT conforme necessário
            // Por exemplo, você pode verificar ou decodificar o token JWT
            // para acessar as informações do usuário

            return servico.validarToken(token);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        
    
        //return ;
    }
}
}

