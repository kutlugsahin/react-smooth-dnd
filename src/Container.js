import React, { Component } from 'react';
import PropTypes from 'prop-types';
import container from 'smooth-dnd';
import { dropHandlers } from 'smooth-dnd';
import Draggable from './Draggable';

class Container extends Component {
	constructor(props) {
		super(props);
		this.getContainerOptions = this.getContainerOptions.bind(this);
		this.dropHandler = dropHandlers.reactDropHandler();
		this.prevContainer = null;
	}

	componentDidMount() {
		this.prevContainer = this.containerDiv;
		this.container = container(this.containerDiv, this.getContainerOptions(this.props));
	}

	componentWillUnmount() {
		this.container.dispose();
		this.container = null;
	}

	componentDidUpdate() {
		if (this.containerDiv) {
			if (this.prevContainer && this.prevContainer !== this.containerDiv) {
				this.container.dispose();
				this.container = container(this.containerDiv, this.getContainerOptions(this.props));
				this.prevContainer = this.containerDiv;
			}
		}
	}

	render() {
		return (
			<div style={this.props.style} ref={element => { this.containerDiv = element; }}>
				{this.props.children}
			</div>
		);
	}

	getContainerOptions(props) {
		return Object.assign({}, props, {
			dropHandler: this.dropHandler.handler
		});
	}
}

Container.propTypes = {
	behaviour: PropTypes.oneOf(['move', 'copy']),
	groupName: PropTypes.string,
	orientation: PropTypes.oneOf(['horizontal', 'vertical']),
	children: PropTypes.arrayOf(PropTypes.instanceOf(Draggable)),
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
	onDrop: PropTypes.func,
	getChildPayload: PropTypes.func,
	shouldAnimateDrop: PropTypes.func,
	shouldAcceptDrop: PropTypes.func,
	onDragEnter: PropTypes.func,
	onDragLeave: PropTypes.func,
};

Container.defaultProps = {
	behaviour: 'move',
	orientation: 'vertical'
};

export default Container;