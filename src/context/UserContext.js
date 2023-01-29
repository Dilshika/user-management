import { createContext, useReducer } from 'react';

export const UserContext = createContext();

const userReducer = (state, action) => {
	switch (action.type) {
		case 'SET_USER':
			return {
				users: [...action.payload.data],
			};
		case 'DELETE_USER':
			return {
				users: state.users.filter((user) => user.id !== action.payload),
			};
		case 'ADD_USER':
			return {
				users: [action.payload, ...state.users],
			};
		case 'EDIT_USER':
			const updatedUserIndex = state.users.findIndex(
				(user) => user.id === action.user.id
			);

			state.users[updatedUserIndex].first_name = action.user.firstName;
			state.users[updatedUserIndex].last_name = action.user.lastName;
			state.users[updatedUserIndex].email = action.user.email;

			return {
				users: state.users,
			};
		default:
			return state;
	}
};

export const UserContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(userReducer, { users: [] });

	return (
		<UserContext.Provider value={{ ...state, dispatch }}>
			{children}
		</UserContext.Provider>
	);
};
