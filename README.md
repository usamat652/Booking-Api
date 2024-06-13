# Booking API

A booking API built with Node.js, Express, and MongoDB following the MVC architecture. It includes authentication and authorization features.

## Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/usamat652/booking-api.git
   cd booking-api

2. Install dependencies:
    npm install

3. Create a .env file in the root of your project and add the following environment variables:
    MONGO_URI=mongodb://127.0.0.1:27017/Booking-Api
    JWT_SECRET=your_jwt_secret
    PORT=5000

4. Running the Server
    To start the server with nodemon for development:
        npm install -g nodemon
        nodemon app.js

API Endpoints
    Agents
       - GET /api/agents: Get all agents (Admin only).
       - POST /api/agents/register: Register a new agent.
    Users
       - GET /api/users: Get all users related to the authenticated agent (Regular and Admin).
       - POST /api/users/create: Create a new user (Admin only).
    Bookings
       - POST /api/bookings: Create a new booking (Admin only).
       - DELETE /api/bookings/:id: Delete a booking (Admin only).
    Scheduler
       - GET /api/scheduler: Check scheduler status (Regular and Admin).
    Middleware
       - auth: Middleware to handle authentication and authorization.
