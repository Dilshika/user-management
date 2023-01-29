import { useEffect, useState } from 'react';
import { useUserContext } from '../hooks/useUserContext';
import { Loader } from '../components/Loader';

import { Header } from '../components/Header';
import Edit from '../components/Edit';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
	const navigate = useNavigate();

	const { users, dispatch } = useUserContext();

	const [isEditing, setIsEditing] = useState(false);
	const [selectedUser, setSelectedUser] = useState([]);

	useEffect(() => {
		const fetchUsers = async () => {
			const response = await fetch('https://reqres.in/api/users?page=1', {
				method: 'GET',
			});
			const json = await response.json();

			if (response.ok) {
				dispatch({ type: 'SET_USER', payload: json });
			}
		};

		fetchUsers();
	}, [dispatch]);

	const handleAdd = (user) => {
		navigate('/add');
	};

	const handleEdit = (user) => {
		setIsEditing(true);
		setSelectedUser(selectedUser.push(user));
	};

	const handleDelete = (user) => {
		const id = user.id;
		dispatch({ type: 'DELETE_USER', payload: id });
	};

	return (
		<div className="container">
			<Header />
			{users ? (
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email</th>
							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{users.length > 0 ? (
							users.map((user, index) => (
								<tr key={user.id}>
									<td>{user.id}</td>
									<td>{user.first_name}</td>
									<td>{user.last_name}</td>
									<td>{user.email}</td>
									<td>
										{!isEditing && (
											<button
												className="btn waves-effect waves-light"
												onClick={() => handleEdit(user)}
											>
												Edit
											</button>
										)}
										{isEditing && index + 1 === selectedUser && (
											<span>
												<Edit selectedUser={user} />
											</span>
										)}
									</td>
									<td>
										<button
											className="btn waves-effect waves-light"
											onClick={() => handleDelete(user)}
										>
											Delete
										</button>
									</td>
								</tr>
							))
						) : (
							<tr>
								<td colSpan={15}>No Users</td>
							</tr>
						)}
					</tbody>
				</table>
			) : (
				<Loader />
			)}
			<div className="btn waves-effect waves-light" onClick={() => handleAdd()}>
				ADD
			</div>
		</div>
	);
}

export default Dashboard;
