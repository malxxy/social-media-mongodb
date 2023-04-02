const { Schema, model } = require('mongoose');

// thought text
// string
// required
// between 1 and 280 characters

// createdAt
// date
// set default value to current imestamp
// use getter method to format timestamp

// username
// string
// required

// reactions
// array of nested documents created with the reaction Schema

// create a virtual reactionCount that retrieves the thoughts reactions array field on query
// Schema to create User model
const thoughtScema = new Schema(
    {
      thoughtText: {type: String, required: true},
      createdAt: { type: Date, default: Date.now },
      username: {type: String, required: true},
      reactions: Array,
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

// Initialize our THought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;