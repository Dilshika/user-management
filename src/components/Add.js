import { useState } from 'react';

function Add() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [emptyFields, setEmptyFields] = useState([]);
	const [error, setError] = useState(null);

	const handleAdd = (e) => {
		e.preventDefault();

		console.log(emptyFields);

		if (!firstName || !lastName || !email) {
			setError(true);
			if (!firstName) {
				setEmptyFields(...emptyFields, 'firstName');
			}

			if (!lastName) {
				setEmptyFields(...emptyFields, 'lastName');
				console.log(emptyFields);
			}

			if (!email) {
				setEmptyFields(...emptyFields, 'email');
			}
		} else {
			//update central storage
		}
	};

	return (
		<div className="small-container">
			<form onSubmit={handleAdd}>
				<h2>Add User</h2>
				<label htmlFor="firstName">First Name</label>
				<input
					id="firstName"
					type="text"
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
					className={emptyFields.includes('firstName') ? 'error' : ''}
				/>
				<label htmlFor="lastName">Last Name</label>
				<input
					id="lastName"
					type="text"
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
					className={emptyFields.includes('lastName') ? 'error' : ''}
				/>
				<label htmlFor="email">Email</label>
				<input
					id="email"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className={emptyFields.includes('email') ? 'error' : ''}
				/>
				<button className="btn waves-effect waves-light" type="submit">
					Add
				</button>
				{error && <div className="error">{error}</div>}
			</form>
		</div>
	);
}

export default Add;
