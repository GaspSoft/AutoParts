package br.com.autoparts.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.autoparts.api.model.Cliente;
import br.com.autoparts.api.model.Funcionario;
import br.com.autoparts.api.model.Pessoa;
import br.com.autoparts.api.model.Retorno;
import br.com.autoparts.api.repository.ClienteRepositorio;
import br.com.autoparts.api.repository.FuncionarioRepositorio;

@Service    
public class Servico {
    
    @Autowired
    private Retorno retorno;

    @Autowired
    private ClienteRepositorio clienteRepositorio;

    @Autowired
    private FuncionarioRepositorio funcionarioRepositorio;
 
    public ResponseEntity<?> verificarUser(Pessoa p) {
        if (p.getEmail() == null || p.getSenha() == null) {
            retorno.setMensagem("Valores de senha ou/e email nulo!");
            return new ResponseEntity<>(retorno.getMensagem(), HttpStatus.BAD_REQUEST);
        } else {
            List<Cliente> clienteByEmail = clienteRepositorio.findByEmail(p.getEmail());
            List<Cliente> clienteBySenha = clienteRepositorio.findBySenha(p.getSenha());

            if (!clienteByEmail.isEmpty() && !clienteBySenha.isEmpty()) {
                return new ResponseEntity<>(clienteByEmail.get(0), HttpStatus.OK);
            }

            List<Funcionario> funcionariosByEmail = funcionarioRepositorio.findByEmail(p.getEmail());
            List<Funcionario> funcionariosBySenha = funcionarioRepositorio.findBySenha(p.getSenha());

            if (!funcionariosByEmail.isEmpty() && !funcionariosBySenha.isEmpty()) {
                return new ResponseEntity<>(funcionariosByEmail.get(0), HttpStatus.OK);
            }

            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<?> verificarFuncionario(Pessoa p) {
        return null;
    }
}