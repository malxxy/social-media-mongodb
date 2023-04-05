const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await User.deleteMany({});
  await Thought.deleteMany({});
  await Reaction.deleteMany({});

  const users = [];
  const thoughts = [];
  const reactions = [];

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);
  await Reaction.collection.insertMany(reactions);

  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  console.table(users);
  console.table(applications);
  console.table(reactions);
  console.info('Data has been seeded');
  process.exit(0);
});