import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer/Reducer';
import Navigator from './navegacao/Navigator';

const store = createStore(reducer);

export default function App() {
  return (
  	<Provider store={ store }>
  		<Navigator/>
  	</Provider>
  );
}