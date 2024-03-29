import fetch from 'isomorphic-unfetch';

export default async (req, res) => {
	if (!('authorization' in req.headers)) {
		return res.status(401).send('Authorization header missing');
	}

	const auth = await req.headers.authorization;

	try {
		const token = auth;

		const url = `http://127.0.0.1:8000/api/v1/user/`;

		const response = await fetch(url, {
			method: 'GET',
			credentials: 'include',
			headers: {
				Authorization: 'Token ' + token
			}
		});
		if (response.ok) {
			const js = await response.json();
			const data = Object.assign({}, { id: js.id, username: js.username }, js);
			return res.status(200).json({ data });
		} else {
			const error = new Error(response.statusText);
			error.response = response;
			throw error;
		}
	} catch (error) {
		const { response } = error;
		return response
			? res.status(response.status).json({ message: response.statusText })
			: res.status(400).json({ message: error.message });
	}
};
