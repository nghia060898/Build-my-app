const { users } = require("../model/usersModel");
// const mongoose = require("mongoose")
const bcrypt = require("bcryptjs");

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "thn060898",
  database: "admin_dev",
});

const adminServices = function () {
  return {
    getlistUsers: async (req, res) => {
      return new Promise((resolve, reject) => {
        let list = [];
        connection.query(
          "SELECT * FROM table_users",
          function (error, results, fields) {
            if (error) {
              console.log(error);
              reject(error); // Reject the promise if there is an error
            }

            list = results;
            resolve(list); // Resolve the promise with the result
          }
        );
      });
    },
    deleteUser: async (req, res) => {
      
        const { id } = req.params;
        return new Promise((resolve, reject) => {
          connection.query('DELETE FROM table_users WHERE id = ?', [id],
          function (error, results, fields) {
           if (error){
             reject(error.stack)
           }
           resolve()
         })
        })
    
    },
    editUser: async (req, res) => {
      const { id } = req.params;
      // const {email, username, phone, password, createdAt} = req.body
      // console.log(req.body)
      let userEdit = {};
       return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM table_users WHERE id = ?', [id],
         function (error, results, fields) {
          if (error){
            reject(error.stack)
          }
          userEdit = results[0]

          resolve(userEdit)
        });
       } )
       
        // return userEdit;
        //   }

    },
    updateUser: async (req, res) => {
      const { id } = req.params;
      const { email, username, phone, password } = req.body;
      const salt = bcrypt.genSaltSync(10);
      const hashpassword = bcrypt.hashSync(password, salt);
      return new Promise((resolve, reject) => {
        connection.query('UPDATE table_users SET email = ?, username = ?, phone = ?, password = ? WHERE id = ?',
         [email, username, phone, hashpassword, id],
        function (error, results, fields){
          if (error){
            reject(error.stack)
          }
          resolve(req.body)
        })
      })
     
    },
  };
};

module.exports = new adminServices();
