# API routes

- `GET /tasks`
- `POST /tasks`
- `PUT /tasks/:id`
- `DELETE /tasks/:id`

# Prisma
using a docker container with mysql latest

## schema
Tasks should include: 
- `id` auto increment
- `title` index varchar
- `color` varchar
- `completed status` bool
- `created_at`
- `updated_at`

## migration
creates the db provider schema from the prisma schema



## seeding
this populates the db with test data