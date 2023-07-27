-- Exclui o Banco
-- DROP DATABASE autoparts_db;

CREATE DATABASE IF NOT EXISTS autoparts_db;

USE autoparts_db;

CREATE TABLE IF NOT EXISTS `Enderecos` (
  `Endereco_id` INT auto_increment NOT NULL,
  `cep` bigint NOT NULL,
  `estado` VARCHAR(45) NOT NULL,
  `cidade` VARCHAR(45) NOT NULL,
  `bairro` VARCHAR(45) NOT NULL,
  `rua` VARCHAR(45) NOT NULL,
  `numero` INT NOT NULL,
  `complemento` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Endereco_id`)
);

CREATE TABLE IF NOT EXISTS `Fornecedores` (
  `Fornecedor_id` INT auto_increment NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Fornecedor_id`)
);

CREATE TABLE IF NOT EXISTS `Pecas` (
  `Pecas_id` INT auto_increment NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `descricao` VARCHAR(45) NOT NULL,
  `quantidade` INT NOT NULL,
  `foto` BLOB NOT NULL,
  `marca` VARCHAR(45) NOT NULL,
  `ano` INT NOT NULL,
  `preco` DOUBLE NOT NULL,
  `modelo` VARCHAR(45) NOT NULL,
  `tipoVeiculo` BIT NOT NULL,
  `Fornecedores_id` INT NOT NULL,
  PRIMARY KEY (`Pecas_id`, `Fornecedores_id`),
  CONSTRAINT `fk_Pecas_Fornecedores1` FOREIGN KEY (`Fornecedores_id`) REFERENCES `Fornecedores` (`Fornecedor_id`)
	ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS `Clientes` (
  `Cliente_id` INT auto_increment NOT NULL,
  `cpf` bigint NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(50) NOT NULL,
  `Enderecos_id` INT NOT NULL,
  PRIMARY KEY (`Cliente_id`, `Enderecos_id`),
  CONSTRAINT `fk_Clientes_Enderecos1` FOREIGN KEY (`Enderecos_id`) REFERENCES `Enderecos` (`Endereco_id`)
  ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS `Funcionarios` (
  `Funcionario_id` INT auto_increment NOT NULL,
  `cpf` bigint NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `senha` varchar(50) NOT NULL,
  `cargo_funcionario` BIT not null, 
  PRIMARY KEY (`Funcionario_id`)
);

CREATE TABLE IF NOT EXISTS `Vendas` (
  `Vendas_id` INT auto_increment NOT NULL,
  `Pecas_id` INT NOT NULL,
  `Pecas_Fornecedores_id` INT NOT NULL,
  `Vendedores_id` INT NOT NULL,
  `Clientes_id` INT NOT NULL,
  PRIMARY KEY (`Vendas_id`, `Pecas_id`, `Pecas_Fornecedores_id`, `Vendedores_id`, `Clientes_id`),
  CONSTRAINT `fk_Pecas_has_Vendedores_Pecas1` FOREIGN KEY (`Pecas_id`, `Pecas_Fornecedores_id`) REFERENCES `Pecas` (`Pecas_id`, `Fornecedores_id`),
  CONSTRAINT `fk_Vendas_Vendedores1` FOREIGN KEY (`Vendedores_id`) REFERENCES `Funcionarios` (`Funcionario_id`),
  CONSTRAINT `fk_Vendas_Clientes1` FOREIGN KEY (`Clientes_id`) REFERENCES `Clientes` (`Cliente_id`)
  ON DELETE CASCADE
);

