require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');
const expressLayouts = require('express-ejs-layouts');

// const mongo_url = "mongodb://127.0.0.1:27017/venkatjitendrareddy"
const mongoDB = process.env.MONGO_URI;

main().then( () => {
    console.log("Successfully Connected TO DataBase")
}).catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect(mongoDB);
};

// Import Routes
const dashboardRoutes = require('./routes/dashboardRoute');
const aboutRoutes = require('./routes/aboutRoute');
const resumeRoutes = require('./routes/resumeRoute');
const servicesRoutes = require('./routes/servicesRoute');
const portfolioRoutes = require('./routes/portfolioRoute');
const contactRoutes = require('./routes/contactRoute');
const adityaProjectRoutes = require('./routes/adityaProjectRoute');
const wonderlustProjectRoutes = require('./routes/wonderlustProjectRoute');
const landhubProjectRoutes = require('./routes/landhubProjectRoute'); 
const connectifyProjectRoutes = require('./routes/connectifyProjectRoute'); 

// Body parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Enable layouts / Default layout for all views
app.use(expressLayouts);

app.set('layout', 'layouts/boilerplate');

app.set('view engine', 'ejs');
app.set('views', './views');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Session setup (must come BEFORE flash)
app.use(
  session({
    secret: 'MyPortfolioSecret',  // change this to something secure
    resave: false,
    saveUninitialized: true,
  })
);

// Flash messages
app.use(flash());

// Make flash messages available in views
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
});

// Use Routes
app.use('/', dashboardRoutes);
app.use('/About', aboutRoutes);
app.use('/Resume', resumeRoutes);
app.use('/Services', servicesRoutes);
app.use('/Portfolio', portfolioRoutes);
app.use('/Contact', contactRoutes);
app.use('/Aditay-project', adityaProjectRoutes);
app.use('/Wonderlust-project', wonderlustProjectRoutes);
app.use('/Connectify-project', connectifyProjectRoutes);
app.use('/Landhub-project', landhubProjectRoutes);


app.listen(2580, () => {
  console.log('Server is running on port 2580');
});

