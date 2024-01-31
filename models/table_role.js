'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class table_role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      table_role.belongsToMany(models.table_group, {
        as: 'group_role', 
          through: {model: models.table_group_role,
          }, 
          foreignKey: 'roleId'});

    }
  }
  table_role.init({
    url: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'table_role',
    freezeTableName: true,
  });
  return table_role;
};