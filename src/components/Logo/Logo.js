import { Link } from 'react-router-dom';
import './Logo.scss';

const Logo = (props) => {

    return (
        <div className={`Logo ${props.classOver ? props.classOver : ''}`}>
            <Link to="/">
                <h5 className={`heading heading__3 Logo__heading ${props.class ? props.class : ''}`}>Logo</h5>
            </Link>
        </div>
    )
};

export default Logo;