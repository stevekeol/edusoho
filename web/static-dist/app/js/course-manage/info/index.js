webpackJsonp(["app/js/course-manage/info/index"],[
/* 0 */
/***/ (function(module, exports) {

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	import ReactDOM from 'react-dom';
	import React from 'react';
	import MultiInput from 'app/common/component/multi-input';
	import postal from 'postal';
	
	var courseInfo = function () {
	  function courseInfo() {
	    _classCallCheck(this, courseInfo);
	
	    this.init();
	  }
	
	  _createClass(courseInfo, [{
	    key: 'init',
	    value: function init() {
	      if ($('#maxStudentNum-field').length > 0) {
	        $.get($('#maxStudentNum-field').data('liveCapacityUrl')).done(function (liveCapacity) {
	          $('#maxStudentNum-field').data('liveCapacity', liveCapacity.capacity);
	        });
	      }
	      this.initCkeidtor();
	      this.initValidator();
	      this.checkBoxChange();
	      this.initDatePicker('#expiryStartDate');
	      this.initDatePicker('#expiryEndDate');
	      this.renderMultiGroupComponent('course-goals', 'goals');
	      this.renderMultiGroupComponent('intended-students', 'audiences');
	    }
	  }, {
	    key: 'initCkeidtor',
	    value: function initCkeidtor() {
	      CKEDITOR.replace('summary', {
	        allowedContent: true,
	        toolbar: 'Detail',
	        filebrowserImageUploadUrl: $('#summary').data('imageUploadUrl')
	      });
	    }
	  }, {
	    key: 'renderMultiGroupComponent',
	    value: function renderMultiGroupComponent(elementId, name) {
	      var datas = $('#' + elementId).data('init-value');
	      ReactDOM.render(React.createElement(MultiInput, {
	        dataSource: datas,
	        outputDataElement: name }), document.getElementById(elementId));
	    }
	  }, {
	    key: 'initValidator',
	    value: function initValidator() {
	      var _this = this;
	
	      var $form = $('#course-info-form');
	      var validator = $form.validate({
	        currentDom: '#course-submit',
	        groups: {
	          date: 'expiryStartDate expiryEndDate'
	        },
	        rules: {
	          title: {
	            maxlength: 100,
	            required: {
	              depends: function depends() {
	                $(this).val($.trim($(this).val()));
	                return true;
	              }
	            }
	          },
	          maxStudentNum: {
	            required: true,
	            live_capacity: true,
	            positive_integer: true
	          },
	          expiryDays: {
	            required: function required() {
	              return $('input[name="expiryMode"]:checked').val() != 'date';
	            },
	            digits: true,
	            max_year: true
	          },
	          expiryStartDate: {
	            required: function required() {
	              return $('input[name="expiryMode"]:checked').val() == 'date';
	            },
	            date: true,
	            before_date: '#expiryEndDate'
	          },
	          expiryEndDate: {
	            required: function required() {
	              return $('input[name="expiryMode"]:checked').val() == 'date';
	            },
	            date: true,
	            after_date: '#expiryStartDate'
	          }
	        },
	        messages: {
	          title: {
	            require: Translator.trans('请输入教学计划课程标题')
	          },
	          maxStudentNum: {
	            required: Translator.trans('请输入课程人数')
	          },
	          expiryDays: {
	            required: Translator.trans('请输入学习有效期')
	          },
	          expiryStartDate: {
	            required: Translator.trans('请输入开始日期'),
	            before: Translator.trans('开始日期应早于结束日期')
	          },
	          expiryEndDate: {
	            required: Translator.trans('请输入结束日期'),
	            after: Translator.trans('结束日期应晚于开始日期')
	          }
	        }
	      });
	
	      $.validator.addMethod("before", function (value, element, params) {
	        if ($('input[name="expiryMode"]:checked').val() !== 'date') {
	          return true;
	        }
	        return !value || $(params).val() > value;
	      }, Translator.trans('开始日期应早于结束日期'));
	
	      $.validator.addMethod("after", function (value, element, params) {
	        if ($('input[name="expiryMode"]:checked').val() !== 'date') {
	          return true;
	        }
	        return !value || $(params).val() < value;
	      }, Translator.trans('结束日期应晚于开始日期'));
	
	      $('#course-submit').click(function () {
	        if (validator.form()) {
	          _this.publishAddMessage();
	          $form.submit();
	        }
	      });
	    }
	  }, {
	    key: 'publishAddMessage',
	    value: function publishAddMessage() {
	      postal.publish({
	        channel: "courseInfoMultiInput",
	        topic: "addMultiInput"
	      });
	    }
	  }, {
	    key: 'initDatePicker',
	    value: function initDatePicker($id) {
	      var $picker = $($id);
	      $picker.datetimepicker({
	        format: 'yyyy-mm-dd',
	        language: "zh",
	        minView: 2, //month
	        autoclose: true,
	        endDate: new Date(Date.now() + 86400 * 365 * 10 * 1000)
	      });
	      $picker.datetimepicker('setStartDate', new Date());
	    }
	  }, {
	    key: 'checkBoxChange',
	    value: function checkBoxChange() {
	      $('input[name="expiryMode"]').on('change', function (event) {
	        if ($('input[name="expiryMode"]:checked').val() == 'date') {
	          $('#expiry-days').removeClass('hidden').addClass('hidden');
	          $('#expiry-date').removeClass('hidden');
	        } else {
	          $('#expiry-date').removeClass('hidden').addClass('hidden');
	          $('#expiry-days').removeClass('hidden');
	        }
	      });
	    }
	  }]);
	
	  return courseInfo;
	}();
	
	new courseInfo();
	
	jQuery.validator.addMethod("max_year", function (value, element) {
	  return this.optional(element) || value < 100000;
	}, "有效期最大值不能超过99,999天");
	
	jQuery.validator.addMethod("live_capacity", function (value, element) {
	  var maxCapacity = parseInt($(element).data('liveCapacity'));
	  if (value > maxCapacity) {
	    var message = Translator.trans('网校可支持最多%capacity%人同时参加直播，您可以设置一个更大的数值，但届时有可能会导致满额后其他学员无法进入直播。', { capacity: maxCapacity });
	    $(element).parent().siblings('.js-course-rule').find('p').html(message);
	  } else {
	    $(element).parent().siblings('.js-course-rule').find('p').html('');
	  }
	
	  return true;
	});

/***/ })
]);