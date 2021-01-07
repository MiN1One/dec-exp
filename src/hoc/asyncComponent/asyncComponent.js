import React, { Component } from "react";

const asyncComponent = importedComponent => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidMount() {
            importedComponent()
                .then(cmp => {
                    this.setState({component: cmp.default})
                });
        }

        render() {
            const C = this.state.component;
            return (
                <React.Fragment>
                    {C && <C {...this.props} />}
                </React.Fragment>
            )

        }
    }
};

export default asyncComponent;