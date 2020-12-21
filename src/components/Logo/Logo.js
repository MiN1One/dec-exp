import './Logo.scss';

const Logo = (props) => {

    return (
        <div className={`Logo ${props.class}`}>
            <h5 className="heading heading__5 Logo__heading">Logo</h5>
        </div>
    )
};

export default Logo;