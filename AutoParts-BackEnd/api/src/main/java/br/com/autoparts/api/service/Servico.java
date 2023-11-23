package br.com.autoparts.api.service;

import java.security.Key;
import java.security.KeyPair;
import java.security.SignatureException;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException.NotFound;

import br.com.autoparts.api.model.Cliente;
import br.com.autoparts.api.model.Funcionario;
import br.com.autoparts.api.model.Pessoa;
import br.com.autoparts.api.model.Retorno;
import br.com.autoparts.api.repository.ClienteRepositorio;
import br.com.autoparts.api.repository.FuncionarioRepositorio;
import br.com.autoparts.api.service.Interfaces.IServico;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Service
public class Servico implements IServico {

    private Key privateKey;

    @Autowired
    private Retorno retorno;

    @Autowired
    private ClienteRepositorio clienteRepositorio;

    @Autowired
    private FuncionarioRepositorio funcionarioRepositorio;

    public Servico() {
        KeyPair keyPair = Keys.keyPairFor(SignatureAlgorithm.RS256);
        privateKey = keyPair.getPrivate();
    }

    public ResponseEntity<?> verificarUser(Pessoa p) {
        if (p.getEmail() == null || p.getSenha() == null) {
            retorno.setMensagem("Valores de senha ou/e email nulo!");
            return new ResponseEntity<>(retorno.getMensagem(), HttpStatus.BAD_REQUEST);
        } else {
            Optional<Cliente> clienteByEmail = clienteRepositorio.findByEmail(p.getEmail());
            List<Cliente> clienteBySenha = clienteRepositorio.findBySenha(p.getSenha());

            if (!clienteByEmail.isEmpty() && !clienteBySenha.isEmpty()) {
                return new ResponseEntity<>(clienteByEmail.get(), HttpStatus.OK);
            }

            Optional<Funcionario> funcionariosByEmail = funcionarioRepositorio.findByEmail(p.getEmail());
            List<Funcionario> funcionariosBySenha = funcionarioRepositorio.findBySenha(p.getSenha());

            if (!funcionariosByEmail.isEmpty() && !funcionariosBySenha.isEmpty()) {
                return new ResponseEntity<>(funcionariosByEmail.get(), HttpStatus.OK);
            }

            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<?> geraToken(Pessoa p) {
        HttpStatus userVerificado = (HttpStatus) verificarUser(p).getStatusCode();
        System.out.println(userVerificado);
        if (HttpStatus.OK.equals(userVerificado)) {
            try {

                int tokenExpirationMinutes = 30;

                Date expirationDate = new Date(System.currentTimeMillis() + (tokenExpirationMinutes * 60000));

                String token = Jwts.builder()
                        .setSubject(p.getEmail())
                        .setExpiration(expirationDate)
                        .signWith(privateKey)
                        .compact();

                return ResponseEntity.ok(token);

            } catch (Exception e) {
                return new ResponseEntity<>("Erro ao gerar o token.", HttpStatus.INTERNAL_SERVER_ERROR);
            }

        } else {
            return new ResponseEntity<>("Usuário não encontrado ou não autorizado.", HttpStatus.UNAUTHORIZED);
        }
    }

    public ResponseEntity<?> validarToken(String token) throws SignatureException {
        try {
            Claims claims = Jwts.parserBuilder()
                    .setSigningKey(privateKey)
                    // define a chave de assinatura(criptografia)
                    .build()
                    // builda um jwtParser que é imutável e seguro
                    .parseClaimsJws(token)
                    // decoda o token
                    .getBody();
            // pega as infos

            // verifica se o time stamp do token é valido
            Date expirationDate = claims.getExpiration();
            if (expirationDate.before(new Date())) {
                return new ResponseEntity<>("Token expirado", HttpStatus.UNAUTHORIZED);
            }
            // a variavel recebe o payload do token(email)
            String email = claims.getSubject();

            Optional<Funcionario> funcionario = funcionarioRepositorio.findByEmail(email);
            // através do email procura por email um funcionario que corresponda esse dado
            // se vazio procura um cliente
            // e em fim retorna uma instancia de cliente/funcionario

            if (funcionario.isPresent()) {
                System.out.println("Funcionario exist: " + funcionario.get());
                return new ResponseEntity<>(funcionario.get(), HttpStatus.OK);
            } else {
                Optional<Cliente> cliente = clienteRepositorio.findByEmail(email);
                if (cliente.isPresent()) {
                    System.out.println("Cliente exist" + cliente);
                    return new ResponseEntity<>(cliente.get(), HttpStatus.OK);

                }
            }
        } catch (ExpiredJwtException e) {
            return new ResponseEntity<>("Token expirado", HttpStatus.UNAUTHORIZED);
        } catch (MalformedJwtException e) {
            return new ResponseEntity<>("Token inválido", HttpStatus.UNAUTHORIZED);
        } catch (Exception e) {
            System.out.println("Exceção não tratada: " + e.getMessage());
            return new ResponseEntity<>("Erro na validação do token", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }

}
