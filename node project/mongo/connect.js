import mongoose from 'mongoose';
export default function connect() {
  mongoose
    .connect(
      'mongodb+srv://mhamad:1234@cluster0.jphvz.mongodb.net/?retryWrites=true&w=majority',
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        autoIndex: true, //make this also true
      }
    )
    .then(() => {
      console.log('connected to mongoDB');
    });
}

