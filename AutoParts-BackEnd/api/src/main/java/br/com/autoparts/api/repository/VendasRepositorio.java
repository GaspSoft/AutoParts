package br.com.autoparts.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.autoparts.api.model.Cliente;
import br.com.autoparts.api.model.Vendas;
import java.util.List;


@Repository
public interface VendasRepositorio extends JpaRepository<Vendas, Integer> {
    List<Vendas> findByCliente(Cliente cliente);
}
