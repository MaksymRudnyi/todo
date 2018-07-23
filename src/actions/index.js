let nextTodoId = 0;

// old version
export function addTodo (text) {
	return {
		type: 'ADD_TODO',
		id: (nextTodoId++).toString(),
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
