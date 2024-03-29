'use strict';
// const db = require("./index")

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class table_users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      table_users.belongsTo(models.table_group,
         { foreignKey: 'groupId',
        //  onDelete: 'NULL',
        //  onUpdate: 'CASCADE',
         },
         )
    }
  }
  table_users.init({
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    status: DataTypes.STRING,
    token: DataTypes.STRING,
    groupId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'table_users',
    freezeTableName: true,
  });
  return table_users;
};