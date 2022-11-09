## Simple API Rest boilerplate with Prisma ORM and Express.

### Requirements

- yarn
- docker and docker-compose

### Installation

**- Copy the .env.example file to the .env**
```sh
cp .env.example .env
```

### Run project with docker (deploy)

**- Run the database with Docker**
```sh
docker-compose up -d --build
```

**- Run migrations**
```sh
docker exec apirest-app yarn prisma:migrate
```

### Run project in development environment

**- Install project dependencies**
```sh
yarn
```

**- Run migrations**
```sh
yarn prisma:migrate
```

**- Start the project in development environment**
```sh
yarn dev
```
