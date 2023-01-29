function Table({ users, handleAdd, handleDelete, handleEdit }) {
	return (
		<div className="container">
			<div className="grid">
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
						{users > 0 ? (
							users.map((user) => {
								<tr key={user.id}>
									<td>{user.id}</td>
									<td>{user.firstName}</td>
									<td>{user.lastName}</td>
									<td>
										<button onClick={() => handleAdd()}>Add</button>
									</td>
									<td>
										<button onClick={() => handleEdit()}>Edit</button>
									</td>
									<td>
										<button onClick={() => handleDelete()}>Delete</button>
									</td>
								</tr>;
							})
						) : (
							<tr>
								<td colSpan={15}>No Users</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Table;
