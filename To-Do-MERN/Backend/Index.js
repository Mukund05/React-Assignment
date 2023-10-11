const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoRoutes = require('./routes/todoRoutes');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const corsOptions = {
  origin: 'http://localhost:5173',
};

app.use(cors(corsOptions));


const PORT = process.env.PORT || 5000;

//write your mongodb atlas url here
const db =process.env.MONGODB_URL;

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check if MongoDB atlas is connected 
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connected');
});

// Routes
app.use('/api/todos', todoRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
