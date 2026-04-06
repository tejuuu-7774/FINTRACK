# FINTRACK Backend API

A backend system for managing financial records with role-based access control and dashboard analytics.

---

## Live API

https://fintrack-krb5.onrender.com

---

## Tech Stack

- Node.js  
- Express.js  
- MongoDB (Atlas)  
- JWT Authentication  

---

## Features

- User Authentication (Register/Login)
- Role-Based Access Control (Admin, Analyst, Viewer)
- Financial Records CRUD (Income & Expense)
- Filtering (by type, category, date range)
- Dashboard Summary APIs (totals, balance, breakdown)
- Input Validation and Error Handling
- Secure password hashing using bcrypt
- Deployed on Render

---

## Roles and Permissions

- **Admin**
  - Full access (create, update, delete, manage)

- **Analyst**
  - View records and access dashboard insights

- **Viewer**
  - Read-only access

---

## API Endpoints

### Authentication
- POST /api/auth/register  
- POST /api/auth/login  

### Transactions
- POST /api/transactions (Admin)  
- GET /api/transactions  
- PUT /api/transactions/:id (Admin)  
- DELETE /api/transactions/:id (Admin)  

### Dashboard
- GET /api/dashboard (Admin, Analyst)  

---

## Technical Decisions

- Express.js was chosen for its lightweight and modular API structure  
- MongoDB was used for flexible schema handling of financial records  
- JWT authentication was implemented for stateless and secure sessions  
- Role-based middleware ensures clear separation of authorization logic  
- MongoDB aggregation pipelines are used for efficient dashboard analytics  

---

## Trade-offs

- Open IP access in MongoDB Atlas was enabled for ease of development and deployment  
- Validation is implemented manually and can be extended using libraries such as Joi or Zod  

---

## Setup (Local)

```bash
git clone <your-repo-url>
cd backend
npm install
npm run dev