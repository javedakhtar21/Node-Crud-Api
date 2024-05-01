const express = require("express");
const app = express();
const coursesRouter = require("./routes/courses");
const studentsRouter=require('./routes/student');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
dotenv.config();
app.use(bodyParser.json());

//middleware or routes/url
app.use('/api',studentsRouter);
app.use('/api',coursesRouter)


//default api will execute
app.get('/api',(req,res)=>{
    res.send('<h1>Home Page...</h1>');
})

mongoose.connect(process.env.DB_CONNECTION_STRING)
.then(()=>{
    console.log('connected to mongodb...');
})
.catch((error)=>{
    console.log(error);
})


app.listen(process.env.PORT, () => {
  console.log(`server is started at ${process.env.PORT}`);
});
