import mongoose from 'mongoose';
const { Schema } = mongoose;
mongoose.Promise = mongoose.Promise;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: [5, "Username must be 5 characters or more"]
  }
});

module.exports = mongoose.model('User', userSchema);
