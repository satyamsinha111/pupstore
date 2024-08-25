const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const couponSchema = new Schema({
    code: { type: String, required: true, unique: true },
    discountPercentage: { type: Number, required: true },
    validFrom: { type: Date, required: true },
    validUntil: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Coupon = mongoose.model('Coupon', couponSchema);
module.exports = Coupon;
