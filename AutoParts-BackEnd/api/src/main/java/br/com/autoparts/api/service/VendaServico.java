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
import br.com.autoparts.api.repository.ClienteRepositorio;
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
    private ClienteRepositorio clienteRepositorio;

    @Autowired
    private FuncionarioServico funcionarioServico;
    @Autowired
    private FuncionarioRepositorio funcionarioRepositorio;

    @Autowired
    private FornecedorServico fornecedorServico;
    @Autowired
    private FornecedorRepositorio fornecedorRepositorio;

    public ResponseEntity<?> cadastrarVenda(Vendas venda) {
    
            if (
                venda.getPeca().getFornecedor().getFornecedor_id()== null
                || venda.getCliente().getCliente_id() == null
                || venda.getFuncionario().getFuncionario_id() == null
                || venda.getPeca().getPecas_id() == null
                
            ) {
                retorno.setMensagem("Um ou mais campos da venda são nulos.");
                return ResponseEntity.badRequest().body(retorno);
            }
        
        // Verifica se o cliente, funcionário, peça e fornecedor existem e o estoque da peça
        
            Optional<Cliente> clienteExist = clienteRepositorio.findById(venda.getCliente().getCliente_id());
            Optional<Fornecedor> fornecedorExist = fornecedorRepositorio.findById(venda.getPeca().getFornecedor().getFornecedor_id());
            Optional<Funcionario> funcionarioExist = funcionarioRepositorio.findById(venda.getFuncionario().getFuncionario_id());
            Optional<Pecas> pecaExist = pecaRepositorio.findById(venda.getPeca().getPecas_id());
            if (!clienteExist.isPresent()){
                retorno.setMensagem("Cliente não encontrado.");
                return ResponseEntity.badRequest().body(retorno);
            }
            else{
                venda.setCliente(clienteExist.get());
            }
            if(!fornecedorExist.isPresent()){
                retorno.setMensagem("Fornecedor não encontrado.");
                return ResponseEntity.badRequest().body(retorno);
            }
            else{
                venda.getPeca().setFornecedor(fornecedorExist.get());
            }
            if(!funcionarioExist.isPresent()){
                retorno.setMensagem("Funcionário não encontrado.");
                return ResponseEntity.badRequest().body(retorno);
            }
            else{
                venda.setFuncionario(funcionarioExist.get());
            }
            if( !pecaExist.isPresent()){
                retorno.setMensagem("Peça não encontrada.");
                return ResponseEntity.badRequest().body(retorno);
            }
            else{
                venda.setPeca(pecaExist.get());
            }
            if(venda.getPeca().getQuantidade() <= 0){
                retorno.setMensagem("Peças sem estoque.");
                return ResponseEntity.badRequest().body(retorno);
            }

        
        // Diminui o estoque da peça
        
        pecaServico.diminuirEstoque(venda.getPeca().getQuantidade(), venda.getPeca().getPecas_id());
        
        // Salva a venda no banco de dados
        vendaRepositorio.save(venda);
        retorno.setMensagem("Venda(s) cadastrada(s) com sucesso.");
        return new ResponseEntity<>(retorno, HttpStatus.CREATED);
    }

    public ResponseEntity<?> listarVendas(){
        List<Vendas> vendas = vendaRepositorio.findAll();
        if(vendas.isEmpty()){
            retorno.setMensagem("Não há vendas cadastradas.");
            return ResponseEntity.badRequest().body(retorno);
        }
        return new ResponseEntity<>(vendas, HttpStatus.OK);
    }

}
