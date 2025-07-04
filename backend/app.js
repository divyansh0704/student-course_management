const sequelize = require("./config/db")
const express = require("express")
const cors = require("cors");
const app = express()



const Student = require("./models/student");
const Course = require("./models/course");
const Enrollment = require("./models/enrollment");

app.use(express.json());
app.use(cors());

Student.belongsToMany(Course,{through:Enrollment});
Course.belongsToMany(Student,{through:Enrollment});

app.use("/api/students", require("./routes/studentRoutes"));
app.use("/api/courses", require("./routes/courseRoutes"));
app.use("/api/enrollments", require("./routes/enrollmentRoutes"));


sequelize.authenticate()
 .then(()=>console.log("database is connected successfully"))
 .catch((err)=>console.error("unable to connect",err));

sequelize.sync({alter:true})
 .then(()=>console.log("Database synced"))
 .catch((err)=>console.error("Database not synced",err))

app.get("/",(req,res)=>{
    res.send("Welcome to the server")
});

app.listen(3000,()=>console.log("server started at port 3000"));
  