const playlists = (state = [
'My home playlist 1',
'My work playlist 2'
], action) => {
	switch(action.type) {
		case 'ADD_PLAYLIST':
				return [
				...state,
				action.playlist
				]
		case 'DELETE_PLAYLIST':
			return state;
		default:
		return state;
		}
	}
export default playlists;
