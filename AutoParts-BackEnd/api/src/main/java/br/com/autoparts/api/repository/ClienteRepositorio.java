package br.com.autoparts.api.repository;

import org.springframework.stereotype.Repository;

import br.com.autoparts.api.model.Cliente;

import org.springframework.data.repository.CrudRepository;

@Repository
public interface ClienteRepositorio extends CrudRepository<Cliente, Integer> {
    
}
