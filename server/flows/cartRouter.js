import express from 'express';
import Order from '../models/orders.js';

const orderRouter = express.Router();

orderRouter.post('/', async(req, res) => {
    const order = new Order({
        CustomerName: req.body.CustomerName,
        PhoneNumber: req.body.PhoneNumber,
        orderItems: req.body.orderItems,
    });
    const createdOrder = await order.save();
    res.status(201)
    .send({message: "New order created.", order: createdOrder});
})

orderRouter.get('/:id', async(req, res) => {
    const order = await Order.findById(req.params.id);
    if(order){
        res.send(order);
    }
    else{
        res.status(404).send({message: "Order not found."});
    }
})


export default orderRouter;
