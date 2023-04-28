# Login and Registration System
This is a simple login and registration system built using React, Vite.js and React Router. It allows users to register a new account, log in, and view their dashboard.

# Features
User registration
User login
Dashboard view with user list and chart
Error handling for invalid user credentials and missing fields
# Installation
Clone the repository: git clone https://github.com/your-username/login-registration.git
Navigate to the project directory: cd login-registration
Install dependencies: npm install
Start the development server: npm start
# Usage
# Register
To register a new account, click the "Register" link in the navbar and fill out the registration form with your desired username and password.
# Login
To log in to an existing account, click the "Login" link in the navbar and enter your credentials.

# Dashboard
After successfully logging in, you will be redirected to your dashboard, where you can view a list of all registered users and a chart showing the number of users over time.

# Troubleshooting
If you encounter any issues while running the app, try the following:

Make sure you have the latest version of Node.js installed.
Make sure you are in the login-registration directory when running the npm commands.
If you see the error message "The requested module '/src/App.jsx' does not provide an export named 'App'", check your main.jsx file to make sure you are importing the App component correctly. The correct import statement should be: import App from './App.jsx';.

# License
This project is licensed under the MIT License. See the LICENSE file for more information.

