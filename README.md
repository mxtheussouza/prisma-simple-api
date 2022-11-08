## Simple API with Prisma ORM and Express boilerplate.

### Requisitos

- yarn
- docker and docker-compose

### Instalação

**- Clone o repositório**
```sh
git clone https://github.com/matheusdearaujo/simple-api-boilerplate.git
```

**- Copie o arquivo .env.example para o .env**
```sh
cp .env.example .env
```

**- Rode o banco de dados com Docker**
```sh
docker-compose up -d --build
```

**- Instale as dependências do projeto**
```sh
yarn
```

**- Gere as tabelas do banco**
```sh
yarn prisma migrate dev
```

**- Inicie o projeto em ambiente de desenvolvimento**
```sh
yarn dev
```
