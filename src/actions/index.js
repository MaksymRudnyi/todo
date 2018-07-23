import {v4} from 'node-uuid';

// old version
export function addTodo (text) {
	return {
		type: 'ADD_TODO',
		id: v4(),
		text,
	};
}

// full arrow function version
export const setVisibilityFilter = (filter) => {
	return {
		type: 'SET_VISIBILITY_FILTER',
		filter,
	};
};

// simple arrow function
export const toggleTodo = (id) => ({
	type: 'TOGGLE_TODO',
	id,
});
