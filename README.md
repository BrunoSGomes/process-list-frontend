# Aprova Frontend

Frontend com tela de listagem dos processos e modal para apresentar o histórico de um determinado processo.

# Como rodar o projeto

- Docker (recomendado):

  Rodar o container de desenvolvimento com o comando

```bash
  docker compose up
```

- Sem docker:

  Rode os seguintes comandos em sequência para rodar localmente

```bash
  npm i
  npm run start
```

# Como rodar os testes

Antes de rodar os testes do frontend é necessário instalar as dependências localmente e já estar com a aplicação rodando.

```bash
  npm i
```

- Testes e2e:

  Para rodar os testes e2e basta rodar o seguinte comando

```bash
  npm run test:run
```
