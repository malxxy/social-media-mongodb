const router = require('express').Router();
const apiRoutes = require('./api'); // require api folder 

router.use('./api',apiRoutes); // add api path to all routes in api folder

router.use((req,res) => {
    return res.send('Incorrect route'); // send incorrect route message if accessed route does not exist
});

module.exports = router;