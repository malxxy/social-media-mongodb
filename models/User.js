// username
// string
// unique
// required
// trimmed

// email
// required
// unique
// must match a vvalid email adress

// thoughts
// array of id values referencing thoughts model

// friends
// array of id values referencng user model (self reference)

// virutal called friendCount that retrieves the length of the users firends array

const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: String,
  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;