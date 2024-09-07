const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, required: true },
    category: { type: Schema.Types.ObjectId,ref:'Category', required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    imageUrl: { type: String },
    brand: { type: String },
    rating: { type: Number, default: 0 },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
    tags: [{ type: String }],  // Add tags field here
    createdAt: { type: Date, default: Date.now },
});

productSchema.index({ tags: 1 });


const Product = mongoose.model('Product', productSchema);
module.exports = Product;
