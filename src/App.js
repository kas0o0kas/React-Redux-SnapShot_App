import NotFound from 'components/NotFound/NotFound';
import CardPage from 'features/PhotoPage/PhotoCardPage/CardPage';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

const MainPage = React.lazy(() => import('features/PhotoPage/MainPage/MainPage'))

// Schlüssel:
// 9fcc51c4d5ea783d1f1392d16301549b

// Geheimer Schlüssel:
// 0ac1433c8db39024

// url:
// https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=9fcc51c4d5ea783d1f1392d16301549b&tags=cats&format=json&nojsoncallback=1&extras=url_o

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback = {<div>Loading...</div>}>
          <Switch>
            <Redirect exact from='/' to='/main' />
            <Route path="/main" component={MainPage} />
            <Route path="/:photoId" component={CardPage} />
            <Route component = {NotFound}/>
          </Switch>
        </Suspense>
      </Router>

    </div>
  );
}

export default App;
