import React, { useRef } from 'react';

const useViewPaneRef = () => {
    const ref = useRef(null);
    return ref;
};

export default useViewPaneRef;
