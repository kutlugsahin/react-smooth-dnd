import React, { Component, CSSProperties, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { smoothDnD as container, ContainerOptions, SmoothDnD } from 'smooth-dnd-modified';
import { dropHandlers } from 'smooth-dnd-modified';

container.dropHandler = dropHandlers.reactDropHandler().handler;
container.wrapChild = false;

interface ContainerProps extends ContainerOptions {
    render?: (rootRef: React.RefObject<any>) => React.ReactElement;
    style?: CSSProperties;
}

class Container extends Component<ContainerProps> {
    public static propTypes = {
        behaviour: PropTypes.oneOf(['move', 'copy', 'drop-zone', 'contain']),
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
        dropPlaceholder: PropTypes.oneOfType([
            PropTypes.shape({
                className: PropTypes.string,
                animationDuration: PropTypes.number,
                showOnTop: PropTypes.bool,
            }),
            PropTypes.bool,
        ]),
    };

    public static defaultProps = {
        behaviour: 'move',
        orientation: 'vertical',
    };

    prevChildrenProps: ReactNode;
    prevContainer: null;
    container: SmoothDnD = null!;
    containerRef: React.RefObject<any> = React.createRef();
    constructor(props: ContainerProps) {
        super(props);
        this.getContainerOptions = this.getContainerOptions.bind(this);
        this.getContainer = this.getContainer.bind(this);
        this.isObjectTypePropsChanged = this.isObjectTypePropsChanged.bind(this);
        this.prevContainer = null;
        this.prevChildrenProps = this.props.children;
    }

    componentDidMount() {
        this.prevContainer = this.getContainer();
        this.container = container(this.getContainer(), this.getContainerOptions());
    }

    componentWillUnmount() {
        this.container.dispose();
        this.container = null!;
    }

    componentDidUpdate(prevProps: ContainerProps) {
        if (this.getContainer()) {
            if ((this.prevContainer && this.prevContainer !== this.getContainer()) || this.prevChildrenProps !== this.props.children) {
                this.container.dispose();
                this.container = container(this.getContainer(), this.getContainerOptions());
                this.prevContainer = this.getContainer();
                this.prevChildrenProps = this.props.children;
                return;
            }

            if (this.isObjectTypePropsChanged(prevProps)) {
                this.container.setOptions(this.getContainerOptions())
            }
        }
    }

    isObjectTypePropsChanged(prevProps: ContainerProps) {
        const { render, children, style, ...containerOptions } = this.props;

        for (const _key in containerOptions) {
            const key = _key as keyof ContainerOptions;
            if (containerOptions.hasOwnProperty(key)) {
                const prop = containerOptions[key];

                if (typeof prop !== 'function' && prop !== prevProps[key]) {
                    return true;
                }
            }
        }

        return false;
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

    getContainerOptions(): ContainerOptions {
        return Object.keys(this.props).reduce((result: ContainerOptions, key: string) => {
            const optionName = key as keyof ContainerOptions;
            const prop = this.props[optionName];

            if (typeof prop === 'function') {
                result[optionName] = (...params: any[]) => {
                    return (this.props[optionName] as Function)(...params);
                }
            } else {
                result[optionName] = prop;
            }

            return result;
        }, {}) as ContainerOptions;
    }
}

export default Container;
