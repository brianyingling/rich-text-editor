import React, { Fragment} from 'react';
import MenuBar from './MenuBar';
import ViewPane from './ViewPane';

const VIEW_PANE_NAME = 'richTextField';

const RichTextEditor = () => (
    <Fragment>
        <h1>Rich Text Editor</h1>
        <MenuBar
            viewPaneName={VIEW_PANE_NAME}
        />
        <ViewPane
            name={VIEW_PANE_NAME}
        />
    </Fragment>
);

export default RichTextEditor;
