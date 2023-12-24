package br.com.autoparts.api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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
    private ClienteRepositorio repository;

    @Autowired
    private EnderecoRepositorio enderecoRepositorio;

    public ResponseEntity<?> cadastrarCliente(Cliente cliente){
        if (cliente.getEndereco() != null) {

            Optional<Cliente> clientesByEmail = repository.findByEmail(cliente.getEmail());
            List<Cliente> clientesBySenha = repository.findByCpf(cliente.getCpf());
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
        
            repository.save(cliente);
            retorno.setMensagem("Cliente salvo com sucesso");
            return ResponseEntity.created(null).body(retorno);
        } else {
            retorno.setMensagem("O endereço do cliente é nulo.");
            return ResponseEntity.badRequest().body(retorno);
        }
    }

    public ResponseEntity<?> listarTodos() {
        return ResponseEntity.ok(repository.findAll());
    }

    public ResponseEntity<?> alterarCliente(Cliente cliente) {
        if (cliente.getId() == null) {
            retorno.setMensagem("ID do cliente não informado!");
            return ((BodyBuilder) ResponseEntity.notFound()).body(retorno);
        }

        if (repository.existsById(cliente.getId())) {

            Cliente clienteExistente = repository.findByClienteId(cliente.getId());


            clienteExistente.setCpf(cliente.getCpf());
            clienteExistente.setNome(cliente.getNome());
            clienteExistente.setEmail(cliente.getEmail());
            clienteExistente.setSenha(cliente.getSenha());
            repository.save(clienteExistente);
            return ResponseEntity.ok().body(clienteExistente);
        } else {
            retorno.setMensagem("Cliente não encontrado!");
            //==return ResponseEntity.notFound().body(retorno);
            return ((BodyBuilder) ResponseEntity.notFound()).body(retorno);
        }
    }

    public ResponseEntity<?> deletarCliente(Integer id) {
        if (repository.existsById(id)) {

            Cliente clienteExistente = repository.findByClienteId(id);
            repository.delete(clienteExistente);
            retorno.setMensagem("Deletado");

            return ResponseEntity.badRequest().body(retorno);
        } else {
            retorno.setMensagem("Nenhum cliente encontrado pelo id!");
            return ((BodyBuilder) ResponseEntity.notFound()).body(retorno);
        }

    }

    public ResponseEntity<?> selecionarPorID(Integer id) {
        if (repository.existsById(id)) {
            Cliente clienteExistente = repository.findByClienteId(id);
            return ResponseEntity.ok().body(clienteExistente);
        } else {
            retorno.setMensagem("Nenhum cliente encontrado pelo id!");
            return ((BodyBuilder) ResponseEntity.notFound()).body(retorno);
        }

    }

    public ResponseEntity<?> editarEndereco(Integer id, Endereco e) {

        if (repository.existsById(id)) {

            Cliente clienteExistente = repository.findByClienteId(id);
            clienteExistente.setEndereco(e);
            repository.save(clienteExistente);

            return ResponseEntity.ok().body(clienteExistente);
        } else {
            retorno.setMensagem("Nenhum cliente encontrado pelo id!");
            return ((BodyBuilder) ResponseEntity.notFound()).body(retorno);
        }
    }

    public Cliente buscarClientePorId(Integer id) {
        return repository.findByClienteId(id);
    }
}
