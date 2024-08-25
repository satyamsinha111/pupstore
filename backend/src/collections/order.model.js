const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    orderItems: [
        {
            product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true },
            price: { type: Number, required: true }
        }
    ],
    shippingAddress: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zipCode: { type: String, required: true }
    },
    paymentMethod: { type: String, required: true },
    paymentStatus: { type: String, default: 'Pending' },
    totalPrice: { type: Number, required: true },
    orderStatus: { type: String, default: 'Processing' },
    placedAt: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
