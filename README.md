# Minibook

## Setup

use node 20.10.0.

install dependencies

```bash
npm ci
```

install playwright dependencies

```bash
npx playwright install
```

start backend

```bash
docker-compose up -d
npm run dev-backend
```

start frontend

```bash
npm run dev-client
```

- Open frontend: [http://localhost:4200](http://localhost:4200)
- Open playground: [http://localhost:3000/graphql](http://localhost:3000/graphql)

## Tests

start the database and backend if not already done

```bash
docker-compose up -d
npm run dev-backend
```

Run frontend E2E

```bash
npm run test-e2e
```

Run all others test

```bash
npm run test-all
```


