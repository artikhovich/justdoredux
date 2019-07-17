const counter = (state = [12], 
	action) => {
	const addCount =1;
	const num = Number(state);

	switch (action.type) {
		case 'INC_COUNT':
			return [num + addCount]
		case 'DEC_COUNT':
			return [num - addCount]
		default:
			return num
	}
}
export default counter;