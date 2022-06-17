const axios = require ('axios');

const axiosService = async (method,url,data="") => {
  const result = await axios({
    method,
    url,
    data
  })
  return result;
}

module.exports = axiosService;