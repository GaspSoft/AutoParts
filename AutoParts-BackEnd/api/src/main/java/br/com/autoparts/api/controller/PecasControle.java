package br.com.autoparts.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import br.com.autoparts.api.model.Fornecedor;
import br.com.autoparts.api.model.Pecas;
import br.com.autoparts.api.service.PecasServico;

@RestController
public class PecasControle {
    @Autowired
    private PecasServico servico;
 
    @PostMapping("/pecas")
public ResponseEntity<?> cadastrarPecas(@RequestParam("foto") MultipartFile file,
                                        @RequestParam("nome") String nome,
                                        @RequestParam("descricao") String descricao,
                                        @RequestParam("quantidade") int quantidade,
                                        @RequestParam("marca") String marca,
                                        @RequestParam("ano") int ano,
                                        @RequestParam("preco") double preco,
                                        @RequestParam("modelo") String modelo,
                                        @RequestParam("fornecedor_id") int fornecedorId) {
    try {
        if (file == null || file.isEmpty()) {
            return ResponseEntity.badRequest().body("A imagem é obrigatória.");
        }

        byte[] fotoBytes = file.getBytes();
        
        Pecas peca = new Pecas();
        peca.setNome(nome);
        peca.setDescricao(descricao);
        peca.setQuantidade(quantidade);
        peca.setFoto(fotoBytes);
        peca.setMarca(marca);
        peca.setAno(ano);
        peca.setPreco(preco);
        peca.setModelo(modelo);
        
        Fornecedor fornecedor = new Fornecedor();
        fornecedor.setFornecedor_id(fornecedorId);
        peca.setFornecedor(fornecedor);
        
        servico.cadastrarPecas(peca);
        return new ResponseEntity<>(peca, HttpStatus.CREATED);
    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao cadastrar peça.");
    }
}



    @GetMapping("/pecas")
    public List<Pecas> listarTodos(){
        return servico.listarTodos();
    }

    @GetMapping("/pecas/{id}")
    public ResponseEntity<?> listarPorId(@PathVariable Integer id){
        return servico.buscarPeca(id);
    }
    
}
