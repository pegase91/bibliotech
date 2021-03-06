import {Schema, model} from 'mongoose';
const bcrypt = require('bcrypt');


//Model User

const UserSchema = new Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    pseudo: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    role: {type: Number, default: 0},
    created_at: {type: Date, default: Date.now()},
});


/*
UserSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) {
      return next();
    }
  
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return next(err);
      }
  
      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  });
  
  UserSchema.methods.comparePassword = function(candidatePassword) {
    const user = this;
  
    return new Promise((resolve, reject) => {
      bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
        if (err) {
          return reject(err);
        }
  
        if (!isMatch) {
          return reject(false);
        }
  
        resolve(true);
      });
    });
  };
  
  */

  

export default model('User', UserSchema);
