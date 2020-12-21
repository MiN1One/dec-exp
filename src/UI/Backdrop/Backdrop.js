// import { useEffect } from 'react';

import './Backdrop.scss';

const Backdrop = (props) => {
    // useEffect(() => {
    //     return () => {

    //     }
    // }, []);

    return (
        <div className="Backdrop" onClick={() => props.click()} style={{zIndex: props.z}}></div>
    )
};

export default Backdrop;