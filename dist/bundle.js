(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _modal = require('./modal/jsx/modal');

var _modal2 = _interopRequireDefault(_modal);

var _data = require('./data');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
		_modal2.default,
		null,
		_react2.default.createElement(
				'li',
				null,
				'Holis'
		)
), document.getElementById('app'));

},{"./data":2,"./modal/jsx/modal":3,"react":"react","react-dom":"react-dom"}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var data = exports.data = "Get up to $605 Instant Air Credit. Booking Window: Now - Dec. 30, 2016.\n\nFor travel now - Dec. 26, 2018.\n\n$605 Air Credit on 7-paid nights or longer\n$505 Air Credit on 6-paid nights\n$405 Air Credit on 5-paid nights\n$305 Air Credit on 4-paid nights\n$225 Air Credit on 3-paid nights\n\nBlackout Dates: Dec. 27 - 31, 2016 | Dec. 27 - 31, 2017 | Dec. 27 - 31, 2018.\nAir Credit offer is valid for new bookings only.\nFor air inclusive bookings, the $605, $505, $405, $305 & $225 Air Credits are in USD, applied to the base fare and excludes government taxes and fees, which must be paid at time of booking and is fully non-refundable.\nOffer is combinable with other Sandals consumer saving promotions.\nCredit vouchers are subject to Terms & Conditions of any promotion and may or may not be combinable.\nOffers are combinable with Sandals Select Rewards Point promotions or WorldPoint redemptions.\nMaximum Sandals Select Point redemption per reservation is 20,000 Sandals Select points valued at $500.00 USD.\nUnique Travel Corp., reserves the right to verify all accounts prior to adjusting reservations. Limit one redemption reservation per member.\nBooking names must match the Sandals Select Membership account or it will be null and void.\nCancellation of hotel booking will result in cancellation of all associated airline tickets.\nOffers may not be applicable to group bookings.\nAll featured prices are in US Dollars.\nOffers are subject to availability throughout promotional period and may be changed or withdrawn at any time. Other restrictions and limitations may apply.\nNot responsible for errors or omissions.";

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

		return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
	}

	_createClass(Modal, [{
		key: "render",
		value: function render() {
			var modalStyles = this.props.modalStyles;


			return _react2.default.createElement(
				"div",
				{ className: "modal-bkg" },
				_react2.default.createElement(
					"div",
					{ className: "modal-data-holder", styles: modalStyles },
					this.props.children
				)
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

},{"react":"react"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjb21wb25lbnRzL2FwcC5qcyIsImNvbXBvbmVudHMvZGF0YS5qcyIsImNvbXBvbmVudHMvbW9kYWwvanN4L21vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLG1CQUFTLE1BQVQsQ0FBaUI7QUFBQTtBQUFBO0FBQ2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURlLENBQWpCLEVBRVcsU0FBUyxjQUFULENBQXdCLEtBQXhCLENBRlg7Ozs7Ozs7O0FDTk8sSUFBTSx3bkRBQU47Ozs7Ozs7Ozs7O0FDQVA7Ozs7Ozs7Ozs7OztJQUVxQixLOzs7Ozs7Ozs7OzsyQkFDWDtBQUFBLE9BQ0EsV0FEQSxHQUNnQixLQUFLLEtBRHJCLENBQ0EsV0FEQTs7O0FBR1IsVUFDQztBQUFBO0FBQUEsTUFBSyxXQUFVLFdBQWY7QUFDQztBQUFBO0FBQUEsT0FBSyxXQUFVLG1CQUFmLEVBQW1DLFFBQVMsV0FBNUM7QUFDRSxVQUFLLEtBQUwsQ0FBVztBQURiO0FBREQsSUFERDtBQU9BOzs7O0VBWGlDLGdCQUFNLFM7O2tCQUFwQixLOzs7QUFjckIsTUFBTSxTQUFOLEdBQWtCO0FBQ2pCLGNBQWEsZ0JBQU0sU0FBTixDQUFnQixNQURaO0FBRWpCLGdCQUFlLGdCQUFNLFNBQU4sQ0FBZ0IsTUFGZDtBQUdqQixTQUFRLGdCQUFNLFNBQU4sQ0FBZ0I7QUFIUCxDQUFsQjs7QUFNQSxNQUFNLFlBQU4sR0FBcUI7QUFDcEIsY0FBYSxFQURPO0FBRXBCLGdCQUFlLEVBRks7QUFHcEIsU0FBUTtBQUhZLENBQXJCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vbW9kYWwvanN4L21vZGFsJztcbmltcG9ydCB7ZGF0YX0gZnJvbSAnLi9kYXRhJztcblxuUmVhY3RET00ucmVuZGVyKCA8TW9kYWw+XG5cdFx0PGxpPkhvbGlzPC9saT5cblx0PC9Nb2RhbD4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSApO1xuIiwiZXhwb3J0IGNvbnN0IGRhdGEgPSBgR2V0IHVwIHRvICQ2MDUgSW5zdGFudCBBaXIgQ3JlZGl0LiBCb29raW5nIFdpbmRvdzogTm93IC0gRGVjLiAzMCwgMjAxNi5cblxuRm9yIHRyYXZlbCBub3cgLSBEZWMuIDI2LCAyMDE4LlxuXG4kNjA1IEFpciBDcmVkaXQgb24gNy1wYWlkIG5pZ2h0cyBvciBsb25nZXJcbiQ1MDUgQWlyIENyZWRpdCBvbiA2LXBhaWQgbmlnaHRzXG4kNDA1IEFpciBDcmVkaXQgb24gNS1wYWlkIG5pZ2h0c1xuJDMwNSBBaXIgQ3JlZGl0IG9uIDQtcGFpZCBuaWdodHNcbiQyMjUgQWlyIENyZWRpdCBvbiAzLXBhaWQgbmlnaHRzXG5cbkJsYWNrb3V0IERhdGVzOiBEZWMuIDI3IC0gMzEsIDIwMTYgfCBEZWMuIDI3IC0gMzEsIDIwMTcgfCBEZWMuIDI3IC0gMzEsIDIwMTguXG5BaXIgQ3JlZGl0IG9mZmVyIGlzIHZhbGlkIGZvciBuZXcgYm9va2luZ3Mgb25seS5cbkZvciBhaXIgaW5jbHVzaXZlIGJvb2tpbmdzLCB0aGUgJDYwNSwgJDUwNSwgJDQwNSwgJDMwNSAmICQyMjUgQWlyIENyZWRpdHMgYXJlIGluIFVTRCwgYXBwbGllZCB0byB0aGUgYmFzZSBmYXJlIGFuZCBleGNsdWRlcyBnb3Zlcm5tZW50IHRheGVzIGFuZCBmZWVzLCB3aGljaCBtdXN0IGJlIHBhaWQgYXQgdGltZSBvZiBib29raW5nIGFuZCBpcyBmdWxseSBub24tcmVmdW5kYWJsZS5cbk9mZmVyIGlzIGNvbWJpbmFibGUgd2l0aCBvdGhlciBTYW5kYWxzIGNvbnN1bWVyIHNhdmluZyBwcm9tb3Rpb25zLlxuQ3JlZGl0IHZvdWNoZXJzIGFyZSBzdWJqZWN0IHRvIFRlcm1zICYgQ29uZGl0aW9ucyBvZiBhbnkgcHJvbW90aW9uIGFuZCBtYXkgb3IgbWF5IG5vdCBiZSBjb21iaW5hYmxlLlxuT2ZmZXJzIGFyZSBjb21iaW5hYmxlIHdpdGggU2FuZGFscyBTZWxlY3QgUmV3YXJkcyBQb2ludCBwcm9tb3Rpb25zIG9yIFdvcmxkUG9pbnQgcmVkZW1wdGlvbnMuXG5NYXhpbXVtIFNhbmRhbHMgU2VsZWN0IFBvaW50IHJlZGVtcHRpb24gcGVyIHJlc2VydmF0aW9uIGlzIDIwLDAwMCBTYW5kYWxzIFNlbGVjdCBwb2ludHMgdmFsdWVkIGF0ICQ1MDAuMDAgVVNELlxuVW5pcXVlIFRyYXZlbCBDb3JwLiwgcmVzZXJ2ZXMgdGhlIHJpZ2h0IHRvIHZlcmlmeSBhbGwgYWNjb3VudHMgcHJpb3IgdG8gYWRqdXN0aW5nIHJlc2VydmF0aW9ucy4gTGltaXQgb25lIHJlZGVtcHRpb24gcmVzZXJ2YXRpb24gcGVyIG1lbWJlci5cbkJvb2tpbmcgbmFtZXMgbXVzdCBtYXRjaCB0aGUgU2FuZGFscyBTZWxlY3QgTWVtYmVyc2hpcCBhY2NvdW50IG9yIGl0IHdpbGwgYmUgbnVsbCBhbmQgdm9pZC5cbkNhbmNlbGxhdGlvbiBvZiBob3RlbCBib29raW5nIHdpbGwgcmVzdWx0IGluIGNhbmNlbGxhdGlvbiBvZiBhbGwgYXNzb2NpYXRlZCBhaXJsaW5lIHRpY2tldHMuXG5PZmZlcnMgbWF5IG5vdCBiZSBhcHBsaWNhYmxlIHRvIGdyb3VwIGJvb2tpbmdzLlxuQWxsIGZlYXR1cmVkIHByaWNlcyBhcmUgaW4gVVMgRG9sbGFycy5cbk9mZmVycyBhcmUgc3ViamVjdCB0byBhdmFpbGFiaWxpdHkgdGhyb3VnaG91dCBwcm9tb3Rpb25hbCBwZXJpb2QgYW5kIG1heSBiZSBjaGFuZ2VkIG9yIHdpdGhkcmF3biBhdCBhbnkgdGltZS4gT3RoZXIgcmVzdHJpY3Rpb25zIGFuZCBsaW1pdGF0aW9ucyBtYXkgYXBwbHkuXG5Ob3QgcmVzcG9uc2libGUgZm9yIGVycm9ycyBvciBvbWlzc2lvbnMuYDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgbW9kYWxTdHlsZXMgfSA9IHRoaXMucHJvcHM7XG5cblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJrZ1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRhdGEtaG9sZGVyXCIgc3R5bGVzPXsgbW9kYWxTdHlsZXMgfT5cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbk1vZGFsLnByb3BUeXBlcyA9IHtcblx0bW9kYWxTdHlsZXM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG5cdG92ZXJsYXlTdHlsZXM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG5cdGlzT3BlbjogUmVhY3QuUHJvcFR5cGVzLmJvb2xcbn07XG5cbk1vZGFsLmRlZmF1bHRQcm9wcyA9IHtcblx0bW9kYWxTdHlsZXM6IHt9LFxuXHRvdmVybGF5U3R5bGVzOiB7fSxcblx0aXNPcGVuOiBmYWxzZVxufSJdfQ==
