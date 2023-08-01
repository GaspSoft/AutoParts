package br.com.autoparts.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.autoparts.api.model.Funcionario;

@Repository
public interface FuncionarioRepositorio extends 
JpaRepository<Funcionario, Integer> {
   
    @Query("SELECT f FROM Funcionario f WHERE f.funcionario_id = :id")
    Funcionario findByFuncionarioId(Integer id);
    


}
