package br.com.autoparts.api.controller;

import java.security.SignatureException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.autoparts.api.controller.Interfaces.IController;
import br.com.autoparts.api.model.Pessoa;
import br.com.autoparts.api.service.Servico;

@CrossOrigin(origins = "*")
@RestController
public class Controle{

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
    public ResponseEntity<?> loginas(@RequestParam String token)  throws SignatureException {
        

       
         if(token != null){
            return servico.validarToken(token);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        
    
        //return ;
    }
}
}

