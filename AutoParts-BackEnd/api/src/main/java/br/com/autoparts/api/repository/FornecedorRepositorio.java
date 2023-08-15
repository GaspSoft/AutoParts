package br.com.autoparts.api.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.autoparts.api.model.Fornecedor;

public interface FornecedorRepositorio extends JpaRepository<Fornecedor, Integer> {
    List<Fornecedor> findByCnpj(Long cnpj);
    List<Fornecedor> findAll();
    Optional<Fornecedor> findById(Integer id);
    
}
