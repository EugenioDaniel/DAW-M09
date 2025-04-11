import React from 'react';
import Header from './Header';

function App() {
  return (
    <div>
      <Header />
      <h1>Benvingut a la teva primera aplicació React</h1>
      <h2>Per Eugeni Sanchez</h2>
    </div>
  );
}

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
export default Welcome;
