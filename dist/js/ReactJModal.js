'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactJModal = function (_React$Component) {
    _inherits(ReactJModal, _React$Component);

    function ReactJModal() {
        _classCallCheck(this, ReactJModal);

        var _this = _possibleConstructorReturn(this, (ReactJModal.__proto__ || Object.getPrototypeOf(ReactJModal)).call(this));

        _this.closeModal = _this.closeModal.bind(_this);
        _this.renderModal = _this.renderModal.bind(_this);
        _this.handleKeyPress = _this.handleKeyPress.bind(_this);
        _this.state = {
            isOpen: true
        };
        return _this;
    }

    _createClass(ReactJModal, [{
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
//# sourceMappingURL=[outputFile].js.map