import express from 'express';
import mongoose from 'mongoose';
import UserRouter from './Router/userrouter.js';
import dotenv from 'dotenv';
import corsOptions from './corsConfig.js'; // 

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());

app.use(cors(corsOptions)); // Apply the CORS middleware 

app.use('/api', UserRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
