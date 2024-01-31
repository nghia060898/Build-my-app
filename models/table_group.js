'use strict';
// const db = require("./index")

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class table_group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      table_group.hasMany(models.table_users, {
        foreignKey: 'groupId',
        //  onDelete: 'NULL', 
        //  onUpdate: 'CASCADE',
        })

      table_group.belongsToMany(models.table_role, 
            {as: 'group_role', 
            through: {model: models.table_group_role,
            }, 
            foreignKey: 'groupId'});

    }
  }
  table_group.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'table_group',
    freezeTableName: true,
  });
  return table_group;
};