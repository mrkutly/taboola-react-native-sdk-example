import { useReducer } from 'react';

function formReducer(state, action) {
	if (action.type === 'SET') {
		return { ...state, [action.field]: action.value };
	}
	return state;
}

const initialState = {
	publisher: 'sdk-tester',
	mode: 'alternating-widget-without-video-1-on-1',
	pageType: 'article',
	placement: 'Mid Article',
	targetType: 'mix',
	scrollEnabled: false,
	height: 300,
};

export function useForm() {
	const [state, dispatch] = useReducer(formReducer, initialState);

	const setField = ({ target }) => {
		dispatch({
			type: 'SET',
			field: target.name,
			value: target.value,
		});
	};

	return { formData: state, setField };
}
