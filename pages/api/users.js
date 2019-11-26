const db = require('../../lib/db');
const escape = require('sql-template-strings');

module.exports = async (req, res) => {
	const profiles = await db.query(escape`
      SELECT *
      FROM profiles
    `);

	res.status(200).json({ profiles });
};
