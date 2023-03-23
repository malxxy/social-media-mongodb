const connect = require('./config/connection');
const mongodb = require('mongodb').MongoClient;

let db;

mongodb.connect(
    // middleware
)

// get route
app.post('/create', (req, res) => {
    db.users('users'.insertOne(
        {name: req.body.name, email: req.body.email},
        (err, results) => {
            if (err) throw err;
            res.json(results);
        }
    ))
});

// post route
    app.post('./read', (req, res) => {
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