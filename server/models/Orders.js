const mongoose = require("mongoose");
const {Schema} = mongoose;

const ordersSchema = new Schema({
    status: {
        type: String,
        required: true
    },
    purchaseDate: {
        type: Date,
        defualt: Date.now
    },
    pizza: [
        {
            type: Schema.Types.ObjectId,
            ref: "Pizza"
        }
    ]
});

const Orders = mongoose.model("Orders", ordersSchema);

module.exports = Orders;