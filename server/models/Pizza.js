const mongoose = require("mongoose");
const {Schema} = mongoose;

const pizzaSchema = new Schema({
    size: {
        type: String,
        required: true
    },
    crust: {
        type: String,
        required: true,
        trim: true
    },
    meats: [
        {
            type: String
            
        }
    ],
    veggies: [
        {
            type: String
        }
    ],

    // price: {
    //     type: Number,
    //     min: 10.00,
    //     reuired: true
    // },

    // status: {
    //     type: String,
    //     required: true
    // },
    // createdDate: {
    //     type: Date,
    //     defualt: Date.now
    // }
});

const Pizza = mongoose.model("Pizza", pizzaSchema);

module.exports = Pizza;