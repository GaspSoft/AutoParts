package br.com.autoparts.api.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import br.com.autoparts.api.model.Funcionario;
import br.com.autoparts.api.model.Retorno;
import br.com.autoparts.api.model.TipoPessoa;
import br.com.autoparts.api.repository.FuncionarioRepositorio;

public class FuncionarioServicoTest {
    @Mock
    private FuncionarioRepositorio funcionarioRepositorio;
    @InjectMocks
    private FuncionarioServico funcionarioServico;
    @Mock 
    private Retorno retorno;

@BeforeEach
    void setup(){
        MockitoAnnotations.openMocks(this);
    }    
    // @Test
    // void testListarPorId() {

   // }

    // @Test
    // void testAlterarFuncionario() {

   // }

    @Test
    @DisplayName("testCadastrarFuncionario quando o esperado é um teste bem-sucedido")
    void testCadastrarFuncionarioCase1() {
        
        Funcionario funcionario = new Funcionario();
        Long cpf = Long.parseLong("11111111111");
        funcionario.setCpf(cpf);
        funcionario.setNome("John Doe");
        funcionario.setEmail("john.doe@example.com");
        funcionario.setSenha("password");
        funcionario.setTipoPessoa(TipoPessoa.FUNCIONARIO);

        when(funcionarioRepositorio.findByEmail(funcionario.getEmail())).thenReturn(Optional.empty());
        when(funcionarioRepositorio.findByCpf(funcionario.getCpf())).thenReturn(Optional.empty());

         

       ResponseEntity<?> response = funcionarioServico.cadastrarFuncionario(funcionario);
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
    }
     @Test
    @DisplayName("testCadastrarFuncionario quando o esperado é um teste mal sucedido por email duplicado")
    void testCadastrarFuncionarioCase2() {
        
        Funcionario funcionario = new Funcionario();
        Long cpf = Long.parseLong("11111111111");
        funcionario.setCpf(cpf);
        funcionario.setNome("John Doe");
        funcionario.setEmail("john.doe@example.com");
        funcionario.setSenha("password");
        funcionario.setTipoPessoa(TipoPessoa.FUNCIONARIO);

        when(funcionarioRepositorio.findByEmail(funcionario.getEmail())).thenReturn(Optional.of(funcionario));
        when(funcionarioRepositorio.findByCpf(funcionario.getCpf())).thenReturn(Optional.empty());
        
    
        ResponseEntity<?> response = funcionarioServico.cadastrarFuncionario(funcionario);
        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());

    }
         @Test
    @DisplayName("testCadastrarFuncionario quando o esperado é um teste mal sucedido por cpf duplicado")
    void testCadastrarFuncionarioCase3() {
        
        Funcionario funcionario = new Funcionario();
        Long cpf = Long.parseLong("11111111111");
        funcionario.setCpf(cpf);
        funcionario.setNome("John Doe");
        funcionario.setEmail("john.doe@example.com");
        funcionario.setSenha("password");
        funcionario.setTipoPessoa(TipoPessoa.FUNCIONARIO);

        when(funcionarioRepositorio.findByEmail(funcionario.getEmail())).thenReturn(Optional.empty());
        when(funcionarioRepositorio.findByCpf(funcionario.getCpf())).thenReturn(Optional.of(funcionario));
        
    
        ResponseEntity<?> response = funcionarioServico.cadastrarFuncionario(funcionario);
        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
    }
    @Test
    @DisplayName("testDeletarFuncionario quando o esperado é um teste bem-sucedido")
    void testDeletarFuncionarioCase1() {
       Funcionario funcionario = new Funcionario();
        Integer  id= 1;
        when(funcionarioRepositorio.findById(id)).thenReturn(Optional.of(funcionario));
        ResponseEntity<?> response = funcionarioServico.deletarFuncionario(id);
        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
    }
    @Test
        @DisplayName("testDeletarFuncionario quando o esperado é um teste mal-sucedido")
        void testDeletarFuncionarioCase2() {
        Funcionario funcionario = new Funcionario();
            Integer  id= 1;
            when(funcionarioRepositorio.findById(id)).thenReturn(Optional.empty());
            ResponseEntity<?> response = funcionarioServico.deletarFuncionario(id);
            assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        }
    // @Test
    // void testListarFuncionarios() {

    // }
}
