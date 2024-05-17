import app from "./Backend/app.js";
import mongoose  from 'mongoose';

const MONGO_URL = "mongodb+srv://ankitajayale211:jayalea@cluster0.1p45so4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


mongoose.connect(MONGO_URL,
).then(() => {
  app.listen(5000, () =>
    console.log(`server is listening to port 5000`))
}).catch((error) => {
  console.log(error)
});