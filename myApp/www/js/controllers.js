angular.module('starter.controllers', [])
.controller('regCtrl', function ($scope,$ionicModal, $timeout,$http,$location,$state) {
  //$ionicModal.fromTemplateUrl('templates/reg.html', {
  /*  scope: $scope
   }).then(function(modal) {
   $scope.modal = modal;
   });
   $scope.closeReg = function() {
   $scope.modal.hide();
   };
   $scope.reg = function() {
   $scope.modal.show();
   };*/
  /*   $scope.firstname = null;
   $scope.lastname = "lastname";
   $scope.password = null;
   $scope.email = null;
   $scope.country_id = 1;*/
  $scope.reg=function () {
    $state.go('reg');

  }
  $scope.doReg = function (firstname, password, email, gender) {

    var data = {
      firstname: firstname,
      lastname: "lastname",
      password: password,
      email: email,
      gender: gender,
      country_id: localStorage.getItem("country_id"),

    };
    alert(data.email);
    var link = 'http://dealandcode.com/blabla/blabla/public/api/register';
    var headers = {
      'Authorization': 'Basic ',
      'Accept': 'application/json; charset=utf-8',
      'Content-Type': 'application/json; charset=utf-8'
    };
//{firstname:$scope.data.firstname,lastname:$scope.data.lastname,password:$scope.data.password,email:$scope.data.email,country_id:$scope.data.country_id}
    $http.post(link, data).then(function (res) {
      alert("in fun4");
      //alert(res);
      //alert(res.data)
      $scope.response = res.data;
      // alert("in fun3");
      $state.go('login');
    });
  }

  })
        .controller('AppCtrl', function ($scope,$ionicPopup,$timeout,$http,$location,$state) {
          // Triggered on a button click, or some other target
          $scope.out=function () {
           // alert("out")
            ionic.Platform.exitApp();
          }
   $scope.showPopup = function() {
     $scope.data = {}

     // An elaborate, custom popup
     var myPopup = $ionicPopup.show({
       template: '<button class="button button-full button-positive">الايميل الالكتروني الخاص بك</button><button class="button button-full button-positive">ارسال</button>',
       title: '',
       subTitle: '',
       scope: $scope,
       buttons: [
         { text: 'Cancel' },
      /*   {
           text: '<b>Save</b>',
           type: 'button-positive',
           onTap: function(e) {
             if (!$scope.data.wifi) {
               //don't allow the user to close unless he enters wifi password
               e.preventDefault();
             } else {
               return $scope.data.wifi;
             }
           }
         },*/
       ]
     });
     myPopup.then(function(res) {
       console.log('Tapped!', res);
     });
      //myPopup.onblur= myPopup.close();
    /* $timeout(function() {
        myPopup.close(); //close the popup after 3 seconds for some reason
     }, 3000);*/
   };


            // With the new view caching in Ionic, Controllers are only called
            // when they are recreated or on app start, instead of every page change.
            // To listen for when this page is active (for example, to refresh data),
            // listen for the $ionicView.enter event:
            //$scope.$on('$ionicView.enter', function(e) {
            //});

            // Form data for the login modal
            $scope.loginData = {};

            // Create the login modal that we will use later
            /*$scope.fromTemplateUrl('templates/login.html', {
                scope: $scope
            }).then(function (modal) {
                $scope.modal = modal;
            });*/
            /*$ionicModal.fromTemplateUrl('templates/reg.html', {
             scope: $scope
             }).then(function(modal) {
             $scope.modal = modal;
             });
             $scope.closeReg = function() {
             $scope.modal.hide();
             };
             $scope.reg = function() {
             $scope.modal.show();
             };*/

            // Triggered in the login modal to close it
          /*  $scope.closeLogin = function () {
                $scope.modal.hide();
            };*/

            // Open the login modal
        /*  $scope.login = function () {
                $scope.modal.show();
            };*/

            // Perform the login action when the user submits the login form
            $scope.doLogin = function (password, email) {
                console.log('Doing login', $scope.loginData);
                var data = {
                    password: password,
                    email: email,
                };
                var link = 'http://dealandcode.com/blabla/blabla/public/api/login';
                $http.post(link,data).then(function (res) {
                    $scope.response = res.data;
                   // $location.path('#/templates/login.html');
                  alert("bosy")
                }).then(function(){
                  console.log($scope.response.data.token)
                  localStorage.setItem("token",$scope.response.data.token);
                alert("token is :" + localStorage.getItem("token"))
                  $state.go('app.addCar');
                })};

$scope.loginFacebook=function(){
/*  $cordovaOauth.facebook("1866432703602132", ["email", "read_stream", "user_website", "user_location", "user_relationships"]).then(function(result) {
        //$localStorage.accessToken = result.access_token;
        //$location.path("/profile");
        alert(result.access_token)
    }, function(error) {
        alert("There was a problem signing in!  See the console for logs");
        console.log(error);
    });*/
/*
      var full_name = $ionicUser.social.facebook.data.full_name;
  console.log(full_name)
});*/

alert("hey")
};






             /*   var link = 'http://dealandcode.com/blabla/blabla/public/api/locations?token='+localStorage.getItem("token");
                $http.get(link)
                         .then(function (response) {
                             // $scope.data = response.data;
//alert(response.data.data.locations)
                             $scope.locations = response.data.data.locations;
                            //  console.log('Got some data: ', $scope.cuntry.data.locations);
                             // return data;
                         })
                         */
          /*  $ionicModal.fromTemplateUrl('templates/reg.html', {
                scope: $scope
           }).then(function (modal) {
                $scope.modal = modal;
            });
            $scope.closeReg = function () {
                $scope.modal.hide();
            };
            $scope.reg = function () {
                $scope.modal.show();
            };
*/
        })

        .controller('PlaylistsCtrl', function ($scope) {
            $scope.playlists = [
                {title: 'Reggae', id: 1},
                {title: 'Chill', id: 2},
                {title: 'Dubstep', id: 3},
                {title: 'Indie', id: 4},
                {title: 'Rap', id: 5},
                {title: 'Cowbell', id: 6}
            ];
        })
.controller('countriesCtrl',function($scope,$ionicModal, $timeout,$http,$location,$state){
  var link = 'http://dealandcode.com/blabla/blabla/public/api/countries';
  $http.get(link)
           .then(function (response) {
               $scope.countries = response.data.data;
           })
 $('#country').change(function() {
    console.log("your function");
    window.localStorage.setItem( "country_id",$("#country").val());
   // $location.path('../login')
   $state.go('login');

 });
})
  .controller('carCtrl', function ($scope,$http) {

   // alert("cars")
    var link = 'http://dealandcode.com/blabla/blabla/public/api/car/info?token='+localStorage.getItem("token");
    $http.get(link)
      .then(function (response) {
        $scope.cars = response.data.data.brands;
         $scope.types = response.data.data.types;
         $scope.entertainment = response.data.data.entertainment;
        console.log('Got some data: ', $scope.cars);
        console.log('Got some obj: ', $scope.myjs);
                 angular.forEach($scope.cars, function(value, key) {
                   console.log(key + ': ' + value.name);
                   $("#brand").append("<option value='"+value.id +"'>"+value.name+"</option>");
                 });
                   angular.forEach($scope.entertainment, function(value, key) {
                     $("#entertainment").append("<option value='"+value.id +"'>"+value.name+"</option>");
                    });

                   angular.forEach($scope.types, function(value, key) {
                     console.log(key + ': ' + value.name);
                     $("#type").append("<option  value='"+value.id +"'>"+value.name+"</option>");
                    });
      });
    $scope.addCar=function(image,brand,color,entertainment,number_of_seats,type){
      console.log($("#file")[0].files[0].name)
      if ($("#file")[0].files[0].type == 'image/jpeg' || $("#file")[0].files[0].type == 'image/png') {
        var data = {image:$("#file")[0].files[0].name ,color: $("#color").val(),brand: $("#brand").val(), entertainment: $("#entertainment").val(),number_of_seats: $("#number_of_seats").val(),type:  $("#type").val() };
         //console.log("Data"+data.brand,data.color,data.entertainment ,data.number_of_seats,data.type)
         var link = 'http://dealandcode.com/blabla/blabla/public/api/car/store?token='+localStorage.getItem("token");
         var headers = { 'Authorization': 'Basic ', 'Accept': 'application/json; charset=utf-8', 'Content-Type': 'application/json; charset=utf-8' };
         alert("in fun3");
         $http.post(link,data).then(function (res) {
         alert("in fun4");
         //alert(res);
         //alert(res.data);
         $scope.response = res.data;

         // $location.path('/login');
         });
      }
    }
  })
  .controller('profileCtrl',function ($scope,$http) {
    var link = 'http://dealandcode.com/blabla/blabla/public/api/profile?token='+localStorage.getItem("token");
    $http.get(link)
      .then(function (response) {
        // $scope.data = response.data;
        //   console.log(response.data.data.user)
        $scope.profile = response.data.data.user;
         console.log('Got some prof: ', response.data.data.user.firstname);
        // return data;
      })
  })
        .controller('PlaylistCtrl', function ($scope, $stateParams) {
        });
