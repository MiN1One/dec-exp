// import { useEffect } from 'react';

import './Backdrop.scss';

const Backdrop = (props) => {
    return (
        <div className={`Backdrop ${props.class ? props.class : ''}`} onClick={() => props.click()} style={{zIndex: props.z}}></div>
    )
};

export default Backdrop;