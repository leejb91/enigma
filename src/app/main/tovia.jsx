import React from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import Button from 'react-toolbox/lib/button';
import DatePicker from 'react-toolbox/lib/date_picker';
import Input from 'react-toolbox/lib/input';

import ToviaStore from '../stores/ToviaStore';

class ToviaComponent extends React.Component {
	
	constructor() {
		super();

		this.state = ToviaStore.form;
		
		this.handleChange = this.handleChange.bind(this);
		this.encrypt = this.encrypt.bind(this);
		this.decrypt = this.decrypt.bind(this);
	}
	
	handleChange(name, value) {
		this.setState({ [name]: value });
	};

	encrypt() {
		console.log(this.state)
	};

	decrypt() {
		console.log(this.state)
	}
	
	render() {
		const {secret} = this.props.match.params;
		return (
			<div>
				<Card style={{ width: '350px' }}>
					<CardTitle
						title="Tovia's Enigma"
					/>
					<CardText>
						<Input
							type='text'
							label='Name'
							name='name'
							value={this.state.name}
							onChange={this.handleChange.bind(this, 'name')}
						/>
						<Input
							type='text'
							label='Message'
							name='message'
							multiline={true}
							rows={3}
							value={this.state.message}
							maxLength={120}
							onChange={this.handleChange.bind(this, 'message')}
						/>
						<DatePicker
							label='Expiration date'
							onChange={this.handleChange.bind(this, 'expiration')}
							value={this.state.expiration}
							sundayFirstDayOfWeek
						/>
						<Button  />
					</CardText>
					<CardActions>
						<Button onClick={this.encrypt} label="ENCRYPT" />
						<Button onClick={this.decrypt} label="DECRYPT" />
					</CardActions>
				</Card>
				<span>Your passphrase is - {secret}</span>
			</div>
		);
	}

}

export default ToviaComponent;