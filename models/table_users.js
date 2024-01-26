"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class table_users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  table_users.init(
    {
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      phone: DataTypes.STRING,
      password: DataTypes.STRING,
      status: DataTypes.STRING,
      token: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "table_users",
    }
  );
  return table_users;
};
