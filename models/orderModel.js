const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
    property: {
        type: Schema.ObjectId,
        ref: 'properties',
        required: [true, 'order must belong to a property']
    },
    user: {
        type: Schema.ObjectId,
        ref: "User",
        required: [true, "Order must belong to a user"]
    },
    status: {
        type: String, 
        enum: ['pending', 'approved', 'rejected', 'confirmed', "cancelled"],
        default: 'pending'
    },
    orderDate: { 
        type: Date,
        default: Date.now()
    }
})

const Order = mongoose.model('order', orderSchema);

module.exports = Order;

