package br.com.autoparts.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.autoparts.api.model.Pecas;

public interface PecasRepositorio extends JpaRepository<Pecas, Integer>{
    
}
