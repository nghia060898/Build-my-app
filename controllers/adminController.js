// const { users } = require("../model/usersModel");
const adminService = require("../service/adminService");

const admin = function () {
  return {
    getInfoSchema: async (req, res) => {
      let listUsers = [];
      listUsers = await adminService.getlistUsers(req, res);
      return res.render("adminControllerUsers.ejs", { listUsers });
    },
  };
};

module.exports = new admin();
