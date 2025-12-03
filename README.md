# 🎉 Welcome to Task Manager 101 (PostgreSQL) project

This is a simple Task Manager RESTful API built with Node.js, Express.js, and PostgreSQL using Prisma as the ORM. The API allows you to create, read, update, and delete tasks. The API is documented using Swagger for easy exploration and testing.

[🖥️ Live Demo (Render)](https://one01-task-manager-project-public.onrender.com/api-docs/)

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

## Troubleshooting ❓

If you encounter any issues while setting up or running the project, please check the following:

- Ensure that PostgreSQL server is running and accessible.
- Verify that the `DATABASE_URL` in the `.env` file is correct.
- Check the terminal for any error messages and follow the suggested solutions.
- Make sure all dependencies are installed correctly by running `npm install` again.
- If you face issues with Prisma, try running `npx prisma generate` to regenerate the Prisma client.
- Consult the official documentation of the technologies used in this project for more detailed troubleshooting steps.
- If the problem persists, consider reaching out to the community or forums related to the specific technology for further assistance.

If you are using Supabase as your PostgreSQL database, please note the following additional steps:

- Make sure to set up Row Level Security (RLS) policies for the `tasks` table and `_prisma_migrations` table to allow access. You can use the following SQL commands:

  ```sql
  -- Enable RLS on tasks table
  ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;

  -- Create policy to allow all operations (since we're using API not Supabase client)
  CREATE POLICY "Allow all access" ON public.tasks
  FOR ALL
  USING (true)
  WITH CHECK (true);

  -- Enable RLS on _prisma_migrations (Prisma internal table)
  ALTER TABLE public._prisma_migrations ENABLE ROW LEVEL SECURITY;

  -- Allow all for prisma migrations
  CREATE POLICY "Allow all access" ON public._prisma_migrations
  FOR ALL
  USING (true)
  WITH CHECK (true);
  ```
