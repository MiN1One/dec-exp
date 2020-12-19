import { Component } from 'react';

import './Dropdown.scss';

class Dropdown extends Component {

    render() {
        return (
            <div className={`Dropdown ${this.props.class}`}>
                {this.props.children}
            </div>
        );
    }
}

export default Dropdown;