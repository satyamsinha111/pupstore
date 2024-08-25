const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    wishlistItems: [
        {
            product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
        }
    ],
    createdAt: { type: Date, default: Date.now },
});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);
module.exports = Wishlist;
