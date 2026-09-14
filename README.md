# Sistema de Manutenção

Sistema simples para abrir e consultar chamados de manutenção.

## Funcionalidades

- Cadastro de equipamento, problema, descrição e prioridade.
- Listagem dos chamados cadastrados.
- Integração com o Supabase.

## Estrutura do projeto

- `index.html`: estrutura da página e formulário.
- `style.css`: estilos da aplicação.
- `script.js`: cadastro e consulta dos chamados no Supabase.

## Como executar

1. Abra o arquivo `index.html` no navegador.
2. Preencha os dados do chamado.
3. Clique em **Cadastrar chamado**.

O projeto não precisa de instalação de dependências, pois utiliza a biblioteca do Supabase via CDN.

## Banco de dados

A aplicação utiliza uma tabela chamada `chamados` no Supabase, com os campos:

- `equipamento`
- `problema`
- `descrição`
- `prioridade`
