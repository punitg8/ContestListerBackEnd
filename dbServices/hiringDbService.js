const models = require('../models');

const getAll = async() => {
  return await models.hiring.findAll();
}

const addAll = async(data) => {
  return await models.hiring.bulkCreate(data);
}

const removeAll = async() => {
  return await models.hiring.truncate();
}

module.exports={
  getAll,
  addAll,
  removeAll
}