package br.com.autoparts.api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.autoparts.api.model.Cliente;
import br.com.autoparts.api.model.Fornecedor;
import br.com.autoparts.api.model.Pecas;
import br.com.autoparts.api.model.Retorno;
import br.com.autoparts.api.model.Vendas;
import br.com.autoparts.api.repository.ClienteRepositorio;
import br.com.autoparts.api.repository.FornecedorRepositorio;
import br.com.autoparts.api.repository.PecasRepositorio;
import br.com.autoparts.api.repository.VendasRepositorio;
import br.com.autoparts.api.service.Interfaces.IVendaServico;

@Service
public class VendaServico implements IVendaServico{
    @Autowired
    private Retorno retorno;

    @Autowired
    private VendasRepositorio repository;

    @Autowired
    private PecasServico pecaService;
    
    @Autowired
    private PecasRepositorio pecaRepository;

    @Autowired
    private ClienteRepositorio clienteRepository;


    @Autowired
    private FornecedorRepositorio fornecedorRepositorio;

    public ResponseEntity<?> cadastrarVenda(Vendas venda) {

        if (venda.getPeca().getFornecedor().getId() == null
                || venda.getCliente().getId() == null
                || venda.getPeca().getId() == null

        ) {
            retorno.setMensagem("Um ou mais campos da venda são nulos.");
            return ResponseEntity.badRequest().body(retorno);
        }


        Optional<Cliente> clienteExist = clienteRepository.findById(venda.getCliente().getId());
        Optional<Fornecedor> fornecedorExist = fornecedorRepositorio
                .findById(venda.getPeca().getFornecedor().getId());
        Optional<Pecas> pecaExist = pecaRepository.findById(venda.getPeca().getId());
        if (!clienteExist.isPresent()) {
            retorno.setMensagem("Cliente não encontrado.");
            return ResponseEntity.badRequest().body(retorno);
        } else {
            venda.setCliente(clienteExist.get());
        }
        if (!fornecedorExist.isPresent()) {
            retorno.setMensagem("Fornecedor não encontrado.");
            return ResponseEntity.badRequest().body(retorno);
        } else {
            venda.getPeca().setFornecedor(fornecedorExist.get());
        }
        if (!pecaExist.isPresent()) {
            retorno.setMensagem("Peça não encontrada.");
            return ResponseEntity.badRequest().body(retorno);
        } else {
            venda.setPeca(pecaExist.get());
        }
        if (venda.getPeca().getQuantidade() <= 0) {
            retorno.setMensagem("Peças sem estoque.");
            return ResponseEntity.badRequest().body(retorno);
        }


        pecaService.diminuirEstoque(venda.getPeca().getId());

        repository.save(venda);
        retorno.setMensagem("Venda(s) cadastrada(s) com sucesso.");
        return ResponseEntity.created(null).body(retorno);
    }

    public ResponseEntity<?> listarVendas() {
        List<Vendas> vendas = repository.findAll();
        if (vendas.isEmpty()) {
            retorno.setMensagem("Não há vendas cadastradas.");
            return ResponseEntity.badRequest().body(retorno);
        }

        return ResponseEntity.ok(vendas);
    }
@Override
    public ResponseEntity<?> listarClientePorId(Integer id) {
        Cliente cliente = clienteRepository.findByClienteId(id);
        List<Vendas> vendas = repository.findByCliente(cliente);
        return ResponseEntity.ok(vendas);
    }


}

