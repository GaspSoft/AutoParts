package br.com.autoparts.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.autoparts.api.model.Pecas;

public interface PecasRepositorio extends JpaRepository<Pecas, Integer>{
    List<Pecas> findAll();
    Pecas findById(int pecas_id);
}
