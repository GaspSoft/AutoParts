package br.com.autoparts.api.controller;
import java.time.LocalDateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.autoparts.api.controller.Interfaces.IVendaController;
import br.com.autoparts.api.model.Vendas;
import br.com.autoparts.api.service.VendaServico;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("venda")
public class VendaController implements IVendaController {
    @Autowired
    private VendaServico servico;

    @PostMapping()
    public ResponseEntity<?> cadastrarVenda(@RequestBody Vendas venda){
        venda.setDataCompra(LocalDateTime.now());
        return servico.cadastrarVenda(venda);
    }

    @GetMapping()
    public ResponseEntity<?> listarVenda(){
       return servico.listarVendas();
    }
    @GetMapping("/{id}")

     public ResponseEntity<?> listarVendaPorId(@PathVariable Integer id){
       return servico.listarClientePorId(id);
    }
     
}
