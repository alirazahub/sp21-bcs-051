import express from 'express'
import expressLayouts from 'express-ejs-layouts'
import connectDB from './config/db.js'
import cors from 'cors'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
import { validateTask } from './middleware/validate.js';
import Task from './models/taskModel.js';


const app = express();
app.use(express.json({ limit: '10mb' }));
app.use(cors())
dotenv.config()
connectDB();
app.use(cookieParser());
app.use(express.json())
app.use(bodyParser.json());

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(expressLayouts);

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.render('index', { tasks });
  } catch (error) {
    res.render('index', { tasks: [] })
  }
});

app.get('/tasks/new', (req, res) => {
  res.render('new', { task: {}, errors: [] });
});

app.post('/tasks/new', validateTask, async (req, res) => {
  const { title, description, dueDate, status } = req.body;
  const task = new Task({ title, description, dueDate, status });
  task.save();
  const tasks = await Task.find({});
  res.render('index', { tasks });
});

app.get('/tasks/:id/edit', async (req, res) => {
  try {
    //promise 
    const promisTask = Task.findById(req.params.id);
    const task = await promisTask;
    res.render('edit', { task });
  } catch (error) {
    res.render('edit', { task: null });
  }
});

app.post('/tasks/:id/edit', validateTask, async(req, res) => {
  try {
    const taskId = req.params.id;
    const { title, description, dueDate, status } = req.body;

    const task = await Task.findById(taskId);
    task.title = title;
    task.description = description;
    task.dueDate = dueDate;
    task.status = status;

    await task.save();
    res.redirect('/')
  } catch (error) {
    res.send(error.message)
  }
});

app.post('/tasks/:id/delete', async (req, res) => {
  try {
    const taskId = req.params.id;
    await Task.deleteOne({ _id: taskId });
    res.redirect('/');
  } catch (error) {
    res.status(404).send('Task not found.');
  }
});





const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running on port ${PORT}`))
