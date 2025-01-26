# API routes

- `GET /tasks`
- `POST /tasks`
- `PUT /tasks/:id`
- `DELETE /tasks/:id`

# Prisma

start mysql with `docker compose up db -d` env files are needed for the prisma
connection and I can provide those

syncing prisma schema with mysql db

- first setup: `pnpm prisma.first`
  - intializing: `pnpm prisma.init`
  - seeding: `pnpm prisma.seed`
- updating: use `npx prisma migrate dev --name name_of_migration` to track
  schema changes

`pnpm start`
