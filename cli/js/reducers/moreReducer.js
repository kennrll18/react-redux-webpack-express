const INITIAL_STATE = {
	count: 0
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'INCREASE':
			return Object.assign( {}, state, {count : state.count + 1 });
		case 'DECREASE':
			return Object.assign( {}, state, {count : state.count - 1 });
		default:
			return {...state};
	}

}