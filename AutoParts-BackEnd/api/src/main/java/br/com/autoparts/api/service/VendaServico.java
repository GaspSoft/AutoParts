package br.com.autoparts.api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
    private VendasRepositorio vendaRepositorio;

    @Autowired
    private PecasServico pecaServico;
    
    @Autowired
    private PecasRepositorio pecaRepositorio;

    @Autowired
    private ClienteRepositorio clienteRepositorio;


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


        Optional<Cliente> clienteExist = clienteRepositorio.findById(venda.getCliente().getId());
        Optional<Fornecedor> fornecedorExist = fornecedorRepositorio
                .findById(venda.getPeca().getFornecedor().getId());
        Optional<Pecas> pecaExist = pecaRepositorio.findById(venda.getPeca().getId());
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


        pecaServico.diminuirEstoque(venda.getPeca().getId());

        vendaRepositorio.save(venda);
        retorno.setMensagem("Venda(s) cadastrada(s) com sucesso.");
        return new ResponseEntity<>(retorno, HttpStatus.CREATED);
    }

    public ResponseEntity<?> listarVendas() {
        List<Vendas> vendas = vendaRepositorio.findAll();
        if (vendas.isEmpty()) {
            retorno.setMensagem("Não há vendas cadastradas.");
            return ResponseEntity.badRequest().body(retorno);
        }
        return new ResponseEntity<>(vendas, HttpStatus.OK);
    }
@Override
    public ResponseEntity<?> listarClientePorId(Integer id) {
        Cliente cliente = clienteRepositorio.findByClienteId(id);
        List<Vendas> vendas = vendaRepositorio.findByCliente(cliente);
        return new ResponseEntity<>(vendas, HttpStatus.OK);
    }


}

