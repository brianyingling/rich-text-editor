import React, { 
    // useEffect, 
    // useRef
} from 'react';

const style = {
    width: '1000px',
    height: '500px',
    'margin-top': '1rem',
    // background: 'gray'
}

const ViewPane = ({ name }) => {
    // const ref = useRef(null);
    
    // useEffect(() => {
    //     // ref.current.contentWindow.document.designMode = 'On';
    // }, [ref]);

    return (
        <div 
            contentEditable 
            style={style} 
        />
    );
};

export default ViewPane;
