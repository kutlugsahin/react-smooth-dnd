import React, { Component, CSSProperties } from 'react';
import PropTypes from 'prop-types';
import { ContainerOptions, SmoothDnD } from 'smooth-dnd/dist/src/interfaces';
interface ContainerProps extends ContainerOptions {
    render?: (rootRef: React.RefObject<any>) => React.ReactElement;
    style?: CSSProperties;
}
declare class Container extends Component<ContainerProps> {
    static propTypes: {
        behaviour: PropTypes.Requireable<string>;
        groupName: PropTypes.Requireable<string>;
        orientation: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        dragHandleSelector: PropTypes.Requireable<string>;
        nonDragAreaSelector: PropTypes.Requireable<string>;
        dragBeginDelay: PropTypes.Requireable<number>;
        animationDuration: PropTypes.Requireable<number>;
        autoScrollEnabled: PropTypes.Requireable<boolean>;
        lockAxis: PropTypes.Requireable<string>;
        dragClass: PropTypes.Requireable<string>;
        dropClass: PropTypes.Requireable<string>;
        onDragStart: PropTypes.Requireable<(...args: any[]) => any>;
        onDragEnd: PropTypes.Requireable<(...args: any[]) => any>;
        onDrop: PropTypes.Requireable<(...args: any[]) => any>;
        getChildPayload: PropTypes.Requireable<(...args: any[]) => any>;
        shouldAnimateDrop: PropTypes.Requireable<(...args: any[]) => any>;
        shouldAcceptDrop: PropTypes.Requireable<(...args: any[]) => any>;
        onDragEnter: PropTypes.Requireable<(...args: any[]) => any>;
        onDragLeave: PropTypes.Requireable<(...args: any[]) => any>;
        render: PropTypes.Requireable<(...args: any[]) => any>;
        getGhostParent: PropTypes.Requireable<(...args: any[]) => any>;
        removeOnDropOut: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        behaviour: string;
        orientation: string;
    };
    prevContainer: null;
    container: SmoothDnD;
    containerRef: React.RefObject<any>;
    constructor(props: ContainerProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
    getContainer(): any;
    getContainerOptions(): ContainerProps;
}
export default Container;
