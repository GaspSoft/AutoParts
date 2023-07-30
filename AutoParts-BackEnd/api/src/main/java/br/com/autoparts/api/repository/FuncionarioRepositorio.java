package br.com.autoparts.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.autoparts.api.model.Funcionario;

@Repository
public interface FuncionarioRepositorio extends 
CrudRepository<Funcionario, Integer> {
}
