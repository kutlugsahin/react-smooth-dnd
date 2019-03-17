import React, { Component, CSSProperties } from 'react';
import PropTypes from 'prop-types';
import { smoothDnD as container } from 'smooth-dnd';
import { dropHandlers } from 'smooth-dnd';
import { ContainerOptions, SmoothDnD } from 'smooth-dnd/dist/src/interfaces';

container.dropHandler = dropHandlers.reactDropHandler().handler;
container.wrapChild = false;

interface ContainerProps extends ContainerOptions {
	render?: (rootRef: React.RefObject<any>) => React.ReactElement;
	style?: CSSProperties;
}

class Container extends Component<ContainerProps> {
	public static propTypes = {
		behaviour: PropTypes.oneOf(['move', 'copy', 'drag-zone', 'contain']),
		groupName: PropTypes.string,
		orientation: PropTypes.oneOf(['horizontal', 'vertical']),
		style: PropTypes.object,
		dragHandleSelector: PropTypes.string,
		nonDragAreaSelector: PropTypes.string,
		dragBeginDelay: PropTypes.number,
		animationDuration: PropTypes.number,
		autoScrollEnabled: PropTypes.bool,
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
		render: PropTypes.func,
		getGhostParent: PropTypes.func,
		removeOnDropOut: PropTypes.bool,
	};

	public static defaultProps = {
		behaviour: 'move',
		orientation: 'vertical',
	};

	prevContainer: null;
	container: SmoothDnD = null!;
	containerRef: React.RefObject<any> = React.createRef();
  constructor(props: ContainerProps) {
    super(props);
		this.getContainerOptions = this.getContainerOptions.bind(this);
		this.getContainer = this.getContainer.bind(this);
    this.prevContainer = null;
  }

  componentDidMount() {
    this.prevContainer = this.getContainer();
    this.container = container(this.getContainer(), this.getContainerOptions());
  }

  componentWillUnmount() {
    this.container.dispose();
    this.container = null!;
  }

  componentDidUpdate() {
    if (this.getContainer()) {
      if (this.prevContainer && this.prevContainer !== this.getContainer()) {
        this.container.dispose();
        this.container = container(this.getContainer(), this.getContainerOptions());
        this.prevContainer = this.getContainer();
      }
    }
  }

  render() {
    if (this.props.render) {
			return this.props.render(this.containerRef);
    } else {
      return (
        <div style={this.props.style} ref={this.containerRef}>
          {this.props.children}
        </div>
      );
    }
	}
	
	getContainer() {
		return this.containerRef.current;
	}

  getContainerOptions(): ContainerProps {
    const functionProps: any = {};

    if (this.props.onDragStart) {
      functionProps.onDragStart = this.props.onDragStart.bind(null);
    }

    if (this.props.onDragEnd) {
			functionProps.onDragEnd = this.props.onDragEnd.bind(null);
    }

    if (this.props.onDrop) {
      functionProps.onDrop = this.props.onDrop.bind(null);
    }

    if (this.props.getChildPayload) {
      functionProps.getChildPayload = this.props.getChildPayload.bind(null);
    }

    if (this.props.shouldAnimateDrop) {
      functionProps.shouldAnimateDrop = this.props.shouldAnimateDrop.bind(null);
    }

    if (this.props.shouldAcceptDrop) {
      functionProps.shouldAcceptDrop = this.props.shouldAcceptDrop.bind(null);
    }

    if (this.props.onDragEnter) {
      functionProps.onDragEnter = this.props.onDragEnter.bind(null);
    }

    if (this.props.onDragLeave) {
      functionProps.onDragLeave = this.props.onDragLeave.bind(null);
    }

    if (this.props.render) {
      functionProps.render = this.props.render.bind(null);
    }

    if (this.props.onDropReady) {
      functionProps.onDropReady = this.props.onDropReady.bind(null);
    }

    if (this.props.getGhostParent) {
      functionProps.getGhostParent = this.props.getGhostParent.bind(null);
    }

    return Object.assign({}, this.props, functionProps);
  }
}

export default Container;
