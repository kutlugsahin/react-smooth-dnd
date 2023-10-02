import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { constants } from 'smooth-dnd';
const {
	wrapperClass
} = constants;

export interface DraggableProps {
	render?: () => React.ReactElement;
	className?: string;
}

class Draggable extends Component<DraggableProps> {
	public static propsTypes = {
		render: PropTypes.func,
		className: PropTypes.string,
	}

	render() {
		const clsName = `${this.props.className ? (this.props.className + ' ') : ''}`
		const fullClsName = `${clsName}${wrapperClass}`
		
		if (this.props.render) {
			return React.cloneElement(this.props.render(), { className: fullClsName });
		}
		
		return (
			<div {...this.props} className={fullClsName} >
				{this.props.children}
			</div>
		);
	}
}

export default Draggable;