const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const dev = process.env.NODE_ENV !== 'production';

const corsOptions = {
	origin: 'http://localhost:3000',
	credentials: true
};

const app = next({ dev });
const handle = app.getRequestHandler();

app
	.prepare()
	.then(() => {
		const server = express();

		server.use(cors(corsOptions));

		server.use(bodyParser.json());
		server.use(bodyParser.urlencoded({ extended: false }));
		server.use(cookieParser());

		server.get('*', (req, res) => {
			return handle(req, res);
		});

		server.listen(3000, (err) => {
			if (err) throw err;
			console.log('>Ready on http://localhost:3000');
		});
	})
	.catch((ex) => {
		console.error(ex.stack);
		process.exit(1);
	});
