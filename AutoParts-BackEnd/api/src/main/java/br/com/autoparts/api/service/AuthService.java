package br.com.autoparts.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import br.com.autoparts.api.repository.ClienteRepositorio;
import br.com.autoparts.api.repository.FuncionarioRepositorio;

public class AuthService implements UserDetailsService {
    @Autowired
    ClienteRepositorio clienteRep;
    FuncionarioRepositorio funcionarioRep;
    @Override



    
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'loadUserByUsername'");
    }
}
