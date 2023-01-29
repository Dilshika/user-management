import { useState } from 'react';
import { useUserContext } from '../hooks/useUserContext';
import { useNavigate } from 'react-router-dom';

function Edit({ selectedUser }) {
	console.log(selectedUser);
	const { dispatch } = useUserContext();
	const navigate = useNavigate();

	const [first_name, setFirstName] = useState(selectedUser.first_name);
	const [last_name, setLastName] = useState(selectedUser.last_name);
	const [email, setEmail] = useState(selectedUser.email);
	const id = selectedUser.id;

	const handleUpdate = (e) => {
		e.preventDefault();

		const updatedUser = {
			id: id,
			first_name,
			last_name,
			email,
		};

		dispatch({ type: 'EDIT_USER', payload: updatedUser });
		handleNavigate();
	};

	const handleNavigate = () => {
		navigate('/');
	};

	return (
		<div className="container">
			<form onSubmit={handleUpdate}>
				<h2>Update User</h2>
				<label htmlFor="firstName">First Name</label>
				<input
					id="firstName"
					type="text"
					value={first_name}
					onChange={(e) => setFirstName(e.target.value)}
				/>
				<label htmlFor="lastName">Last Name</label>
				<input
					id="lastName"
					type="text"
					value={last_name}
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
				<button
					className="btn waves-effect waves-light"
					type="button"
					onClick={handleNavigate}
				>
					Cancel
				</button>
			</form>
		</div>
	);
}


export default Edit;
