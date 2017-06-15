webpackJsonp(["app/js/activity-manage/exercise/index"],[
/* 0 */
/***/ (function(module, exports) {

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	import SelectLinkage from 'app/js/question-manage/widget/select-linkage.js';
	
	var Exercise = function () {
	  function Exercise($form) {
	    _classCallCheck(this, Exercise);
	
	    this.$element = $form;
	    this.validator2 = null;
	    this._setValidateRule();
	    this._init();
	    this._initEvent();
	  }
	
	  _createClass(Exercise, [{
	    key: '_init',
	    value: function _init() {
	      this._inItStep2form();
	      this.fix();
	    }
	  }, {
	    key: '_initEvent',
	    value: function _initEvent() {}
	  }, {
	    key: '_inItStep2form',
	    value: function _inItStep2form() {
	      var $step2_form = $("#step2-form");
	
	      this.validator2 = $step2_form.validate({
	        rules: {
	          title: {
	            required: true,
	            maxlength: 50,
	            trim: true,
	            course_title: true
	          },
	          itemCount: {
	            required: true,
	            positiveInteger: true,
	            min: 1,
	            max: 9999
	          },
	          range: {
	            required: true
	          },
	          difficulty: {
	            required: true
	          },
	          'questionTypes[]': {
	            required: true,
	            remote: {
	              url: $('[name="checkQuestion"]').data('checkUrl'),
	              type: "post",
	              dataType: "json",
	              async: false,
	              data: {
	                itemCount: function itemCount() {
	                  return $('[name="itemCount"]').val();
	                },
	                range: function range() {
	                  var range = {};
	                  var courseId = $('[name="range[courseId]"]').val();
	                  range.courseId = courseId;
	                  if ($('[name="range[lessonId]"]').length > 0) {
	                    var lessonId = $('[name="range[lessonId]"]').val();
	                    range.lessonId = lessonId;
	                  }
	
	                  return JSON.stringify(range);
	                },
	                difficulty: function difficulty() {
	                  return $('[name="difficulty"]').val();
	                },
	                types: function types() {
	                  var types = [];
	                  $('[name="questionTypes\[\]"]:checked').each(function () {
	                    types.push($(this).val());
	                  });
	                  return types;
	                }
	              }
	            }
	          }
	        },
	        messages: {
	          required: "请填写标题",
	          range: "题目来源",
	          itemCount: {
	            required: '请填写题目个数',
	            positiveInteger: '请输入正整数',
	            min: '题目个数无效',
	            max: '题目个数过大'
	          },
	          difficulty: "请选择难易程度",
	          'questionTypes[]': {
	            required: "请选择题型",
	            remote: "题目数量不足"
	          }
	        }
	      });
	
	      $step2_form.data('validator', this.validator2);
	    }
	  }, {
	    key: '_inItStep3form',
	    value: function _inItStep3form() {
	      var $step3_form = $("#step3-form");
	      var validator = $step3_form.validate({
	        onkeyup: false,
	        rules: {
	          finishCondition: {
	            required: true
	          }
	        },
	        messages: {
	          finishCondition: "请输完成条件"
	        }
	      });
	      $step3_form.data('validator', validator);
	    }
	  }, {
	    key: '_setValidateRule',
	    value: function _setValidateRule() {
	      $.validator.addMethod("positiveInteger", function (value, element) {
	        return this.optional(element) || /^[1-9]\d*$/.test(value);
	      }, $.validator.format("必须为正整数"));
	    }
	  }, {
	    key: 'fix',
	    value: function fix() {
	      var _this = this;
	
	      $('.js-question-type').click(function () {
	        _this.validator2.form();
	      });
	    }
	  }]);
	
	  return Exercise;
	}();
	
	new Exercise($('#step2-form'));
	new SelectLinkage($('[name="range[courseId]"]'), $('[name="range[lessonId]"]'));
	
	$('[name="range[courseId]"]').change(function () {
	  var url = $(this).data('checkNumUrl');
	  checkQuestionNum(url);
	});
	
	$('[name="range[lessonId]"]').change(function () {
	  var url = $(this).data('checkNumUrl');
	  checkQuestionNum(url);
	});
	
	$('[name="difficulty"]').change(function () {
	  var url = $(this).data('checkNumUrl');
	  checkQuestionNum(url);
	});
	
	function checkQuestionNum(url) {
	  console.log(url);
	  var courseId = $('[name="range[courseId]"]').val();
	  var lessonId = $('[name="range[lessonId]"]').val();
	  var difficulty = $('[name="difficulty"]').val();
	
	  $.post(url, { courseId: courseId, lessonId: lessonId, difficulty: difficulty }, function (data) {
	    $('[role="questionNum"]').text(0);
	
	    $.each(data, function (i, n) {
	      $("[type='" + i + "']").text(n.questionNum);
	    });
	  });
	}

/***/ })
]);