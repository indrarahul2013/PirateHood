import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from 'src/utils/firebase';

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  attachAuthIsReady: true, // attaches auth is ready promise to store
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  // createFirestoreInstance // <- needed if using firestore
}

ReactDOM.render((
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>
), document.getElementById('root'));

serviceWorker.unregister();
