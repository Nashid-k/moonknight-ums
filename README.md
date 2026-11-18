# MoonKnight UMS — User Management System

A server-rendered user-management application built with Express, EJS and MongoDB. The project includes user registration and login, profile management, and a separate admin area for managing user accounts.

## Features

- User registration and login with bcrypt password hashing
- Session-based user authentication
- Profile viewing and editing
- Admin login and user-management dashboard
- Admin actions for creating, editing and deleting accounts
- EJS views with a dark MoonKnight-inspired interface

## Stack

Node.js 20.6+, Express 4, MongoDB/Mongoose, EJS, express-session and bcrypt.

## Run locally

```bash
git clone https://github.com/Nashid-k/moonknight-ums.git
cd moonknight-ums
npm install
cp .env.example .env
npm start
```

Open [http://localhost:3002](http://localhost:3002).

## Environment

| Variable | Purpose |
| --- | --- |
| `PORT` | HTTP port (defaults to 3002) |
| `MONGODB_URI` | MongoDB connection string |
| `SESSION_SECRET` | Long, random secret used to sign session cookies |
| `NODE_ENV` | Set to `production` to enable secure cookies (HTTPS required) |

Node's `--env-file` option loads the local `.env` file. Do not commit real credentials.

## Routes

- User area: registration, login, profile, home and logout
- Admin area: `/admin` login, dashboard, user creation, editing and deletion

## Security notes

The admin and user areas use separate Express sub-apps and session middleware. Admin write routes are protected by admin-session middleware. Before production deployment, configure HTTPS, a persistent session store, CSRF protection, login rate limiting, input validation and stronger operational monitoring.
