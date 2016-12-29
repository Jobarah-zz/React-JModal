'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactJModal = function (_React$Component) {
    (0, _inherits3.default)(ReactJModal, _React$Component);

    function ReactJModal() {
        (0, _classCallCheck3.default)(this, ReactJModal);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ReactJModal.__proto__ || (0, _getPrototypeOf2.default)(ReactJModal)).call(this));

        _this.closeModal = _this.closeModal.bind(_this);
        _this.renderModal = _this.renderModal.bind(_this);
        _this.handleKeyPress = _this.handleKeyPress.bind(_this);
        _this.state = {
            isOpen: true
        };
        return _this;
    }

    (0, _createClass3.default)(ReactJModal, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            document.addEventListener('keydown', this.handleKeyPress);
        }
    }, {
        key: 'closeModal',
        value: function closeModal() {

            this.setState({ isOpen: false });
        }
    }, {
        key: 'handleKeyPress',
        value: function handleKeyPress(event) {
            if (event.keyCode === 27 && this.state.isOpen) {
                this.closeModal();
            }
        }
    }, {
        key: 'renderModal',
        value: function renderModal() {
            var _this2 = this;

            var modalStyles = this.props.modalStyles;

            var _modalStyles = this.state.isOpen ? modalStyles.mdl : modalStyles.mdlOut;
            var _overlayStyles = this.state.isOpen ? modalStyles.overlay : modalStyles.overlayOut;

            var cotainerClass = this.state.isOpen ? 'mdl-container' : 'mdl-container out';

            return _react2.default.createElement(
                'div',
                { className: cotainerClass },
                _react2.default.createElement('div', { className: 'mdl-overlay', style: _overlayStyles, onClick: function onClick() {
                        return _this2.closeModal();
                    } }),
                _react2.default.createElement(
                    'div',
                    { className: 'mdl', style: _modalStyles },
                    this.props.children
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {

            return this.renderModal();
        }
    }]);
    return ReactJModal;
}(_react2.default.Component);

ReactJModal.propTypes = {
    modalStyles: _react2.default.PropTypes.object,
    isOpen: _react2.default.PropTypes.bool
};
ReactJModal.defaultProps = {
    modalStyles: {},
    isOpen: false
};


module.exports = ReactJModal;