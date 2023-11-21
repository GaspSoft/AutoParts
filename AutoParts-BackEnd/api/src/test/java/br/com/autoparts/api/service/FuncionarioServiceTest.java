package br.com.autoparts.api.service;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import br.com.autoparts.api.model.Funcionario;
import br.com.autoparts.api.model.Retorno;
import br.com.autoparts.api.model.TipoPessoa;
import br.com.autoparts.api.repository.FuncionarioRepositorio;

@RunWith(MockitoJUnitRunner.class)

public class FuncionarioServiceTest {

    @Mock        
    private FuncionarioRepositorio mockRepo;

    @InjectMocks
    private FuncionarioServico servico;
    @Test
    public void testCadastrarFuncionario() {


        // Objeto de exemplo
        Funcionario funcionario = new Funcionario();
        Long cpf = Long.parseLong("11111111111");
        funcionario.setCpf(cpf);
        funcionario.setNome("John Doe");
        funcionario.setEmail("john.doe@example.com");
        funcionario.setSenha("password");
        funcionario.setTipoPessoa(TipoPessoa.FUNCIONARIO);

        // Mock das consultas ao repositório
        when(mockRepo.findByEmail(funcionario.getEmail())).thenReturn(Optional.empty());
        when(mockRepo.findByCpf(funcionario.getCpf())).thenReturn(Optional.empty());

        // Instância do serviço
         

        // Teste de sucesso
       ResponseEntity<?> response = servico.cadastrarFuncionario(funcionario);
        assertEquals(HttpStatus.CREATED, response.getStatusCode());

        // Testar cenário onde o e-mail já está registrado
        when(mockRepo.findByEmail(funcionario.getEmail())).thenReturn(Optional.of(funcionario));
        response = servico.cadastrarFuncionario(funcionario);
        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals("Email já registrado.", ((Retorno) response.getBody()).getMensagem());

        // Testar cenário onde o CPF já está registrado
        when(mockRepo.findByEmail(funcionario.getEmail())).thenReturn(Optional.empty());
        when(mockRepo.findByCpf(funcionario.getCpf())).thenReturn(Optional.of(funcionario));
        response = servico.cadastrarFuncionario(funcionario);
        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals("CPF já registrado.", ((Retorno) response.getBody()).getMensagem());
    }
}