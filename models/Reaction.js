const { Schema, model } = require('mongoose');

// Schema to create Reaction model
const reactionSchema = new Schema(
    {
        reactionBody: {type: String, required: true, maxLength: 280,},
        username: {type: String, required: true},
        createdAt: { type: Date, default: Date.now },
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );

module.exports = reactionSchema;