import { connect } from 'react-redux';
import {
	addUser,
	deleteUser,
	editUser,
	getUsers,
} from '../actions/postActions';

import Header from '../components/Header';
import Table from '../components/Table';
import Edit from '../components/Edit';
import Delete from '../components/Delete';
import Add from '../components/Add';
import { useState } from 'react';

function Dashboard() {
	//const users = this.props.users;
	//testing purpose
	const users = [];

	const [selectedUser, setSelectedUser] = useState(null);
	const [isAdding, setIsAdding] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);

	const handleDelete = () => {
		this.props.deletePost(this.props.users.dispatch);
		this.post.history.push('/');
		setIsDeleting(true);
	};

	const handleEdit = () => {
		this.props.deletePost(this.props.users.dispatch);
		this.post.history.push('/');
		setIsEditing(true);
	};

	const handleAdd = () => {
		this.props.deletePost(this.props.users.dispatch);
		this.post.history.push('/');
		setIsAdding(true);
	};

	return (
		<>
			<Header />
			<Table
				users={users}
				handleAdd={handleAdd}
				handleDelete={handleDelete}
				handleEdit={handleEdit}
			/>
			{isEditing && <Edit user={selectedUser} />}
			{isAdding && <Add />}
			{isDeleting && <Delete id={selectedUser.id} />}
		</>
	);
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
