import React from 'react';
import Button from './Button';
import { BUTTON_VALUES } from './consts';

const Buttons = ({ viewPaneRef }) => {
    return BUTTON_VALUES.map(({ command, className }, i) => (
        <Button
            command={command} 
            className={className}
            key={`className-${i}`}
            viewPaneRef={viewPaneRef}
        />
    ));
};

const MenuBar = ({ viewPaneRef }) => (
    <div>
        <Buttons 
            viewPaneRef={viewPaneRef}
        />
    </div>
);

export default MenuBar;
