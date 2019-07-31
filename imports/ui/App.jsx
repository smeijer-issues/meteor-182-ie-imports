import React from 'react';
import Hello from './Hello.jsx';
import Info from './Info.jsx';

// the line below breaks IE. Comment/remove it to make the app render
import { compose } from 'ramda';

const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello />
    <Info />
  </div>
);

export default App;
