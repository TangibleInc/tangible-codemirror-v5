"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alignHorizontally = alignHorizontally;
exports.maybeUpdateLineNumberWidth = maybeUpdateLineNumberWidth;

var _utils_line = require("../line/utils_line.js");

var _position_measurement = require("../measurement/position_measurement.js");

var _dom = require("../util/dom.js");

var _update_display = require("./update_display.js");

// Re-align line numbers and gutter marks to compensate for
// horizontal scrolling.
function alignHorizontally(cm) {
  let display = cm.display,
      view = display.view;
  if (!display.alignWidgets && (!display.gutters.firstChild || !cm.options.fixedGutter)) return;
  let comp = (0, _position_measurement.compensateForHScroll)(display) - display.scroller.scrollLeft + cm.doc.scrollLeft;
  let gutterW = display.gutters.offsetWidth,
      left = comp + "px";

  for (let i = 0; i < view.length; i++) if (!view[i].hidden) {
    if (cm.options.fixedGutter) {
      if (view[i].gutter) view[i].gutter.style.left = left;
      if (view[i].gutterBackground) view[i].gutterBackground.style.left = left;
    }

    let align = view[i].alignable;
    if (align) for (let j = 0; j < align.length; j++) align[j].style.left = left;
  }

  if (cm.options.fixedGutter) display.gutters.style.left = comp + gutterW + "px";
} // Used to ensure that the line number gutter is still the right
// size for the current document size. Returns true when an update
// is needed.


function maybeUpdateLineNumberWidth(cm) {
  if (!cm.options.lineNumbers) return false;
  let doc = cm.doc,
      last = (0, _utils_line.lineNumberFor)(cm.options, doc.first + doc.size - 1),
      display = cm.display;

  if (last.length != display.lineNumChars) {
    let test = display.measure.appendChild((0, _dom.elt)("div", [(0, _dom.elt)("div", last)], "CodeMirror-linenumber CodeMirror-gutter-elt"));
    let innerW = test.firstChild.offsetWidth,
        padding = test.offsetWidth - innerW;
    display.lineGutter.style.width = "";
    display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding) + 1;
    display.lineNumWidth = display.lineNumInnerWidth + padding;
    display.lineNumChars = display.lineNumInnerWidth ? last.length : -1;
    display.lineGutter.style.width = display.lineNumWidth + "px";
    (0, _update_display.updateGutterSpace)(cm.display);
    return true;
  }

  return false;
}