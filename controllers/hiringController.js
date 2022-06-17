const hiringDbService = require('../dbServices/hiringDbService');

const getAllHiring = async(req,res) =>{
  try{
    const hiringInfo = await hiringDbService.getAll();
    res.status(200).json({success:true,data:hiringInfo});
  }catch(error){
    res.status(404).json({success:false,msg:"Data not found"});
  }
}

module.exports = {
  getAllHiring
}