package br.com.autoparts.api.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Optional;
import java.util.List;

import java.util.List;
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


    @Test
     void testAlterarFuncionario() {
        Funcionario funcionario = new Funcionario();
        Long cpf = Long.parseLong("11111111111");
        funcionario.setCpf(cpf);
        funcionario.setNome("John Doe");
        funcionario.setEmail("john.doe@example.com");
        funcionario.setSenha("password");
        funcionario.setTipoPessoa(TipoPessoa.FUNCIONARIO);

        funcionarioServico.cadastrarFuncionario(funcionario);
        //Funcionario funcionarioByEmail = funcionarioRepositorio.findByEmail(Optional.of(funcionario.getEmail());

        when(funcionarioRepositorio.findByEmail(funcionario.getEmail())).thenReturn(Optional.empty());
        when(funcionarioRepositorio.findByCpf(funcionario.getCpf())).thenReturn(Optional.empty());

         

        //ResponseEntity<?> response = funcionarioServico.alterarFuncionario(funcionarioByEmail);
        //assertEquals(HttpStatus.CREATED, response.getStatusCode());
    }

    @Test
    @DisplayName("teste CadastrarFuncionario quando o esperado é um teste bem-sucedido")
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
    @DisplayName("teste CadastrarFuncionario quando o esperado é um teste mal sucedido por email duplicado")
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
    @DisplayName("teste CadastrarFuncionario quando o esperado é um teste mal sucedido por cpf duplicado")
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
    @DisplayName("teste DeletarFuncionario quando o esperado é um teste bem-sucedido")
    void testDeletarFuncionarioCase1() {
       Funcionario funcionario = new Funcionario();
        Integer  id= 1;
        when(funcionarioRepositorio.findById(id)).thenReturn(Optional.of(funcionario));
        when(funcionarioRepositorio.findByFuncionarioId(id)).thenReturn(funcionario);
        when(funcionarioRepositorio.existsById(id)).thenReturn(true);
        ResponseEntity<?> response = funcionarioServico.deletarFuncionario(id);
        
        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
    }
    @Test 
        @DisplayName("teste DeletarFuncionario quando o esperado é um teste mal-sucedido")
        void testDeletarFuncionarioCase2() {
        Funcionario funcionario = new Funcionario();
            Integer  id= 1;
            when(funcionarioRepositorio.findById(id)).thenReturn(Optional.empty());
            ResponseEntity<?> response = funcionarioServico.deletarFuncionario(id);
            assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        }
    @Test
    @DisplayName("teste  quando o esperado é um teste Bem-sucedido")
    void testListarFuncionariosCase1() {
        List<Funcionario> funcionario = new ArrayList<Funcionario>();
        when(funcionarioRepositorio.findAll()).thenReturn(funcionario);
        ResponseEntity<?> response = funcionarioServico.listarFuncionarios();
        assertEquals(HttpStatus.OK, response.getStatusCode());

    }

    @Test
    @DisplayName("teste ListarFuncionarioPorID quando o esperado é um teste Bem-sucedido")
    void testListarPorId() {
        Funcionario funcionario = new Funcionario();
        Integer  id= 1;
        when(funcionarioRepositorio.existsById(id)).thenReturn(true);
        when(funcionarioRepositorio.findByFuncionarioId(id)).thenReturn(funcionario);
        ResponseEntity<?> response = funcionarioServico.ListarPorId(id);

        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

}
