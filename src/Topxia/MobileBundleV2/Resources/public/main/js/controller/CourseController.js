app.controller('CourseController', ['$scope', '$stateParams', 'CourseService', 'AppUtil', '$state', 'cordovaUtil', CourseController]);
app.controller('CourseDetailController', ['$scope', '$stateParams', 'CourseService', CourseDetailController]);
app.controller('CourseSettingController', ['$scope', '$stateParams', 'CourseService', '$window', CourseSettingController]);

function CourseReviewController($scope, $stateParams, CourseService, $window)
{
  var self = this;
  $scope.canLoad = true;
  $scope.start = $scope.start || 0;

  $scope.loadMore = function(){
        if (! $scope.canLoad) {
          return;
        }
       setTimeout(function() {
          self.loadReviews();
       }, 200);
  };

  this.loadReviews = function() {
    CourseService.getReviews({
      start : $scope.start,
      limit : 10,
      courseId : $stateParams.courseId
    }, function(data) {

      var length  = data ? data.data.length : 0;
      if (!data || length == 0 || length < 10) {
          $scope.canLoad = false;
      }

      $scope.reviews = $scope.reviews || [];
      for (var i = 0; i < length; i++) {
        $scope.reviews.push(data.data[i]);
      };

      $scope.start += data.limit;

    });
  }

  this.loadReviewInfo = function() {
    CourseService.getCourseReviewInfo({
      courseId : $stateParams.courseId
    }, function(data) {
      $scope.reviewData = data;
    });
  }
  
  this.loadReviewInfo();
  this.loadReviews();
}

function CourseSettingController($scope, $stateParams, CourseService, $window)
{
  $scope.isLearn = $stateParams.isLearn;
  $scope.exitLearnCourse = function() {
    $scope.showLoad();
    CourseService.unLearnCourse({
      courseId : $stateParams.courseId
    }, function(data) {
      $scope.hideLoad();
      if (! data.error) {
        $window.history.back();
        setTimeout(function() {
          $scope.$emit("refresh", {});
        }, 10);
        
      } else {
        $scope.toast(data.error.message);
      }
    });
  }
}

function CourseDetailController($scope, $stateParams, CourseService)
{
  CourseService.getCourse({
      courseId : $stateParams.courseId
    }, function(data) {
      $scope.course = data.course;
  });
}

app.controller('CourseToolController', ['$scope', '$stateParams', 'OrderService', 'CourseService', 'cordovaUtil', '$state', CourseToolController]);

function BaseToolController($scope, OrderService, cordovaUtil)
{
  var self = this;

  this.payCourse = function(price, targetType, targetId) {
      OrderService.createOrder({
        payment : "alipay",
        payPassword : "",
        totalPrice : price,
        couponCode : "",
        targetType : targetType,
        targetId : targetId
      }, function(data) {
        if (data.paid == true) {
          console.log("reload");
          window.location.reload();
        } else {
          var error = "加入学习失败";
          if (data.error) {
            error = data.error.message;
          } 
          $scope.toast(error);
        }
      }, function(error) {
        console.log(error);
      });
    }

  this.vipLeand = function(callback) {
    if ($scope.user == null) {
      cordovaUtil.openWebView(app.rootPath + "#/login/course");
      return;
    }
    callback();
  }

  this.joinCourse = function(callback) {
      if ($scope.user == null) {
        cordovaUtil.openWebView(app.rootPath + "#/login/course");
        return;
      }

      callback();
    }

  this.favoriteCourse = function(callback) {
    if ($scope.user == null) {
      cordovaUtil.openWebView(app.rootPath + "#/login/course");
      return;
    }

    callback();
  }

  this.shardCourse = function(url, title, about, pic) {
    if (about.length > 20) {
      about = about.substring(0, 20);
    }
    cordovaUtil.share(app.host + url, title, about, pic);
  }
}

function CourseToolController($scope, $stateParams, OrderService, CourseService, cordovaUtil, $state)
{
    this.__proto__ = new BaseToolController($scope, OrderService, cordovaUtil);
    var self = this;

    this.goToPay = function() {
      if ($scope.course.price <= 0) {
        self.payCourse($scope.course.price, "course", $stateParams.courseId);
      } else {
        $state.go("coursePay", { targetId : $scope.course.id, targetType : 'course' });
      }
    };

    this.checkModifyUserInfo = function(modifyInfos) {
      for (var i = 0; i < modifyInfos.length; i++) {
        var modifyInfo = modifyInfos[i];
        if (!modifyInfo["content"] || modifyInfo["content"] == 0) {
          alert("请填写" + modifyInfo["title"]);
          return false;
        }
      };

      return true;
    }

    $scope.$parent.updateModifyInfo = function() {
      var modifyInfos = $scope.$parent.modifyInfos;
      if (!self.checkModifyUserInfo(modifyInfos)) {
        return;
      }
      $scope.showLoad()
      CourseService.updateModifyInfo({
        targetId : $scope.course.id
      }, function(data) {
        $scope.hideLoad();
        if (data.error) {
          $scope.toast(data.error.message);
          return;
        }
        if (true == data) {
          self.goToPay();
        }
      });
    };

    this.getModifyUserInfo = function(success) {
      $scope.$parent.close = function() {
        self.dialog.dialog("hide");
      }

      CourseService.getModifyInfo({}, function(data) {

        if(true != data["buy_fill_userinfo"]) {
          success();
          return
        }

        $scope.$parent.modifyInfos = data["modifyInfos"];
        if (data["modifyInfos"].length > 0) {
          self.dialog = $(".ui-dialog");
          self.dialog.dialog("show");
        } else {
          success();
        }
      });
    };

    $scope.vipLeand = function() {
      self.vipLeand(function() {
        CourseService.vipLearn({
          courseId : $stateParams.courseId
        }, function(data){
          if (! data.error) {
            window.location.reload();
          } else {
            $scope.toast(data.error.message);
          }
        }, function(error) {
          console.log(error);
        });
      });

    }

    $scope.joinCourse = function() {
      self.joinCourse(function() {
        self.getModifyUserInfo(function() {
          self.goToPay();
        });
      });

    }

    $scope.favoriteCourse = function() {

      self.favoriteCourse(function() {
        var params = {
            courseId : $stateParams.courseId
        };

        if ($scope.isFavorited) {
          CourseService.unFavoriteCourse(params, function(data) {
            if (data == true) {
              $scope.isFavorited = false;
            }
          });
        } else {
          CourseService.favoriteCourse(params, function(data) {
            if (data == true) {
              $scope.isFavorited = true;
            }
          });
        }
      });
    }

    $scope.shardCourse = function() {
      var about = $scope.course.about;
      if (about.length > 20) {
        about = about.substring(0, 20);
      }
      self.shardCourse("/course/" + $scope.course.id, $scope.course.title, about, $scope.course.largePicture)      
    }
}

function CourseController($scope, $stateParams, CourseService, AppUtil, $state, cordovaUtil)
{
    $scope.showLoad();

    CourseService.getCourse({
      courseId : $stateParams.courseId
    }, function(data) {
      if (data && data.error) {
        var dia = $.dialog({
                title : '课程预览' ,
                content : data.error.message,
                button : [ "确认" ]
        });

        dia.on("dialog:action",function(e){
                cordovaUtil.closeWebView();
        });
        return;
      }
      $scope.ratingArray = AppUtil.createArray(5);
      $scope.vipLevels = data.vipLevels;
      $scope.course = data.course;
      $scope.member = data.member;
      $scope.isFavorited = data.userFavorited;
      $scope.discount = data.discount;

      if (data.member) {
        var progress = data.course.lessonNum == 0 ? 0 : data.member.learnedNum / data.course.lessonNum;
        $scope.learnProgress = ((progress * 100).toFixed(2)) + "%" ;
      }

      $scope.courseView = app.viewFloder + (data.member ? "view/course_learn.html" : "view/course_no_learn.html");
      $scope.hideLoad();
    });

    $scope.loadReviews = function(){
      CourseService.getReviews({
        courseId : $stateParams.courseId,
        limit : 1
      }, function(data) {
        $scope.reviews = data.data;
      });
    }

    $scope.exitLearnCourse = function() {
      $scope.showLoad();
      CourseService.unLearnCourse({
        courseId : $stateParams.courseId,
        token : $scope.token
      }, function(data) {
        $scope.hideLoad();
        if (! data.error) {
          window.location.reload();
        } else {
          $scope.toast(data.error.message);
        }
      });
    }

    $scope.showDownLesson = function() {
      cordovaUtil.showDownLesson($scope.course.id);
    }

    $scope.$parent.$on("refresh", function(event, data) {
      window.location.reload();
    });
}

app.controller('ClassRoomController', ['$scope', '$stateParams', 'ClassRoomService', 'AppUtil', '$state', 'cordovaUtil', 'ClassRoomUtil', ClassRoomController]);
app.controller('ClassRoomCoursesController', ['$scope', '$stateParams', 'ClassRoomService', '$state', ClassRoomCoursesController]);
app.controller('ClassRoomToolController', ['$scope', '$stateParams', 'OrderService', 'ClassRoomService', 'cordovaUtil', '$state', ClassRoomToolController]);

function ClassRoomToolController($scope, $stateParams, OrderService, ClassRoomService, cordovaUtil, $state)
{
  this.__proto__ = new BaseToolController($scope, OrderService, cordovaUtil);
  var self = this;

    this.goToPay = function() {
      if ($scope.classRoom.price <= 0) {
        self.payCourse($scope.classRoom.price, "classroom", $stateParams.classRoomId);
      } else {
        $state.go("coursePay", { targetId : $scope.classRoom.id, targetType : 'classroom' });
      }
    };

    $scope.vipLeand = function() {
      self.vipLeand(function() {
        ClassRoomService.learnByVip({
          classRoomId : $stateParams.classRoomId
        }, function(data){
          if (! data.error) {
            window.location.reload();
          } else {
            $scope.toast(data.error.message);
          }
        }, function(error) {
          console.log(error);
        });
      });

    }

    $scope.joinCourse = function() {
      self.joinCourse(function() {
        self.goToPay();
      });
    }

    $scope.shardCourse = function() {
      var about = $scope.course.about;
      if (about.length > 20) {
        about = about.substring(0, 20);
      }
      self.shardCourse("/course/" + $scope.course.id, $scope.course.title, about, $scope.course.largePicture)      
    }
}

function ClassRoomCoursesController($scope, $stateParams, ClassRoomService, $state)
{
  var self = this;

  this.loadClassRoomCourses = function() {
    $scope.loading = true;
    ClassRoomService.getClassRoomCourses({
      classRoomId : $stateParams.classRoomId
    }, function(data) {
      $scope.loading = false;
      
      if (data.error) {
        $scope.toast(data.error.message);
        return;
      }
      $scope.courses = data;
    });
  };

  this.loadClassRoomCourses();
}

function ClassRoomController($scope, $stateParams, ClassRoomService, AppUtil, $state, cordovaUtil, ClassRoomUtil)
{
  var self = this;

  this.loadClassRoom = function() {
    $scope.showLoad();
    ClassRoomService.getClassRoom({
      id : $stateParams.classRoomId
    }, function(data) {
      
      $scope.vipLevels = data.vipLevels;
      $scope.ratingArray = AppUtil.createArray(5);
      $scope.member = data.member;
      $scope.isFavorited = data.userFavorited;
      $scope.discount = data.discount;

      $scope.classRoomView = app.viewFloder + (data.member ? "view/classroom_learn.html" : "view/classroom_no_learn.html");
      $scope.classRoom = ClassRoomUtil.filterClassRoom(data.classRoom);
      $scope.hideLoad();
    });
  };

  this.loadClassRoom();
}