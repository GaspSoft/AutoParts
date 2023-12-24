package br.com.autoparts.api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
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
                return ResponseEntity.badRequest().body(retorno);
            }
            if(cliente.getNome() == null || cliente.getNome().isEmpty()) {
                retorno.setMensagem("Insira um nome.");
                return ResponseEntity.badRequest().body(retorno);
            }
            if(cliente.getEmail() == null || cliente.getEmail().isEmpty()) {
                retorno.setMensagem("Insira um e-mail.");
                return ResponseEntity.badRequest().body(retorno);
            }
            if(cliente.getSenha() == null || cliente.getSenha().isEmpty()) {
                retorno.setMensagem("Insira uma senha.");
                return ResponseEntity.badRequest().body(retorno);
            }
            if(cliente.getEndereco().getCep() == null) {
                retorno.setMensagem("Insira um CEP.");
                return ResponseEntity.badRequest().body(retorno);
            }
            if(cliente.getEndereco().getEstado() == null || cliente.getEndereco().getEstado().isEmpty()) {
                retorno.setMensagem("Insira um estado.");
                return ResponseEntity.badRequest().body(retorno);
            }
            if(cliente.getEndereco().getCidade() == null || cliente.getEndereco().getCidade().isEmpty()) {
                retorno.setMensagem("Insira o nome da cidade.");
                return ResponseEntity.badRequest().body(retorno);
            }
            if(cliente.getEndereco().getBairro() == null || cliente.getEndereco().getBairro().isEmpty()) {
                retorno.setMensagem("Insira o nome do bairro.");
                return ResponseEntity.badRequest().body(retorno);
            }
            if(cliente.getEndereco().getRua() == null || cliente.getEndereco().getRua().isEmpty()) {
                retorno.setMensagem("Insira o nome da rua.");
                return ResponseEntity.badRequest().body(retorno);
            }
            if(cliente.getEndereco().getNumero() == null) {
                retorno.setMensagem("Insira o número da residência.");
                return ResponseEntity.badRequest().body(retorno);
            }
            if (!clientesByEmail.isEmpty() || !clientesBySenha.isEmpty()) {
                retorno.setMensagem("E-mail ou CPF já cadastrados.");
                return ResponseEntity.badRequest().body(retorno);
            }
        
            enderecoRepositorio.save(cliente.getEndereco());
            cliente.setEndereco(cliente.getEndereco());
        
            clienteRepositorio.save(cliente);
            retorno.setMensagem("Cliente salvo com sucesso");
            // return new ResponseEntity<>(retorno, HttpStatus.CREATED);
            return ResponseEntity.created(null).body(retorno);
        } else {
            retorno.setMensagem("O endereço do cliente é nulo.");
            return ResponseEntity.badRequest().body(retorno);
        }
    }

    public List<Cliente> listarTodos() {
        return clienteRepositorio.findAll();
    }

    public ResponseEntity<?> alterarCliente(Cliente cliente) {
        if (cliente.getId() == null) {
            retorno.setMensagem("ID do cliente não informado!");
            return ((BodyBuilder) ResponseEntity.notFound()).body(retorno);
        }

        if (clienteRepositorio.existsById(cliente.getId())) {

            Cliente clienteExistente = clienteRepositorio.findByClienteId(cliente.getId());


            clienteExistente.setCpf(cliente.getCpf());
            clienteExistente.setNome(cliente.getNome());
            clienteExistente.setEmail(cliente.getEmail());
            clienteExistente.setSenha(cliente.getSenha());
            clienteRepositorio.save(clienteExistente);
            return ResponseEntity.ok().body(clienteExistente);
        } else {
            retorno.setMensagem("Cliente não encontrado!");
            //==return ResponseEntity.notFound().body(retorno);
            return ((BodyBuilder) ResponseEntity.notFound()).body(retorno);
        }
    }

    public ResponseEntity<?> deletarCliente(Integer cliente_id) {
        if (clienteRepositorio.existsById(cliente_id)) {

            Cliente clienteExistente = clienteRepositorio.findByClienteId(cliente_id);
            clienteRepositorio.delete(clienteExistente);
            retorno.setMensagem("Deletado");

            return ResponseEntity.badRequest().body(retorno);
        } else {
            retorno.setMensagem("Nenhum cliente encontrado pelo id!");
            return ((BodyBuilder) ResponseEntity.notFound()).body(retorno);
        }

    }

    public ResponseEntity<?> selecionarPorID(Integer cliente_id) {
        if (clienteRepositorio.existsById(cliente_id)) {
            Cliente clienteExistente = clienteRepositorio.findByClienteId(cliente_id);
            return ResponseEntity.ok().body(clienteExistente);
        } else {
            retorno.setMensagem("Nenhum cliente encontrado pelo id!");
            return ((BodyBuilder) ResponseEntity.notFound()).body(retorno);
        }

    }

    public ResponseEntity<?> editarEndereco(Integer cliente_id, Endereco e) {

        if (clienteRepositorio.existsById(cliente_id)) {

            Cliente clienteExistente = clienteRepositorio.findByClienteId(cliente_id);
            clienteExistente.setEndereco(e);
            clienteRepositorio.save(clienteExistente);

            return ResponseEntity.ok().body(clienteExistente);
        } else {
            retorno.setMensagem("Nenhum cliente encontrado pelo id!");
            return ((BodyBuilder) ResponseEntity.notFound()).body(retorno);
        }
    }

    public Cliente buscarClientePorId(Integer cliente_id) {
        return clienteRepositorio.findByClienteId(cliente_id);
    }
}
