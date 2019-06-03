import React, {Component} from 'react';
import {Route, Redirect} from "react-router-dom";
import {withContext} from "../context"

class ProtectedRoute extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.token  !== this.props.token
    }
    render() {
        const {component: Component, ...rest} = this.props;
        return (
            this.props.token ?
                <Route {...rest} component={Component}/>
                :
                <Redirect to={{
                    pathname: '/login',
                    state: { from: this.props.location }
                }}/>
        );
    }
}

export default withContext(ProtectedRoute);

