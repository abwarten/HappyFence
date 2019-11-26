import fetch from 'isomorphic-unfetch';

function Admin({ props }) {
	return (
		<div>
			{props.profiles.map((user) => (
				<div key={user.id}>
					<div>{user.name}</div>
					<div>{user.email}</div>
				</div>
			))}
		</div>
	);
}

Admin.getInitialProps = async ({ req }) => {
	const host = req ? `http://${req.headers.host}` : '';
	const res = await fetch(`${host}/api/users`);
	const json = await res.json();

	return { props: json };
};

export default Admin;
