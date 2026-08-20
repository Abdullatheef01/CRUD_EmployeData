






# Employee Data Management System

A full-stack employee data management application built using the MERN stack. The application provides a simple interface to manage employee records through REST APIs.

## Project Overview

This project demonstrates how a React frontend communicates with a Node.js and Express.js backend to perform CRUD operations on employee data.

The application includes employee listing, search functionality, adding records, editing records, and deleting records.

## Features

* Display employee records
* Search employees by name or email
* Add new employee records
* Edit existing employee records
* Delete employee records
* REST API integration
* Responsive user interface
* Frontend and backend deployed separately

## Tech Stack

### Frontend

* React.js
* Vite
* JavaScript
* CSS
* Fetch API
* Axios

### Backend

* Node.js
* Express.js
* CORS
* REST API

### Data

* JSON-based employee data
* CRUD operations

### Deployment

* Frontend: Vercel
* Backend: Render

## Project Structure

```text
Employee-Data-Management/
├── Backend/
│   ├── index.js
│   ├── sample.json
│   ├── package.json
│   └── node_modules/
│
└── Frontend/
    ├── src/
    ├── public/
    ├── package.json
    └── vite.config.js
```

## API Endpoints

| Method | Endpoint      | Description            |
| ------ | ------------- | ---------------------- |
| GET    | `/sample`     | Retrieve all employees |
| POST   | `/sample`     | Add a new employee     |
| PUT    | `/sample/:id` | Update an employee     |
| DELETE | `/sample/:id` | Delete an employee     |

## API Example

### GET Employees

```http
GET /sample
```

Example response:

```json
[
  {
    "id": 1,
    "name": "Abdul",
    "email": "abdul@gmail.com",
    "age": 20
  }
]
```

### POST Employee

```http
POST /sample
Content-Type: application/json
```

Request body:

```json
{
  "name": "Abdul",
  "email": "abdul@gmail.com",
  "age": 20
}
```

## Installation

### Clone the Repository

```bash
git clone https://github.com/Abdullatheef01/CRUD_EmployeData
cd Employee-Data-Management
```

### Backend Setup

```bash
cd Backend
npm install
npm run dev
```

The backend server will run on:

```text
http://localhost:8000
```

### Frontend Setup

Open a new terminal:

```bash
cd Frontend
npm install
npm run dev
```

The frontend development server will run on:

```text
http://localhost:5173
```

## Environment Configuration

For production deployment, configure the backend API URL in the frontend instead of using the local development URL.

Development:

```text
http://localhost:8000
```

Production:

```text
https://crud-employedata.onrender.com
```

## Deployment

The frontend is deployed using Vercel and the backend is deployed using Render.

Frontend:

```text
https://crud-employe-data.vercel.app/
```

Backend:

```text
https://crud-employedata.onrender.com
```

## Learning Outcomes

This project helped demonstrate practical implementation of:

* React state management
* React Hooks
* REST API integration
* Express.js routing
* HTTP methods
* CRUD operations
* Fetch API
* Axios
* CORS configuration
* Frontend and backend deployment
* Client-server communication

## Future Improvements

* MongoDB database integration
* User authentication and authorization
* Form validation
* Pagination
* Advanced employee search and filtering
* Improved error handling
* Edit employee functionality
* Environment variable configuration

## Screenshot
<img width="1897" height="907" alt="image" src="https://github.com/user-attachments/assets/e738be9d-3af3-4552-9f37-924afacd348b" />

## Project Live 
Link to view the Project: https://crud-employe-data.vercel.app/

## Demo

https://github.com/user-attachments/assets/e3b381a2-8d52-4fe0-a4c3-23781ca18547
