const { users } = require("../model/usersModel");
const mongoose = require("mongoose")

const adminServices = function () {
  return {
    getlistUsers: async (req, res) => {
      let list = [];
      const info = await users.find({});
      try {
        list = info;
        return list;
      } catch (error) {
        console.log(error.stack);
      }
      // usersService.get
    },
    deleteUser: async (req, res) => {
      try {
        const { id } = req.params;
        const findUser = await users.findById(id);
        if (findUser) {
            let d = []
           d = await users.deleteOne({ _id: id });
          return d
        }
        // console.log(idUser)
        // return d
      } catch (error) {
        console.log(error.stack);
      }
    },
    editUser: async (req, res) => {
      const { id } = req.params;
      // const {email, username, phone, password, createdAt} = req.body
      const userEdit = await users.findOne({ _id: id });
      try {
        return userEdit;
        //   }
      } catch (error) {
        console.log(error.stack);
      }
    },
    updateUser: async (req, res) => {
        const {id} = req.params
        const {email, username, password, phone} = req.body
        const idUser = new mongoose.Types.ObjectId(id)
        const userEdit = await users.findById(idUser);
        try {
            if(userEdit){
            const userUpdate = await users.updateOne({_id: id},
               {$set:
              {
                email: email,
                username: username,
                phone: phone,
                password: password,
              }
            })
            return 
          }
            
        } catch (error) {
          console.log(error.stack)
        }
          
    },
  };
}


module.exports = new adminServices();
