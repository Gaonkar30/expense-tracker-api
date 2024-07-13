
```
# Expense Tracker API

An API for tracking expenses, allowing users to register, login, create, update, delete, and view their expenses over time.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration and login
- JWT-based authentication
- Create, update, delete, and view expenses
- Secure password storage with bcrypt
- Date-based expense querying

## Technologies

- Node.js
- Express
- MongoDB
- Mongoose
- bcrypt
- JSON Web Tokens (JWT)
- dotenv

## Getting Started

### Prerequisites

- Node.js (v12 or later)
- MongoDB

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/expense-tracker-api.git
    cd expense-tracker-api
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory with the necessary environment variables (see [Environment Variables](#environment-variables)).

4. Start the server:

    ```sh
    npm start
    ```

    The server will be running on `http://localhost:3000`.

## Environment Variables

Create a `.env` file in the root directory of your project and add the following variables:

```env
PORT=3000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## API Endpoints

### Auth Routes

- **Register**
  - **URL:** `/api/register`
  - **Method:** `POST`
  - **Body:**
    ```json
    {
      "username": "yourUsername",
      "password": "yourPassword"
    }
    ```

- **Login**
  - **URL:** `/api/login`
  - **Method:** `POST`
  - **Body:**
    ```json
    {
      "username": "yourUsername",
      "password": "yourPassword"
    }
    ```

- **Logout**
  - **URL:** `/api/logout`
  - **Method:** `GET`

### Expense Routes

- **Create Expense**
  - **URL:** `/api/createexpense`
  - **Method:** `POST`
  - **Body:**
    ```json
    {
      "title": "Expense Title",
      "description": "Expense Description",
      "price": 100
    }
    ```

- **Get Expenses**
  - **URL:** `/api/getExpense`
  - **Method:** `GET`
  - **Query Parameters:**
    - `startDate` (ISO date string)
    - `endDate` (ISO date string)

- **Update Expense**
  - **URL:** `/api/updateexpense/:id`
  - **Method:** `PUT`
  - **Body:**
    ```json
    {
      "title": "Updated Title",
      "description": "Updated Description",
      "price": 150
    }
    ```

- **Delete Expense**
  - **URL:** `/api/removeexpense/:id`
  - **Method:** `DELETE`

