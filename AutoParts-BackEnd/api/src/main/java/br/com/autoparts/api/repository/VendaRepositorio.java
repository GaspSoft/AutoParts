package br.com.autoparts.api.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import br.com.autoparts.api.model.Vendas;


public interface VendaRepositorio extends JpaRepository<Vendas, Integer> {
    
}
