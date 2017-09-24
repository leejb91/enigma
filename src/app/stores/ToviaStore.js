import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class ToviaStore extends EventEmitter {
	constructor() {
		super();
		this.form = {
			name: '',
			message: '',
			expiration: '',
		};
		// this.message = '';
	}

	getForm() {
		return this.form;
	}

	handleActions(action) {
		switch (action.type) {
			case 'SECRET':
				this.message = action.text;
				break;
		}
	}
}

const toviaStore = new ToviaStore;
dispatcher.register(toviaStore.handleActions.bind(toviaStore));
window.dispatcher = dispatcher;
export default toviaStore;