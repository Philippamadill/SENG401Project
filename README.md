# SENG 401 Project: BookBook

## Server Setup

1. Go into the server directory\
   &nbsp;&nbsp;&nbsp;`cd server`
2. Install all dependencies\
   &nbsp;&nbsp;&nbsp;`npm install`
3. Create a .env file and add the following variables\
   &nbsp;&nbsp;&nbsp;A. Create an env file\
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`touch .env`\
    &nbsp;&nbsp;&nbsp;B. Add these variables\
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DB_HOST=**HOST**\
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DB_USER=**USER**\
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DB_PASSWORD=**PASSWORD**

4. Run the ServiceController file\
   `npx nodemon serviceController.js`

## Client Setup

1. Go into the client directory\
   &nbsp;&nbsp;&nbsp;`cd client`
2. Run using the client side\
   &nbsp;&nbsp;&nbsp;`npm start`


## Database Setup 

1. After the web server is running, run the SQL queries\
   on your local instance of the database that you set up\
   (based on above .env details)
