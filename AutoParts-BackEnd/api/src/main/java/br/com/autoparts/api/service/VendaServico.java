package br.com.autoparts.api.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.autoparts.api.model.Cliente;
import br.com.autoparts.api.model.Fornecedor;
import br.com.autoparts.api.model.Funcionario;
import br.com.autoparts.api.model.Pecas;
import br.com.autoparts.api.model.Retorno;
import br.com.autoparts.api.model.Vendas;
import br.com.autoparts.api.repository.FornecedorRepositorio;
import br.com.autoparts.api.repository.FuncionarioRepositorio;
import br.com.autoparts.api.repository.PecasRepositorio;
import br.com.autoparts.api.repository.VendasRepositorio;


@Service
public class VendaServico {
    @Autowired
    private Retorno retorno;

    @Autowired
    private VendasRepositorio vendaRepositorio;

    @Autowired
    private PecasServico pecaServico;
    @Autowired
    private PecasRepositorio pecaRepositorio;

    @Autowired
    private ClienteServico clienteServico;


    @Autowired
    private FuncionarioServico funcionarioServico;
    @Autowired
    private FuncionarioRepositorio funcionarioRepositorio;

    @Autowired
    private FornecedorServico fornecedorServico;
    @Autowired
    private FornecedorRepositorio fornecedorRepositorio;

    public ResponseEntity<?> cadastrarVenda(List<Vendas> vendas) {

        // Verifica se cada item da lista esta com o JSON está vazio
        for (Vendas v : vendas) {
            if (
                v.getCliente().getCliente_id() == null 
                && v.getFuncionario().getFuncionario_id() == null
                //&& v.getPeca().getFornecedor().getFornecedor_id() != null
                && v.getPeca().getPecas_id() == null 
                //&& v.getPeca().getQuantidade() != null 
                //&& v.getPeca().getPreco() != null
            ) {
                // Verifica se o cliente, funcionário, peça e fornecedor não estão nulos
                retorno.setMensagem("Um ou mais campos da venda são nulos.");
                return ResponseEntity.badRequest().body(retorno);
            }
        }
        // Verifica se o cliente, funcionário, peça e fornecedor existem e o estoque da peça
        for (Vendas v : vendas){
            Cliente clienteExist = clienteServico.buscarClientePorId(v.getCliente().getCliente_id());
            Optional<Fornecedor> fornecedorExist = fornecedorRepositorio.findById(v.getPeca().getFornecedor().getFornecedor_id());
            Funcionario funcionarioExist = funcionarioRepositorio.findByFuncionarioId(v.getFuncionario().getFuncionario_id());
            Optional<Pecas> pecaExist = pecaRepositorio.findById(v.getPeca().getPecas_id());
            if (clienteExist == null){
                retorno.setMensagem("Cliente não encontrado.");
                return ResponseEntity.badRequest().body(retorno);
            }
            else{
                v.setCliente(clienteExist);
            }
            if(!fornecedorExist.isPresent()){
                retorno.setMensagem("Fornecedor não encontrado.");
                return ResponseEntity.badRequest().body(retorno);
            }
            else{
                v.getPeca().setFornecedor(fornecedorExist.get());
            }
            if(funcionarioExist == null){
                retorno.setMensagem("Funcionário não encontrado.");
                return ResponseEntity.badRequest().body(retorno);
            }
            else{
                v.setFuncionario(funcionarioExist);
            }
            if( !pecaExist.isPresent()){
                retorno.setMensagem("Peça não encontrada.");
                return ResponseEntity.badRequest().body(retorno);
            }
            else{
                v.setPeca(pecaExist.get());
            }
            if(v.getPeca().getQuantidade() <= 0){
                retorno.setMensagem("Peças sem estoque.");
                return ResponseEntity.badRequest().body(retorno);
            }

        }
        // Diminui o estoque da peça
        for (Vendas v : vendas){
            pecaServico.diminuirEstoque(v.getPeca().getQuantidade(), v.getPeca().getPecas_id());
        }
        // Salva a venda no banco de dados
        vendaRepositorio.saveAll(vendas);
        retorno.setMensagem("Venda(s) cadastrada(s) com sucesso.");
        return new ResponseEntity<>(retorno, HttpStatus.CREATED);
    }

}
