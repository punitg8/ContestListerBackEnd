const express=require("express");
const app = express();

const contest= require('./routes/contest');
const hiring= require('./routes/hiring');
const hackathon= require('./routes/hackathon');


app.use(express.json());
app.use('/api/contest',contest);
app.use('/api/hiring',hiring);
app.use('/api/hackathon',hackathon);

app.listen(5000,()=>{
  console.log("Currently listening on port 5000");
})