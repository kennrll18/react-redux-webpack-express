export function increase(params) {
	return {
		type: 'INCREASE',
		payload: params
	}
}

export function decrease(params) {
	return {
		type: 'DECREASE',
		payload: params
	}
}