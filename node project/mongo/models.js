import mongoose from 'mongoose'
const userSchema = mongoose.Schema({
  fullName: String,
  email: String,
  phoneNumber: String,
  username: { type: String, required: true, unique: true },
  password: String,
  role: String,
  gender: String,

});
const carSchema = mongoose.Schema({
  model: String,
  price: Number,
  info: String,
  image: String,
  owner:
    { type: mongoose.Schema.Types.ObjectId, ref: 'User' }

});
export const User = mongoose.model('User', userSchema);
export const Car = mongoose.model('Car', carSchema);