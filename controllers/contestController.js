const contestDbService = require('../dbServices/contestDbService');

const getAllContest = async(req,res) =>{
  try{
    const contestInfo = await contestDbService.getAll();
    res.status(200).json({success:true,data:contestInfo});
  }catch(error){
    res.status(404).json({success:false,msg:"Data not found"});
  }
}

module.exports = {
  getAllContest
}