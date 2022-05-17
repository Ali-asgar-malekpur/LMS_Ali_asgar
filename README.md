PROJECT: LEARNING MANAGEMENT SYSTEM USING NDOE.JS
The main aim of the project is to provide the user an efficient and reliable webpage that is intended for learning. The page consists of various programming learning material videos with the link and an eye-catching User Interface that helps in interactivity to the user. A minimalistic UI is being created with front-End and the user’s data including the registration and login is saved as well on the backend of the Learning Management Site. The aim of the website deals with a secure learning with ease for the user/student.

The approach of the project started by firstly creating a cluster and a database that has a collection in it to store the user’s information, then on moving forward various pages in .ejs format had been coded that is showed on as a display. This furthermore uses the models, controller and routes (MVC) approach to be dealt with. After that I approached towards connecting the database with app.js and hence a database connection was established. This way the entire approach has being followed and hence landed with a Learning management system built using Node.js and other its extensions and frameworks used such as npm (Node Package Manager). 
The Technology with was used in the project involves the usage of:
•	HTML
•	CSS
•	JAVASCRIPT
•	NODE.JS
•	EXPRESS.JS
•	NPM (NODE PACKAGE MANAGER)
•	MONGODB (DATABASE)
•	NODE MODULES
•	TERMINAL
The initial phase of the project dealt with creating a Cluster that is being created using MongoDb Atlas (Cloud Service) and then after creating the cluster a Database was created that is as well given a username along with the password. The database consists of collections that are responsible of storing the user’s information in the database via connection made in app.js. After this we connect our database with our app.js using connect external application that provides us with a link which furthermore consists of a password and username with collection and database name as well.

Hence after the database part we begin with creating an app.js that has various modules being imported from npm ( Node Package Manager ). One of the most important package in that is the express package that is express.js which is very helpful to us in maintain the HTTP of the website. We then uses the app.get() methods to visit the site based on the URL of user’s address bar.

The login and registration functionality plays a very important role next to database. The user is made to login in order to view the content of the course page. If he/she is not a valid user than the page redirects to the register page on which the user has to register first and then get enrolled. In order to ease the code, various sections has being created such as controllers, models and middle-wares. The controllers basically helps in exporting the given module and showcase an error if found during the registration and login of the user. A cookie functionality is also being introduced that uses the user’s data to verify them. It travels from server to the client’s browser and captures the necessary information required by the user. The middlewares plays an essential role in again and again looking forward to the code of app.js whenever an action is made by the user on the webpage.

The .ejs files serves as an output providing to the user so that the user can see it as a HTML with various Stylings applied using .CSS. To secure the password in database incase the password gets hacked by the decrypter, a bcrypt module is being imported from npm that converts our password into encrypted texts via hash Algorithm. Hence even if an unauthorised user gets the access of the database, he/she won’t be able to know the passwords of the user since they are encrypted using the hash Technology.
Github Repository Link:
https://github.com/Ali-asgar-malekpur/Learning_Management_System_Aliasgar
Website Link: 
