const { users } = require("../model/usersModel");
const bcrypt = require("bcryptjs");
const mysql = require('mysql');



const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'thn060898',
  database : 'admin_dev',
  
});

const usersService = function () {
  return {

    insertlistUser: (req, res) => {


  
      const {email, username, phone, password} = req.body

      
        const salt = bcrypt.genSaltSync(10);
        const hashpassword = bcrypt.hashSync(password, salt);
  
      connection.query('INSERT INTO table_users(email, username, phone, password) VALUES (?, ?, ?, ?)', [email, username, phone, hashpassword], 
      
      function (error, results, fields) {
        if (error){
          console.log(error.stack)
        }
        return
      }
      )
    }

    
    
    // hashpassword: (password) => {

    //   console.log(hashpassword);
    //   return hashpassword;
    // },
    // createNew: async (req, res) => {
    //   try {
    //     const email = req.body.email;
    //     const username = req.body.username;
    //     const phone = req.body.phone;
    //     const password = req.body.password;
    //     const repassword = req.body.repassword;

    //     if (!email || email.length === 0) {
    //       return res.send("Invalid Email");
    //     }
    //     if (!username || username.length === 0) {
    //       return res.send("Invalid User Name");
    //     }
    //     if (!phone || phone.length < 10 || phone.length > 12) {
    //       return res.send("Invalid Phone");
    //     }
    //     if (!password || password.length < 6) {
    //       return res.send("Invalid Password");
    //     }
    //     if (repassword !== password) {
    //       return res.send("Repassword false");
    //     }
    //     const salt = bcrypt.genSaltSync(10);
    //     const hashpassword = bcrypt.hashSync(password, salt);
    //     const info = users.create({
    //       email: email,
    //       username: username,
    //       phone: phone,
    //       password: hashpassword,
    //     });
    //     return info;
    //   } catch (error) {
    //     console.log(error.stack);
    //   }

    //   // console.log(hashpassword);
    // },

    // get: async () => {},
  };
};

module.exports = new usersService();
