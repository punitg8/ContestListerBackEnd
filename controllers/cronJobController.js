const cron = require('node-cron');
const contestDbService = require("../dbServices/contestDbService");
const hackathonDbService = require("../dbServices/hackathonDbService");
const hiringDbService = require("../dbServices/hiringDbService");
const eventService = require("../services/eventService");
const {convertData} = require("../services/utilitySerivce");

const addData = async() => {
  try{
    const events=await eventService.getAllEvents();
    const structuredEvents = await convertData(events.data);
    let contest=[],hiring=[],hackathon=[];
    structuredEvents.forEach(entry => {
      if(entry.url.includes("hiring")) hiring.push(entry)
      else if(entry.url.includes("hackathon")) hackathon.push(entry)
      else contest.push(entry);
    });
    await contestDbService.removeAll();
    await contestDbService.addAll(contest);
    await hackathonDbService.removeAll();
    await hackathonDbService.addAll(hackathon);
    await hiringDbService.removeAll();
    await hiringDbService.addAll(hiring);
  }catch(err){
    console.log(err);
  }
}

cron.schedule('0 */6 * * *',()=>{
  addData();
})