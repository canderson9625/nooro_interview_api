# API routes

- `GET /tasks`
- `POST /tasks`
- `PUT /tasks/:id`
- `DELETE /tasks/:id`

# Prisma
## schema
Tasks should include: 
- `id` auto increment
- `title` index varchar
- `color` varchar
- `completed status` bool
- `created_at`
- `updated_at`

## migration
this occurs when schema differs

## seeding
this populates the db with test data