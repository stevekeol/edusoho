webpackJsonp(["app/js/auth/password-reset/index"],[function(e,s){function i(e){"email"==e&&(l=$("#password-reset-form"),a=l.validate({rules:{'[name="form[email]"]':{required:!0,email:!0}}})),"mobile"==e&&(l=$("#password-reset-by-mobile-form"),a=l.validate({rules:{mobile:{required:!0,phone:!0,es_remote:{type:"get",callback:function(e){e?$(".js-sms-send").removeClass("disabled"):$(".js-sms-send").addClass("disabled")}}},sms_code:{required:!0,unsigned_integer:!0,rangelength:[6,6],es_remote:{type:"get"}}},messages:{sms_code:{rangelength:Translator.trans("的长度必须等于6")}}}))}var a=null,l=null;$(".js-find-password li").length>1&&($(".js-find-by-email").click(function(){$(".js-find-by-email").hasClass("active")||$("#alertxx").hide()}),$(".js-find-by-mobile").click(function(){$(".js-find-by-mobile").hasClass("active")||$("#alertxx").hide()})),i("email"),$(".js-find-by-email").click(function(){a=null,$(".js-find-by-email").addClass("active"),$(".js-find-by-mobile").removeClass("active"),i("email"),$("#password-reset-by-mobile-form").hide(),$("#password-reset-form").show()}),$(".js-find-by-mobile").click(function(){a=null,$(".js-find-by-email").removeClass("active"),$(".js-find-by-mobile").addClass("active"),i("mobile"),$("#password-reset-form").hide(),$("#password-reset-by-mobile-form").show()})}]);