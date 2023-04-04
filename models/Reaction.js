const { Schema, model } = require('mongoose');
const Thought = require('./Thought');

// Schema to create Reaction model
const reactionSchema = new Schema(
    {
        reactionId: { type: mongoose.Schema.Types.ObjectId, default: ObjectId },
        reactionBody: {type: String, required: true, maxLength: 280,},
        username: {type: String, required: true},
        createdAt: { type:Date, default: Date.now },
        thoughts: [Thought],
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );

// Initialize Reaction model
const Reaction = mongoose.model('Reaction', reactionSchema);

const handleError = (err) => console.error(err);

module.exports = Reaction;