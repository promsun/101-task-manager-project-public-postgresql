# 🎉 Welcome to Task Manager 101 (PostgreSQL) project

This is a simple Task Manager RESTful API built with Node.js, Express.js, and PostgreSQL using Prisma as the ORM. The API allows you to create, read, update, and delete tasks. The API is documented using Swagger for easy exploration and testing.

[🖥️ Live Demo (Render)](https://one01-task-manager-project-public-postgresql.onrender.com/api-docs/)

## Technologies Used ✨

This project is built with:

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- Swagger
- Nodemon

## Prerequisites 🛠️

To run this project, you will need `git`, `psql` (with pgAdmin), `node.js` and `npm` installed on your machine.

## Getting Started 🚀

1. Clone down this repository. And navigate to the project directory.
2. Install the necessary dependencies.

   ```bash
   npm install
   cp .env.example .env
   # open .env and modify the environment variables (if needed)
   ```

3. Initialize the database.

   - Make sure PostgreSQL server is running on your machine.
   - Update the `DATABASE_URL` in the `.env` file with your PostgreSQL connection string.
   - Run the database migrations to create the necessary tables.

   ```bash
   npx prisma migrate deploy
   ```

4. Run the development server.

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000/api-docs](http://localhost:3000/api-docs) to view Swagger API documentation with your browser.
