'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var showFlashBanner = exports.showFlashBanner = function showFlashBanner() {
  var show = true;
  return {
    type: 'SHOW_FLASH_BANNER',
    show: show
  };
};

var hideFlashBanner = exports.hideFlashBanner = function hideFlashBanner() {
  var show = false;
  return {
    type: 'HIDE_FLASH_BANNER',
    show: show
  };
};