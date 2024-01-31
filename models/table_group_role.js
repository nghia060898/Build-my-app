'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class table_group_role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  table_group_role.init({
    
    groupId: DataTypes.INTEGER,
    roleId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'table_group_role',
    freezeTableName: true,
  });
  return table_group_role;
};