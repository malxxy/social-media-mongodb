// email
// must match a valid email adress

const { Schema, model } = require('mongoose');
const Thought = require('./Thought');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {type: String, required: true,  unique: true,  trim: true },
    email: {type: String, required: true,  unique: true, match: [/.+@.+\..+/, 'Must match an email address!'],},
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
  );
  
 // virutal called friendCount that retrieves the length of the users friends array
userSchema  
  .virtual('getFriends')
.get(function () {
  return this.friends.length;
});

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;