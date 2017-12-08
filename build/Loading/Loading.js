'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSpinkit = require('react-spinkit');

var _reactSpinkit2 = _interopRequireDefault(_reactSpinkit);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loading = function (_PureComponent) {
  _inherits(Loading, _PureComponent);

  function Loading() {
    _classCallCheck(this, Loading);

    return _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).apply(this, arguments));
  }

  _createClass(Loading, [{
    key: 'getStyle',
    value: function getStyle(props) {
      return {
        root: {
          height: props.height || '100%',
          width: props.width || '100%',
          display: 'flex',
          alignItems: 'center',
          WebkitBoxAlign: 'center',
          justifyContent: 'center'
        },
        refresh: {
          top: 'initial',
          left: 'initial',
          transform: 'initial'
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var styles = this.getStyle(this.props);
      var _props = this.props,
          show = _props.show,
          color = _props.color,
          name = _props.name,
          fadeIn = _props.fadeIn,
          overrideSpinnerClassName = _props.overrideSpinnerClassName,
          className = _props.className;

      return _react2.default.createElement(
        'div',
        { style: _extends({}, styles.root, { display: show ? 'flex' : 'none' }) },
        _react2.default.createElement(_reactSpinkit2.default, {
          name: 'line-scale-pulse-out-rapid',
          color: '#5282ef',
          fadeIn: fadeIn,
          overrideSpinnerClassName: overrideSpinnerClassName,
          className: className
        })
      );
    }
  }]);

  return Loading;
}(_react.PureComponent);

Loading.defaultProps = {
  show: false,
  height: '100%',
  width: '100%',
  color: '#5282ef'
};
exports.default = Loading;


Loading.propTypes = {
  /**
   * control loading show status
   */
  show: _propTypes2.default.bool,
  /**
   * loading overlay's height
   */
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  /**
   * loading overlay's width
   */
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  /**
   * specify spinner to use (defaults to line-scale-pulse-out-rapid).
   */
  name: _propTypes2.default.string,
  /**
   * set the time before the spinner fades in.
   */
  fadeIn: _propTypes2.default.string,
  /**
   * change the default sk-spinner className.
   */
  overrideSpinnerClassName: _propTypes2.default.string,
  /**
   * add a custom classname to the outer div
   */
  className: _propTypes2.default.string,
  /**
   * programmatically set the color of the spinners; this can either be a hex value or a color word.
   */
  color: _propTypes2.default.string
};