import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as example from '../actions/exampleActions';
import * as more from '../actions/moreActions';

class PageThree extends  Component {
	constructor (props) {
		super(props);
	}

	plus() {
		this.props.actions.more.increase();
	}

	minus() {
		this.props.actions.more.decrease();
	}

	changeMessage(e) {
		this.props.actions.message.updateMessage(e.target.value);
	}

	render() {
		return (
			<div>
				<h1>{this.props.message}</h1>
				<h2>Count: {this.props.count}</h2> 
				<button onClick={this.plus.bind(this)}> + </button> <br/>
				<button onClick={this.minus.bind(this)}> - </button> <br/>

				<input onChange={this.changeMessage.bind(this)}/>

			</div>
		)
	}
}

function mapStateToProps(state) {
    return {
        message: state.example.message,
        count: state.more.count,
    }
}

function mapDispatchToProps(dispatch) {
	return {
		actions: {
			message: bindActionCreators(example, dispatch),
			more: bindActionCreators(more, dispatch)
		}
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(PageThree);