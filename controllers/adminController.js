// const { users } = require("../model/usersModel");
const adminService = require("../service/adminService");

const admin = function () {
  let listUsers = [];
  let userEditInfo = [];
 
  return {
    getInfoSchema: async (req, res) => {
      listUsers = await adminService.getlistUsers(req, res);
      return res.render("adminControllerUsers.ejs", { listUsers});
    },
    deleteInfo: async (req, res) => {
      await adminService.deleteUser(req, res);
      return res.redirect("http://localhost:2024/admin");
    },
    editInfo: async (req, res) => {
      // let userEditInfo = {};
      try {
        userEditInfo = await adminService.editUser(req, res);
        return res.render("updateuser.ejs", {userEditInfo});
      } catch (error) {
        console.log(error);
      }
    },
    updateInfo: async (req, res) => {
      try {
        await adminService.updateUser(req, res)
        return res.redirect("http://localhost:2024/admin")
      } catch (error) {
        console.log(error.stack)
      }
    }
  };
};

module.exports = new admin();
