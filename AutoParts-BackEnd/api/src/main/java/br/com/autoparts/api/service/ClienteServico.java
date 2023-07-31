package br.com.autoparts.api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

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

    // Cadastra Cliente
    public ResponseEntity<?> cadastrarCliente(Cliente cliente){
        // Verifica se o endereço foi fornecido no JSON
        if (cliente.getEndereco() != null) {
            // Verifica se já existe um cliente com o mesmo e-mail ou CPF
            Optional<Cliente> clienteExistentePorEmail = clienteRepositorio.findByEmail(cliente.getEmail());
            Optional<Cliente> clienteExistentePorCpf = clienteRepositorio.findByCpf(cliente.getCpf());
        
            if (clienteExistentePorEmail.isPresent() || clienteExistentePorCpf.isPresent()) {
                // Cliente já existe com o mesmo e-mail ou CPF
                retorno.setMensagem("E-mail ou CPF já cadastrados.");
                return new ResponseEntity<>(retorno, HttpStatus.BAD_REQUEST);
            }
        
            // Salva primeiro o endereço no banco de dados
            enderecoRepositorio.save(cliente.getEndereco());
        
            // Associa o endereço ao cliente
            cliente.setEndereco(cliente.getEndereco());
        
            // Salva o cliente no banco de dados
            clienteRepositorio.save(cliente);
        
            return new ResponseEntity<>(cliente, HttpStatus.CREATED);
        } else {
            retorno.setMensagem("O endereço do cliente é nulo.");
            return new ResponseEntity<>(retorno, HttpStatus.BAD_REQUEST);
        }
         

    }

    // Lista todos os clientes
    public List<Cliente> listarTodos() {
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

        } else {
            retorno.setMensagem("Cliente não encontrado!");
            return new ResponseEntity<>(retorno, HttpStatus.NOT_FOUND);
        }
    }

    // Deleta todos os clientes
    public ResponseEntity<?> deletarCliente(Integer cliente_id) {
        if (clienteRepositorio.existsById(cliente_id)) {

            Cliente clienteExistente = clienteRepositorio.findByClienteId(cliente_id);
            clienteRepositorio.delete(clienteExistente);
            retorno.setMensagem("Deletado");

            return new ResponseEntity<>(retorno, HttpStatus.OK);
        } else {
            retorno.setMensagem("Nenhum cliente encontrado pelo id!");
            return new ResponseEntity<>(retorno, HttpStatus.NOT_FOUND);

        }

    }

    // Lista por id o cliente
    public ResponseEntity<?> selecionarPorID(Integer cliente_id) {
        if (clienteRepositorio.existsById(cliente_id)) {

            Cliente clienteExistente = clienteRepositorio.findByClienteId(cliente_id);

            return new ResponseEntity<>(clienteExistente, HttpStatus.OK);
        } else {
            retorno.setMensagem("Nenhum cliente encontrado pelo id!");
            return new ResponseEntity<>(retorno, HttpStatus.NOT_FOUND);

        }

    }

    // Edita o endereço pelo id do cliente
    public ResponseEntity<?> editarEndereco(Integer cliente_id, Endereco e) {

        if (clienteRepositorio.existsById(cliente_id)) {

            Cliente clienteExistente = clienteRepositorio.findByClienteId(cliente_id);
            clienteExistente.setEndereco(e);
            clienteRepositorio.save(clienteExistente);

            return new ResponseEntity<>(clienteExistente, HttpStatus.OK);
        } else {
            retorno.setMensagem("Nenhum cliente encontrado pelo id!");
            return new ResponseEntity<>(retorno, HttpStatus.NOT_FOUND);

        }

    }

}
