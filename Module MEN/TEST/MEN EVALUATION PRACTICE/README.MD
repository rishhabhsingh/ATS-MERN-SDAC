# Hotel Room Management System

## Objective
To develop a session-based Hotel Room Management System where registered users can log in and manage hotel room records (add, view, update and delete) using the MVC architecture.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- Bootstrap 5
- express-session
- bcrypt
- dotenv

## Project Features
- User registration with hashed password (bcrypt)
- User login with session creation
- User logout (session destroyed)
- Insert room (room number, type, price per night, capacity)
- Display all rooms in a Bootstrap table
- Update room details
- Delete room with confirmation
- Protected routes: room pages redirect to login if user is not logged in
- MVC folder structure (models, controllers, routes, views)

## Installation Steps
1. Clone the repository
```
   git clone https://github.com/rishhabhsingh/hotel-room-management-system.git
   cd hotel-room-management-system
```
2. Install dependencies
```
   npm install
```
3. Create a `.env` file in the root folder
```
   PORT=3000
   MONGO_URI=mongodb://127.0.0.1:27017/hotelDB
   SESSION_SECRET=hotelsecret123
```

## How to Run the Project
1. Make sure MongoDB is running on your system.
2. Start the server
```
   node app.js
```
3. Open `http://localhost:3000/register` in the browser, register a user, log in and manage rooms.

## Folder Structure
```
models/
controllers/
routes/
middleware/
views/
public/
Screenshots/
app.js
db.js
```

## Screenshots
See the `Screenshots` folder.

## GitHub Repository Link
https://github.com/rishhabhsingh/hotel-room-management-system