# Complete Backend Module | NodeJS, Typescript, ExpressJS, JWT, Prisma, Neon Serverless Postgres

<div align="center">

<br />

<a href="https://youtu.be/RZ6Rk_g2GLY" target="_blank">

   <img width="1280" height="720" alt="Complete Backend Course | NodeJS, ExpressJS, JWT, Prisma, PostgreSQL" src="./banner.png" />

</a>

<br />

<div>

<img src="https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
<img src="https://img.shields.io/badge/-Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
<img src="https://img.shields.io/badge/-JWT-000000?style=for-the-badge&logo=jsonwebtoken&logoColor=white" alt="JWT" />
<img src="https://img.shields.io/badge/-Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
<img src="https://img.shields.io/badge/-PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
<img src="https://img.shields.io/badge/-Zod-3E63DD?style=for-the-badge&logo=zod&logoColor=white" alt="Zod" />

</div>

<h3 align="center">Build a Complete Backend API with Authentication, Movie Management & Watchlist Features</h3>

<div align="center">

Follow the full video tutorial on <a href="https://youtu.be/RZ6Rk_g2GLY" target="_blank"><b>YouTube</b></a>

</div>

<br />

</div>

---

## 📋 Table of Contents

1. [Introduction](#-introduction)
2. [Tech Stack](#-tech-stack)
3. [Features](#-features)
4. [Quick Start](#-quick-start)
5. [API Endpoints](#-api-endpoints)
6. [Database Schema](#-database-schema)
7. [Course & Channel](#-course--channel)

---

## 🚀 Introduction

In this comprehensive backend course, you'll learn how to build a **complete RESTful API** from scratch using **Node.js**, **Express.js**, and modern backend development practices.

This project covers:

1. **User Authentication System** – Secure registration, login, and JWT-based authentication
2. **Movie Management API** – Full CRUD operations for movie data
3. **Watchlist Feature** – Personal watchlist with status tracking and ratings

Perfect for developers who want to master backend development, REST API design, authentication, Prisma ORM, and PostgreSQL.

🎥 **Watch the full tutorial**: [YouTube](https://youtu.be/RZ6Rk_g2GLY)

---

## ⚙️ Tech Stack

* **Node.js** – JavaScript runtime
* **Express.js** – Web framework
* **JWT (JSON Web Tokens)** – Authentication
* **Prisma ORM** – Database ORM
* **PostgreSQL** – Relational database
* **Zod** – Request validation
* **bcryptjs** – Password hashing
* **dotenv** – Environment variable management

---

## ⚡️ Features

### 🔐 Authentication System

* User registration & login
* JWT-based authentication
* Secure password hashing
* Protected routes with middleware

### 🎬 Movie Management

* Full CRUD operations
* Movie metadata storage
* User-based ownership
* Filtering & searching

### 📺 Watchlist System

* Add/remove movies
* Track watch status
* Rate movies & add notes
* Update watchlist entries

### 🛠️ Additional Features

* Zod request validation
* Centralized error handling
* Prisma migrations & seeding
* Clean project structure

---

## 👌 Quick Start

### Prerequisites

* Node.js **v18+**
* PostgreSQL **v14+**
* Git

---

## ⚠️ Upgrading This Project to Prisma ORM v7

> Prisma ORM **v7 introduces breaking changes**.
> Follow all steps below if you are using Prisma v7.

### 1️⃣ Install Prisma v7

```bash
npm install @prisma/client@7
npm install -D prisma@7
npm install @prisma/adapter-pg dotenv
```

### 2️⃣ Enable ESM

```json
{
  "type": "module"
}
```

### 3️⃣ Update Prisma Generator

```prisma
generator client {
  provider = "prisma-client"
}
```

### 4️⃣ Create `prisma.config.ts`

```ts
import 'dotenv/config'
import { defineConfig, env } from 'prisma/config'

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
    seed: 'tsx prisma/seed.ts',
  },
  datasource: {
    url: env('DATABASE_URL'),
  },
})
```

### 5️⃣ Update Prisma Client Setup

```js
import { PrismaClient } from './generated/prisma/client.js'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

export const prisma = new PrismaClient({ adapter })
```

### 6️⃣ Load `.env` Manually

```js
import "dotenv/config"
```

### 7️⃣ Node Version Requirement

* **Node 20.19.0+** (Recommended: Node 22)

---

## 📦 Installation

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/backend-course.git
cd backend-course
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

```env
DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
JWT_SECRET="your-super-secret-jwt-key"
PORT=5001
```

### 4. Database Setup

```bash
npx prisma migrate dev
npm run seed:movies
```

### 5. Start Server

```bash
npm run dev
```

API runs at:
👉 **[http://localhost:5001](http://localhost:5001)**

---

## 🔌 API Endpoints

### Authentication

* `POST /auth/register`
* `POST /auth/login`
* `POST /auth/logout`

### Movies

* `GET /movies`
* `POST /movies`
* `PUT /movies/:id`
* `DELETE /movies/:id`

### Watchlist (Protected)

* `POST /watchlist`
* `PUT /watchlist/:id`
* `DELETE /watchlist/:id`

---

## 🗄️ Database Schema

### User

* `id` (UUID)
* `name`
* `email`
* `password`
* `createdAt`

### Movie

* `id` (UUID)
* `title`
* `overview`
* `releaseYear`
* `genres`
* `runtime`
* `posterUrl`
* `createdBy`
* `createdAt`

### WatchlistItem

* `id` (UUID)
* `userId`
* `movieId`
* `status`
* `rating`
* `notes`
* `createdAt`
* `updatedAt`

---

## 🎓 Course & Channel

* 🌐 **Website**: [https://www.webdevultra.com](https://www.webdevultra.com)
* 📺 **YouTube**: [https://www.youtube.com/@pedrotechnologies](https://www.youtube.com/@pedrotechnologies)

Just tell me.
