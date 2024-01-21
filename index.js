const express = require("express");
const app = express();
// const CONFIG = require("./config/config");
// const mongoose = require("mongoose");
// const { Clothers } = require("./model/clothersModel");
// const cors = require("cors");
const router = require("./router/web");
const viewEngine = require("./config/viewEngine");
require("dotenv").config();

//use router
router(app);

//setting view engine
viewEngine(app);

// mongoose
//   .connect(CONFIG._URL, {
//     maxPoolSize: 100,
//     //useNewUrlParser: true,
//     //useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Đã kết nối MongoDB Compass");
//   })
//   .catch((err) => {
//     console.log(`Kết nối MongoDB fail: ${err}`);
//   });
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App được nghe thành công trên port ${PORT}`);
});

// Use epress
// app.use(express.json({ limit: "25mb" }));
// app.use(express.urlencoded({ limit: "25mb", extended: true }));
// app.use(
//   cors({
//     origin: "*",
//   })
// );

// app.get("/clothers", (req, res) => {
//     return Clothers.find()
//     .then((Clothers) => {
//         return res.json({s: 200, data: Clothers})
//     })
//     .catch((e) => {
//         console.log(`API  can not get ${e}`);
//         return res.json({s: 500, msg: "Network Error"})
//     })
// });

// app.post("/clothers", (req, res) => {
// const createData = req.body
// console.log(createData)
// return Clothers.create(
//     {
//     img: createData.img,
//     img1: createData.img1,
//     img2: createData.img2,
//     img3: createData.img3,
//     name: createData.name,
//     sex: createData.sex,
//     size: createData.size,
//     size1: createData.size1,
//     size2: createData.size2,
//     size3: createData.size3,
//     price: createData.price,
//     color: createData.color,
//     qty: createData.qty,
//     info: createData.info
//     },
// )
// .then((rs) => {
//     if(rs){
//         console.log("Data create success")
//         return res.json({ s: 200, msg: "Data create success" });
//     }
// })
// .catch((rj) => {
//     console.log(`Create fail ${rj}`)
//     return res.json({s: 500, msg: "Network error"}) ;
// })
// })

// app.put("/clothers/:id", async (req, res) => {
// const { id } = req.params;
// const { qty, img, img1, img2, img3, name, sex, size, size1, size2, size3, price, color, info } = req.body;
// if(qty < 0){
//   return res.json({s: 400, msg: "The qty of shoes is always greater than or equal to 0"})
// }
//*check id book exist */
// const idClothers = new mongoose.Types.ObjectId(id);
// try {
//   const findClothers = await Clothers.findById(idClothers);
//   if(!findClothers){
//     return res.json({s: 400, msg: "Clothers cannot find"})
//   }
//   await Clothers.updateOne(
//     {_id: id},
//     {$set:{
//         img: img,
//         img1:img1,
//         img2:img2,
//         img3:img3,
//         name: name,
//         sex: sex,
//         size: size,
//         size1: size1,
//         size2: size2,
//         size3: size3,
//         price: price,
//         color: color,
//         qty: qty,
//         info: info
//     }},
//   )
//   return res.json({s: 200, msg: "Update Data Success"});
// } catch (error) {
//   console.log(`Api get Clothers fail: ${error}`);
// return res.json({ s: 500, msg: "Network error" });
// }
// })

// app.delete("/clothers/:id", async (req, res) => {
// const { id } = req.params;
// const idClothers = new mongoose.Types.ObjectId(id);
// try {
//   const findClothers = await Shoes.findById(idClothers);
//   if(!findClothers){
//     return res.json({s: 400, msg: "Clothers cannot find"})
//   }
//   await Clothers.deleteOne({_id: id});
//   return res.json({s: 200, msg: "delete Data Success"});
// } catch (error) {
//   console.log(`Api delete Clothers fail: ${error}`);
// return res.json({ s: 500, msg: "Network error" });
// }
// })
