const tracks = (state = [
	'Smells like spirit', 'Enter Sandman'
],action ) => {
	switch (action.type) {
		case 'ADD_TRACK':
			return [ 
			...state,
			action.payload
			];
		case 'DELETE_TRACK':
			return state;
		default:
			return state;
	}
}

export default tracks;