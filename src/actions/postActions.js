export const deleteUser = (id) => {
	return {
		type: 'DELETE_USER',
		payload: id,
	};
};

export const addUser = (user) => {
	return {
		type: 'ADD_USER',
		payload: user,
	};
};

export const editUser = (user) => {
	return {
		type: 'EDIT_USER',
		payload: user,
	};
};

export const getUsers = (start, end) => {
	return {
		type: 'GET_USERS',
		payload: { start, end },
	};
};
