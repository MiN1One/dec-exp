import './Dropdown.scss';

const Dropdown = (props) => (
    <div className={`Dropdown ${props.class ? props.class : ''}`}>
        {props.children}
    </div>
);

export default Dropdown;