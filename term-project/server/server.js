import express from 'express'
import expressLayouts from 'express-ejs-layouts'
import connectDB from './config/db.js'
import multer from 'multer';
import cors from 'cors'
import bodyParser from 'body-parser';
import fs from 'fs'
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
import user from './routes/user.js'
import admin from './routes/admin.js'
import Movie from './models/movieModel.js'
import session from 'express-session'
import { isAuthenticated } from './middleware/verifyUser.js';


const app = express();
app.use(cors())
dotenv.config()
connectDB();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.json())
app.use(bodyParser.json());

app.use(expressLayouts);
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images');
  },
  filename: function (req, file, cb) {
    cb(null, req.body.name);
  }
});

const upload = multer({ storage: storage });

app.post('/api/upload', upload.single("file"), (req, res) => {
  if (req.file) {
    res.status(200).json('File is Uploaded')
  } else {
    res.status(500).json('File is not Uploaded')
  }
});

app.use('/images', express.static("images"))


//delete Image
app.delete('/api/delete/:id', (req, res) => {
  try {
    const path = `images/${req.params.id}`
    fs.unlinkSync(path)
    res.status(200).json('File is Deleted')
  }
  catch (err) {
    res.status(500).json('File is not Deleted')
  }
}
)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: true,
}));

app.get("/", function (req, res) {
  res.render("landing", { user: req.session.user });
});

app.get("/login", function (req, res) {
  res.render("login");
});
// Add logout route and logic to clear session data
app.get('/api/user/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('session-id'); // Clear session cookie
    res.redirect('/login');
  });
});

app.get("/movies", async function (req, res) {
    let records = await Movie.find();
  res.render("movies", { movies: records });
});

app.get("/register", function (req, res) {
  res.render("register");
});


app.use('/api/user', user)
app.use('/api/admin', admin)



const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running on port ${PORT}`))
