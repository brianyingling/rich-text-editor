import React, { useCallback } from 'react';

const executeCommand = (command, viewPaneRef) => {
    document.execCommand(command, false, null);
    viewPaneRef.current.focus();
};

const Button = ({
    className,
    command,
    viewPaneRef,
}) => {
    const onClick = useCallback(
        () => executeCommand(command, viewPaneRef),
        [command, viewPaneRef]
    );

    return (
        <button
            command={command} 
            onClick={onClick}
        >
            <i className={className}/>
        </button>
    );
}

export default Button;
