"use strict";
const mongoose = require("mongoose");
const Clothers = mongoose.Schema(
    {
        img: {type: String},
        img1:{type: String},
        img2:{type: String},
        img3:{type: String},
        name: {type: String},
        sex: {type: String},
        size: {type: String},
        size1: {type: String},
        size2: {type: String},
        size3: {type: String},
        price: {type: String},
        color: {type: String},
        qty: {type: Number},
        info: {type: String}
    },
    {versionKey: false, timestamps: true}
);

Clothers.statics.objectId = function(id) {
    return mongoose.Types.ObjectId(id);
};

module.exports = {
    Clothers: mongoose.model("clothers", Clothers)
};

// const ClothersSchema = new mongoose.Schema(
//   {
//     img: { type: String },
//     img1: { type: String },
//     img2: { type: String },
//     img3: { type: String },
//     name: { type: String },
//     sex: { type: String },
//     size: { type: String },
//     size1: { type: String },
//     size2: { type: String },
//     size3: { type: String },
//     price: { type: String },
//     color: { type: String },
//     qty: { type: Number },
//     info: { type: String },
//   },
//   { versionKey: false, timestamps: true }
// );

// ClothersSchema.statics.objectId = function (id) {
//     return mongoose.Types.ObjectId(id);
// };

// const Clothers = mongoose.model("Clothers", ClothersSchema);
// const clotherId = Clothers.objectId("yourIdHere");

// module.exports = Clothers;
