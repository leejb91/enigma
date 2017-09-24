import dispatcher from '../dispatcher';

export function newSecret(form) {
	dispatcher.dispatch({
		type: 'SECRET',
		form: form
	});
}