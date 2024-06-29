# Simple CRUD API

This simple CRUD API allows you to create, read, update, and delete products.

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose

Using the MVC pattern, the API has a model, a controller, and a router for the product entity.

## Installation

1. Clone the repository
2. Run `npm install`

   - After installing the dependencies, make sure that you have a `.env` file in the root directory with the following content:

     ```bash
     admin=your_admin_username
     password=your_mongodb_password
     PORT=3000
     appName=your_app_name
     ```

3. Run `npm run start`

## Usage

1. Create a product: `POST /products`
2. Read all products: `GET /products`
3. Read a product: `GET /products/:id`
4. Update a product: `PUT /products/:id`
5. Delete a product: `DELETE /products/:id`
