## react-loading-spinkit

[![npm version](https://badge.fury.io/js/react-loading-spinkit.svg)](https://badge.fury.io/js/react-loading-spinkit)

![](./assets/loading.gif)  

this component base on [react-spinkit](https://github.com/KyleAMathews/react-spinkit), but more convenient

### Required Knowledge

must add [css-loader](https://github.com/webpack/css-loader) and [style-loader](https://github.com/webpack/style-loader) in webpack config file, you can look [this file](https://github.com/phobal/react-loading-spinkit/blob/master/webpack.config.js#L39)

### Installation

``` bash
npm install --save react-loading-spinkit
```

### Usage

``` js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Loading from 'react-loading-spinkit';

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
```
### Props

  | Name | Type | Default | Description |
  |:-----|:-----|:--------|:------------|
| className | string |  | add a custom classname to the outer div |
| color | string | '#5282ef' | programmatically set the color of the spinners; this can either be a hex value or a color word. |
| fadeIn | string |  | set the time before the spinner fades in. |
| height | union:&nbsp;string<br>&nbsp;number<br> | '100%' | loading overlay's height |
| name | string |  | specify spinner to use (defaults to line-scale-pulse-out-rapid). |
| overrideSpinnerClassName | string |  | change the default sk-spinner className. |
| show | bool | false | control loading show status |
| width | union:&nbsp;string<br>&nbsp;number<br> | '100%' | loading overlay's width |
