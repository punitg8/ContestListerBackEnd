'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hiring extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hiring.init({
    name: DataTypes.STRING,
    platform:DataTypes.STRING,
    url:DataTypes.STRING,
    duration: DataTypes.INTEGER,
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE,
    in24Hours: DataTypes.BOOLEAN,
    onGoing: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'hiring',
  });
  return hiring;
};