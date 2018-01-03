import React, { PureComponent } from 'react';
import Spinner from 'react-spinkit';
import PropTypes from 'prop-types';

export default class Loading extends PureComponent {
  static defaultProps = {
    show: false,
    height: '100%',
    width: '100%',
    color: '#5282ef',
    fadeIn: '0',
    name: 'line-scale-pulse-out-rapid',
  };
  getStyle(props) {
    return {
      root: {
        height: props.height || '100%',
        width: props.width || '100%',
        display: 'flex',
        alignItems: 'center',
        WebkitBoxAlign: 'center',
        justifyContent: 'center',
      },
      refresh: {
        top: 'initial',
        left: 'initial',
        transform: 'initial',
      },
    };
  }
  render() {
    const styles = this.getStyle(this.props);
    const { show, color, name, fadeIn, overrideSpinnerClassName, className } = this.props;
    return (
      <div style={{ ...styles.root, ...{ display: show ? 'flex' : 'none' } }}>
        <Spinner
          name={name}
          color={color}
          fadeIn={fadeIn}
          overrideSpinnerClassName={overrideSpinnerClassName}
          className={className}
        />
      </div>
    );
  }
}

Loading.propTypes = {
  /**
   * control loading show status
   */
  show: PropTypes.bool,
  /**
   * loading overlay's height
   */
  height: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  /**
   * loading overlay's width
   */
  width: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  /**
   * specify spinner to use (defaults to line-scale-pulse-out-rapid).
   */
  name: PropTypes.string,
  /**
   * set the time before the spinner fades in.
   */
  fadeIn: PropTypes.string,
  /**
   * change the default sk-spinner className.
   */
  overrideSpinnerClassName: PropTypes.string,
  /**
   * add a custom classname to the outer div
   */
  className: PropTypes.string,
  /**
   * programmatically set the color of the spinners; this can either be a hex value or a color word.
   */
  color: PropTypes.string
};
