const models = require('../models');

const getAll = async() => {
  return await models.contest.findAll();
}

const addAll = async(data) => {
  return await models.contest.bulkCreate(data);
}

const removeAll = async() => {
  return await models.contest.truncate();
}

module.exports={
  getAll,
  addAll,
  removeAll
}