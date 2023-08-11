const express = require('express');
const cors = require('cors');
const parser = require("body-parser")
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(parser.urlencoded({
    extended: false
}));

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://junkuser:junk12345@nodeexpress-jwt-test.ojchbel.mongodb.net/BookList"
//const uri = "mongodb://localhost:27017/bookList";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true   }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database successfully connected");
})

const bookListRouter = require('./routes/bookList.js');

app.use('/book', bookListRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});