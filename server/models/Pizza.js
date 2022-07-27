const mongoose = require("mongoose");
const {Schema} = mongoose;

const pizzaSchema = new Schema({
    size: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        trim: true
    },
    toppings: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: 10.00,
        reuired: true
    },
    quantity: {
        type: Number,
        required: true
    },
    user: {
        type: Schema.TYpes.ObjectId,
        ref: "Users",
        required: true
    }

});

const Pizza = mongoose.model("Pizza", pizzaSchema);

module.exports = Pizza;