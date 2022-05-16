const express = require('express');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
app.use(bodyparser.urlencoded({ extended : true}))

// view engine
app.set('view engine', 'ejs');

app.use(morgan('tiny'));

// database connection
const dbURI = 'mongodb+srv://Ali_asgar:Aliasgar_@123@cluster0.0et9u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('home'));
app.get('/Courses', requireAuth, (req, res) => res.render('Courses'));
app.use(authRoutes);