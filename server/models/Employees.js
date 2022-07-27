const mongoose = require("mongoose");
const {Schema} = mongoose;
const bcrypt = require("bcrypt");
const Orders = require("./Orders");

const employeesSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    order: {
        type: Schema.TYpes.ObjectId,
        ref: "Orders",
        required: true
    } 
});

const Employees = mongoose.model("Employees", employeesSchema);

module.exports = Employees;