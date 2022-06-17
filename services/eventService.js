const axiosService = require('./axiosService');
const url = "https://kontests.net/api/v1/all";

const getAllEvents = async()=>{
  return await axiosService("get",url);
}

module.exports = {
  getAllEvents
}