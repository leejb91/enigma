import { EventEmitter } from 'events';

class ToviaStore extends EventEmitter {
	constructor() {
		super();
		this.form = {
			name: '',
			message: '',
			expiration: '',
		};
	}

	getForm() {
		return this.form;
	}
}

const toviaStore = new ToviaStore;

export default toviaStore;