import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { constants } from 'smooth-dnd';
const {
	wrapperClass
} = constants;

class Draggable extends Component {  
	render() {
		const clsName = `${this.props.className ? (this.props.className + ' ') : ''}`
		return (
			<div {...this.props} className={`${clsName}${wrapperClass}`} >
				{this.props.children}
			</div>
		);
	}
}

Draggable.propTypes = {
	payload: PropTypes.object,
};

export default Draggable;