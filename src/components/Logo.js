import { Link } from 'react-router-dom';

const Logo = (props) => {

    return (
        <div className={`logo ${props.classOver ? props.classOver : ''}`}>
            <Link to="/">
                <h5 className={`heading heading__3 logo__heading ${props.class ? props.class : ''}`}>Logo</h5>
            </Link>
        </div>
    )
};

export default Logo;