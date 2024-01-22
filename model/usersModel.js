"use strict";
const mongoose = require("mongoose");
const users = mongoose.Schema(
    {

        email: {type: String},
        username: {type: String},
        phone: {type: Number},
        password: {type: String},
        otp: {type: String},
        token: {type: String},
        status: {type: String, default: 'pending'},
    },
    {versionKey: false, timestamps: true}
);

users.statics.objectId = function(id) {
    return mongoose.Types.ObjectId(id);
};

module.exports = {
    users: mongoose.model("info_customer", users)
};