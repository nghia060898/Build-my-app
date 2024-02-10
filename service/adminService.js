const bcrypt = require("bcryptjs");
// const mysql = require("mysql");
const db = require("../models/index");

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "thn060898",
//   database: "admin_dev",
// });

const adminServices = function () {
  return {
    getlistUsers: async (req, res) => {
      // return new Promise((resolve, reject) => {
      // let list = {};
      // connection.query(
      //   "SELECT * FROM table_users",
      //   function (error, results, fields) {
      //     if (error) {
      //       console.log(error);
      //       reject(error); // Reject the promise if there is an error
      //     }

      //     list = results;

      //     resolve(list); // Resolve the promise with the result
      // }
      // );

      // let list = await db.table_users.findOne(
      // { where: { id: 1 } },
      // {
      //   include: [{ model: db.table_group}],
      // }
      // );

      let list = await db.table_users.findAll({
        // where: { id: 1 },
        include: [{ model: db.table_group }],
        raw: true,
        nest: true,
      });

      let role = await db.table_group.findOne({
        where: { id: 1 },
        include: [
          { model: db.table_role, 
            through: "table_group_role", 
            as: "group_role", 
            raw: true,
            nest: true, },
        ],
        raw: true,
        nest: true,
      });


      const all =  await db.table_users.findOne({
        // where: { id: 3 },
        attributes: ["email","username"],
        include: [{ model: db.table_group, 
          // where: { id: 1 },
          attributes: ["name"],
          include: [
            { model: db.table_role, 
              attributes: ["url","description"],
              // through: "table_group_role", 
              as: "group_role", 
              raw: true,
              nest: true, },
                  ],
                  raw: true,
                  nest: true,}],
        raw: true,
        nest: true,
      });
      console.log(all);
      return list;

      // }
      // };
    },
    deleteUser: async (req, res) => {
      const { id } = req.params;

      await db.table_users.destroy({
        where: {
          id: id,
        },
      });
      return;
      // return new Promise((resolve, reject) => {
      //   connection.query('DELETE FROM table_users WHERE id = ?', [id],
      //   function (error, results, fields) {
      //    if (error){
      //      reject(error.stack)
      //    }
      //    resolve()
      //  })
      // })
    },
    editUser: async (req, res) => {
      const { id } = req.params;
      // console.log(req.body)
      let userEdit = {};
      //  return new Promise((resolve, reject) => {
      //   connection.query('SELECT * FROM table_users WHERE id = ?', [id],
      //    function (error, results, fields) {
      //     if (error){
      //       reject(error.stack)
      //     }
      //     userEdit = results[0]

      //     resolve(userEdit)
      //   });
      //  } )

      // return userEdit;
      //   }

      userEdit = await db.table_users.findOne({
        where: {
          id: id,
        },
      });
      return userEdit;
    },
    updateUser: async (req, res) => {
      const { id } = req.params;
      const { email, username, phone, password } = req.body;
      const salt = bcrypt.genSaltSync(10);
      const hashpassword = bcrypt.hashSync(password, salt);
      // return new Promise((resolve, reject) => {
      //   connection.query(
      //     "UPDATE table_users SET email = ?, username = ?, phone = ?, password = ? WHERE id = ?",
      //     [email, username, phone, hashpassword, id],
      //     function (error, results, fields) {
      //       if (error) {
      //         reject(error.stack);
      //       }
      //       resolve(req.body);
      //     }
      //   );
      // });

      await db.table_users.update(
        {
          email: email,
          username: username,
          phone: phone,
          password: hashpassword,
        },
        {
          where: {
            id: id,
          },
        }
      );

      return;
    },
  };
};

module.exports = new adminServices();
