# 🚀 FINTRACK Backend API

A backend system for managing financial records with role-based access control and dashboard analytics.

---

## 🌐 Live API Deployed in Render

https://fintrack-krb5.onrender.com

---

## ⚙️ Tech Stack

- Node.js  
- Express.js  
- MongoDB (Atlas)  
- JWT Authentication  

---

## ✨ Features

- User Authentication (Register/Login)
- Role-Based Access Control (Admin, Analyst, Viewer)
- Financial Records CRUD (Income & Expense)
- Filtering (by type, category, date range)
- Dashboard Summary APIs (totals, balance, breakdown)
- Input Validation & Error Handling
- Secure password hashing (bcrypt)
- Deployed on Render

---

## 🔐 Roles & Permissions

- **Admin**
  - Full access (create, update, delete, manage)

- **Analyst**
  - View records + access dashboard insights

- **Viewer**
  - Read-only access

---

## 📌 API Endpoints

### Auth
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

## 🧠 Technical Decisions

- Express.js used for lightweight and modular API design  
- MongoDB chosen for flexible schema handling of financial records  
- JWT used for stateless authentication  
- Role-based middleware implemented for clean access control  
- MongoDB aggregation used for efficient dashboard analytics  

---

## ⚖️ Trade-offs

- Open IP access in MongoDB enabled for easier development and deployment  
- Basic validation implemented (can be extended using validation libraries)

---

## 🛠️ Setup (Local)

```bash
git clone <your-repo-url>
cd backend
npm install
npm run dev
```
---
### Create a `.env` file:

```env
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret
PORT=3000
```
---

# 📎 Notes
- Backend is structured with clear separation of concerns
- Focused on clean code, maintainability, and logical design
- Easily extendable with frontend or additional features