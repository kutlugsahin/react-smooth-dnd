import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { constants } from 'smooth-dnd';
const {
	wrapperClass,
	animationClass
} = constants;

class Draggable extends Component {  
	render() {
		return (
			<div {...this.props} className={`${wrapperClass} ${this.context.orientation} ${animationClass}`} >
				{this.props.children}
			</div>
		);
	}
}

Draggable.propTypes = {
	payload: PropTypes.object,
};

Draggable.contextTypes = {
	orientation: PropTypes.string
};

export default Draggable;