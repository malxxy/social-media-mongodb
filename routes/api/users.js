const connect = require('./config/connection');
const mongodb = require('mongodb').MongoClient;

let db;

mongodb.connect(
    // middleware
)

// get all users
app.get('/read', (req, res) => {
    db.users('users'.insertOne(
        {username: req.body.username, email: req.body.email},
        (err, results) => {
            if (err) throw err;
            res.json(results);
        }
    ))
});

// get single user
app.get('/read/:id', (req, res) => {
  db.users('users'.insertOne(
      {username: req.body.username, email: req.body.email},
      (err, results) => {
          if (err) throw err;
          res.json(results);
      }
  ))
});

// post new user
  app.post('./create', (req, res) => {
      db.users('users')
      .find()
      .toArray((err, results) => {
          if (err) throw err;
          res.send(results);
        });
    });

// delete route
app.delete('/delete', (req, res) => {
    db.users('users')
    .deleteOne({ "_id" : ObjectId(req.body.id)},
      (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(
          results.deletedCount ? 'User deleted' : 'No user found!'
        )
      });
  });

// update route
app.update('./update/:id', (req,res => {
  db.users('users'
  .updateOne({ "_id" : ObjectId(req.body.id), "username": req.body.username, "email"},
    (err, results) => {
      if (err) throw err;
      console.log(results);
      res.send(
        results.update
    )
  });
)}
))

// BONUS
// remove a user's associated thoughts when deleted

// FRIENDS
// post route to add a new friend to a user's ffriend list
// delete to remove a friend from a user's friend list