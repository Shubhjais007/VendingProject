import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*
//Middleware Redux
import { Provider } from 'react-redux';
import thunk from 'react-thunk';
import {createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './Components/Reducers/rootReducer';
*/
//Browse Router
import {BrowserRouter} from 'react-router-dom';
//Material theme colour
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

/*
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
*/


const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green,
  },
});


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
/*
ReactDOM.render(
  <Provider store={store}>
  <ThemeProvider theme={theme}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
