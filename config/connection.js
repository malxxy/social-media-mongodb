const mongoose = require('mongoose'); //require mongoose package

mongoose.connect('mongodb://localhost:30001/socialmediaDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection; // export the connection