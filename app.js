import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Loading from '@/src/Loading';
import injectTapEventPlugin from 'react-tap-event-plugin';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Controls from 'zcontrol';
import validation from './validation';

import '@/app.css';

let theme = darkBaseTheme;
injectTapEventPlugin();

class App extends Component {
  state = {
    show: true,
    name: 'line-scale-pulse-out-rapid',
    color: '#5282ef',
    metadata: validation
  };
  onChange(values, changed, metadata) {
    this.setState({ ...values });
    this.setState({ metadata });
  }
  render() {
    const { show, name, color, metadata } = this.state;
    return (
      <div style={{ height: '100vh', width: '100vw', display: 'flex'}}>
        <div style={{ width: '80%',}}>
          <Loading
            show={show}
            width="100%"
            name={name}
            color={color}
          />
        </div>
        <div style={{ background: '#d1b8b026', width: '20%', display: 'flex', flexDirection: 'column', justifyContent: 'center'  }}>
          <p style={{ textAlign: 'center', paddingTop: '100px' }}>Props Controls</p>
          <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
            <Controls
              data={metadata}
              editable={false}
              onChange={::this.onChange}
            />
          </MuiThemeProvider>
          <div className="props">
            <p><span className="p_label">show:</span><span>{show.toString()}</span></p>
            <p><span className="p_label">name:</span><span>{name}</span></p>
            <p><span className="p_label">color:</span><span>{color}</span></p>            
          </div>
          <p className="footer">props controls pannel power by <a href="https://www.npmjs.com/package/zcontrol" target="_blank">zcontrol</a></p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.app'),
);

