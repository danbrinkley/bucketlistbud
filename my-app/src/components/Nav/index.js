import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import EditPage from '../Pages/EditPage';
import NewPostPage from '../Pages/NewPostPage';
import ProfilePage from '../Pages/ProfilePage';
import DetailsPage from '../Pages/DetailsPage';
import './nav.css';

class Nav extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route 
                        exact
                        path="/"
                        render={(props) => <HomePage {...props} />}
                        />
                        <Route
                        path="/me"
                        render={(props) => <ProfilePage {...props} />}
                    />
                    <Route
                        path="/edit/:id"
                        render={(props) => <EditPage {...props} />}
                    />
                    <Route
                        path="/login"
                        render={(props) => <LoginPage {...props} />}
                    />
                    <Route
                        path="/new"
                        render={(props) => <NewPostPage {...props} />}
                    />
                    <Route
                        path="/details"
                        render={(props) => <DetailsPage {...props} />}
                    />
                </Switch>
            </div>
        )
    }
}


export default Nav;