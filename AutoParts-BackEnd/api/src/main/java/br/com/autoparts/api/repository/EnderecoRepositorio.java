package br.com.autoparts.api.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.autoparts.api.model.Endereco;

@Repository
public interface EnderecoRepositorio extends CrudRepository<Endereco, Integer> {
    
}
