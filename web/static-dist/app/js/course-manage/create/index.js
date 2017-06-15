webpackJsonp(["app/js/course-manage/create/index"],[
/* 0 */
/***/ (function(module, exports) {

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	import Intro from 'app/js/courseset-manage/intro';
	
	var Creator = function () {
	  function Creator() {
	    _classCallCheck(this, Creator);
	
	    this.validator = null;
	    this.init();
	    // this.isInitIntro();
	  }
	
	  _createClass(Creator, [{
	    key: 'init',
	    value: function init() {
	      $('[data-toggle="popover"]').popover({
	        html: true
	      });
	      this.initValidator();
	      this.initExpiryMode();
	      this.checkBoxChange();
	    }
	  }, {
	    key: 'initValidator',
	    value: function initValidator() {
	      var _this = this;
	
	      var $form = $("#course-create-form");
	      this.validator = $form.validate({
	        groups: {
	          date: 'expiryStartDate expiryEndDate'
	        },
	        rules: {
	          title: {
	            required: true,
	            trim: true
	          }
	        },
	        messages: {
	          title: Translator.trans('请输入教学计划课程标题')
	        }
	      });
	
	      $('#course-submit').click(function (evt) {
	        if (_this.validator.form()) {
	          _this.isInitIntro();
	          $(evt.currentTarget).button('loading');
	          $form.submit();
	        }
	      });
	      this.initDatePicker('#expiryStartDate');
	      this.initDatePicker('#expiryEndDate');
	      this.initDatePicker('#deadline');
	    }
	  }, {
	    key: 'isInitIntro',
	    value: function isInitIntro() {
	      var listLength = $('#courses-list-table').find('tbody tr').length;
	      if (listLength == 1) {
	        var intro = new Intro();
	        intro.isSetCourseListCookies();
	      }
	    }
	  }, {
	    key: 'checkBoxChange',
	    value: function checkBoxChange() {
	      var _this2 = this;
	
	      $('input[name="deadlineType"]').on('change', function (event) {
	        if ($('input[name="deadlineType"]:checked').val() == 'end_date') {
	          $('#deadlineType-date').removeClass('hidden');
	          $('#deadlineType-days').addClass('hidden');
	        } else {
	          $('#deadlineType-date').addClass('hidden');
	          $('#deadlineType-days').removeClass('hidden');
	        }
	        _this2.initExpiryMode();
	      });
	
	      $('input[name="expiryMode"]').on('change', function (event) {
	        if ($('input[name="expiryMode"]:checked').val() == 'date') {
	          $('#expiry-days').removeClass('hidden').addClass('hidden');
	          $('#expiry-date').removeClass('hidden');
	        } else if ($('input[name="expiryMode"]:checked').val() == 'days') {
	          $('#expiry-date').removeClass('hidden').addClass('hidden');
	          $('#expiry-days').removeClass('hidden');
	          $('input[name="deadlineType"][value="days"]').prop('checked', true);
	        } else {
	          $('#expiry-date').removeClass('hidden').addClass('hidden');
	          $('#expiry-days').removeClass('hidden').addClass('hidden');
	        }
	        _this2.initExpiryMode();
	      });
	
	      $('input[name="learnMode"]').on('change', function (event) {
	        if ($('input[name="learnMode"]:checked').val() == 'freeMode') {
	          $('#learnLockModeHelp').removeClass('hidden').addClass('hidden');
	          $('#learnFreeModeHelp').removeClass('hidden');
	        } else {
	          $('#learnFreeModeHelp').removeClass('hidden').addClass('hidden');
	          $('#learnLockModeHelp').removeClass('hidden');
	        }
	      });
	    }
	  }, {
	    key: 'initDatePicker',
	    value: function initDatePicker($id) {
	      var _this3 = this;
	
	      var $picker = $($id);
	      $picker.datetimepicker({
	        format: 'yyyy-mm-dd',
	        language: "zh",
	        minView: 2, //month
	        autoclose: true,
	        endDate: new Date(Date.now() + 86400 * 365 * 10 * 1000)
	      }).on('hide', function () {
	        _this3.validator.form();
	      });
	      $picker.datetimepicker('setStartDate', new Date());
	    }
	  }, {
	    key: 'initExpiryMode',
	    value: function initExpiryMode() {
	      var $deadline = $('[name="deadline"]');
	      var $expiryDays = $('[name="expiryDays"]');
	      var $expiryStartDate = $('[name="expiryStartDate"]');
	      var $expiryEndDate = $('[name="expiryEndDate"]');
	      var expiryMode = $('[name="expiryMode"]:checked').val();
	
	      this.elementRemoveRules($deadline);
	      this.elementRemoveRules($expiryDays);
	      this.elementRemoveRules($expiryStartDate);
	      this.elementRemoveRules($expiryEndDate);
	
	      switch (expiryMode) {
	        case 'days':
	          var $deadlineType = $('[name="deadlineType"]:checked');
	          if ($deadlineType.val() === 'end_date') {
	            this.elementAddRules($deadline, this.getDeadlineEndDateRules());
	            this.validator.form();
	            return;
	          }
	          this.elementAddRules($expiryDays, this.getExpiryDaysRules());
	          this.validator.form();
	          break;
	        case 'date':
	          this.elementAddRules($expiryStartDate, this.getExpiryStartDateRules());
	          this.elementAddRules($expiryEndDate, this.getExpiryEndDateRules());
	          this.validator.form();
	          break;
	        default:
	          break;
	      }
	    }
	  }, {
	    key: 'getExpiryEndDateRules',
	    value: function getExpiryEndDateRules() {
	      return {
	        required: true,
	        date: true,
	        after_date: '#expiryStartDate',
	        messages: {
	          required: Translator.trans('请输入结束日期')
	        }
	      };
	    }
	  }, {
	    key: 'getExpiryStartDateRules',
	    value: function getExpiryStartDateRules() {
	      return {
	        required: true,
	        date: true,
	        after_now_date: true,
	        before_date: '#expiryEndDate',
	        messages: {
	          required: Translator.trans('请输入开始日期')
	        }
	      };
	    }
	  }, {
	    key: 'getExpiryDaysRules',
	    value: function getExpiryDaysRules() {
	      return {
	        required: true,
	        positive_integer: true,
	        max_year: true,
	        messages: {
	          required: Translator.trans('请输入有效期天数')
	        }
	      };
	    }
	  }, {
	    key: 'getDeadlineEndDateRules',
	    value: function getDeadlineEndDateRules() {
	      return {
	        required: true,
	        date: true,
	        after_now_date: true,
	        messages: {
	          required: Translator.trans('请输入截至日期')
	        }
	      };
	    }
	  }, {
	    key: 'elementAddRules',
	    value: function elementAddRules($element, options) {
	      $element.rules("add", options);
	    }
	  }, {
	    key: 'elementRemoveRules',
	    value: function elementRemoveRules($element) {
	      $element.rules('remove');
	    }
	  }]);
	
	  return Creator;
	}();
	
	new Creator();

/***/ })
]);