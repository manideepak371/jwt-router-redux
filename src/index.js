import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.scss';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Components/routing';
import axios from 'axios'
import { Provider } from 'react-redux';
import store from './Redux/store';


axios.defaults.withCredentials=true
axios.interceptors.request.use(
  request => {
    request.headers['content-type']='application/json'
    request.headers['Allow-Access-Control-Origin']='http://localhost:9000'
    return request
  },
  error=>{
    console.log(error)
  }
)

axios.interceptors.response.use(
  response => {
    return response
  }
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routing/>
    </Provider>
  </BrowserRouter>
);

