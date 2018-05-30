import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import container from 'smooth-dnd';
import { dropHandlers } from 'smooth-dnd';
import Draggable from './Draggable';

container.dropHandler = dropHandlers.reactDropHandler().handler;
container.wrapChild = p => p; // dont wrap children they will already be wrapped

class Container extends Component {
	constructor(props) {
		super(props);
		this.getContainerOptions = this.getContainerOptions.bind(this);
		this.setRef = this.setRef.bind(this);
		this.prevContainer = null;
	}

	componentDidMount() {
		this.containerDiv = this.containerDiv || ReactDOM.findDOMNode(this);
		this.prevContainer = this.containerDiv;
		this.container = container(this.containerDiv, this.getContainerOptions(this.props));
	}

	componentWillUnmount() {
		this.container.dispose();
		this.container = null;
	}

	componentDidUpdate() {
		this.containerDiv = this.containerDiv || ReactDOM.findDOMNode(this);
		if (this.containerDiv) {
			if (this.prevContainer && this.prevContainer !== this.containerDiv) {
				this.container.dispose();
				this.container = container(this.containerDiv, this.getContainerOptions(this.props));
				this.prevContainer = this.containerDiv;
			}
		}
	}

	render() {
		if (this.props.render) {
			return this.props.render(this.setRef);
		} else {
			return (
				<div style={this.props.style} ref={this.setRef}>
					{this.props.children}
				</div>
			);
		}
	}

	setRef(element) {
		this.containerDiv = element;
	}

	getContainerOptions(props) {
		const functionProps = {};

		if (props.onDragStart) {
			functionProps.onDragStart = (...p) => props.onDragStart(...p);
		}

		if (props.onDragEnd) {
			functionProps.onDragEnd = (...p) => props.onDragEnd(...p);
		}
		
		if (props.onDrop) {
			functionProps.onDrop = (...p) => props.onDrop(...p);
		}
		
		if (props.getChildPayload) {
      functionProps.getChildPayload = (...p) => props.getChildPayload(...p);
		}
		
		if (props.shouldAnimateDrop) {
      functionProps.shouldAnimateDrop = (...p) => props.shouldAnimateDrop(...p);
		}
		
		if (props.shouldAcceptDrop) {
      functionProps.shouldAcceptDrop = (...p) => props.shouldAcceptDrop(...p);
		}
		
		if (props.onDragEnter) {
      functionProps.onDragEnter = (...p) => props.onDragEnter(...p);
		}
		
		if (props.onDragLeave) {
      functionProps.onDragLeave = (...p) => props.onDragLeave(...p);
		}
		
		if (props.render) {
      functionProps.render = (...p) => props.render(...p);
    }

		return Object.assign({}, props, functionProps);
	}
}

Container.propTypes = {
	behaviour: PropTypes.oneOf(["move", "copy", "drag-zone"]),
	groupName: PropTypes.string,
	orientation: PropTypes.oneOf(["horizontal", "vertical"]),
	style: PropTypes.object,
	dragHandleSelector: PropTypes.string,
	nonDragAreaSelector: PropTypes.string,
	dragBeginDelay: PropTypes.number,
	animationDuration: PropTypes.number,
	autoScrollEnabled: PropTypes.string,
	lockAxis: PropTypes.string,
	dragClass: PropTypes.string,
	dropClass: PropTypes.string,
	onDragStart: PropTypes.func,
	onDragEnd: PropTypes.func,
	onDrop: PropTypes.func,
	getChildPayload: PropTypes.func,
	shouldAnimateDrop: PropTypes.func,
	shouldAcceptDrop: PropTypes.func,
	onDragEnter: PropTypes.func,
	onDragLeave: PropTypes.func,
	render: PropTypes.func
};

Container.defaultProps = {
	behaviour: 'move',
	orientation: 'vertical'
};

export default Container;