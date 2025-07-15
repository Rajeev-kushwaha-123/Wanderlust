if (process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}

const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const mongoose = require("mongoose");
const methodOverride= require("method-override");
const ejsMate =require("ejs-mate");
const ExpressError= require("./utils/ExpressError.js");
const { required } = require("./schemas/listingSchema.js");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");  // Import the user model


const listings= require("./routes/listing.js");
const reviews= require("./routes/review.js");
const userRoutes = require("./routes/user");

const dbUrl= process.env.ATLASDB_URL;

mongoose.connect( dbUrl , {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("Could not connect to MongoDB", err);
});

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);


// Set EJS as the templating engine
app.set("view engine", "ejs");

// Set the views directory (optional if your views are in a custom folder)
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, 'public')));
 // if style.css is in public folder

const sessionSecret = process.env.SECRET; // define secret separately

const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: sessionSecret,
  },
  touchAfter: 24 * 60 * 60, // 1 day (touchAfter is in seconds, not milliseconds)
});

store.on("error", function (e) {
  console.log("SESSION STORE ERROR", e);
});

const sessionConfig = {
  store: store,
  secret: sessionSecret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  },
};

app.use(session(sessionConfig));
app.use(cookieParser());
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// Make flash messages available in all views
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
});


// Home
app.get("/", (req, res) => {
    res.redirect("/listings");
});

// Listings
app.use("/listings",listings);

// Reviews
app.use("/listings/:id/reviews",reviews);

//user login/signup
app.use("/", userRoutes);


app.all("*", (req, res, next) => {
    next(new ExpressError(404,"Page Not Found"));
});

app.use((err,req,res,next)=>{
   let {statusCode=500,message="something went wrong!"}=err;
   res.status(statusCode).render("error.ejs",{message})
//    res.status(statusCode).send(message);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});

