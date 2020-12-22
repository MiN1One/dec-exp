import './Logo.scss';

const Logo = (props) => {

    return (
        <div className={`Logo ${props.classOver ? props.classOver : ''}`}>
            <h5 className={`heading heading__5 Logo__heading ${props.class ? props.class : ''}`}>Logo</h5>
        </div>
    )
};

export default Logo;