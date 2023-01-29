import { connect } from 'react-redux';
import {
	addUser,
	deleteUser,
	editUser,
	getUsers,
} from '../actions/postActions';

import Header from '../components/Header';
import Edit from '../components/Edit';
import Add from '../components/Add';
import { Component } from 'react';

class Dashboard extends Component {
	handleAdd = () => {
		this.props.addUser(this.props.users.dispatch);
	};

	handleDelete = () => {
		this.props.deleteUser(this.props.users.id);
	};

	handleEdit = (e) => {
		const user = this.props.users.find((user) => user.id === e);
		console.log(e);
		this.props.editUser(this.props.users.dispatch);
	};

	render() {
		const users = this.props.users;
		let isEditing = false;
		let isAdding = false;
		let user;

		return (
			<>
				<Header />
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
								{users.length > 0 ? (
									users.map((user) => (
										<tr key={user.id}>
											<td>{user.id}</td>
											<td>{user.first_name}</td>
											<td>{user.last_name}</td>
											<td>{user.email}</td>
											<td>
												<button
													className="btn waves-effect waves-light"
													onClick={this.handleAdd}
												>
													Add
												</button>
											</td>
											<td>
												<button
													className="btn waves-effect waves-light"
													onClick={this.handleEdit}
												>
													Edit
												</button>
											</td>
											<td>
												<button
													className="btn waves-effect waves-light"
													onClick={this.handleDelete}
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
					</div>
				</div>
				{isEditing && <Edit user={user} />}
				{isAdding && <Add />}
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.users,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		deleteUser: (id) => {
			dispatch(deleteUser(id));
		},
		addUser: (user) => {
			dispatch(addUser(user));
		},
		editUser: (user) => {
			dispatch(editUser(user));
		},
		getUser: (start, end) => {
			dispatch(getUsers(start, end));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
