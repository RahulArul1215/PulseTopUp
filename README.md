# 📱 Mobile Recharge Application

![React](https://img.shields.io/badge/Frontend-React-blue)
![Spring Boot](https://img.shields.io/badge/Backend-SpringBoot-brightgreen)
![MySQL](https://img.shields.io/badge/Database-MySQL-orange)
![JWT](https://img.shields.io/badge/Auth-JWT-red)
![License](https://img.shields.io/badge/License-Educational-lightgrey)

A Full-Stack **Mobile Recharge Web Application** built using **React (Frontend)**, **Spring Boot (Backend)**, and **MySQL (Database)**.

This system allows users to recharge prepaid mobile numbers, securely authenticate, and manage transaction history.

---

# 🏗️ Architecture Overview

Frontend (React)  →  REST API Calls  →  Spring Boot Backend  →  MySQL Database

- React handles UI & API integration  
- Spring Boot handles business logic & authentication  
- MySQL stores user & recharge data  

---

# 🚀 Tech Stack

## Frontend
- React.js
- Tailwind CSS
- Axios
- React Router DOM

## Backend
- Spring Boot
- Spring Security
- JPA / Hibernate
- RESTful APIs
- Maven

## Database
- MySQL

---

# 📂 Project Structure

Mobile-Recharge-App/
│
├── Backend/                # Spring Boot Application
│   ├── src/main/java/
│   ├── src/main/resources/
│   ├── pom.xml
│   └── mvnw
│
├── Frontend/               # React Application
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── tailwind.config.js
│
└── README.md

---

# ✨ Features

## 👤 User Module
- User Registration
- Secure Login & Logout
- JWT-based Authentication
- Password Encryption (BCrypt)
- Profile Management

## 📲 Recharge Module
- Enter Mobile Number
- Select Operator
- Select Recharge Plan
- Recharge Confirmation
- Transaction Status Tracking

## 📜 History Module
- View Recharge History
- Filter Transactions
- View Detailed Transaction Info

---

# 🗄️ Database Configuration

## Step 1: Create Database

```sql
CREATE DATABASE mobile_recharge_db;
Step 2: Configure application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/mobile_recharge_db
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

server.port=8080
⚙️ How to Run the Project
1️⃣ Clone Repository
git clone https://github.com/your-username/mobile-recharge-app.git
cd mobile-recharge-app
2️⃣ Run Backend (Spring Boot)
cd Backend
mvn spring-boot:run

Backend runs on:

http://localhost:8080
3️⃣ Run Frontend (React)

Open a new terminal:

cd Frontend
npm install
npm start

Frontend runs on:

http://localhost:3000
🔐 API Endpoints (Sample)
Method	Endpoint	Description
POST	/api/auth/register	Register User
POST	/api/auth/login	Login User
POST	/api/recharge	Perform Recharge
GET	/api/recharge/history	Get Recharge History
GET	/api/user/profile	Get User Profile
🔒 Security Features

JWT Token Authentication

BCrypt Password Hashing

Role-based Authorization

CORS Configuration

Input Validation

Exception Handling

🧪 Sample Test Credentials

Email: test@gmail.com

Password: 123456

📸 Screenshots (Add if needed)

You can add screenshots in a /screenshots folder and link them here:

/screenshots/home.png
/screenshots/recharge.png
/screenshots/history.png
📦 Future Enhancements

💳 Payment Gateway Integration (Razorpay / Stripe)

🛠️ Admin Dashboard

💰 Wallet System

📩 SMS & Email Notifications

🐳 Docker Deployment

☁️ Cloud Deployment (AWS / Render)

📊 Analytics Dashboard

🧠 Learning Outcomes

Built full-stack architecture using React + Spring Boot

Implemented JWT authentication & secure REST APIs

Managed relational database using MySQL

Integrated frontend & backend with Axios

Implemented clean project structure & scalable backend logic

👨‍💻 Author

Rahul A
Full Stack Developer
Java | Spring Boot | React | MySQL

📜 License

This project is developed for educational and portfolio purposes.
