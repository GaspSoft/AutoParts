
# Banco de Dados da Loja de Autopeças

Este é um repositório para o banco de dados da loja de autopeças. O banco de dados foi projetado para armazenar informações sobre endereços, fornecedores, peças, clientes, vendas e funcionários.

## Estrutura do Banco de Dados

O banco de dados possui as seguintes tabelas e campos:

<p align="center">
  <img src="https://github.com/RafaelRonchi/AutoParts/assets/95860101/dedc58bf-80aa-4d18-9c9f-906dcc770998" alt="Modelagem do Banco de Dados">
</p>

## Como utilizar

1. Crie o banco de dados `autoparts_db`.
2. Execute o script SQL para criar as tabelas.
3. Utilize as tabelas para armazenar as informações da loja de autopeças.

```
sql
-- Excluir o Banco de Dados
DROP DATABASE IF EXISTS loja_db;

-- Criar o Banco de Dados
CREATE DATABASE IF NOT EXISTS autoparts_db;

-- Utilizar o Banco de Dados
USE autoparts_db;

-- Criação das tabelas (consulte o arquivo para ver os detalhes de cada tabela)
````



