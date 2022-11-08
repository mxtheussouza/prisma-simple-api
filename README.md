## Simple API Rest boilerplate with Prisma ORM and Express.

### Requirements

- yarn
- docker and docker-compose

### Installation

**- Copy the .env.example file to the .env**
```sh
cp .env.example .env
```

**- Run the database with Docker**
```sh
docker-compose up -d --build
```

**- Install project dependencies**
```sh
yarn
```

**- Run migrations**
```sh
yarn prisma migrate dev
```

**- Start the project in development environment**
```sh
yarn dev
```
