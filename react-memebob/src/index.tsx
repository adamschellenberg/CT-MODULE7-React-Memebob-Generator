import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { Home, SignIn, MemeGenerator, Logout} from './components';
import './assets/css/style.css';
import { firebaseConfig } from './firebaseConfig';
import 'firebase/auth';
import { store } from './redux/store';

import ImageCreator from './components/ImageCreator/ImageCreator';

let myTitle = 'Memebob Generatorpants';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
    <Provider store={store}>
    <Router>
      <Switch>
    
        <Route exact path="/">
          <Home title={myTitle}/>
        </Route>

        <Route path="/logout">
          <Logout/>
        </Route>

        <Route path="/signin">
          <SignIn/>
        </Route>

        <Route path="/meme-generator">
          <MemeGenerator />
        </Route>

        <Route path='/image-creator'>
          <ImageCreator />
        </Route>

      </Switch>
    </Router>
    </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
