import React from 'react';
import Button from './Button';
import { BUTTON_VALUES } from './consts';

const Buttons = ({ viewPaneName }) => {
    return BUTTON_VALUES.map(({ command, className }, i) => (
        <Button
            command={command} 
            className={className}
            key={`className-${i}`}
            viewPaneName={viewPaneName}
        />
    ));
};

const MenuBar = ({ viewPaneName }) => (
    <div>
        <Buttons 
            viewPaneName={viewPaneName}
        />
    </div>
);

export default MenuBar;
