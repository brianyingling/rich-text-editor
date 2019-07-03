import React, { Fragment, useRef } from 'react';
import MenuBar from './MenuBar';
import ViewPane from './ViewPane';

const RichTextEditor = () => {
    const ref = useRef(null);
    return (
        <Fragment>
            <MenuBar viewPaneRef={ref}/>
            <ViewPane onRef={ref}/>
        </Fragment>
    );
};

export default RichTextEditor;
