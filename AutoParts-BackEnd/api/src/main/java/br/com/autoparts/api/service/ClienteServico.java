package br.com.autoparts.api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import br.com.autoparts.api.model.Cliente;
import br.com.autoparts.api.model.Endereco;
import br.com.autoparts.api.model.Retorno;
import br.com.autoparts.api.repository.ClienteRepositorio;
import br.com.autoparts.api.repository.EnderecoRepositorio;
import br.com.autoparts.api.service.Interfaces.IClienteServico;

@Service
public class ClienteServico implements IClienteServico{

    @Autowired
    private Retorno retorno;

    @Autowired
    private ClienteRepositorio clienteRepositorio;

    @Autowired
    private EnderecoRepositorio enderecoRepositorio;

 
    public ResponseEntity<?> cadastrarCliente(Cliente cliente){
        if (cliente.getEndereco() != null) {

            Optional<Cliente> clientesByEmail = clienteRepositorio.findByEmail(cliente.getEmail());
            List<Cliente> clientesBySenha = clienteRepositorio.findByCpf(cliente.getCpf());
            if(cliente.getCpf() == null) {
                retorno.setMensagem("Insira um CPF.");
                return new ResponseEntity<>(retorno, HttpStatus.BAD_REQUEST);
            }
            if(cliente.getNome() == null || cliente.getNome().isEmpty()) {
                retorno.setMensagem("Insira um nome.");
                return new ResponseEntity<>(retorno, HttpStatus.BAD_REQUEST);
            }
            if(cliente.getEmail() == null || cliente.getEmail().isEmpty()) {
                retorno.setMensagem("Insira um e-mail.");
                return new ResponseEntity<>(retorno, HttpStatus.BAD_REQUEST);
            }
            if(cliente.getSenha() == null || cliente.getSenha().isEmpty()) {
                retorno.setMensagem("Insira uma senha.");
                return new ResponseEntity<>(retorno, HttpStatus.BAD_REQUEST);
            }
            if(cliente.getEndereco().getCep() == null) {
                retorno.setMensagem("Insira um CEP.");
                return new ResponseEntity<>(retorno, HttpStatus.BAD_REQUEST);
            }
            if(cliente.getEndereco().getEstado() == null || cliente.getEndereco().getEstado().isEmpty()) {
                retorno.setMensagem("Insira um estado.");
                return new ResponseEntity<>(retorno, HttpStatus.BAD_REQUEST);
            }
            if(cliente.getEndereco().getCidade() == null || cliente.getEndereco().getCidade().isEmpty()) {
                retorno.setMensagem("Insira o nome da cidade.");
                return new ResponseEntity<>(retorno, HttpStatus.BAD_REQUEST);
            }
            if(cliente.getEndereco().getBairro() == null || cliente.getEndereco().getBairro().isEmpty()) {
                retorno.setMensagem("Insira o nome do bairro.");
                return new ResponseEntity<>(retorno, HttpStatus.BAD_REQUEST);
            }
            if(cliente.getEndereco().getRua() == null || cliente.getEndereco().getRua().isEmpty()) {
                retorno.setMensagem("Insira o nome da rua.");
                return new ResponseEntity<>(retorno, HttpStatus.BAD_REQUEST);
            }
            if(cliente.getEndereco().getNumero() == null) {
                retorno.setMensagem("Insira o número da residência.");
                return new ResponseEntity<>(retorno, HttpStatus.BAD_REQUEST);
            }
            if (!clientesByEmail.isEmpty() || !clientesBySenha.isEmpty()) {
                retorno.setMensagem("E-mail ou CPF já cadastrados.");
                return new ResponseEntity<>(retorno, HttpStatus.BAD_REQUEST);
            }
            
        
            enderecoRepositorio.save(cliente.getEndereco());
            cliente.setEndereco(cliente.getEndereco());
        
            clienteRepositorio.save(cliente);
        
            return new ResponseEntity<>(cliente, HttpStatus.CREATED);
        } else {
            retorno.setMensagem("O endereço do cliente é nulo.");
            return new ResponseEntity<>(retorno, HttpStatus.BAD_REQUEST);
        }
    }

    public List<Cliente> listarTodos() {
        return clienteRepositorio.findAll();
    }

    public ResponseEntity<?> alterarCliente(Cliente cliente) {
        if (cliente.getCliente_id() == null) {
            retorno.setMensagem("ID do cliente não informado!");
            return new ResponseEntity<>(retorno, HttpStatus.BAD_REQUEST);
        }

        if (clienteRepositorio.existsById(cliente.getCliente_id())) {

            Cliente clienteExistente = clienteRepositorio.findByClienteId(cliente.getCliente_id());


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

    public Cliente buscarClientePorId(Integer cliente_id) {
        return clienteRepositorio.findByClienteId(cliente_id);
    }

    

}
