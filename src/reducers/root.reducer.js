const initialState = {
	users: [
		{
			id: 1,
			email: 'michael.lawson@reqres.in',
			first_name: 'Michael',
			last_name: 'Lawson',
			avatar: 'https://reqres.in/img/faces/7-image.jpg',
		},
		{
			id: 2,
			email: 'lindsay.ferguson@reqres.in',
			first_name: 'Lindsay',
			last_name: 'Ferguson',
			avatar: 'https://reqres.in/img/faces/8-image.jpg',
		},
		{
			id: 3,
			email: 'tobias.funke@reqres.in',
			first_name: 'Tobias',
			last_name: 'Funke',
			avatar: 'https://reqres.in/img/faces/9-image.jpg',
		},
		{
			id: 4,
			email: 'byron.fields@reqres.in',
			first_name: 'Byron',
			last_name: 'Fields',
			avatar: 'https://reqres.in/img/faces/10-image.jpg',
		},
		{
			id: 5,
			email: 'george.edwards@reqres.in',
			first_name: 'George',
			last_name: 'Edwards',
			avatar: 'https://reqres.in/img/faces/11-image.jpg',
		},
		{
			id: 6,
			email: 'rachel.howell@reqres.in',
			first_name: 'Rachel',
			last_name: 'Howell',
			avatar: 'https://reqres.in/img/faces/12-image.jpg',
		},
	],
};

const rootReducer = (state = initialState, action) => {
	if (action.type === 'DELETE_USER') {
		let newUsers = state.users.filter((user) => user.id !== action.id);
		return { ...state, users: newUsers };
	}

	if (action.type === 'ADD_USER') {
		return state.users.concat(action.user);
	}

	if (action.type === 'EDIT_USER') {
		const updatedUserIndex = state.users.findIndex(
			(user) => user.id === action.user.id
		);

		state.users[updatedUserIndex].firstName = action.user.firstName;
		state.users[updatedUserIndex].lastName = action.user.lastName;
		state.users[updatedUserIndex].email = action.user.email;

		return state;
	}

	// if ((action.type = 'GET_USERS')) {
	// 	const users = await fetch(`https://reqres.in/api/users?page=2`).catch(
	// 		(error) => {
	// 			console.log(error);
	// 			throw new Error('Failed To Fetch Users');
	// 		}
	// 	);

	// 	console.log(users.json());
	// 	// return await users.concat(action.start, action.end);
	// }

	return state;
};

export default rootReducer;
