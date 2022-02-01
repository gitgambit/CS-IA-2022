
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRouter from './flows/userRoute.js';
import productRouter from './flows/productRoute.js';
import orderRouter from './flows/cartRouter.js';
import "dotenv/config.js";
import path from'path';
const app = express();
// Bodyparser middleware

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(cors());
app.use(bodyParser.json());
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/client/build')))

app.use('/api/users', userRouter);
app.use('/api/products', productRouter)
app.use('/api/orders', orderRouter)

// DB Config
const db = process.env.DBURL;

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
