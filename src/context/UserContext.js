import { createContext, useReducer } from 'react';

export const UserContext = createContext();

const userReducer = (state, action) => {
	switch (action.type) {
		case 'SET_USER':
			if (state.users.length > 0) {
				return {
					users: [...state.users],
				};
			} else {
				return {
					users: [...state.users, ...action.payload.data],
				};
			}

		case 'DELETE_USER':
			return {
				users: state.users.filter((user) => user.id !== action.payload),
			};
		case 'ADD_USER':
			console.log('add', action.payload);
			return {
				users: [action.payload, ...state.users],
			};
		case 'EDIT_USER':

			const updatedUserIndex = state.users.findIndex(
				(user) => user.id === action.payload.id
			);

			state.users[updatedUserIndex].first_name = action.payload.first_name;
			state.users[updatedUserIndex].last_name = action.payload.last_name;
			state.users[updatedUserIndex].email = action.payload.email;
			
			console.log(state)

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
