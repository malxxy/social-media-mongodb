const mongoose = require('mongoose'); //require mongoose package

mongoose.connect('mongodb://127.0.0.1:27017/socialmediaDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection; // export the connection