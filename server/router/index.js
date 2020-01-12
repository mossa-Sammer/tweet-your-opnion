const Router = require('express').Router();

const signup = require('../controllers/signup');

Router.post('/signup', signup);
Router.use((req, res) => {
	res.json('hello world from router');
});

module.exports = Router;
