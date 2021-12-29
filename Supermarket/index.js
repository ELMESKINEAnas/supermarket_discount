require('dotenv').config();  
const express = require('express');
const app = express();
app.use(express.json());

const userRouter = require('./api/users/user.router');
const logsRouter = require('./api/logs/logs.router');
const adminCentreRouter = require('./api/admin_centre/adminCentre.router');
const responsableRayonRouter = require("./api/responsable_rayon/responsableRayon.router");



app.use("/api/logs",logsRouter);
app.use("/api/responsableRayon", responsableRayonRouter);
app.use("/api/adminCentre", adminCentreRouter);
app.use("/api/users", userRouter);


app.listen(process.env.APP_PORT, ()=>{

    console.log("Kheddaaaam", process.env.APP_PORT);
});