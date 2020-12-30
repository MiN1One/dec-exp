import './Tooltip.scss';

const Tooltip = (props) => {

    return (
        <div className="Tooltip" style={{zIndex: props.z}}>
            {props.children}
        </div>
    );
};

export default Tooltip;