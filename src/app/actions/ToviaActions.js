import axios from 'axios';
import dispatcher from '../dispatcher';

export function newSecret(form) {
	axios.post('/api/encrypt', form).then((res) => {
		dispatcher.dispatch({
			type: 'SECRET',
			message: res.message
		});
	})
}