import { useState } from 'react';
import { useUserContext } from '../hooks/useUserContext';

const Add = () => {
	const { users, dispatch } = useUserContext();

	const [first_name, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [emptyFields, setEmptyFields] = useState([]);
	const [error, setError] = useState(null);

	const handleAdd = (e) => {
		e.preventDefault();

		if (!first_name || !lastName || !email) {
			setError(true);
			if (!first_name) {
				setEmptyFields(...emptyFields, 'firstName');
			}

			if (!lastName) {
				setEmptyFields(...emptyFields, 'lastName');
			}

			if (!email) {
				setEmptyFields(...emptyFields, 'email');
			}
		} else {
			//update central storage
			const newUser = {
				id: users[users.length - 1].id + 1,
				first_name,
				lastName,
				email,
			};

			dispatch({ type: 'ADD_USER', payload: newUser });
		}
	};

	const handleCancel = () => {};

	return (
		<div className="small-container">
			<form onSubmit={handleAdd}>
				<h2>Add User</h2>
				<label htmlFor="first_name">First Name</label>
				<input
					id="first_name"
					type="text"
					value={first_name}
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
				<button
					className="btn waves-effect waves-light"
					type="submit"
					value="Add"
				>
					Add
				</button>
				<button
					className="btn waves-effect waves-light"
					type="button"
					value="Cancel"
					onClick={() => handleCancel(false)}
				>
					Cancel
				</button>
				{error && <div className="error">{error}</div>}
			</form>
		</div>
	);
};

export default Add;
