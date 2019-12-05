import fetch from 'isomorphic-unfetch';

function Users({ props }) {
	return (
		<div>
			{props.map((user) => (
				<div key={user.id}>
					<div>{user.name}</div>
					<div>{user.password}</div>
				</div>
			))}
		</div>
	);
}

Users.getInitialProps = async ({ req }) => {
	const host = req ? `https://${req.headers.host}` : '';
	const res = await fetch(`${host}/api/users`, {
		method: 'POST'
	});
	const json = await res.json();
	return { props: json };
};

export default Users;
