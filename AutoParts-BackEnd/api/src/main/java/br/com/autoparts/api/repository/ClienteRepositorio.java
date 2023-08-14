package br.com.autoparts.api.repository;


import br.com.autoparts.api.model.Cliente;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;



public interface ClienteRepositorio extends JpaRepository<Cliente, Integer> {
    @Query("SELECT c FROM Cliente c WHERE c.cliente_id = :id")
    Cliente findByClienteId(Integer id);

    
    List<Cliente> findBySenha(String senha);

    List<Cliente> findByEmail(String email);
    List<Cliente> findByCpf(Long cpfLong);

    
    

    List<Cliente> findAll();
}

