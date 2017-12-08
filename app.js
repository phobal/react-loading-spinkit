import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Loading from '@';

import '@/app.css';

class App extends Component {
  render() {
    return (
      <div style={{ height: '100vh', width: '100vw' }}>
        <Loading show={true} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.app'),
);

