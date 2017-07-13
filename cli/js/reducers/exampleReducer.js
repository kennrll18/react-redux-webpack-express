const INITIAL_STATE = {
	message: 'Default message'
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'UPDATE_MESSAGE':
			return Object.assign( {}, state, {message : action.payload });
		default:
			return {...state};
	}

}