// import all package use in nodejs
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

// inport all routers
const taskRouter = require('./routers/taskRouter')
const categoryRouter = require('./routers/categoryRouter')

// config app
const app = express();
require('dotenv').config;
app.use(express.json());
app.use(cors());


// data base connect
mongoose.connect(process.env.DATABASE, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('db is connected'))
  .catch(err => console.log('not connect to the database'))


app.use('/api/task', taskRouter);
app.use('/api/category', categoryRouter);



// run server
  const port = process.env.PORT || 3000;
  app.listen(port, ()  => {
      console.log(`server is running in port: ${port}`)
  })
  