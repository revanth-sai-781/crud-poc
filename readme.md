CRUD API with Express, Knex, and Objection.js

This is a RESTful API for managing users built using Express, Knex, joi schema and Objection.js. The API supports CRUD operations and integrates PostgreSQL as the database.

### Features

Create a user

Retrieve all users

Retrieve a user by ID

Update a user by ID

Delete a user by ID

Input validation using Joi

### Requirements

Node.js (v16 or later)

PostgreSQL

npm or yarn

# Setup Instructions

1. Clone the Repository

git clone https://github.com/revanth-sai-781/crud-poc.git
cd crud-app1

2. Install Dependencies

npm install

3. Configure the Database

Update the knexfile.js with your database configuration:

4. Run Migrations

Create the database schema:

npx knex migrate:latest

5. Start the Server

Run the Express server:

node index.js or nodemon index.js

The server will be available at http://localhost:3000

### Test the end points
