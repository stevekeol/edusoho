webpackJsonp(["app/js/settings/find_pay_password_by_sms/index"],[function(s,e){var n=$("#settings-find-pay-password-form"),i=n.validate({rules:{sms_code:{required:!0,unsigned_integer:!0,smsCode:!0}},messages:{sms_code:{required:Translator.trans("请输入验证码")}}});$("#submit-btn").click(function(){i.form()&&n.submit()})}]);