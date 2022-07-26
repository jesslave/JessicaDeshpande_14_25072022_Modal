"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./Modal.css");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Modal = _ref => {
  let {
    show,
    close,
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modalContainer ".concat(show ? "show" : "", " "),
    onClick: () => close()
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/_react.default.createElement("header", {
    className: "modal_header"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "close",
    onClick: () => close()
  }, "x")), /*#__PURE__*/_react.default.createElement("main", {
    className: "modal_content"
  }, children)));
};

var _default = Modal;
exports.default = _default;