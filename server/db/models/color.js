'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Color extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Color.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    isPrimary: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      validate: {
        threeColors(value) {
          if(value !== 'red' && value !== 'blue' && value !== 'yellow') {
            throw new Error('Value must be a primary color')
          }
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Color',
  });
  return Color;
};