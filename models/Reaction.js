const { Schema, model } = require('mongoose');

// reactionID
// use mongoose objectId data type
// default value is set to a new ObjectID

// reactionBody
// string
// required
// 280 character maximum

// username
//s tring
// required

// createdAt
// date
// set default value to current timestamp
// use getter method to format timestamp on query

// SUBDOCUMENT SCHEMA IN THE THOUGHT MODEL

// Schema to create Reaction model
const reactionSchema = new Schema(
    {
        reactionId: TBD,
        reactionBody: {type: String, required: true},
        username: {type: String, required: true},
        createdAt: { type:Date, default: Date.now },
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

// Initialize our Reaction model
const Reaction = mongoose.model('Reaction', reactionSchema);

const handleError = (err) => console.error(err);

module.exports = Reaction;