# 🛍️ ProCart Frontend | Modern E-Commerce Client Application

A production-grade React application powering the user experience of the ProCart E-Commerce platform. Designed with a scalable component architecture, secure API integration, and responsive UI principles to deliver a seamless shopping experience.

---

## 🔗 Live Application

**Frontend (Production):**
[https://ecommerce-frontend-rose-three.vercel.app/](https://ecommerce-frontend-rose-three.vercel.app/)

**Backend API:**
[https://ecommerce-project-jl8v.onrender.com/](https://ecommerce-project-jl8v.onrender.com/)

---

## 🛠 Tech Stack & Architecture

**Core Technologies**

* React.js (Component-Based Architecture)
* JavaScript (ES6+)
* Axios (REST API Communication)
* React Router (Client-Side Routing)

**Styling & UI**

* Responsive CSS Design
* Modular Component Styling
* Mobile-First Layout Principles

**Deployment & DevOps**

* Hosted on Vercel
* CI/CD integration via GitHub
* Automatic production builds on every push to main branch

**Architecture Principles**

* Reusable UI components
* Centralized API configuration using environment variables
* Clean separation of concerns (UI, routing, services)

---

## 📂 Project Structure

```
frontend/
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Route-based pages (Login, Products, Checkout)
│   ├── services/          # API service layer (Axios configuration)
│   ├── App.js             # Application routing configuration
│   └── index.js           # Entry point
├── package.json
└── .env                   # Environment configuration (not committed)
```

---

## 🚀 Core Features

### 👤 Authentication Flow

* User Registration
* Secure Login Handling
* Conditional Rendering Based on Authentication State
* Protected Routes for Authorized Access

---

### 🛒 Product Experience

* Dynamic product catalog retrieval from backend API
* Real-time product rendering
* Scalable component-driven product cards

---

### 🧾 Cart & Order Processing

* Add-to-cart functionality
* Order submission via REST API
* User-specific order history retrieval

---

## 🔗 API Integration

The frontend communicates with the backend using RESTful endpoints.

Example API Endpoints:

* POST /api/register
* POST /api/login
* GET /api/products
* POST /api/orders
* GET /api/orders/:userId

All API base URLs are controlled via environment variables:

```
REACT_APP_API_URL=
```

This enables seamless switching between local development and production environments.

---

## ⚙️ Local Development Setup

### 1️⃣ Clone Repository

```
git clone <your-frontend-repo-url>
cd ecommerce-frontend
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file:

```
REACT_APP_API_URL=http://localhost:5000
```

### 4️⃣ Start Development Server

```
npm start
```

Application runs on:

```
http://localhost:3000
```

---

## 🌍 Production Deployment Highlights

* Cloud-hosted on Vercel
* Environment-based configuration management
* Automated CI/CD deployment pipeline
* Optimized production build configuration

---

## 💼 Professional Summary (For Resume)

**Full-Stack E-Commerce Frontend Developer**

Developed a scalable and responsive E-Commerce frontend using React.js with a modular component architecture. Integrated RESTful APIs for authentication, product management, and order processing. Implemented protected routing, environment-based configuration, and CI/CD deployment via Vercel. Delivered a production-ready user experience optimized for both desktop and mobile environments.

---

## 👨‍💻 Author

Manyam Siva Santhosh Kumar Reddy
GitHub: [https://github.com/99220040626](https://github.com/99220040626)
LinkedIn: [https://linkedin.com/in/manyam-siva-santhosh-kumar-reddy](linkedin.com/in/manyam-siva-santhosh-kumar-reddy-297a9531b)
Email: [sivasanthoshmanyam48@gmail.com](mailto:sivasanthoshmanyam48@gmail.com)

---

## 📜 License

This project is developed for educational, portfolio, and demonstration purposes.
