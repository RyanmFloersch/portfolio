const router = require('express').Router();

const api_routes = require('./api/api_routes');

router.use('/', [api_routes]);

module.exports = router;