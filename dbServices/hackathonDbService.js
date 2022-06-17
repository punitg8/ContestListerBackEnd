const models = require('../models');

const getAll = async() => {
  return await models.hackathon.findAll();
}

const addAll = async(data) => {
  return await models.hackathon.bulkCreate(data);
}

const removeAll = async() => {
  return await models.hackathon.truncate();
}

module.exports={
  getAll,
  addAll,
  removeAll
}