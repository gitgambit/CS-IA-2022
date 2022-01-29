import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
        CustomerName : {type: String, required: true},
        PhoneNumber : {type: Number, required: true, length:10},
        product: [{
            name: { type: String, required: true },
            image: { type: String, required: true },
            price: { type: Number, default: 0, required: true },
            category: { type: String, required: true },
            stockCount: { type: Number, default: 0, required: true },
            description: { type: String, required: true },
        }]
})

const Order  = mongoose.model('Order', orderSchema);

export default Order;