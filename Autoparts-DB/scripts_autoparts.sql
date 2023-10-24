-- MySQL Workbench Forward Engineering
-- -----------------------------------------------------
-- Schema autoparts_db
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `autoparts_db` ;

-- -----------------------------------------------------
-- Schema autoparts_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `autoparts_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `autoparts_db` ;

-- -----------------------------------------------------
-- Table `autoparts_db`.`enderecos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `autoparts_db`.`enderecos` (
  `endereco_id` INT NOT NULL AUTO_INCREMENT,
  `bairro` VARCHAR(255) NULL DEFAULT NULL,
  `cep` BIGINT NULL DEFAULT NULL,
  `cidade` VARCHAR(255) NULL DEFAULT NULL,
  `complemento` VARCHAR(255) NULL DEFAULT NULL,
  `estado` VARCHAR(255) NULL DEFAULT NULL,
  `numero` INT NULL DEFAULT NULL,
  `rua` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`endereco_id`));



-- -----------------------------------------------------
-- Table `autoparts_db`.`clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `autoparts_db`.`clientes` (
  `cliente_id` INT NOT NULL AUTO_INCREMENT,
  `cpf` BIGINT NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `nome` VARCHAR(255) NULL DEFAULT NULL,
  `senha` VARCHAR(255) NULL DEFAULT NULL,
  `tipo_pessoa` TINYINT NULL DEFAULT NULL,
  `enderecos_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`cliente_id`),
  UNIQUE INDEX `UK_miodm1hrkbbj5ec28jbnt4mnk` (`enderecos_id` ASC) VISIBLE,
    FOREIGN KEY (`enderecos_id`)
    REFERENCES `autoparts_db`.`enderecos` (`endereco_id`));


-- -----------------------------------------------------
-- Table `autoparts_db`.`fornecedores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `autoparts_db`.`fornecedores` (
  `fornecedor_id` INT NOT NULL AUTO_INCREMENT,
  `cnpj` BIGINT NULL DEFAULT NULL,
  `nome` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`fornecedor_id`));


-- -----------------------------------------------------
-- Table `autoparts_db`.`funcionarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `autoparts_db`.`funcionarios` (
  `funcionario_id` INT NOT NULL AUTO_INCREMENT,
  `cpf` BIGINT NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `nome` VARCHAR(255) NULL DEFAULT NULL,
  `senha` VARCHAR(255) NULL DEFAULT NULL,
  `tipo_pessoa` TINYINT NULL DEFAULT NULL,
  PRIMARY KEY (`funcionario_id`));


-- -----------------------------------------------------
-- Table `autoparts_db`.`pecas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `autoparts_db`.`pecas` (
  `pecas_id` INT NOT NULL AUTO_INCREMENT,
  `ano` INT NULL DEFAULT NULL,
  `base64` VARCHAR(255) NULL DEFAULT NULL,
  `descricao` VARCHAR(255) NULL DEFAULT NULL,
  `foto` LONGBLOB NULL DEFAULT NULL,
  `marca` VARCHAR(255) NULL DEFAULT NULL,
  `modelo` VARCHAR(255) NULL DEFAULT NULL,
  `nome` VARCHAR(255) NULL DEFAULT NULL,
  `preco` DOUBLE NULL DEFAULT NULL,
  `quantidade` INT NULL DEFAULT NULL,
  `fornecedor_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`pecas_id`),
  INDEX `FK4hdxrch99lqiu64lgf07uvtxd` (`fornecedor_id` ASC) VISIBLE,
    FOREIGN KEY (`fornecedor_id`)
    REFERENCES `autoparts_db`.`fornecedores` (`fornecedor_id`));


-- -----------------------------------------------------
-- Table `autoparts_db`.`vendas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `autoparts_db`.`vendas` (
  `vendas_id` INT NOT NULL AUTO_INCREMENT,
  `cliente_id` INT NULL DEFAULT NULL,
  `pecas_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`vendas_id`),
  INDEX `FK18jb6atkgnouxy9b97unm4uue` (`cliente_id` ASC) VISIBLE,
  INDEX `FKdcp3au3luq74xthyhgt5a30e4` (`pecas_id` ASC) VISIBLE,
    FOREIGN KEY (`cliente_id`)
    REFERENCES `autoparts_db`.`clientes` (`cliente_id`),
    FOREIGN KEY (`pecas_id`)
    REFERENCES `autoparts_db`.`pecas` (`pecas_id`));

