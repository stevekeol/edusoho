webpackJsonp(["app/js/task/index"],{d14d05cad9e7abf02a5d:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=e.toggleIcon=function(t,e,n){var i=t.find(".js-remove-icon"),o=t.find(".js-remove-text");i.hasClass(e)?(i.removeClass(e).addClass(n),o?o.text(Translator.trans("收起")):""):(i.removeClass(n).addClass(e),o?o.text(Translator.trans("展开")):"")};e.chapterAnimate=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"body",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".js-task-chapter",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"es-icon-remove",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"es-icon-anonymous-iconfont";$(t).on("click",e,function(t){var r=$(t.currentTarget);r.nextUntil(e).animate({height:"toggle",opacity:"toggle"},"normal"),n(r,i,o)})}},0:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var o=n("2cb4f005d1a3626b7504"),r=i(o);new r.default({element:$("body"),mode:$("body").find('#js-hidden-data [name="mode"]').val()})},"2cb4f005d1a3626b7504":function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),l=n("5f0af4efa4df981e1cb2"),u=i(l),d=n("8564292a81bb30f6618a"),c=i(d),f=n("d1f69fe143d8968fb6c3"),h=i(f),p=n("63fff8fb24f3bd1f61cd"),v=i(p),m=n("e66ca5da7109f35e9051"),y=i(m),w=function(t){function e(t){var n=t.element,i=t.mode;o(this,e);var a=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return a.element=$(n),a.mode=i,a.ui=new c.default({element:".js-task-dashboard-page"}),a.init(),a}return a(e,t),s(e,[{key:"init",value:function(){this.initPlugin(),this.initSidebar(),"preview"!=this.mode&&(this.initTaskPipe(),this.initLearnBtn())}},{key:"initPlugin",value:function(){$('[data-toggle="tooltip"]').tooltip(),$('[data-toggle="popover"]').popover({html:!0,trigger:"hover"})}},{key:"initLearnBtn",value:function(){var t=this;this.element.on("click","#learn-btn",function(e){$.post($("#learn-btn").data("url"),function(e){$("#modal").modal("show"),$("#modal").html(e),$('input[name="task-result-status"]',$("#js-hidden-data")).val("finish");var n=$(".js-next-mobile-btn");n.data("url")&&n.removeClass("disabled").attr("href",n.data("url")),t.ui.learned()})})}},{key:"initTaskPipe",value:function(){var t=this;this.eventEmitter=new h.default(this.element.find("#task-content-iframe")),this.eventEmitter.addListener("finish",function(e){t._receiveFinish(e)})}},{key:"_receiveFinish",value:function(t){var e=this;"finish"!=$('input[name="task-result-status"]',$("#js-hidden-data")).val()&&$.get($(".js-learned-prompt").data("url"),function(t){$(".js-learned-prompt").attr("data-content",t),e.ui.learnedWeakPrompt(),e.ui.learned(),e.sidebar.reload();var n=$(".js-next-mobile-btn");n.data("url")&&n.removeClass("disabled").attr("href",n.data("url")),$('input[name="task-result-status"]',$("#js-hidden-data")).val("finish")})}},{key:"initSidebar",value:function(){var t=this;this.sidebar=new u.default({element:this.element.find("#dashboard-sidebar"),url:this.element.find('#js-hidden-data [name="plugins_url"]').val()}),this.sidebar.on("popup",function(e,n){t.element.find("#dashboard-content").animate({right:e},n)}).on("fold",function(e,n){t.element.find("#dashboard-content").animate({right:e},n)}).on("task-list-loaded",function(t){var e=t.parent(),n=e.height(),i=t.height(),o=t.find(".task-item.active"),r=o.position().top,a=(n-o.height())/2;if(i-r<a)return void e.scrollTop(i-n);r>a&&e.scrollTop(r-a);var s=new y.default({context:document.getElementsByClassName("js-sidebar-pane ps-container")});s.on("up-infinite.loaded",function(){e.scrollTop(20),e.perfectScrollbar("update")})})}}]),e}(v.default);e.default=w},"5f0af4efa4df981e1cb2":function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),l=n("17c25dd7d9d2615bc1d9"),u=i(l),d=n("d14d05cad9e7abf02a5d"),c=function(t){function e(t){var n=t.element,i=t.url;o(this,e);var a=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return a.url=i,a.isManualOperation=!0,a.element=$(n),a.init(),a}return a(e,t),s(e,[{key:"init",value:function(){var t=this;this.fixIconInChrome(),this.fetchPlugins().then(function(e){t.plugins=e,t.renderToolbar(),t.renderPane(),t.element.hide().show(),t.bindEvent()}).fail(function(t){})}},{key:"fetchPlugins",value:function(){return $.post(this.url)}},{key:"fixIconInChrome",value:function(){var t='<i class="es-icon es-icon-chevronleft"></i>';this.element.html(t)}},{key:"renderToolbar",value:function(){var t='\n    <div class="dashboard-toolbar">\n      <ul class="dashboard-toolbar-nav" id="dashboard-toolbar-nav">\n        '+this.plugins.reduce(function(t,e){return t+='<li data-plugin="'+e.code+'" data-url="'+e.url+'"><a href="#"><div class="mbs es-icon '+e.icon+'"></div>'+e.name+"</a></li>"},"")+"\n      </ul>\n    </div>";this.element.html(t)}},{key:"renderPane",value:function(){var t=this.plugins.reduce(function(t,e){return t+='<div data-pane="'+e.code+'" class=" '+e.code+'-pane js-sidebar-pane" ><div class="'+e.code+'-pane-body js-sidebar-pane-body"></div></div>'},"");this.element.append(t)}},{key:"bindEvent",value:function(){var t=this;this.element.find("#dashboard-toolbar-nav").on("click","li",function(e){var n=$(e.currentTarget),i=n.data("plugin"),o=n.data("url"),r=t.element.find('[data-pane="'+i+'"]'),a=r.find(".js-sidebar-pane-body");void 0!==i&&void 0!==o&&(t.isManualOperation&&t.operationContent(n),n.data("loaded")||$.get(o).then(function(e){a.html(e),r.perfectScrollbar(),n.data("loaded",!0),t.listEvent(),t.isManualOperation=!0,t.emit(n.data("plugin")+"-loaded",a)}))})}},{key:"operationContent",value:function(t){t.hasClass("active")?(this.foldContent(),t.removeClass("active"),$(".dashboard-sidebar").removeClass("spread")):(this.element.find("#dashboard-toolbar-nav li").removeClass("active"),t.addClass("active"),this.element.find("[data-pane]").hide(),this.element.find('[data-pane="'+t.data("plugin")+'"]').show(),this.popupContent(),$(".dashboard-sidebar").addClass("spread"))}},{key:"popupContent",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500,e="0px",n=$("#dashboard-sidebar").width(),i=n+35+"px";this.emit("popup",i,t),this.element.animate({right:e},t)}},{key:"foldContent",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500,e="-"+this.element.width()+"px",n="35px";this.emit("fold",n,t),this.element.animate({right:e},t)}},{key:"reload",value:function(){this.isManualOperation=!1;var t=this.element.find(".js-sidebar-pane:visible"),e=t.data("pane");t.undelegate(),this.element.find("#dashboard-toolbar-nav").children('[data-plugin="'+e+'"]').data("loaded",!1).click()}},{key:"listEvent",value:function(){$(".js-sidebar-pane:visible .task-list-pane-body").length&&(0,d.chapterAnimate)()}}]),e}(u.default);e.default=c},d1f69fe143d8968fb6c3:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=n("ae88c18278ce1387fd20"),s=i(a);n("ee979a31290c346a6f6f"),n("0f47cc4efffe23ee2a60");var l=function(){function t(e){if(o(this,t),this.element=$(e),this.eventUrl=this.element.data("eventUrl"),void 0===this.eventUrl)throw Error("task event url is undefined");this.eventDatas={},this.intervalId=null,this.lastTime=this.element.data("lastTime"),this.eventMap={receives:{}},this._registerChannel(),1==this.element.data("eventEnable")&&this._initInterval()}return r(t,[{key:"_registerChannel",value:function(){var t=this;return s.default.instanceId("task"),s.default.fedx.addFilter([{channel:"activity-events",topic:"#",direction:"in"},{channel:"task-events",topic:"#",direction:"out"}]),s.default.subscribe({channel:"activity-events",topic:"#",callback:function(e){var n=e.event,i=e.data;t.eventDatas[n]=i,t._flush()}}),this}},{key:"_initInterval",value:function(){var t=this;window.onbeforeunload=function(){t._clearInterval(),t._flush()},this._clearInterval();var e=6e4;this.intervalId=setInterval(function(){return t._flush()},e)}},{key:"_clearInterval",value:function(){clearInterval(this.intervalId)}},{key:"_flush",value:function(){var t=this,e=$.post(this.eventUrl,{data:{lastTime:this.lastTime,events:this.eventDatas}}).done(function(e){if(t._publishResponse(e),t.eventDatas={},t.lastTime=e.lastTime,e&&e.result&&e.result.status){var n=t.eventMap.receives[e.result.status];if(n)for(var i=n.length-1;i>=0;i--){var o=n[i];o(e)}}}).fail(function(t){});return e}},{key:"_publishResponse",value:function(t){s.default.publish({channel:"task-events",topic:"#",data:{event:t.event,data:t.data}})}},{key:"addListener",value:function(t,e){this.eventMap.receives[t]=this.eventMap.receives[t]||[],this.eventMap.receives[t].push(e)}}]),t}();e.default=l},"8564292a81bb30f6618a":function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function(){function t(e){n(this,t),this.element=$(e.element),this.learningPrompt=this.element.find(".js-learning-prompt"),this.learnedPrompt=this.element.find(".js-learned-prompt"),this.learnprompt=this.element.find(".js-learn-prompt"),this.btnLearn=this.element.find(".js-btn-learn")}return i(t,[{key:"learnedWeakPrompt",value:function(){var t=this;this.learnprompt.removeClass("open"),this.learningPrompt.addClass("moveup"),window.setTimeout(function(){t.learningPrompt.removeClass("moveup"),t.learnedPrompt.addClass("moveup"),t.learnedPrompt.popover("show"),window.setTimeout(function(){t.learnedPrompt.popover("hide")},2e3)},2e3)}},{key:"learned",value:function(){this.btnLearn.addClass("active")}}]),t}();e.default=o},e66ca5da7109f35e9051:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();n("8f3ec98312b1f1f6bafb"),n("c5e642028fa5ee5a3554");var l=n("63fff8fb24f3bd1f61cd"),u=i(l),d=function(t){function e(t){o(this,e);var n=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.UP_MORE_LINK_ID="up-more-link",n.options=t,n.initDownInfinite(),n.initUpInfinite(),n}return a(e,t),s(e,[{key:"initDownInfinite",value:function(){var t={element:$(".infinite-container")[0]};t=Object.assign(t,this.options),this.downInfinite=new Waypoint.Infinite(t)}},{key:"initUpInfinite",value:function(){var t=this;if($("#up-more-link").length>0){var e={element:document.getElementById(this.UP_MORE_LINK_ID),handler:function(e){"up"===e&&t.handleUpAction()}};e=Object.assign(e,this.options),this.upInfinite=new Waypoint(e)}}},{key:"handleUpAction",value:function(){var t=this.upInfinite,e=this.UP_MORE_LINK_ID,n=this.downInfinite,i=this;t.disable(),n.$container.addClass("infinite-loading-top"),$.get($(t.element).data("url"),function(o){$(o).find(n.options.items).prependTo(n.$container);var r=$(o).find("#"+e);r.length>0?($(t.element).data("url",r.data("url")),t.enable()):(t.element.remove(),t.destroy()),i.emit("up-infinite.loaded"),n.$container.removeClass("infinite-loading-top")})}}]),e}(u.default);e.default=d},"8f3ec98312b1f1f6bafb":function(t,e){!function(){"use strict";function t(i){if(!i)throw new Error("No options passed to Waypoint constructor");if(!i.element)throw new Error("No element option passed to Waypoint constructor");if(!i.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,i),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=i.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),n[this.key]=this,e+=1}var e=0,n={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete n[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var i in n)e.push(n[i]);for(var o=0,r=e.length;r>o;o++)e[o][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var e in n)n[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=o.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+n,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,i[t.waypointContextKey]=this,n+=1,o.windowContext||(o.windowContext=!0,o.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var n=0,i={},o=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),n=this.element==this.element.window;t&&e&&!n&&(this.adapter.off(".waypoints"),delete i[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,o.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||o.isTouch)&&(e.didScroll=!0,o.requestAnimationFrame(t))})},e.prototype.handleResize=function(){o.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var n in e){var i=e[n],o=i.newScroll>i.oldScroll,r=o?i.forward:i.backward;for(var a in this.waypoints[n]){var s=this.waypoints[n][a];if(null!==s.triggerPoint){var l=i.oldScroll<s.triggerPoint,u=i.newScroll>=s.triggerPoint,d=l&&u,c=!l&&!u;(d||c)&&(s.queueTrigger(r),t[s.group.id]=s.group)}}}for(var f in t)t[f].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?o.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?o.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var n in this.waypoints[e])t.push(this.waypoints[e][n]);for(var i=0,o=t.length;o>i;i++)t[i].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,n=e?void 0:this.adapter.offset(),i={};this.handleScroll(),t={horizontal:{contextOffset:e?0:n.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:n.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var a=t[r];for(var s in this.waypoints[r]){var l,u,d,c,f,h=this.waypoints[r][s],p=h.options.offset,v=h.triggerPoint,m=0,y=null==v;h.element!==h.element.window&&(m=h.adapter.offset()[a.offsetProp]),"function"==typeof p?p=p.apply(h):"string"==typeof p&&(p=parseFloat(p),h.options.offset.indexOf("%")>-1&&(p=Math.ceil(a.contextDimension*p/100))),l=a.contextScroll-a.contextOffset,h.triggerPoint=Math.floor(m+l-p),u=v<a.oldScroll,d=h.triggerPoint>=a.oldScroll,c=u&&d,f=!u&&!d,!y&&c?(h.queueTrigger(a.backward),i[h.group.id]=h.group):!y&&f?(h.queueTrigger(a.forward),i[h.group.id]=h.group):y&&a.oldScroll>=h.triggerPoint&&(h.queueTrigger(a.forward),i[h.group.id]=h.group)}}return o.requestAnimationFrame(function(){for(var t in i)i[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in i)i[t].refresh()},e.findByElement=function(t){return i[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},o.requestAnimationFrame=function(e){var n=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;n.call(window,e)},o.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function n(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),i[this.axis][this.name]=this}var i={vertical:{},horizontal:{}},o=window.Waypoint;n.prototype.add=function(t){this.waypoints.push(t)},n.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},n.prototype.flushTriggers=function(){for(var n in this.triggerQueues){var i=this.triggerQueues[n],o="up"===n||"left"===n;i.sort(o?e:t);for(var r=0,a=i.length;a>r;r+=1){var s=i[r];(s.options.continuous||r===i.length-1)&&s.trigger([n])}}this.clearTriggerQueues()},n.prototype.next=function(e){this.waypoints.sort(t);var n=o.Adapter.inArray(e,this.waypoints),i=n===this.waypoints.length-1;return i?null:this.waypoints[n+1]},n.prototype.previous=function(e){this.waypoints.sort(t);var n=o.Adapter.inArray(e,this.waypoints);return n?this.waypoints[n-1]:null},n.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},n.prototype.remove=function(t){var e=o.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},n.prototype.first=function(){return this.waypoints[0]},n.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},n.findOrCreate=function(t){return i[t.axis][t.name]||new n(t)},o.Group=n}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,n=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,n){t.prototype[n]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[n].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(n,i){t[i]=e[i]}),n.adapters.push({name:"jquery",Adapter:t}),n.Adapter=t}(),function(){"use strict";function t(t){return function(){var n=[],i=arguments[0];return t.isFunction(arguments[0])&&(i=t.extend({},arguments[1]),i.handler=arguments[0]),this.each(function(){var o=t.extend({},i,{element:this});"string"==typeof o.context&&(o.context=t(this).closest(o.context)[0]),n.push(new e(o))}),n}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}()},c5e642028fa5ee5a3554:function(t,e){!function(){"use strict";function t(i){this.options=e.extend({},t.defaults,i),this.container=this.options.element,"auto"!==this.options.container&&(this.container=this.options.container),this.$container=e(this.container),this.$more=e(this.options.more),this.$more.length&&(this.setupHandler(),this.waypoint=new n(this.options))}var e=window.jQuery,n=window.Waypoint;t.prototype.setupHandler=function(){this.options.handler=e.proxy(function(){this.options.onBeforePageLoad(),this.destroy(),this.$container.addClass(this.options.loadingClass),e.get(e(this.options.more).attr("href"),e.proxy(function(t){var i=e(e.parseHTML(t)),o=i.find(this.options.more),r=i.find(this.options.items);r.length||(r=i.filter(this.options.items)),this.$container.append(r),this.$container.removeClass(this.options.loadingClass),o.length||(o=i.filter(this.options.more)),o.length?(this.$more.replaceWith(o),this.$more=o,this.waypoint=new n(this.options)):this.$more.remove(),this.options.onAfterPageLoad(r)},this))},this)},t.prototype.destroy=function(){this.waypoint&&this.waypoint.destroy()},t.defaults={container:"auto",items:".infinite-item",more:".infinite-more-link",offset:"bottom-in-view",loadingClass:"infinite-loading",onBeforePageLoad:e.noop,onAfterPageLoad:e.noop},n.Infinite=t}()}});