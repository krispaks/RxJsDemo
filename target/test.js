'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Testing = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Rx = require('../lib/rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Testing = exports.Testing = function () {
    function Testing() {
        _classCallCheck(this, Testing);

        this.testProperty = 'dodo';
        this.testRx();
    }

    _createClass(Testing, [{
        key: 'testRx',
        value: function testRx() {
            _Rx2.default.Observable.of(1, 2, 3).subscribe(function (x) {
                console.log(x);
            });
        }
    }]);

    return Testing;
}();

var t = new Testing();