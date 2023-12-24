package br.com.autoparts.api.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.autoparts.api.model.Funcionario;

@Repository
public interface FuncionarioRepositorio extends 
JpaRepository<Funcionario, Integer> {
   
    @Query("SELECT f FROM Funcionario f WHERE f.id = :id")
    Funcionario findByFuncionarioId(Integer id);
    
    Optional <Funcionario> findByEmail(String email);
    List<Funcionario> findBySenha(String senha);

    Optional<Funcionario> findByCpf(Long cpf);

}
