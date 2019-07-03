import React from 'react';

const executeCommand = (command, viewPaneName) => {
    document.execCommand(command, false, null);
};

const Button = ({
    className,
    command,
    viewPaneName,
}) => {
    return (
        <button 
            command={command} 
            onClick={() => executeCommand(command, viewPaneName)}
        >
            <i className={className}/>
        </button>
    );
}

export default Button;
