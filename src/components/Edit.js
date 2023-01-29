import { useState } from 'react';

function Edit({ user }) {
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [email, setEmail] = useState();

	const handleUpdate = (e) => {
		e.preventDefault();

		if (!firstName) {
		} else {
			//update central storage
		}
	};

	return (
		<div className="small-container">
			<form onSubmit={handleUpdate}>
				<h2>Update User</h2>
				<label htmlFor="firstName">First Name</label>
				<input
					id="firstName"
					type="text"
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
				/>
				<label htmlFor="lastName">Last Name</label>
				<input
					id="lastName"
					type="text"
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
				/>
				<label htmlFor="email">Email</label>
				<input
					id="email"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<button className="btn waves-effect waves-light" type="submit">
					Edit
				</button>
			</form>
		</div>
	);
}

export default Edit;
