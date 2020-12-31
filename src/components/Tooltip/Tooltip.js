import './Tooltip.scss';

const Tooltip = (props) => {

    return (
        <div className={`Tooltip ${props.class ? props.class : ''}`} style={{zIndex: props.z}} onClick={props.click}>
            {props.children}
        </div>
    );
};

export default Tooltip;