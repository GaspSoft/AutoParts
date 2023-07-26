use autoparts_db;

-- VER A TABELA COM AS FK
select * 
from Vendas
inner join Pecas on Vendas.Pecas_id = Pecas.Pecas_id and Vendas.Pecas_Fornecedores_id = Pecas.Fornecedores_id
inner join Funcionarios on Funcionarios.Funcionario_id = Vendas.Vendedores_id
inner join Clientes on Clientes.Cliente_id = Vendas.Clientes_id;

-- ATUALIZAR A TABELA COM A FK
update Vendas 
Join Pecas on Vendas.Pecas_id = Pecas.Pecas_id
set Pecas.nome = "Homocinetica"
where Pecas.Pecas_id = 1;

-- DELETAR A TABELA COM A FK
delete Vendas
from Vendas
Join Pecas on Vendas.Pecas_id = Pecas.Pecas_id
where Pecas.Pecas_id = 1;