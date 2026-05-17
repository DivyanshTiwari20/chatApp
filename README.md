# 💬 ChatApp

A real-time chat application built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js) and **Socket.IO** for live messaging.

---

## 🚀 Live Demo

🌐 **Frontend:** [Your Frontend URL]  
🔧 **Backend:** [https://chatapp-8tu8.onrender.com](https://chatapp-8tu8.onrender.com)

> ⚠️ The backend is hosted on Render's free tier and may take **50+ seconds** to wake up after inactivity.

---

## ✨ Features

- 🔐 User Authentication (Register / Login)
- 💬 Real-time messaging with Socket.IO
- 👥 One-to-one chat
- 🟢 Online/Offline user status
- 📱 Responsive UI
- 🔒 JWT-based secure sessions

---

## 🛠️ Tech Stack

| Layer      | Technology                          |
|------------|--------------------------------------|
| Frontend   | React.js                            |
| Backend    | Node.js, Express.js                 |
| Database   | MongoDB (Atlas)                     |
| Realtime   | Socket.IO                           |
| Auth       | JWT (JSON Web Tokens)               |
| Deployment | Render (backend), — (frontend)      |

---

## 📁 Project Structure

```
chatApp/
├── backend/
│   ├── models/          # Mongoose schemas
│   ├── routes/          # Express API routes
│   ├── controllers/     # Route logic
│   ├── middleware/      # Auth middleware
│   └── server.js        # Entry point
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # App pages
│   │   └── App.js
│   └── package.json
└── package.json
```

---

## ⚙️ Getting Started (Local Setup)

### Prerequisites

- Node.js v18+
- MongoDB Atlas account (or local MongoDB)
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/DivyanshTiwari20/chatApp.git
cd chatApp
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
```

Start the backend:

```bash
npm start
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

The app will run at `http://localhost:3000`

---

## 🌍 Environment Variables

| Variable     | Description                        |
|--------------|------------------------------------|
| `PORT`       | Port for the backend server        |
| `MONGO_URI`  | MongoDB Atlas connection string    |
| `JWT_SECRET` | Secret key for JWT token signing   |

---

## 🚢 Deployment

### Backend → Render
- Connect your GitHub repo to [Render](https://render.com)
- Set **Root Directory** to `backend`
- Set **Build Command:** `npm install`
- Set **Start Command:** `npm start`
- Add all environment variables under the **Environment** tab

### Frontend → Vercel / Netlify
- Connect your GitHub repo
- Set **Root Directory** to `frontend`
- Set the backend API URL as an environment variable in the frontend

---

## 📸 Screenshots

<img width="1354" height="905" alt="image" src="https://github.com/user-attachments/assets/b4b9db5f-0402-43ca-a4f0-d17fbea6499e" />


---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Divyansh Tiwari**  
[GitHub](https://github.com/DivyanshTiwari20)
