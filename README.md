# FuelEU Maritime Compliance Platform

## Overview

This project implements a simplified **FuelEU Maritime compliance platform** that allows monitoring and managing greenhouse gas (GHG) intensity compliance for maritime routes.

The platform provides a **full-stack implementation** consisting of:

* **Frontend:** React + TypeScript + TailwindCSS
* **Backend:** Node.js + TypeScript + Express
* **Database:** PostgreSQL
* **Architecture:** Hexagonal Architecture (Ports & Adapters)

The system allows users to:

* View vessel routes and GHG intensity data
* Compare routes against a baseline
* Calculate compliance balance
* Bank surplus compliance
* Create compliance pools between ships

---

## Architecture

The project follows a **Hexagonal Architecture (Ports and Adapters)** structure.

### Backend

```
backend/src
│
├── core
│   ├── domain
│   ├── application
│   └── ports
│
├── adapters
│   ├── inbound/http
│   └── outbound/postgres
│
├── infrastructure
│   ├── db
│   └── server
```

### Frontend

```
frontend/src
│
├── core
│   ├── domain
│   ├── application
│   └── ports
│
├── adapters
│   ├── ui/pages
│   └── infrastructure/api
```

This separation ensures that **business logic remains independent of frameworks and infrastructure**.

---

## Backend Setup

Navigate to backend folder:

```
cd backend
```

Install dependencies:

```
npm install
```

Run database migrations:

```
npx prisma migrate dev
```

Seed data:

```
npm run seed
```

Start backend server:

```
npm run dev
```

Server runs at:

```
http://localhost:3000
```

---

## Frontend Setup

Navigate to frontend folder:

```
cd frontend
```

Install dependencies:

```
npm install
```

Run development server:

```
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## API Endpoints

### Routes

```
GET /routes
POST /routes/:id/baseline
GET /routes/comparison
```

### Compliance

```
GET /compliance/cb
```

### Banking

```
POST /banking/bank
POST /banking/apply
```

### Pooling

```
POST /pools
```

---

## Dataset

Example route data:

| routeId | vesselType  | fuelType | year | ghgIntensity |
| ------- | ----------- | -------- | ---- | ------------ |
| R001    | Container   | HFO      | 2024 | 91           |
| R002    | BulkCarrier | LNG      | 2024 | 88           |
| R003    | Tanker      | MGO      | 2024 | 93.5         |

---

## Features Implemented

* Routes Dashboard
* Route Comparison with baseline
* Compliance balance calculation
* Banking of surplus compliance
* Pooling between ships
* Responsive React dashboard UI

---

## Tech Stack

Frontend

* React
* TypeScript
* TailwindCSS
* Axios

Backend

* Node.js
* Express
* TypeScript
* Prisma ORM

Database

* PostgreSQL

---

## Testing

APIs were tested using:

* Postman
* Browser DevTools
* Prisma Studio

---
