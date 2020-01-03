const Router = require('express').Router();

Router.use((req, res) => {
	res.json('hello world from router');
});

module.exports = Router;
