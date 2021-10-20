import Header from 'components/Header/Header';
import NotFound from 'components/NotFound/NotFound';
import PhotoList from 'components/PhotoList/PhotoList';
import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router';

const MainPage = () => {
    const match = useRouteMatch();

    return (
        <div>
            <Header/>
            <Switch>
                <Redirect exact from = {`${match.url}`} to = {`${match.url}/photos`}/>
                <Route path={`${match.url}/:tags`} component= {PhotoList}/>
                <Route component = {NotFound}/>
            </Switch>
        </div>
    )
}

export default MainPage
