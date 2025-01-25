# API routes
- `GET /tasks`
- `POST /tasks`
- `PUT /tasks/:id`
- `DELETE /tasks/:id`

# Prisma
start mysql with `docker compose up db -d`
env files are needed for the connection and I can provide those

use `npx prisma migrate dev (--name name_of_migration)` to sync prisma orm with mysql db

while the container is running and the migration has been completed `deno src/prisma/seed.ts` to populate with some test data

`pnpm start`