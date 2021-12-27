require('dotenv').config();  
const express = require('express');
const app = express();
app.use(express.json());

const userRouter = require('./api/users/user.router');
const logsRouter = require('./api/logs/logs.router');

app.use("/api/logs",logsRouter);




app.use("/api/users", userRouter);


app.listen(process.env.APP_PORT, ()=>{

    console.log("Kheddaaaam", process.env.APP_PORT);
});