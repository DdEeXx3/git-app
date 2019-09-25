import React from 'react';
import {Route} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';

class NavigationLink extends React.Component
{
    render(){
        return(
            <Route
                path={this.props.link}
                exact={true}
                children={({ match }) => (
                    <LinkContainer exact to={this.props.link}>
                        <li className={match ? "active" : ""}>
                            <a>{this.props.value}</a>
                        </li>
                    </LinkContainer>
                )}
            />
        )
    }
}

export default NavigationLink;