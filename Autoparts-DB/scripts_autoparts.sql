-- Exclui o Banco
-- DROP DATABASE autoparts_db;

CREATE DATABASE IF NOT EXISTS autoparts_db;

USE autoparts_db;

CREATE TABLE IF NOT EXISTS `enderecos` (
  `endereco_id` INT AUTO_INCREMENT NOT NULL,
  `cep` BIGINT NOT NULL,
  `estado` VARCHAR(45) NOT NULL,
  `cidade` VARCHAR(45) NOT NULL,
  `bairro` VARCHAR(45) NOT NULL,
  `rua` VARCHAR(45) NOT NULL,
  `numero` INT NOT NULL,
  `complemento` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`endereco_id`)
);


CREATE TABLE IF NOT EXISTS `fornecedores` (
  `fornecedor_id` INT AUTO_INCREMENT  NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`fornecedor_id`)
);

CREATE TABLE IF NOT EXISTS `pecas` (
  `pecas_id` INT  AUTO_INCREMENT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `descricao` VARCHAR(45) NOT NULL,
  `quantidade` INT NOT NULL,
  `foto` BLOB NOT NULL,
  `marca` VARCHAR(45) NOT NULL,
  `ano` INT NOT NULL,
  `preco` DOUBLE NOT NULL,
  `modelo` VARCHAR(45) NOT NULL,
  `tipo_veiculo` BIT NOT NULL,
  `fornecedores_id` INT NOT NULL,
  PRIMARY KEY (`pecas_id`, `fornecedores_id`),
  CONSTRAINT `fk_pecas_fornecedores1` FOREIGN KEY (`fornecedores_id`) REFERENCES `fornecedores` (`fornecedor_id`)
	ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS `clientes` (
  `cliente_id` INT auto_increment NOT NULL,
  `cpf` bigint NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(50) NOT NULL,
  `enderecos_id` INT NOT NULL,
  PRIMARY KEY (`cliente_id`, `enderecos_id`),
  CONSTRAINT `fk_clientes_enderecos1` FOREIGN KEY (`enderecos_id`) REFERENCES `enderecos` (`endereco_id`)
  ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS `funcionarios` (
  `funcionario_id` INT AUTO_INCREMENT NOT NULL,
  `cpf` bigint NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `senha` varchar(50) NOT NULL,
  `cargo_funcionario` BIT not null, 
  PRIMARY KEY (`funcionario_id`)
);

CREATE TABLE IF NOT EXISTS `vendas` (
  `vendas_id` INT AUTO_INCREMENT NOT NULL,
  `pecas_id` INT NOT NULL,
  `pecas_fornecedores_id` INT NOT NULL,
  `vendedores_id` INT NOT NULL,
  `clientes_id` INT NOT NULL,
  PRIMARY KEY (`vendas_id`, `pecas_id`, `pecas_fornecedores_id`, `vendedores_id`, `clientes_id`),
  CONSTRAINT `fk_pecas_has_vendedores_pecas1` FOREIGN KEY (`pecas_id`, `pecas_fornecedores_id`) REFERENCES `pecas` (`pecas_id`, `fornecedores_id`),
  CONSTRAINT `fk_vendas_vendedores1` FOREIGN KEY (`vendedores_id`) REFERENCES `funcionarios` (`funcionario_id`),
  CONSTRAINT `fk_vendas_Clientes1` FOREIGN KEY (`clientes_id`) REFERENCES `clientes` (`cliente_id`)
  ON DELETE CASCADE
);

