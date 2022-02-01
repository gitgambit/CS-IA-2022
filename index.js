
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRouter from './flows/userRoute.js';
import productRouter from './flows/productRoute.js';
import orderRouter from './flows/cartRouter.js';
import "dotenv/config.js";
const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(cors());
app.use(bodyParser.json());
app.use('/users', userRouter);
app.use('/products', productRouter)
app.use('/orders', orderRouter)
// DB Config
const db = process.env.DBURL;
const path = require('path')

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'vandanas-pickles/build')))
// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + 'vandanas-pickles/build/index.html'))
})