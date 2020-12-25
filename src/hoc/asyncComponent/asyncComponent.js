import React, { Component } from "react";

const asyncComponent = importedComponent => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidUpdate() {
            importedComponent()
                .then(cmp => {
                    this.setState({component: cmp.default})
                });
        }

        render() {
            const C = this.state.component;
            return C && <C {...this.props} />;
        }
    }
};

export default asyncComponent;