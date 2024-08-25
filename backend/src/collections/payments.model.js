const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    order: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
    paymentMethod: { type: String, required: true },
    paymentStatus: { type: String, default: 'Pending' },
    paidAt: { type: Date },
    transactionId: { type: String },
    createdAt: { type: Date, default: Date.now },
});

const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;
