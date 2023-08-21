package br.com.autoparts.api.service;

import org.springframework.beans.factory.annotation.Autowired;

import br.com.autoparts.api.repository.VendaRepositorio;

public class VendaServico {
    @Autowired
    private VendaRepositorio vendaRepositorio;
}
