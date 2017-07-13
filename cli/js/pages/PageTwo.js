import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as example from '../actions/exampleActions';

class PageTwo extends  Component {
	constructor(props) {
		super(props);
	}

	click() {
		this.props.updateMessage('Hello');
	}

	render() {
		console.log(this.props)
		return (
			<div>
				<h1> Hello Redux</h1>
				{this.props.message}
				<br/>
				<button onClick={this.click.bind(this)}>Click Me</button>
				<br/>
				<br/>
				<Link to="/test">Test</Link>
				
			</div>
		)
	}
}

function mapStateToProps(state) {
	console.log(state)
	return {
		message: state.example.message
	};
}

export default connect(mapStateToProps, example)(PageTwo);