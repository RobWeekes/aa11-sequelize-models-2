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
      // validate: {
      //   async isUnique(value) {
      //     const existingColor = await Color.findOne({ where: { name: value } });
      //     if (existingColor) {
      //       throw new Error('Color name must be unique');
      //     }
      //   }
      // }
    },
    isPrimary: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
      // validate: {
      //   isPrimaryColor(value) {
      //     const primaryColors = ['Red', 'Blue', 'Yellow'];
      //     if (this.name && value === true && !primaryColors.includes(this.name)) {
      //       throw new Error('Only Red, Blue, and Yellow can be primary colors');
      //     }
      //   }
      // }
    }
  }, {
    sequelize,
    modelName: 'Color',
  });
  return Color;
};
