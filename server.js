const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const employeeRouter = require('./routes/employeeRouter');
const port = 9090;
const MONGOOSE_URL="mongodb+srv://minhduc:1232001@cluster0.5097h.mongodb.net/101234383_assignment2?retryWrites=true&w=majority"

const app = express();

var cors = require('cors')
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.json());
app.use(employeeRouter)

mongoose.Promise = global.Promise;

mongoose.connect(MONGOOSE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting ...', err);
    process.exit();
});


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
