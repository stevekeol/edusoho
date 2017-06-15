webpackJsonp(["app/js/testpaper/do-test/index"],[
/* 0 */
/***/ (function(module, exports) {

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	import DoTestBase from 'app/js/testpaper/widget/do-test-base';
	import { initScrollbar, testpaperCardFixed, testpaperCardLocation, initWatermark, onlyShowError } from 'app/js/testpaper/widget/part';
	
	var DoTestpaper = function (_DoTestBase) {
	  _inherits(DoTestpaper, _DoTestBase);
	
	  function DoTestpaper($container) {
	    _classCallCheck(this, DoTestpaper);
	
	    var _this = _possibleConstructorReturn(this, (DoTestpaper.__proto__ || Object.getPrototypeOf(DoTestpaper)).call(this, $container));
	
	    _this.$timePauseDialog = _this.$container.find('#time-pause-dialog');
	    _this.$timer = $container.find('.js-testpaper-timer');
	    _this._init();
	    return _this;
	  }
	
	  _createClass(DoTestpaper, [{
	    key: '_init',
	    value: function _init() {
	      var _this2 = this;
	
	      initScrollbar();
	      initWatermark();
	      testpaperCardFixed();
	      testpaperCardLocation();
	      onlyShowError();
	      this._initTimer();
	      this.$container.on('click', '.js-btn-pause', function (event) {
	        return _this2._clickBtnPause(event);
	      });
	      this.$container.on('click', '.js-btn-resume', function (event) {
	        return _this2._clickBtnReume(event);
	      });
	    }
	  }, {
	    key: '_initTimer',
	    value: function _initTimer() {
	      var _this3 = this;
	
	      if (this.$timer) {
	        this.$timer.timer({
	          countdown: true,
	          duration: this.$timer.data('time'),
	          format: '%H:%M:%S',
	          callback: function callback() {
	            _this3.$container.find('#time-finish-dialog').modal('show');
	            clearInterval(_this3.$usedTimer);
	            _this3.usedTime = _this3.$timer.data('time') / 60;
	            if ($('input[name="preview"]').length == 0) {
	              _this3._submitTest(_this3.$container.find('[data-role="paper-submit"]').data('url'));
	            }
	          },
	          repeat: true,
	          start: function start() {
	            _this3.usedTime = 0;
	          }
	        });
	      }
	    }
	  }, {
	    key: '_clickBtnPause',
	    value: function _clickBtnPause(event) {
	      var $btn = $(event.currentTarget).toggleClass('active');
	      if ($btn.hasClass('active')) {
	        this.$timer.timer('pause');
	        clearInterval(this.$usedTimer);
	        this.$timePauseDialog.modal('show');
	      } else {
	        this.$timer.timer('resume');
	        this._initUsedTimer();
	        this.$timePauseDialog.modal('hide');
	      }
	    }
	  }, {
	    key: '_clickBtnReume',
	    value: function _clickBtnReume(event) {
	      this.$timer.timer('resume');
	      this._initUsedTimer();
	      this.$container.find('.js-btn-pause').removeClass('active');
	      this.$timePauseDialog.modal('hide');
	    }
	  }]);
	
	  return DoTestpaper;
	}(DoTestBase);
	
	new DoTestpaper($('.js-task-testpaper-body'));

/***/ })
]);