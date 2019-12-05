const express = require('express');
const next = require('next');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');

const dev = process.env.NODE_ENV !== 'production';
const server = express();
const app = next({ dev });
const handle = app.getRequestHandler();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cookieParser());

const { database } = require('./lib/db');
const { User } = require('./lib/models');

server.use(passport.initialize());
require('./routes/passport');
const auth = require('./routes/auth');

server.use('/auth', auth);

server.get('*', (req, res) => {
	return handle(req, res);
});

User.sync({ force: true }).then(() => {});

database.sync().then(() => {
	app
		.prepare()
		.then(() => {
			server.listen(3000, (err) => {
				if (err) throw err;
				console.log('>Ready on http://localhost:3000');
			});
		})
		.catch((ex) => {
			console.error(ex.stack);
			process.exit(1);
		});
});
