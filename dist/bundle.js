(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _modal = require('./modal/jsx/modal');

var _modal2 = _interopRequireDefault(_modal);

var _data = require('./data');

var _modal_styles = require('./modal/styles/modal_styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
	_modal2.default,
	{ modalStyles: _modal_styles.modal_style, overlayStyles: _modal_styles.overlay_style },
	_react2.default.createElement('div', { style: _modal_styles.modal_style.title_styles }),
	_react2.default.createElement(
		'div',
		{ style: _modal_styles.modal_style.modal_data },
		_react2.default.createElement(
			'p',
			null,
			_data.data
		)
	),
	_react2.default.createElement('div', { style: _modal_styles.modal_style.footer_styles })
), document.getElementById('app'));

},{"./data":2,"./modal/jsx/modal":3,"./modal/styles/modal_styles":4,"react":"react","react-dom":"react-dom"}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var data = exports.data = "Get up to $605 Instant Air Credit. Booking Window: Now - Dec. 30, 2016.\n\nFor travel now - Dec. 26, 2018.\n\n$605 Air Credit on 7-paid nights or longer\n$505 Air Credit on 6-paid nights\n$405 Air Credit on 5-paid nights\n$305 Air Credit on 4-paid nights\n$225 Air Credit on 3-paid nights\n\nBlackout Dates: Dec. 27 - 31, 2016 | Dec. 27 - 31, 2017 | Dec. 27 - 31, 2018.\nAir Credit offer is valid for new bookings only.\nFor air inclusive bookings, the $605, $505, $405, $305 & $225 Air Credits are in USD, applied to the base fare and excludes government taxes and fees, which must be paid at time of booking and is fully non-refundable.\nOffer is combinable with other Sandals consumer saving promotions.\nCredit vouchers are subject to Terms & Conditions of any promotion and may or may not be combinable.\nOffers are combinable with Sandals Select Rewards Point promotions or WorldPoint redemptions.\nMaximum Sandals Select Point redemption per reservation is 20,000 Sandals Select points valued at $500.00 USD.\nUnique Travel Corp., reserves the right to verify all accounts prior to adjusting reservations. Limit one redemption reservation per member.\nBooking names must match the Sandals Select Membership account or it will be null and void.\nCancellation of hotel booking will result in cancellation of all associated airline tickets.\nOffers may not be applicable to group bookings.\nAll featured prices are in US Dollars.\nOffers are subject to availability throughout promotional period and may be changed or withdrawn at any time. Other restrictions and limitations may apply.\nNot responsible for errors or omissions.\n\nGet up to $605 Instant Air Credit. Booking Window: Now - Dec. 30, 2016.\n\nFor travel now - Dec. 26, 2018.\n\n$605 Air Credit on 7-paid nights or longer\n$505 Air Credit on 6-paid nights\n$405 Air Credit on 5-paid nights\n$305 Air Credit on 4-paid nights\n$225 Air Credit on 3-paid nights\n\nBlackout Dates: Dec. 27 - 31, 2016 | Dec. 27 - 31, 2017 | Dec. 27 - 31, 2018.\nAir Credit offer is valid for new bookings only.\nFor air inclusive bookings, the $605, $505, $405, $305 & $225 Air Credits are in USD, applied to the base fare and excludes government taxes and fees, which must be paid at time of booking and is fully non-refundable.\nOffer is combinable with other Sandals consumer saving promotions.\nCredit vouchers are subject to Terms & Conditions of any promotion and may or may not be combinable.\nOffers are combinable with Sandals Select Rewards Point promotions or WorldPoint redemptions.\nMaximum Sandals Select Point redemption per reservation is 20,000 Sandals Select points valued at $500.00 USD.\nUnique Travel Corp., reserves the right to verify all accounts prior to adjusting reservations. Limit one redemption reservation per member.\nBooking names must match the Sandals Select Membership account or it will be null and void.\nCancellation of hotel booking will result in cancellation of all associated airline tickets.\nOffers may not be applicable to group bookings.\nAll featured prices are in US Dollars.\nOffers are subject to availability throughout promotional period and may be changed or withdrawn at any time. Other restrictions and limitations may apply.\nNot responsible for errors or omissions.\n";

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_React$Component) {
	_inherits(Modal, _React$Component);

	function Modal() {
		_classCallCheck(this, Modal);

		var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

		_this.closeModal = _this.closeModal.bind(_this);
		_this.renderModal = _this.renderModal.bind(_this);
		_this.state = {
			isOpen: true
		};
		return _this;
	}

	_createClass(Modal, [{
		key: "closeModal",
		value: function closeModal(e) {
			this.setState({ isOpen: false });
			console.log("clicked");
		}
	}, {
		key: "renderModal",
		value: function renderModal() {
			var _this2 = this;

			var _props = this.props,
			    modalStyles = _props.modalStyles,
			    overlayStyles = _props.overlayStyles;


			var hiddenModalStyle = this.state.isOpen ? modalStyles.modal : modalStyles.fade_out;
			var overlayStylesDynamic = this.state.isOpen ? overlayStyles : modalStyles.fade_out_overlay;
			var containerStylesDynamic = this.state.isOpen ? null : modalStyles.fade_modal_container;

			return _react2.default.createElement(
				"div",
				{ className: "modal-container", style: containerStylesDynamic },
				_react2.default.createElement(
					"div",
					{ className: "modal-bkg", style: overlayStylesDynamic },
					_react2.default.createElement(
						"div",
						{ className: "modal", style: Object.assign(hiddenModalStyle) },
						_react2.default.createElement(
							"div",
							{ className: "modalClose", onClick: function onClick() {
									return _this2.closeModal();
								} },
							"\u2716"
						),
						this.props.children
					)
				)
			);
		}
	}, {
		key: "render",
		value: function render() {
			return (
				// this.state.isOpen?this.renderModal():null
				this.renderModal()
			);
		}
	}]);

	return Modal;
}(_react2.default.Component);

exports.default = Modal;


Modal.propTypes = {
	modalStyles: _react2.default.PropTypes.object,
	overlayStyles: _react2.default.PropTypes.object,
	isOpen: _react2.default.PropTypes.bool
};

Modal.defaultProps = {
	modalStyles: {},
	overlayStyles: {},
	isOpen: false
};

},{"react":"react"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var modal_style = exports.modal_style = {
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        zIndex: '52',
        width: '33.3%',
        height: '33.3%',
        display: 'block',
        margin: '0',
        padding: '0',
        background: '#e5e5e5',
        transform: 'translate(-50%, -50%)',
        borderRadius: '2% 0'
    },
    title_styles: {
        position: 'relative',
        top: '0',
        height: '15%',
        width: '100%',
        borderBottom: '1px solid rgb(210, 77, 87)',
        borderBottom: '1px solid rgba(210, 77, 87, .2)',
        webkitBackgroundClip: 'padding-box',
        backgroundClip: 'padding-box'
    },
    modal_data: {
        height: '70%',
        overflow: 'auto'
    },
    footer_styles: {
        position: 'relative',
        bottom: '0',
        height: '15%',
        width: '100%',
        borderTop: '1px solid rgb(210, 77, 87)',
        borderTop: '1px solid rgba(210, 77, 87, .2)',
        WebkitBackgroundClip: 'padding-box',
        backgroundClip: 'padding-box'
    },
    modal_close: {
        top: '1%',
        right: '1%',
        font: '14px/100% arial, sans-serif',
        textDecoration: 'none',
        textShadow: '0 1px 0 #fff',
        color: '#777'
    },
    fade_out: {
        position: 'absolute',
        top: '35%',
        left: '50%',
        zIndex: '52',
        width: '33.3%',
        height: '33.3%',
        display: 'block',
        margin: '0',
        padding: '0',
        background: '#e5e5e5',
        transform: 'translate(-50%, -50%)',
        borderRadius: '2% 0',
        animation: 'roadRunnerOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards'
    },
    fade_out_overlay: {
        top: '0',
        left: '0',
        position: 'fixed',
        width: '100%',
        height: '100%',
        padding: '0',
        background: '#000',
        opacity: '0.8',
        animation: 'fadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards'
    },
    fade_modal_container: {
        animation: 'fadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards'
    }
};

var overlay_style = exports.overlay_style = {
    top: '0',
    left: '0',
    position: 'fixed',
    width: '100%',
    height: '100%',
    padding: '0',
    background: '#000',
    opacity: '0.8',
    animation: 'fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards'
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjb21wb25lbnRzL2FwcC5qcyIsImNvbXBvbmVudHMvZGF0YS5qcyIsImNvbXBvbmVudHMvbW9kYWwvanN4L21vZGFsLmpzIiwiY29tcG9uZW50cy9tb2RhbC9zdHlsZXMvbW9kYWxfc3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUVBLG1CQUFTLE1BQVQsQ0FBaUI7QUFBQTtBQUFBLEdBQU8sc0NBQVAsRUFBbUMsMENBQW5DO0FBQ2Ysd0NBQUssT0FBUSwwQkFBWSxZQUF6QixHQURlO0FBRWY7QUFBQTtBQUFBLElBQUssT0FBUSwwQkFBWSxVQUF6QjtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxFQUZlO0FBS2Ysd0NBQUssT0FBUSwwQkFBWSxhQUF6QjtBQUxlLENBQWpCLEVBTVcsU0FBUyxjQUFULENBQXdCLEtBQXhCLENBTlg7Ozs7Ozs7O0FDUE8sSUFBTSw4dEdBQU47Ozs7Ozs7Ozs7O0FDQVA7Ozs7Ozs7Ozs7OztJQUVxQixLOzs7QUFDcEIsa0JBQWM7QUFBQTs7QUFBQTs7QUFFYixRQUFLLFVBQUwsR0FBa0IsTUFBSyxVQUFMLENBQWdCLElBQWhCLE9BQWxCO0FBQ0EsUUFBSyxXQUFMLEdBQW1CLE1BQUssV0FBTCxDQUFpQixJQUFqQixPQUFuQjtBQUNBLFFBQUssS0FBTCxHQUFhO0FBQ1osV0FBUTtBQURJLEdBQWI7QUFKYTtBQU9iOzs7OzZCQUVVLEMsRUFBRztBQUNiLFFBQUssUUFBTCxDQUFjLEVBQUUsUUFBUSxLQUFWLEVBQWQ7QUFDQSxXQUFRLEdBQVIsQ0FBWSxTQUFaO0FBQ0E7OztnQ0FFYTtBQUFBOztBQUFBLGdCQUV5QixLQUFLLEtBRjlCO0FBQUEsT0FFTCxXQUZLLFVBRUwsV0FGSztBQUFBLE9BRVEsYUFGUixVQUVRLGFBRlI7OztBQUliLE9BQUksbUJBQW1CLEtBQUssS0FBTCxDQUFXLE1BQVgsR0FBa0IsWUFBWSxLQUE5QixHQUFvQyxZQUFZLFFBQXZFO0FBQ0EsT0FBSSx1QkFBdUIsS0FBSyxLQUFMLENBQVcsTUFBWCxHQUFrQixhQUFsQixHQUFnQyxZQUFZLGdCQUF2RTtBQUNBLE9BQUkseUJBQXlCLEtBQUssS0FBTCxDQUFXLE1BQVgsR0FBa0IsSUFBbEIsR0FBdUIsWUFBWSxvQkFBaEU7O0FBRUEsVUFDQztBQUFBO0FBQUEsTUFBSyxXQUFVLGlCQUFmLEVBQWlDLE9BQU8sc0JBQXhDO0FBQ0M7QUFBQTtBQUFBLE9BQUssV0FBVSxXQUFmLEVBQTJCLE9BQVEsb0JBQW5DO0FBQ0M7QUFBQTtBQUFBLFFBQUssV0FBVSxPQUFmLEVBQXVCLE9BQVEsT0FBTyxNQUFQLENBQWMsZ0JBQWQsQ0FBL0I7QUFDQztBQUFBO0FBQUEsU0FBSyxXQUFVLFlBQWYsRUFBNEIsU0FBUztBQUFBLGdCQUFNLE9BQUssVUFBTCxFQUFOO0FBQUEsU0FBckM7QUFBQTtBQUFBLE9BREQ7QUFFRSxXQUFLLEtBQUwsQ0FBVztBQUZiO0FBREQ7QUFERCxJQUREO0FBVUE7OzsyQkFDUTtBQUNSO0FBQ0M7QUFDQSxTQUFLLFdBQUw7QUFGRDtBQUlBOzs7O0VBdkNpQyxnQkFBTSxTOztrQkFBcEIsSzs7O0FBMENyQixNQUFNLFNBQU4sR0FBa0I7QUFDakIsY0FBYSxnQkFBTSxTQUFOLENBQWdCLE1BRFo7QUFFakIsZ0JBQWUsZ0JBQU0sU0FBTixDQUFnQixNQUZkO0FBR2pCLFNBQVEsZ0JBQU0sU0FBTixDQUFnQjtBQUhQLENBQWxCOztBQU1BLE1BQU0sWUFBTixHQUFxQjtBQUNwQixjQUFhLEVBRE87QUFFcEIsZ0JBQWUsRUFGSztBQUdwQixTQUFRO0FBSFksQ0FBckI7Ozs7Ozs7O0FDbERPLElBQU0sb0NBQWM7QUFDdkIsV0FBTztBQUNILGtCQUFVLFVBRFA7QUFFSCxhQUFLLEtBRkY7QUFHSCxjQUFNLEtBSEg7QUFJSCxnQkFBUSxJQUpMO0FBS0gsZUFBTyxPQUxKO0FBTUgsZ0JBQVEsT0FOTDtBQU9ILGlCQUFTLE9BUE47QUFRSCxnQkFBUSxHQVJMO0FBU0gsaUJBQVMsR0FUTjtBQVVILG9CQUFZLFNBVlQ7QUFXSCxtQkFBVyx1QkFYUjtBQVlILHNCQUFjO0FBWlgsS0FEZ0I7QUFldkIsa0JBQWM7QUFDVixrQkFBVSxVQURBO0FBRVYsYUFBSyxHQUZLO0FBR1YsZ0JBQVEsS0FIRTtBQUlWLGVBQU8sTUFKRztBQUtWLHNCQUFjLDRCQUxKO0FBTVYsc0JBQWMsaUNBTko7QUFPViw4QkFBc0IsYUFQWjtBQVFWLHdCQUFnQjtBQVJOLEtBZlM7QUF5QnZCLGdCQUFZO0FBQ1IsZ0JBQVEsS0FEQTtBQUVSLGtCQUFVO0FBRkYsS0F6Qlc7QUE2QnZCLG1CQUFlO0FBQ1gsa0JBQVUsVUFEQztBQUVYLGdCQUFRLEdBRkc7QUFHWCxnQkFBUSxLQUhHO0FBSVgsZUFBTyxNQUpJO0FBS1gsbUJBQVcsNEJBTEE7QUFNWCxtQkFBVyxpQ0FOQTtBQU9YLDhCQUFzQixhQVBYO0FBUVgsd0JBQWdCO0FBUkwsS0E3QlE7QUF1Q3ZCLGlCQUFhO0FBQ1QsYUFBSyxJQURJO0FBRVQsZUFBTyxJQUZFO0FBR1QsY0FBTSw2QkFIRztBQUlULHdCQUFnQixNQUpQO0FBS1Qsb0JBQVksY0FMSDtBQU1ULGVBQU87QUFORSxLQXZDVTtBQStDdkIsY0FBVTtBQUNOLGtCQUFVLFVBREo7QUFFTixhQUFLLEtBRkM7QUFHTixjQUFNLEtBSEE7QUFJTixnQkFBUSxJQUpGO0FBS04sZUFBTyxPQUxEO0FBTU4sZ0JBQVEsT0FORjtBQU9OLGlCQUFTLE9BUEg7QUFRTixnQkFBUSxHQVJGO0FBU04saUJBQVMsR0FUSDtBQVVOLG9CQUFZLFNBVk47QUFXTixtQkFBVyx1QkFYTDtBQVlOLHNCQUFjLE1BWlI7QUFhTixtQkFBVztBQWJMLEtBL0NhO0FBOER2QixzQkFBa0I7QUFDZCxhQUFLLEdBRFM7QUFFZCxjQUFNLEdBRlE7QUFHZCxrQkFBVSxPQUhJO0FBSWQsZUFBTyxNQUpPO0FBS2QsZ0JBQVEsTUFMTTtBQU1kLGlCQUFTLEdBTks7QUFPZCxvQkFBWSxNQVBFO0FBUWQsaUJBQVMsS0FSSztBQVNkLG1CQUFXO0FBVEcsS0E5REs7QUF5RXZCLDBCQUFzQjtBQUNsQixtQkFBVztBQURPO0FBekVDLENBQXBCOztBQThFQSxJQUFNLHdDQUFnQjtBQUN6QixTQUFLLEdBRG9CO0FBRXpCLFVBQU0sR0FGbUI7QUFHekIsY0FBVSxPQUhlO0FBSXpCLFdBQU8sTUFKa0I7QUFLekIsWUFBUSxNQUxpQjtBQU16QixhQUFTLEdBTmdCO0FBT3pCLGdCQUFZLE1BUGE7QUFRekIsYUFBUyxLQVJnQjtBQVN6QixlQUFXO0FBVGMsQ0FBdEIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9tb2RhbC9qc3gvbW9kYWwnO1xuaW1wb3J0IHtkYXRhfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IHttb2RhbF9zdHlsZSwgb3ZlcmxheV9zdHlsZX0gZnJvbSAnLi9tb2RhbC9zdHlsZXMvbW9kYWxfc3R5bGVzJztcblxuUmVhY3RET00ucmVuZGVyKCA8TW9kYWwgbW9kYWxTdHlsZXMgPSB7bW9kYWxfc3R5bGV9IG92ZXJsYXlTdHlsZXMgPSB7b3ZlcmxheV9zdHlsZX0+XG5cdFx0PGRpdiBzdHlsZT17IG1vZGFsX3N0eWxlLnRpdGxlX3N0eWxlcyB9PjwvZGl2PlxuXHRcdDxkaXYgc3R5bGU9eyBtb2RhbF9zdHlsZS5tb2RhbF9kYXRhIH0+XG5cdFx0XHQ8cD57ZGF0YX08L3A+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBzdHlsZT17IG1vZGFsX3N0eWxlLmZvb3Rlcl9zdHlsZXMgfT48L2Rpdj5cblx0PC9Nb2RhbD4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSApO1xuIiwiZXhwb3J0IGNvbnN0IGRhdGEgPSBgR2V0IHVwIHRvICQ2MDUgSW5zdGFudCBBaXIgQ3JlZGl0LiBCb29raW5nIFdpbmRvdzogTm93IC0gRGVjLiAzMCwgMjAxNi5cblxuRm9yIHRyYXZlbCBub3cgLSBEZWMuIDI2LCAyMDE4LlxuXG4kNjA1IEFpciBDcmVkaXQgb24gNy1wYWlkIG5pZ2h0cyBvciBsb25nZXJcbiQ1MDUgQWlyIENyZWRpdCBvbiA2LXBhaWQgbmlnaHRzXG4kNDA1IEFpciBDcmVkaXQgb24gNS1wYWlkIG5pZ2h0c1xuJDMwNSBBaXIgQ3JlZGl0IG9uIDQtcGFpZCBuaWdodHNcbiQyMjUgQWlyIENyZWRpdCBvbiAzLXBhaWQgbmlnaHRzXG5cbkJsYWNrb3V0IERhdGVzOiBEZWMuIDI3IC0gMzEsIDIwMTYgfCBEZWMuIDI3IC0gMzEsIDIwMTcgfCBEZWMuIDI3IC0gMzEsIDIwMTguXG5BaXIgQ3JlZGl0IG9mZmVyIGlzIHZhbGlkIGZvciBuZXcgYm9va2luZ3Mgb25seS5cbkZvciBhaXIgaW5jbHVzaXZlIGJvb2tpbmdzLCB0aGUgJDYwNSwgJDUwNSwgJDQwNSwgJDMwNSAmICQyMjUgQWlyIENyZWRpdHMgYXJlIGluIFVTRCwgYXBwbGllZCB0byB0aGUgYmFzZSBmYXJlIGFuZCBleGNsdWRlcyBnb3Zlcm5tZW50IHRheGVzIGFuZCBmZWVzLCB3aGljaCBtdXN0IGJlIHBhaWQgYXQgdGltZSBvZiBib29raW5nIGFuZCBpcyBmdWxseSBub24tcmVmdW5kYWJsZS5cbk9mZmVyIGlzIGNvbWJpbmFibGUgd2l0aCBvdGhlciBTYW5kYWxzIGNvbnN1bWVyIHNhdmluZyBwcm9tb3Rpb25zLlxuQ3JlZGl0IHZvdWNoZXJzIGFyZSBzdWJqZWN0IHRvIFRlcm1zICYgQ29uZGl0aW9ucyBvZiBhbnkgcHJvbW90aW9uIGFuZCBtYXkgb3IgbWF5IG5vdCBiZSBjb21iaW5hYmxlLlxuT2ZmZXJzIGFyZSBjb21iaW5hYmxlIHdpdGggU2FuZGFscyBTZWxlY3QgUmV3YXJkcyBQb2ludCBwcm9tb3Rpb25zIG9yIFdvcmxkUG9pbnQgcmVkZW1wdGlvbnMuXG5NYXhpbXVtIFNhbmRhbHMgU2VsZWN0IFBvaW50IHJlZGVtcHRpb24gcGVyIHJlc2VydmF0aW9uIGlzIDIwLDAwMCBTYW5kYWxzIFNlbGVjdCBwb2ludHMgdmFsdWVkIGF0ICQ1MDAuMDAgVVNELlxuVW5pcXVlIFRyYXZlbCBDb3JwLiwgcmVzZXJ2ZXMgdGhlIHJpZ2h0IHRvIHZlcmlmeSBhbGwgYWNjb3VudHMgcHJpb3IgdG8gYWRqdXN0aW5nIHJlc2VydmF0aW9ucy4gTGltaXQgb25lIHJlZGVtcHRpb24gcmVzZXJ2YXRpb24gcGVyIG1lbWJlci5cbkJvb2tpbmcgbmFtZXMgbXVzdCBtYXRjaCB0aGUgU2FuZGFscyBTZWxlY3QgTWVtYmVyc2hpcCBhY2NvdW50IG9yIGl0IHdpbGwgYmUgbnVsbCBhbmQgdm9pZC5cbkNhbmNlbGxhdGlvbiBvZiBob3RlbCBib29raW5nIHdpbGwgcmVzdWx0IGluIGNhbmNlbGxhdGlvbiBvZiBhbGwgYXNzb2NpYXRlZCBhaXJsaW5lIHRpY2tldHMuXG5PZmZlcnMgbWF5IG5vdCBiZSBhcHBsaWNhYmxlIHRvIGdyb3VwIGJvb2tpbmdzLlxuQWxsIGZlYXR1cmVkIHByaWNlcyBhcmUgaW4gVVMgRG9sbGFycy5cbk9mZmVycyBhcmUgc3ViamVjdCB0byBhdmFpbGFiaWxpdHkgdGhyb3VnaG91dCBwcm9tb3Rpb25hbCBwZXJpb2QgYW5kIG1heSBiZSBjaGFuZ2VkIG9yIHdpdGhkcmF3biBhdCBhbnkgdGltZS4gT3RoZXIgcmVzdHJpY3Rpb25zIGFuZCBsaW1pdGF0aW9ucyBtYXkgYXBwbHkuXG5Ob3QgcmVzcG9uc2libGUgZm9yIGVycm9ycyBvciBvbWlzc2lvbnMuXG5cbkdldCB1cCB0byAkNjA1IEluc3RhbnQgQWlyIENyZWRpdC4gQm9va2luZyBXaW5kb3c6IE5vdyAtIERlYy4gMzAsIDIwMTYuXG5cbkZvciB0cmF2ZWwgbm93IC0gRGVjLiAyNiwgMjAxOC5cblxuJDYwNSBBaXIgQ3JlZGl0IG9uIDctcGFpZCBuaWdodHMgb3IgbG9uZ2VyXG4kNTA1IEFpciBDcmVkaXQgb24gNi1wYWlkIG5pZ2h0c1xuJDQwNSBBaXIgQ3JlZGl0IG9uIDUtcGFpZCBuaWdodHNcbiQzMDUgQWlyIENyZWRpdCBvbiA0LXBhaWQgbmlnaHRzXG4kMjI1IEFpciBDcmVkaXQgb24gMy1wYWlkIG5pZ2h0c1xuXG5CbGFja291dCBEYXRlczogRGVjLiAyNyAtIDMxLCAyMDE2IHwgRGVjLiAyNyAtIDMxLCAyMDE3IHwgRGVjLiAyNyAtIDMxLCAyMDE4LlxuQWlyIENyZWRpdCBvZmZlciBpcyB2YWxpZCBmb3IgbmV3IGJvb2tpbmdzIG9ubHkuXG5Gb3IgYWlyIGluY2x1c2l2ZSBib29raW5ncywgdGhlICQ2MDUsICQ1MDUsICQ0MDUsICQzMDUgJiAkMjI1IEFpciBDcmVkaXRzIGFyZSBpbiBVU0QsIGFwcGxpZWQgdG8gdGhlIGJhc2UgZmFyZSBhbmQgZXhjbHVkZXMgZ292ZXJubWVudCB0YXhlcyBhbmQgZmVlcywgd2hpY2ggbXVzdCBiZSBwYWlkIGF0IHRpbWUgb2YgYm9va2luZyBhbmQgaXMgZnVsbHkgbm9uLXJlZnVuZGFibGUuXG5PZmZlciBpcyBjb21iaW5hYmxlIHdpdGggb3RoZXIgU2FuZGFscyBjb25zdW1lciBzYXZpbmcgcHJvbW90aW9ucy5cbkNyZWRpdCB2b3VjaGVycyBhcmUgc3ViamVjdCB0byBUZXJtcyAmIENvbmRpdGlvbnMgb2YgYW55IHByb21vdGlvbiBhbmQgbWF5IG9yIG1heSBub3QgYmUgY29tYmluYWJsZS5cbk9mZmVycyBhcmUgY29tYmluYWJsZSB3aXRoIFNhbmRhbHMgU2VsZWN0IFJld2FyZHMgUG9pbnQgcHJvbW90aW9ucyBvciBXb3JsZFBvaW50IHJlZGVtcHRpb25zLlxuTWF4aW11bSBTYW5kYWxzIFNlbGVjdCBQb2ludCByZWRlbXB0aW9uIHBlciByZXNlcnZhdGlvbiBpcyAyMCwwMDAgU2FuZGFscyBTZWxlY3QgcG9pbnRzIHZhbHVlZCBhdCAkNTAwLjAwIFVTRC5cblVuaXF1ZSBUcmF2ZWwgQ29ycC4sIHJlc2VydmVzIHRoZSByaWdodCB0byB2ZXJpZnkgYWxsIGFjY291bnRzIHByaW9yIHRvIGFkanVzdGluZyByZXNlcnZhdGlvbnMuIExpbWl0IG9uZSByZWRlbXB0aW9uIHJlc2VydmF0aW9uIHBlciBtZW1iZXIuXG5Cb29raW5nIG5hbWVzIG11c3QgbWF0Y2ggdGhlIFNhbmRhbHMgU2VsZWN0IE1lbWJlcnNoaXAgYWNjb3VudCBvciBpdCB3aWxsIGJlIG51bGwgYW5kIHZvaWQuXG5DYW5jZWxsYXRpb24gb2YgaG90ZWwgYm9va2luZyB3aWxsIHJlc3VsdCBpbiBjYW5jZWxsYXRpb24gb2YgYWxsIGFzc29jaWF0ZWQgYWlybGluZSB0aWNrZXRzLlxuT2ZmZXJzIG1heSBub3QgYmUgYXBwbGljYWJsZSB0byBncm91cCBib29raW5ncy5cbkFsbCBmZWF0dXJlZCBwcmljZXMgYXJlIGluIFVTIERvbGxhcnMuXG5PZmZlcnMgYXJlIHN1YmplY3QgdG8gYXZhaWxhYmlsaXR5IHRocm91Z2hvdXQgcHJvbW90aW9uYWwgcGVyaW9kIGFuZCBtYXkgYmUgY2hhbmdlZCBvciB3aXRoZHJhd24gYXQgYW55IHRpbWUuIE90aGVyIHJlc3RyaWN0aW9ucyBhbmQgbGltaXRhdGlvbnMgbWF5IGFwcGx5LlxuTm90IHJlc3BvbnNpYmxlIGZvciBlcnJvcnMgb3Igb21pc3Npb25zLlxuYDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmNsb3NlTW9kYWwgPSB0aGlzLmNsb3NlTW9kYWwuYmluZCh0aGlzKTtcblx0XHR0aGlzLnJlbmRlck1vZGFsID0gdGhpcy5yZW5kZXJNb2RhbC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRpc09wZW46IHRydWVcblx0XHR9XG5cdH1cblxuXHRjbG9zZU1vZGFsKGUpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgaXNPcGVuOiBmYWxzZSB9KTtcblx0XHRjb25zb2xlLmxvZyhcImNsaWNrZWRcIik7XG5cdH1cblxuXHRyZW5kZXJNb2RhbCgpIHtcblxuXHRcdGNvbnN0IHsgbW9kYWxTdHlsZXMsIG92ZXJsYXlTdHlsZXN9ID0gdGhpcy5wcm9wcztcblx0XHRcblx0XHRsZXQgaGlkZGVuTW9kYWxTdHlsZSA9IHRoaXMuc3RhdGUuaXNPcGVuP21vZGFsU3R5bGVzLm1vZGFsOm1vZGFsU3R5bGVzLmZhZGVfb3V0O1xuXHRcdGxldCBvdmVybGF5U3R5bGVzRHluYW1pYyA9IHRoaXMuc3RhdGUuaXNPcGVuP292ZXJsYXlTdHlsZXM6bW9kYWxTdHlsZXMuZmFkZV9vdXRfb3ZlcmxheTtcblx0XHRsZXQgY29udGFpbmVyU3R5bGVzRHluYW1pYyA9IHRoaXMuc3RhdGUuaXNPcGVuP251bGw6bW9kYWxTdHlsZXMuZmFkZV9tb2RhbF9jb250YWluZXI7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250YWluZXJcIiBzdHlsZT17Y29udGFpbmVyU3R5bGVzRHluYW1pY30+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYmtnXCIgc3R5bGU9eyBvdmVybGF5U3R5bGVzRHluYW1pYyB9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIiBzdHlsZT17IE9iamVjdC5hc3NpZ24oaGlkZGVuTW9kYWxTdHlsZSkgfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWxDbG9zZVwiIG9uQ2xpY2s9eygpID0+IHRoaXMuY2xvc2VNb2RhbCgpfT7inJY8L2Rpdj5cblx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuKFxuXHRcdFx0Ly8gdGhpcy5zdGF0ZS5pc09wZW4/dGhpcy5yZW5kZXJNb2RhbCgpOm51bGxcblx0XHRcdHRoaXMucmVuZGVyTW9kYWwoKVxuXHRcdFx0KVxuXHR9XG59XG5cbk1vZGFsLnByb3BUeXBlcyA9IHtcblx0bW9kYWxTdHlsZXM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG5cdG92ZXJsYXlTdHlsZXM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG5cdGlzT3BlbjogUmVhY3QuUHJvcFR5cGVzLmJvb2xcbn07XG5cbk1vZGFsLmRlZmF1bHRQcm9wcyA9IHtcblx0bW9kYWxTdHlsZXM6IHt9LFxuXHRvdmVybGF5U3R5bGVzOiB7fSxcblx0aXNPcGVuOiBmYWxzZVxufSIsImV4cG9ydCBjb25zdCBtb2RhbF9zdHlsZSA9IHtcbiAgICBtb2RhbDoge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgbGVmdDogJzUwJScsXG4gICAgICAgIHpJbmRleDogJzUyJyxcbiAgICAgICAgd2lkdGg6ICczMy4zJScsXG4gICAgICAgIGhlaWdodDogJzMzLjMlJyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgbWFyZ2luOiAnMCcsXG4gICAgICAgIHBhZGRpbmc6ICcwJyxcbiAgICAgICAgYmFja2dyb3VuZDogJyNlNWU1ZTUnLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICcyJSAwJ1xuICAgICAgICB9LFxuICAgIHRpdGxlX3N0eWxlczoge1xuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgdG9wOiAnMCcsXG4gICAgICAgIGhlaWdodDogJzE1JScsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCByZ2IoMjEwLCA3NywgODcpJyxcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIHJnYmEoMjEwLCA3NywgODcsIC4yKScsXG4gICAgICAgIHdlYmtpdEJhY2tncm91bmRDbGlwOiAncGFkZGluZy1ib3gnLFxuICAgICAgICBiYWNrZ3JvdW5kQ2xpcDogJ3BhZGRpbmctYm94J1xuICAgIH0sXG4gICAgbW9kYWxfZGF0YToge1xuICAgICAgICBoZWlnaHQ6ICc3MCUnLFxuICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgIH0sXG4gICAgZm9vdGVyX3N0eWxlczoge1xuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgYm90dG9tOiAnMCcsXG4gICAgICAgIGhlaWdodDogJzE1JScsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCByZ2IoMjEwLCA3NywgODcpJyxcbiAgICAgICAgYm9yZGVyVG9wOiAnMXB4IHNvbGlkIHJnYmEoMjEwLCA3NywgODcsIC4yKScsXG4gICAgICAgIFdlYmtpdEJhY2tncm91bmRDbGlwOiAncGFkZGluZy1ib3gnLFxuICAgICAgICBiYWNrZ3JvdW5kQ2xpcDogJ3BhZGRpbmctYm94J1xuICAgIH0sXG4gICAgbW9kYWxfY2xvc2U6IHtcbiAgICAgICAgdG9wOiAnMSUnLFxuICAgICAgICByaWdodDogJzElJyxcbiAgICAgICAgZm9udDogJzE0cHgvMTAwJSBhcmlhbCwgc2Fucy1zZXJpZicsXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICAgIHRleHRTaGFkb3c6ICcwIDFweCAwICNmZmYnLFxuICAgICAgICBjb2xvcjogJyM3NzcnLFxuICAgIH0sXG4gICAgZmFkZV9vdXQ6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogJzM1JScsXG4gICAgICAgIGxlZnQ6ICc1MCUnLFxuICAgICAgICB6SW5kZXg6ICc1MicsXG4gICAgICAgIHdpZHRoOiAnMzMuMyUnLFxuICAgICAgICBoZWlnaHQ6ICczMy4zJScsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG1hcmdpbjogJzAnLFxuICAgICAgICBwYWRkaW5nOiAnMCcsXG4gICAgICAgIGJhY2tncm91bmQ6ICcjZTVlNWU1JyxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMiUgMCcsXG4gICAgICAgIGFuaW1hdGlvbjogJ3JvYWRSdW5uZXJPdXQgMC41cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIGZvcndhcmRzJ1xuICAgIH0sXG4gICAgZmFkZV9vdXRfb3ZlcmxheToge1xuICAgICAgICB0b3A6ICcwJyxcbiAgICAgICAgbGVmdDogJzAnLFxuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIHBhZGRpbmc6ICcwJyxcbiAgICAgICAgYmFja2dyb3VuZDogJyMwMDAnLFxuICAgICAgICBvcGFjaXR5OiAnMC44JyxcbiAgICAgICAgYW5pbWF0aW9uOiAnZmFkZU91dCAwLjVzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSkgZm9yd2FyZHMnXG4gICAgfSxcbiAgICBmYWRlX21vZGFsX2NvbnRhaW5lcjoge1xuICAgICAgICBhbmltYXRpb246ICdmYWRlT3V0IDAuNXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBmb3J3YXJkcydcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBvdmVybGF5X3N0eWxlID0ge1xuICAgIHRvcDogJzAnLFxuICAgIGxlZnQ6ICcwJyxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHBhZGRpbmc6ICcwJyxcbiAgICBiYWNrZ3JvdW5kOiAnIzAwMCcsXG4gICAgb3BhY2l0eTogJzAuOCcsXG4gICAgYW5pbWF0aW9uOiAnZmFkZUluIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBmb3J3YXJkcydcbn0iXX0=
