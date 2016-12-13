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
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

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
		_this.renderInput = _this.renderInput.bind(_this);
		_this.state = {
			isOpen: true
		};
		return _this;
	}

	_createClass(Modal, [{
		key: 'closeModal',
		value: function closeModal(e) {
			//this.setState({ isOpen: false });
			console.log('this.state');
		}
	}, {
		key: 'renderModal',
		value: function renderModal() {
			var _this2 = this;

			var _props = this.props,
			    modalStyles = _props.modalStyles,
			    overlayStyles = _props.overlayStyles;


			return _react2.default.createElement(
				'div',
				{ className: 'modal-bkg', style: overlayStyles },
				_react2.default.createElement(
					'div',
					{ className: 'modal', style: modalStyles.modal },
					_react2.default.createElement('input', { type: 'button', className: 'modalClose', style: modalStyles.modal_close, onClick: function onClick() {
							return _this2.closeModal();
						}, value: '\u2716' }),
					this.props.children
				)
			);
		}
	}, {
		key: 'renderInput',
		value: function renderInput() {
			var _this3 = this;

			return _react2.default.createElement('input', { type: 'button', onClick: function onClick() {
					return _this3.closeModal();
				}, value: 'Click Me!' });
		}
	}, {
		key: 'render',
		value: function render() {
			console.log(this.state);
			return (
				// this.state?this.renderModal():null
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
        width: '60%',
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
        position: 'absolute',
        top: '1%',
        right: '1%',
        font: '14px/100% arial, sans-serif',
        textDecoration: 'none',
        textShadow: '0 1px 0 #fff',
        color: '#777',
        cursor: 'pointer'
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
    opacity: '.8'
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjb21wb25lbnRzL2FwcC5qcyIsImNvbXBvbmVudHMvZGF0YS5qcyIsImNvbXBvbmVudHMvbW9kYWwvanN4L21vZGFsLmpzIiwiY29tcG9uZW50cy9tb2RhbC9zdHlsZXMvbW9kYWxfc3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUVBLG1CQUFTLE1BQVQsQ0FBaUI7QUFBQTtBQUFBLEdBQU8sc0NBQVAsRUFBbUMsMENBQW5DO0FBQ2Ysd0NBQUssT0FBUSwwQkFBWSxZQUF6QixHQURlO0FBRWY7QUFBQTtBQUFBLElBQUssT0FBUSwwQkFBWSxVQUF6QjtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxFQUZlO0FBS2Ysd0NBQUssT0FBUSwwQkFBWSxhQUF6QjtBQUxlLENBQWpCLEVBTVcsU0FBUyxjQUFULENBQXdCLEtBQXhCLENBTlg7Ozs7Ozs7O0FDUE8sSUFBTSw4dEdBQU47Ozs7Ozs7Ozs7O0FDQVA7Ozs7Ozs7Ozs7OztJQUVxQixLOzs7QUFDcEIsa0JBQWM7QUFBQTs7QUFBQTs7QUFFYixRQUFLLFVBQUwsR0FBa0IsTUFBSyxVQUFMLENBQWdCLElBQWhCLE9BQWxCO0FBQ0EsUUFBSyxXQUFMLEdBQW1CLE1BQUssV0FBTCxDQUFpQixJQUFqQixPQUFuQjtBQUNBLFFBQUssV0FBTCxHQUFtQixNQUFLLFdBQUwsQ0FBaUIsSUFBakIsT0FBbkI7QUFDQSxRQUFLLEtBQUwsR0FBYTtBQUNaLFdBQVE7QUFESSxHQUFiO0FBTGE7QUFRYjs7Ozs2QkFFVSxDLEVBQUc7QUFDYjtBQUNBLFdBQVEsR0FBUixDQUFZLFlBQVo7QUFDQTs7O2dDQUVhO0FBQUE7O0FBQUEsZ0JBQ3lCLEtBQUssS0FEOUI7QUFBQSxPQUNMLFdBREssVUFDTCxXQURLO0FBQUEsT0FDUSxhQURSLFVBQ1EsYUFEUjs7O0FBR2IsVUFDQztBQUFBO0FBQUEsTUFBSyxXQUFVLFdBQWYsRUFBMkIsT0FBUSxhQUFuQztBQUNDO0FBQUE7QUFBQSxPQUFLLFdBQVUsT0FBZixFQUF1QixPQUFRLFlBQVksS0FBM0M7QUFDQyw4Q0FBTyxNQUFLLFFBQVosRUFBcUIsV0FBVSxZQUEvQixFQUE0QyxPQUFRLFlBQVksV0FBaEUsRUFBOEUsU0FBUztBQUFBLGNBQU0sT0FBSyxVQUFMLEVBQU47QUFBQSxPQUF2RixFQUFnSCxPQUFNLFFBQXRILEdBREQ7QUFFRyxVQUFLLEtBQUwsQ0FBVztBQUZkO0FBREQsSUFERDtBQVFBOzs7Z0NBRWE7QUFBQTs7QUFDYixVQUFPLHlDQUFPLE1BQUssUUFBWixFQUFxQixTQUFTO0FBQUEsWUFBTSxPQUFLLFVBQUwsRUFBTjtBQUFBLEtBQTlCLEVBQXVELE9BQU0sV0FBN0QsR0FBUDtBQUNBOzs7MkJBQ1E7QUFDUixXQUFRLEdBQVIsQ0FBWSxLQUFLLEtBQWpCO0FBQ0E7QUFDQztBQUNBLFNBQUssV0FBTDtBQUZEO0FBSUE7Ozs7RUF0Q2lDLGdCQUFNLFM7O2tCQUFwQixLOzs7QUF5Q3JCLE1BQU0sU0FBTixHQUFrQjtBQUNqQixjQUFhLGdCQUFNLFNBQU4sQ0FBZ0IsTUFEWjtBQUVqQixnQkFBZSxnQkFBTSxTQUFOLENBQWdCLE1BRmQ7QUFHakIsU0FBUSxnQkFBTSxTQUFOLENBQWdCO0FBSFAsQ0FBbEI7O0FBTUEsTUFBTSxZQUFOLEdBQXFCO0FBQ3BCLGNBQWEsRUFETztBQUVwQixnQkFBZSxFQUZLO0FBR3BCLFNBQVE7QUFIWSxDQUFyQjs7Ozs7Ozs7QUNqRE8sSUFBTSxvQ0FBYztBQUN2QixXQUFNO0FBQ0Ysa0JBQVUsVUFEUjtBQUVGLGFBQUssS0FGSDtBQUdGLGNBQU0sS0FISjtBQUlGLGdCQUFRLElBSk47QUFLRixlQUFPLEtBTEw7QUFNRixnQkFBUSxPQU5OO0FBT0YsaUJBQVMsT0FQUDtBQVFGLGdCQUFRLEdBUk47QUFTRixpQkFBUyxHQVRQO0FBVUYsb0JBQVksU0FWVjtBQVdGLG1CQUFXLHVCQVhUO0FBWUYsc0JBQWM7QUFaWixLQURpQjtBQWV2QixrQkFBYztBQUNWLGtCQUFVLFVBREE7QUFFVixhQUFLLEdBRks7QUFHVixnQkFBUSxLQUhFO0FBSVYsZUFBTyxNQUpHO0FBS1Ysc0JBQWMsNEJBTEo7QUFNVixzQkFBYyxpQ0FOSjtBQU9WLDhCQUFzQixhQVBaO0FBUVYsd0JBQWdCO0FBUk4sS0FmUztBQXlCdkIsZ0JBQVk7QUFDUixnQkFBUSxLQURBO0FBRVIsa0JBQVU7QUFGRixLQXpCVztBQTZCdkIsbUJBQWU7QUFDWCxrQkFBVSxVQURDO0FBRVgsZ0JBQVEsR0FGRztBQUdYLGdCQUFRLEtBSEc7QUFJWCxlQUFPLE1BSkk7QUFLWCxtQkFBVyw0QkFMQTtBQU1YLG1CQUFXLGlDQU5BO0FBT1gsOEJBQXNCLGFBUFg7QUFRWCx3QkFBZ0I7QUFSTCxLQTdCUTtBQXVDdkIsaUJBQWE7QUFDVCxrQkFBVSxVQUREO0FBRVQsYUFBSyxJQUZJO0FBR1QsZUFBTyxJQUhFO0FBSVQsY0FBTSw2QkFKRztBQUtULHdCQUFnQixNQUxQO0FBTVQsb0JBQVksY0FOSDtBQU9ULGVBQU8sTUFQRTtBQVFULGdCQUFRO0FBUkM7QUF2Q1UsQ0FBcEI7O0FBbURBLElBQU0sd0NBQWdCO0FBQ3pCLFNBQUssR0FEb0I7QUFFekIsVUFBTSxHQUZtQjtBQUd6QixjQUFVLE9BSGU7QUFJekIsV0FBTyxNQUprQjtBQUt6QixZQUFRLE1BTGlCO0FBTXpCLGFBQVMsR0FOZ0I7QUFPekIsZ0JBQVksTUFQYTtBQVF6QixhQUFTO0FBUmdCLENBQXRCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vbW9kYWwvanN4L21vZGFsJztcbmltcG9ydCB7ZGF0YX0gZnJvbSAnLi9kYXRhJztcbmltcG9ydCB7bW9kYWxfc3R5bGUsIG92ZXJsYXlfc3R5bGV9IGZyb20gJy4vbW9kYWwvc3R5bGVzL21vZGFsX3N0eWxlcyc7XG5cblJlYWN0RE9NLnJlbmRlciggPE1vZGFsIG1vZGFsU3R5bGVzID0ge21vZGFsX3N0eWxlfSBvdmVybGF5U3R5bGVzID0ge292ZXJsYXlfc3R5bGV9PlxuXHRcdDxkaXYgc3R5bGU9eyBtb2RhbF9zdHlsZS50aXRsZV9zdHlsZXMgfT48L2Rpdj5cblx0XHQ8ZGl2IHN0eWxlPXsgbW9kYWxfc3R5bGUubW9kYWxfZGF0YSB9PlxuXHRcdFx0PHA+e2RhdGF9PC9wPlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgc3R5bGU9eyBtb2RhbF9zdHlsZS5mb290ZXJfc3R5bGVzIH0+PC9kaXY+XG5cdDwvTW9kYWw+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykgKTtcbiIsImV4cG9ydCBjb25zdCBkYXRhID0gYEdldCB1cCB0byAkNjA1IEluc3RhbnQgQWlyIENyZWRpdC4gQm9va2luZyBXaW5kb3c6IE5vdyAtIERlYy4gMzAsIDIwMTYuXG5cbkZvciB0cmF2ZWwgbm93IC0gRGVjLiAyNiwgMjAxOC5cblxuJDYwNSBBaXIgQ3JlZGl0IG9uIDctcGFpZCBuaWdodHMgb3IgbG9uZ2VyXG4kNTA1IEFpciBDcmVkaXQgb24gNi1wYWlkIG5pZ2h0c1xuJDQwNSBBaXIgQ3JlZGl0IG9uIDUtcGFpZCBuaWdodHNcbiQzMDUgQWlyIENyZWRpdCBvbiA0LXBhaWQgbmlnaHRzXG4kMjI1IEFpciBDcmVkaXQgb24gMy1wYWlkIG5pZ2h0c1xuXG5CbGFja291dCBEYXRlczogRGVjLiAyNyAtIDMxLCAyMDE2IHwgRGVjLiAyNyAtIDMxLCAyMDE3IHwgRGVjLiAyNyAtIDMxLCAyMDE4LlxuQWlyIENyZWRpdCBvZmZlciBpcyB2YWxpZCBmb3IgbmV3IGJvb2tpbmdzIG9ubHkuXG5Gb3IgYWlyIGluY2x1c2l2ZSBib29raW5ncywgdGhlICQ2MDUsICQ1MDUsICQ0MDUsICQzMDUgJiAkMjI1IEFpciBDcmVkaXRzIGFyZSBpbiBVU0QsIGFwcGxpZWQgdG8gdGhlIGJhc2UgZmFyZSBhbmQgZXhjbHVkZXMgZ292ZXJubWVudCB0YXhlcyBhbmQgZmVlcywgd2hpY2ggbXVzdCBiZSBwYWlkIGF0IHRpbWUgb2YgYm9va2luZyBhbmQgaXMgZnVsbHkgbm9uLXJlZnVuZGFibGUuXG5PZmZlciBpcyBjb21iaW5hYmxlIHdpdGggb3RoZXIgU2FuZGFscyBjb25zdW1lciBzYXZpbmcgcHJvbW90aW9ucy5cbkNyZWRpdCB2b3VjaGVycyBhcmUgc3ViamVjdCB0byBUZXJtcyAmIENvbmRpdGlvbnMgb2YgYW55IHByb21vdGlvbiBhbmQgbWF5IG9yIG1heSBub3QgYmUgY29tYmluYWJsZS5cbk9mZmVycyBhcmUgY29tYmluYWJsZSB3aXRoIFNhbmRhbHMgU2VsZWN0IFJld2FyZHMgUG9pbnQgcHJvbW90aW9ucyBvciBXb3JsZFBvaW50IHJlZGVtcHRpb25zLlxuTWF4aW11bSBTYW5kYWxzIFNlbGVjdCBQb2ludCByZWRlbXB0aW9uIHBlciByZXNlcnZhdGlvbiBpcyAyMCwwMDAgU2FuZGFscyBTZWxlY3QgcG9pbnRzIHZhbHVlZCBhdCAkNTAwLjAwIFVTRC5cblVuaXF1ZSBUcmF2ZWwgQ29ycC4sIHJlc2VydmVzIHRoZSByaWdodCB0byB2ZXJpZnkgYWxsIGFjY291bnRzIHByaW9yIHRvIGFkanVzdGluZyByZXNlcnZhdGlvbnMuIExpbWl0IG9uZSByZWRlbXB0aW9uIHJlc2VydmF0aW9uIHBlciBtZW1iZXIuXG5Cb29raW5nIG5hbWVzIG11c3QgbWF0Y2ggdGhlIFNhbmRhbHMgU2VsZWN0IE1lbWJlcnNoaXAgYWNjb3VudCBvciBpdCB3aWxsIGJlIG51bGwgYW5kIHZvaWQuXG5DYW5jZWxsYXRpb24gb2YgaG90ZWwgYm9va2luZyB3aWxsIHJlc3VsdCBpbiBjYW5jZWxsYXRpb24gb2YgYWxsIGFzc29jaWF0ZWQgYWlybGluZSB0aWNrZXRzLlxuT2ZmZXJzIG1heSBub3QgYmUgYXBwbGljYWJsZSB0byBncm91cCBib29raW5ncy5cbkFsbCBmZWF0dXJlZCBwcmljZXMgYXJlIGluIFVTIERvbGxhcnMuXG5PZmZlcnMgYXJlIHN1YmplY3QgdG8gYXZhaWxhYmlsaXR5IHRocm91Z2hvdXQgcHJvbW90aW9uYWwgcGVyaW9kIGFuZCBtYXkgYmUgY2hhbmdlZCBvciB3aXRoZHJhd24gYXQgYW55IHRpbWUuIE90aGVyIHJlc3RyaWN0aW9ucyBhbmQgbGltaXRhdGlvbnMgbWF5IGFwcGx5LlxuTm90IHJlc3BvbnNpYmxlIGZvciBlcnJvcnMgb3Igb21pc3Npb25zLlxuXG5HZXQgdXAgdG8gJDYwNSBJbnN0YW50IEFpciBDcmVkaXQuIEJvb2tpbmcgV2luZG93OiBOb3cgLSBEZWMuIDMwLCAyMDE2LlxuXG5Gb3IgdHJhdmVsIG5vdyAtIERlYy4gMjYsIDIwMTguXG5cbiQ2MDUgQWlyIENyZWRpdCBvbiA3LXBhaWQgbmlnaHRzIG9yIGxvbmdlclxuJDUwNSBBaXIgQ3JlZGl0IG9uIDYtcGFpZCBuaWdodHNcbiQ0MDUgQWlyIENyZWRpdCBvbiA1LXBhaWQgbmlnaHRzXG4kMzA1IEFpciBDcmVkaXQgb24gNC1wYWlkIG5pZ2h0c1xuJDIyNSBBaXIgQ3JlZGl0IG9uIDMtcGFpZCBuaWdodHNcblxuQmxhY2tvdXQgRGF0ZXM6IERlYy4gMjcgLSAzMSwgMjAxNiB8IERlYy4gMjcgLSAzMSwgMjAxNyB8IERlYy4gMjcgLSAzMSwgMjAxOC5cbkFpciBDcmVkaXQgb2ZmZXIgaXMgdmFsaWQgZm9yIG5ldyBib29raW5ncyBvbmx5LlxuRm9yIGFpciBpbmNsdXNpdmUgYm9va2luZ3MsIHRoZSAkNjA1LCAkNTA1LCAkNDA1LCAkMzA1ICYgJDIyNSBBaXIgQ3JlZGl0cyBhcmUgaW4gVVNELCBhcHBsaWVkIHRvIHRoZSBiYXNlIGZhcmUgYW5kIGV4Y2x1ZGVzIGdvdmVybm1lbnQgdGF4ZXMgYW5kIGZlZXMsIHdoaWNoIG11c3QgYmUgcGFpZCBhdCB0aW1lIG9mIGJvb2tpbmcgYW5kIGlzIGZ1bGx5IG5vbi1yZWZ1bmRhYmxlLlxuT2ZmZXIgaXMgY29tYmluYWJsZSB3aXRoIG90aGVyIFNhbmRhbHMgY29uc3VtZXIgc2F2aW5nIHByb21vdGlvbnMuXG5DcmVkaXQgdm91Y2hlcnMgYXJlIHN1YmplY3QgdG8gVGVybXMgJiBDb25kaXRpb25zIG9mIGFueSBwcm9tb3Rpb24gYW5kIG1heSBvciBtYXkgbm90IGJlIGNvbWJpbmFibGUuXG5PZmZlcnMgYXJlIGNvbWJpbmFibGUgd2l0aCBTYW5kYWxzIFNlbGVjdCBSZXdhcmRzIFBvaW50IHByb21vdGlvbnMgb3IgV29ybGRQb2ludCByZWRlbXB0aW9ucy5cbk1heGltdW0gU2FuZGFscyBTZWxlY3QgUG9pbnQgcmVkZW1wdGlvbiBwZXIgcmVzZXJ2YXRpb24gaXMgMjAsMDAwIFNhbmRhbHMgU2VsZWN0IHBvaW50cyB2YWx1ZWQgYXQgJDUwMC4wMCBVU0QuXG5VbmlxdWUgVHJhdmVsIENvcnAuLCByZXNlcnZlcyB0aGUgcmlnaHQgdG8gdmVyaWZ5IGFsbCBhY2NvdW50cyBwcmlvciB0byBhZGp1c3RpbmcgcmVzZXJ2YXRpb25zLiBMaW1pdCBvbmUgcmVkZW1wdGlvbiByZXNlcnZhdGlvbiBwZXIgbWVtYmVyLlxuQm9va2luZyBuYW1lcyBtdXN0IG1hdGNoIHRoZSBTYW5kYWxzIFNlbGVjdCBNZW1iZXJzaGlwIGFjY291bnQgb3IgaXQgd2lsbCBiZSBudWxsIGFuZCB2b2lkLlxuQ2FuY2VsbGF0aW9uIG9mIGhvdGVsIGJvb2tpbmcgd2lsbCByZXN1bHQgaW4gY2FuY2VsbGF0aW9uIG9mIGFsbCBhc3NvY2lhdGVkIGFpcmxpbmUgdGlja2V0cy5cbk9mZmVycyBtYXkgbm90IGJlIGFwcGxpY2FibGUgdG8gZ3JvdXAgYm9va2luZ3MuXG5BbGwgZmVhdHVyZWQgcHJpY2VzIGFyZSBpbiBVUyBEb2xsYXJzLlxuT2ZmZXJzIGFyZSBzdWJqZWN0IHRvIGF2YWlsYWJpbGl0eSB0aHJvdWdob3V0IHByb21vdGlvbmFsIHBlcmlvZCBhbmQgbWF5IGJlIGNoYW5nZWQgb3Igd2l0aGRyYXduIGF0IGFueSB0aW1lLiBPdGhlciByZXN0cmljdGlvbnMgYW5kIGxpbWl0YXRpb25zIG1heSBhcHBseS5cbk5vdCByZXNwb25zaWJsZSBmb3IgZXJyb3JzIG9yIG9taXNzaW9ucy5cbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5jbG9zZU1vZGFsID0gdGhpcy5jbG9zZU1vZGFsLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5yZW5kZXJNb2RhbCA9IHRoaXMucmVuZGVyTW9kYWwuYmluZCh0aGlzKTtcblx0XHR0aGlzLnJlbmRlcklucHV0ID0gdGhpcy5yZW5kZXJJbnB1dC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRpc09wZW46IHRydWVcblx0XHR9XG5cdH1cblxuXHRjbG9zZU1vZGFsKGUpIHtcblx0XHQvL3RoaXMuc2V0U3RhdGUoeyBpc09wZW46IGZhbHNlIH0pO1xuXHRcdGNvbnNvbGUubG9nKCd0aGlzLnN0YXRlJyk7XG5cdH1cblxuXHRyZW5kZXJNb2RhbCgpIHtcblx0XHRjb25zdCB7IG1vZGFsU3R5bGVzLCBvdmVybGF5U3R5bGVzfSA9IHRoaXMucHJvcHM7XG5cblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJrZ1wiIHN0eWxlPXsgb3ZlcmxheVN0eWxlcyB9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCIgc3R5bGU9eyBtb2RhbFN0eWxlcy5tb2RhbCB9PlxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibW9kYWxDbG9zZVwiIHN0eWxlPXsgbW9kYWxTdHlsZXMubW9kYWxfY2xvc2UgfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmNsb3NlTW9kYWwoKX0gdmFsdWU9XCLinJZcIiAvPlxuXHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG5cdHJlbmRlcklucHV0KCkge1xuXHRcdHJldHVybiA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRoaXMuY2xvc2VNb2RhbCgpfSB2YWx1ZT1cIkNsaWNrIE1lIVwiIC8+XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuXHRcdHJldHVybihcblx0XHRcdC8vIHRoaXMuc3RhdGU/dGhpcy5yZW5kZXJNb2RhbCgpOm51bGxcblx0XHRcdHRoaXMucmVuZGVyTW9kYWwoKVxuXHRcdFx0KVxuXHR9XG59XG5cbk1vZGFsLnByb3BUeXBlcyA9IHtcblx0bW9kYWxTdHlsZXM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG5cdG92ZXJsYXlTdHlsZXM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG5cdGlzT3BlbjogUmVhY3QuUHJvcFR5cGVzLmJvb2xcbn07XG5cbk1vZGFsLmRlZmF1bHRQcm9wcyA9IHtcblx0bW9kYWxTdHlsZXM6IHt9LFxuXHRvdmVybGF5U3R5bGVzOiB7fSxcblx0aXNPcGVuOiBmYWxzZVxufSIsImV4cG9ydCBjb25zdCBtb2RhbF9zdHlsZSA9IHtcbiAgICBtb2RhbDp7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6ICc1MCUnLFxuICAgICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgICAgekluZGV4OiAnNTInLFxuICAgICAgICB3aWR0aDogJzYwJScsXG4gICAgICAgIGhlaWdodDogJzMzLjMlJyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgbWFyZ2luOiAnMCcsXG4gICAgICAgIHBhZGRpbmc6ICcwJyxcbiAgICAgICAgYmFja2dyb3VuZDogJyNlNWU1ZTUnLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICcyJSAwJ1xuICAgICAgICB9LFxuICAgIHRpdGxlX3N0eWxlczoge1xuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgdG9wOiAnMCcsXG4gICAgICAgIGhlaWdodDogJzE1JScsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCByZ2IoMjEwLCA3NywgODcpJyxcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIHJnYmEoMjEwLCA3NywgODcsIC4yKScsXG4gICAgICAgIHdlYmtpdEJhY2tncm91bmRDbGlwOiAncGFkZGluZy1ib3gnLFxuICAgICAgICBiYWNrZ3JvdW5kQ2xpcDogJ3BhZGRpbmctYm94J1xuICAgIH0sXG4gICAgbW9kYWxfZGF0YToge1xuICAgICAgICBoZWlnaHQ6ICc3MCUnLFxuICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgIH0sXG4gICAgZm9vdGVyX3N0eWxlczoge1xuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgYm90dG9tOiAnMCcsXG4gICAgICAgIGhlaWdodDogJzE1JScsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCByZ2IoMjEwLCA3NywgODcpJyxcbiAgICAgICAgYm9yZGVyVG9wOiAnMXB4IHNvbGlkIHJnYmEoMjEwLCA3NywgODcsIC4yKScsXG4gICAgICAgIFdlYmtpdEJhY2tncm91bmRDbGlwOiAncGFkZGluZy1ib3gnLFxuICAgICAgICBiYWNrZ3JvdW5kQ2xpcDogJ3BhZGRpbmctYm94J1xuICAgIH0sXG4gICAgbW9kYWxfY2xvc2U6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogJzElJyxcbiAgICAgICAgcmlnaHQ6ICcxJScsXG4gICAgICAgIGZvbnQ6ICcxNHB4LzEwMCUgYXJpYWwsIHNhbnMtc2VyaWYnLFxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgICB0ZXh0U2hhZG93OiAnMCAxcHggMCAjZmZmJyxcbiAgICAgICAgY29sb3I6ICcjNzc3JyxcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBvdmVybGF5X3N0eWxlID0ge1xuICAgIHRvcDogJzAnLFxuICAgIGxlZnQ6ICcwJyxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHBhZGRpbmc6ICcwJyxcbiAgICBiYWNrZ3JvdW5kOiAnIzAwMCcsXG4gICAgb3BhY2l0eTogJy44J1xufSJdfQ==
