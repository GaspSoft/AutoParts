package br.com.autoparts.api.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.autoparts.api.model.Cliente;
import br.com.autoparts.api.model.Endereco;
import br.com.autoparts.api.model.Retorno;
import br.com.autoparts.api.repository.ClienteRepositorio;
import br.com.autoparts.api.repository.EnderecoRepositorio;

@Service
public class ClienteServico {

    @Autowired
    private Retorno retorno;

    @Autowired
    private ClienteRepositorio clienteRepositorio;

    @Autowired
    private EnderecoRepositorio enderecoRepositorio;
    
    public ResponseEntity<?> cadastrarCliente(Cliente cliente){
        // Verifica se o endereço foi fornecido no JSON
        if (cliente.getEndereco() != null) {
            // Salva primeiro o endereço no banco de dados
            enderecoRepositorio.save(cliente.getEndereco());
            clienteRepositorio.save(cliente);   

            return new ResponseEntity<>(cliente, HttpStatus.CREATED);
        } else{    
            retorno.setMensagem("Nenhum endereço foi associado!");
            return new ResponseEntity<>(retorno, HttpStatus.BAD_REQUEST);
        } 

    }
    
    public List<Cliente> listarTodos(){
        return clienteRepositorio.findAll();
    }

     public ResponseEntity<?> alterarCliente(Cliente cliente) {
        if (cliente.getCliente_id() == null) {
            retorno.setMensagem("ID do cliente não informado!");
            return new ResponseEntity<>(retorno, HttpStatus.BAD_REQUEST);
        }
    
        // Verifica se o cliente com o ID informado existe no repositório
        if (clienteRepositorio.existsById(cliente.getCliente_id())) {

            Cliente clienteExistente = clienteRepositorio.findByClienteId(cliente.getCliente_id());
    
            // Verifica se o cliente possui um endereço associado
                
                // Atualiza os dados do cliente com os novos dados
                clienteExistente.setCpf(cliente.getCpf());
                clienteExistente.setNome(cliente.getNome());
                clienteExistente.setEmail(cliente.getEmail());
                clienteExistente.setSenha(cliente.getSenha());
                clienteRepositorio.save(clienteExistente);
                return new ResponseEntity<>(clienteExistente, HttpStatus.OK);

            } 
        else {
            retorno.setMensagem("Cliente não encontrado!");
            return new ResponseEntity<>(retorno, HttpStatus.NOT_FOUND);
        }
    }

    // deletarCliente
    
}
