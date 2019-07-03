import React, { useEffect } from 'react';

const style = {
    minHeight: '500px',
    marginTop: '1rem',
    width: '100%',
}

const ViewPane = ({ onRef }) => {

    useEffect(() => {
        onRef && onRef.current.focus();
    }, [onRef]);

    return (
        <div 
            contentEditable
            ref={onRef} 
            style={style} 
        />
    );
};

export default ViewPane;
