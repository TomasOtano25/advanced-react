import React from 'react';
import { render } from 'react-dom';
import StateApi from '../StateApi';
import App from '../components/app';

const store = new StateApi(window.initialData);

render(<App store={store} />, document.getElementById('root'));
