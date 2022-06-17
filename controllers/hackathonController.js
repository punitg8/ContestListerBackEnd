const hackathonDbService = require('../dbServices/hackathonDbService');

const getAllHackathon = async(req,res) =>{
  try{
    const hackathonInfo = await hackathonDbService.getAll();
    res.status(200).json({success:true,data:hackathonInfo});
  }catch(error){
    res.status(404).json({success:false,msg:"Data not found"});
  }
}

module.exports = {
  getAllHackathon
}