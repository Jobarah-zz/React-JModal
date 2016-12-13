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
      _react2.default.createElement(
            'li',
            null,
            'this is a child element'
      ),
      _react2.default.createElement(
            'li',
            null,
            'child 2 '
      ),
      _react2.default.createElement(
            'li',
            null,
            'child 3 '
      )
), document.getElementById('app'));

},{"./data":2,"./modal/jsx/modal":3,"./modal/styles/modal_styles":4,"react":"react","react-dom":"react-dom"}],2:[function(require,module,exports){
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
			var _props = this.props,
			    modalStyles = _props.modalStyles,
			    overlayStyles = _props.overlayStyles;


			return _react2.default.createElement(
				"div",
				{ className: "modal-bkg", style: overlayStyles },
				_react2.default.createElement(
					"div",
					{ className: "modal", style: modalStyles },
					_react2.default.createElement("div", { className: "title" }),
					_react2.default.createElement(
						"div",
						{ className: "modal-data-holder" },
						this.props.children
					),
					_react2.default.createElement("div", { className: "footer" })
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

},{"react":"react"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var modal_style = exports.modal_style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    zindex: '52',
    width: '60%',
    height: '33.3%',
    display: 'block',
    margin: '0',
    padding: '0',
    background: '#e5e5e5',
    overflow: 'auto',
    transform: 'translate(-50%, -50%)'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjb21wb25lbnRzL2FwcC5qcyIsImNvbXBvbmVudHMvZGF0YS5qcyIsImNvbXBvbmVudHMvbW9kYWwvanN4L21vZGFsLmpzIiwiY29tcG9uZW50cy9tb2RhbC9zdHlsZXMvbW9kYWxfc3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUVBLG1CQUFTLE1BQVQsQ0FBaUI7QUFBQTtBQUFBLFFBQU8sc0NBQVAsRUFBbUMsMENBQW5DO0FBQ2Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURlO0FBRVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUZTO0FBR1Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhTLENBQWpCLEVBSVcsU0FBUyxjQUFULENBQXdCLEtBQXhCLENBSlg7Ozs7Ozs7O0FDUE8sSUFBTSx3bkRBQU47Ozs7Ozs7Ozs7O0FDQVA7Ozs7Ozs7Ozs7OztJQUVxQixLOzs7Ozs7Ozs7OzsyQkFDWDtBQUFBLGdCQUMrQixLQUFLLEtBRHBDO0FBQUEsT0FDQSxXQURBLFVBQ0EsV0FEQTtBQUFBLE9BQ2EsYUFEYixVQUNhLGFBRGI7OztBQUdSLFVBQ0M7QUFBQTtBQUFBLE1BQUssV0FBVSxXQUFmLEVBQTJCLE9BQVEsYUFBbkM7QUFDQztBQUFBO0FBQUEsT0FBSyxXQUFVLE9BQWYsRUFBdUIsT0FBUSxXQUEvQjtBQUNDLDRDQUFLLFdBQVUsT0FBZixHQUREO0FBRUM7QUFBQTtBQUFBLFFBQUssV0FBVSxtQkFBZjtBQUNFLFdBQUssS0FBTCxDQUFXO0FBRGIsTUFGRDtBQUtDLDRDQUFLLFdBQVUsUUFBZjtBQUxEO0FBREQsSUFERDtBQVdBOzs7O0VBZmlDLGdCQUFNLFM7O2tCQUFwQixLOzs7QUFrQnJCLE1BQU0sU0FBTixHQUFrQjtBQUNqQixjQUFhLGdCQUFNLFNBQU4sQ0FBZ0IsTUFEWjtBQUVqQixnQkFBZSxnQkFBTSxTQUFOLENBQWdCLE1BRmQ7QUFHakIsU0FBUSxnQkFBTSxTQUFOLENBQWdCO0FBSFAsQ0FBbEI7O0FBTUEsTUFBTSxZQUFOLEdBQXFCO0FBQ3BCLGNBQWEsRUFETztBQUVwQixnQkFBZSxFQUZLO0FBR3BCLFNBQVE7QUFIWSxDQUFyQjs7Ozs7Ozs7QUMxQk8sSUFBTSxvQ0FBYztBQUN2QixjQUFVLFVBRGE7QUFFdkIsU0FBSyxLQUZrQjtBQUd2QixVQUFNLEtBSGlCO0FBSXZCLFlBQVEsSUFKZTtBQUt2QixXQUFPLEtBTGdCO0FBTXZCLFlBQVEsT0FOZTtBQU92QixhQUFTLE9BUGM7QUFRdkIsWUFBUSxHQVJlO0FBU3ZCLGFBQVMsR0FUYztBQVV2QixnQkFBWSxTQVZXO0FBV3ZCLGNBQVUsTUFYYTtBQVl2QixlQUFXO0FBWlksQ0FBcEI7O0FBZUEsSUFBTSx3Q0FBZ0I7QUFDekIsU0FBSyxHQURvQjtBQUV6QixVQUFNLEdBRm1CO0FBR3pCLGNBQVUsT0FIZTtBQUl6QixXQUFPLE1BSmtCO0FBS3pCLFlBQVEsTUFMaUI7QUFNekIsYUFBUyxHQU5nQjtBQU96QixnQkFBWSxNQVBhO0FBUXpCLGFBQVM7QUFSZ0IsQ0FBdEIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9tb2RhbC9qc3gvbW9kYWwnO1xuaW1wb3J0IHtkYXRhfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IHttb2RhbF9zdHlsZSwgb3ZlcmxheV9zdHlsZX0gZnJvbSAnLi9tb2RhbC9zdHlsZXMvbW9kYWxfc3R5bGVzJztcblxuUmVhY3RET00ucmVuZGVyKCA8TW9kYWwgbW9kYWxTdHlsZXMgPSB7bW9kYWxfc3R5bGV9IG92ZXJsYXlTdHlsZXMgPSB7b3ZlcmxheV9zdHlsZX0+XG5cdFx0PGxpPnRoaXMgaXMgYSBjaGlsZCBlbGVtZW50PC9saT5cbiAgICAgICAgPGxpPmNoaWxkIDIgPC9saT5cbiAgICAgICAgPGxpPmNoaWxkIDMgPC9saT5cblx0PC9Nb2RhbD4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSApO1xuIiwiZXhwb3J0IGNvbnN0IGRhdGEgPSBgR2V0IHVwIHRvICQ2MDUgSW5zdGFudCBBaXIgQ3JlZGl0LiBCb29raW5nIFdpbmRvdzogTm93IC0gRGVjLiAzMCwgMjAxNi5cblxuRm9yIHRyYXZlbCBub3cgLSBEZWMuIDI2LCAyMDE4LlxuXG4kNjA1IEFpciBDcmVkaXQgb24gNy1wYWlkIG5pZ2h0cyBvciBsb25nZXJcbiQ1MDUgQWlyIENyZWRpdCBvbiA2LXBhaWQgbmlnaHRzXG4kNDA1IEFpciBDcmVkaXQgb24gNS1wYWlkIG5pZ2h0c1xuJDMwNSBBaXIgQ3JlZGl0IG9uIDQtcGFpZCBuaWdodHNcbiQyMjUgQWlyIENyZWRpdCBvbiAzLXBhaWQgbmlnaHRzXG5cbkJsYWNrb3V0IERhdGVzOiBEZWMuIDI3IC0gMzEsIDIwMTYgfCBEZWMuIDI3IC0gMzEsIDIwMTcgfCBEZWMuIDI3IC0gMzEsIDIwMTguXG5BaXIgQ3JlZGl0IG9mZmVyIGlzIHZhbGlkIGZvciBuZXcgYm9va2luZ3Mgb25seS5cbkZvciBhaXIgaW5jbHVzaXZlIGJvb2tpbmdzLCB0aGUgJDYwNSwgJDUwNSwgJDQwNSwgJDMwNSAmICQyMjUgQWlyIENyZWRpdHMgYXJlIGluIFVTRCwgYXBwbGllZCB0byB0aGUgYmFzZSBmYXJlIGFuZCBleGNsdWRlcyBnb3Zlcm5tZW50IHRheGVzIGFuZCBmZWVzLCB3aGljaCBtdXN0IGJlIHBhaWQgYXQgdGltZSBvZiBib29raW5nIGFuZCBpcyBmdWxseSBub24tcmVmdW5kYWJsZS5cbk9mZmVyIGlzIGNvbWJpbmFibGUgd2l0aCBvdGhlciBTYW5kYWxzIGNvbnN1bWVyIHNhdmluZyBwcm9tb3Rpb25zLlxuQ3JlZGl0IHZvdWNoZXJzIGFyZSBzdWJqZWN0IHRvIFRlcm1zICYgQ29uZGl0aW9ucyBvZiBhbnkgcHJvbW90aW9uIGFuZCBtYXkgb3IgbWF5IG5vdCBiZSBjb21iaW5hYmxlLlxuT2ZmZXJzIGFyZSBjb21iaW5hYmxlIHdpdGggU2FuZGFscyBTZWxlY3QgUmV3YXJkcyBQb2ludCBwcm9tb3Rpb25zIG9yIFdvcmxkUG9pbnQgcmVkZW1wdGlvbnMuXG5NYXhpbXVtIFNhbmRhbHMgU2VsZWN0IFBvaW50IHJlZGVtcHRpb24gcGVyIHJlc2VydmF0aW9uIGlzIDIwLDAwMCBTYW5kYWxzIFNlbGVjdCBwb2ludHMgdmFsdWVkIGF0ICQ1MDAuMDAgVVNELlxuVW5pcXVlIFRyYXZlbCBDb3JwLiwgcmVzZXJ2ZXMgdGhlIHJpZ2h0IHRvIHZlcmlmeSBhbGwgYWNjb3VudHMgcHJpb3IgdG8gYWRqdXN0aW5nIHJlc2VydmF0aW9ucy4gTGltaXQgb25lIHJlZGVtcHRpb24gcmVzZXJ2YXRpb24gcGVyIG1lbWJlci5cbkJvb2tpbmcgbmFtZXMgbXVzdCBtYXRjaCB0aGUgU2FuZGFscyBTZWxlY3QgTWVtYmVyc2hpcCBhY2NvdW50IG9yIGl0IHdpbGwgYmUgbnVsbCBhbmQgdm9pZC5cbkNhbmNlbGxhdGlvbiBvZiBob3RlbCBib29raW5nIHdpbGwgcmVzdWx0IGluIGNhbmNlbGxhdGlvbiBvZiBhbGwgYXNzb2NpYXRlZCBhaXJsaW5lIHRpY2tldHMuXG5PZmZlcnMgbWF5IG5vdCBiZSBhcHBsaWNhYmxlIHRvIGdyb3VwIGJvb2tpbmdzLlxuQWxsIGZlYXR1cmVkIHByaWNlcyBhcmUgaW4gVVMgRG9sbGFycy5cbk9mZmVycyBhcmUgc3ViamVjdCB0byBhdmFpbGFiaWxpdHkgdGhyb3VnaG91dCBwcm9tb3Rpb25hbCBwZXJpb2QgYW5kIG1heSBiZSBjaGFuZ2VkIG9yIHdpdGhkcmF3biBhdCBhbnkgdGltZS4gT3RoZXIgcmVzdHJpY3Rpb25zIGFuZCBsaW1pdGF0aW9ucyBtYXkgYXBwbHkuXG5Ob3QgcmVzcG9uc2libGUgZm9yIGVycm9ycyBvciBvbWlzc2lvbnMuYDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgbW9kYWxTdHlsZXMsIG92ZXJsYXlTdHlsZXMgfSA9IHRoaXMucHJvcHM7XG5cblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJrZ1wiIHN0eWxlPXsgb3ZlcmxheVN0eWxlcyB9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCIgc3R5bGU9eyBtb2RhbFN0eWxlcyB9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj48L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRhdGEtaG9sZGVyXCI+XG5cdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPjwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuTW9kYWwucHJvcFR5cGVzID0ge1xuXHRtb2RhbFN0eWxlczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcblx0b3ZlcmxheVN0eWxlczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcblx0aXNPcGVuOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbFxufTtcblxuTW9kYWwuZGVmYXVsdFByb3BzID0ge1xuXHRtb2RhbFN0eWxlczoge30sXG5cdG92ZXJsYXlTdHlsZXM6IHt9LFxuXHRpc09wZW46IGZhbHNlXG59IiwiZXhwb3J0IGNvbnN0IG1vZGFsX3N0eWxlID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzUwJScsXG4gICAgbGVmdDogJzUwJScsXG4gICAgemluZGV4OiAnNTInLFxuICAgIHdpZHRoOiAnNjAlJyxcbiAgICBoZWlnaHQ6ICczMy4zJScsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBtYXJnaW46ICcwJyxcbiAgICBwYWRkaW5nOiAnMCcsXG4gICAgYmFja2dyb3VuZDogJyNlNWU1ZTUnLFxuICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJ1xufVxuXG5leHBvcnQgY29uc3Qgb3ZlcmxheV9zdHlsZSA9IHtcbiAgICB0b3A6ICcwJyxcbiAgICBsZWZ0OiAnMCcsXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBwYWRkaW5nOiAnMCcsXG4gICAgYmFja2dyb3VuZDogJyMwMDAnLFxuICAgIG9wYWNpdHk6ICcuOCdcbn0iXX0=
