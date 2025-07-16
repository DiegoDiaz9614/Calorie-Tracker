# Calorie Tracker App

## Project Title
Calorie Tracker App

## Project Description
The Calorie Tracker App is a full-stack web application that allows users to monitor and manage their daily calorie intake. It provides secure user authentication and CRUD (Create, Read, Update, Delete) functionality for calorie entries. Only authenticated users can access and modify calorie data.

**Key Features:**
- User Registration and Login with JWT Authentication
- Add, Edit, Delete, and View Calorie Entries
- Protected Routes for Logged-In Users Only
- Responsive User Interface with Tailwind CSS
- Toast Notifications for User Feedback

---

## Setup Instructions

### Backend Setup

1. Navigate to the backend folder:
   ```
   cd backend
   ```
2. Install Dependecies:
   ```
   npm install
   ```
3. Create an .env file with the following content:
```
  PORT=5000
  MONGO_URI=your-mongodb-connection-string
  JWT_SECRET=your-secret-key
```
4. Start the Backend Server:
```
  npm run dev
```
### Frontend Setup
1. Navigate to the frontend folder
```
  cd frontend
  ```

2. Create an .env.local file with the following content:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:4000
   
3. Install dependecies
```
  npm install
```
4. Start the frontend development server
```
  npm run dev
```
