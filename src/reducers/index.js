import {combineReducers} from 'redux';
import tracks from './tracks';
import playlists from './playlists';
import counter from './counter';
import todos from './todos';
export default combineReducers({
	tracks,
	playlists,
	counter,
	todos
})