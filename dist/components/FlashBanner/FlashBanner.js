'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFa = require('react-fa');

var _reactFa2 = _interopRequireDefault(_reactFa);

require('./FlashBanner.css');

var _flashBanner = require('../../redux/actions/flashBanner');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by saad bin saeed on 3/2/17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var propTypes = {
  show: _react.PropTypes.bool,
  showClose: _react.PropTypes.bool,
  bannerText: _react.PropTypes.string,
  buttonText: _react.PropTypes.string,
  bannerBgColor: _react.PropTypes.string,
  buttonBgColor: _react.PropTypes.string
};

var defaultProps = {
  show: false,
  showClose: false,
  bannerText: 'hello i am your flash banner',
  buttonText: 'Explore',
  bannerBgColor: '#10c413',
  buttonBgColor: null

};

var FlashBanner = function (_React$Component) {
  _inherits(FlashBanner, _React$Component);

  function FlashBanner(props) {
    _classCallCheck(this, FlashBanner);

    var _this = _possibleConstructorReturn(this, (FlashBanner.__proto__ || Object.getPrototypeOf(FlashBanner)).call(this, props));

    _this.state = {
      show: props.show
    };
    _this.handleCloseButton = _this.handleCloseButton.bind(_this);
    return _this;
  }

  _createClass(FlashBanner, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        show: nextProps.show
      });
    }
  }, {
    key: 'handleCloseButton',
    value: function handleCloseButton() {
      this.setState({ show: false });
      this.props.store.dispatch((0, _flashBanner.hideFlashBanner)());
    }
  }, {
    key: 'render',
    value: function render() {
      var show = this.state.show;

      if (!show) {
        return _react2.default.createElement('div', null);
      }
      var _props = this.props,
          bannerText = _props.bannerText,
          buttonText = _props.buttonText,
          showClose = _props.showClose,
          bannerBgColor = _props.bannerBgColor,
          buttonBgColor = _props.buttonBgColor;

      var bannerStyle = {
        backgroundColor: bannerBgColor
      };
      var buttonStyle = {};
      if (buttonBgColor) {
        buttonStyle.backgroundColor = buttonBgColor;
      }

      return _react2.default.createElement(
        'div',
        { className: 'flash-banner', style: bannerStyle },
        bannerText,
        ' \xA0\xA0',
        _react2.default.createElement(
          'button',
          { style: buttonStyle },
          buttonText
        ),
        showClose ? _react2.default.createElement(_reactFa2.default, { name: 'times', className: 'close-icon', onClick: this.handleCloseButton }) : null
      );
    }
  }]);

  return FlashBanner;
}(_react2.default.Component);

FlashBanner.propTypes = propTypes;
FlashBanner.defaultProps = defaultProps;
exports.default = FlashBanner;