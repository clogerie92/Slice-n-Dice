const mongoose = require("mongoose");
const {Schema} = mongoose;
const bcrypt = require("bcrypt");
const Orders = require("./Orders");

// creates new user instance
const usersSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: 8
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    orders: [Orders.schema]
});

// compares the password typed in with the hashed password
usersSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;