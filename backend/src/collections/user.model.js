const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        zipCode: { type: String }
    },
    phone: { type: String },
    createdAt: { type: Date, default: Date.now },
});
userSchema.index({'email':1})
userSchema.index({'address.street':1});
userSchema.index({'address.city':1});
userSchema.index({'address.state':1});

const User = mongoose.model('User', userSchema);
module.exports = User;
