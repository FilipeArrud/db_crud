"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
var formatDate = function (d) {
    return "".concat(d.getDate(), "/").concat(String(d.getMonth() + 1).padStart(2, "0"), "/").concat(d.getFullYear());
};
exports.formatDate = formatDate;
