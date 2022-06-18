const express=require("express");
const app = express();
const cors=require('cors');

const contest= require('./routes/contest');
const hiring= require('./routes/hiring');
const hackathon= require('./routes/hackathon');
require("./controllers/cronJobController");

app.use(cors());
app.use(express.json());
app.use('/api/contest',contest);
app.use('/api/hiring',hiring);
app.use('/api/hackathon',hackathon);

app.get('/',(req,res)=>res.send("Working"));

app.listen(process.env.PORT||5000,()=>{
  console.log("Currently listening on port 5000");
})