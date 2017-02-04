angular.module('starter.controllers', [])
.controller('regCtrl', function ($scope,$ionicModal, $timeout,$http,$location,$state){
    $ionicModal.fromTemplateUrl('templates/reg.html', {
             scope: $scope
             }).then(function(modal) {
             $scope.modal = modal;
             });
             $scope.closeReg = function() {
             $scope.modal.hide();
             };
             $scope.reg = function() {
             $scope.modal.show();
             };
          /*   $scope.firstname = null;
            $scope.lastname = "lastname";
            $scope.password = null;
            $scope.email = null;
            $scope.country_id = 1;*/
             $scope.doReg = function (firstname, password, email, gender) {

                var data = {
                    firstname: firstname,
                    lastname:"lastname",
                    password: password,
                    email: email,
                    gender: gender,
                    country_id:1,

                };
                 alert(data.email);
                var link = 'http://dealandcode.com/blabla/blabla/public/api/register';
                var headers = {
                    'Authorization': 'Basic ',
                    'Accept': 'application/json; charset=utf-8',
                    'Content-Type': 'application/json; charset=utf-8'
                };
//{firstname:$scope.data.firstname,lastname:$scope.data.lastname,password:$scope.data.password,email:$scope.data.email,country_id:$scope.data.country_id}
                $http.post(link,data).then(function (res) {
                    alert("in fun4");
                  alert(res);
                    alert(res.data)
                    $scope.response = res.data;
                     alert("in fun3");
                    $state.go('/login');
                });
};
  })
        .controller('AppCtrl', function ($scope,$ionicModal,$ionicPopup, $timeout,$http,$location) {
          // Triggered on a button click, or some other target
   $scope.showPopup = function() {
     $scope.data = {}

     // An elaborate, custom popup
     var myPopup = $ionicPopup.show({
       template: '<div class="row responsive-sm"><div class="col"><button class="button button-full button-positive">الايميل الالكتروني الخاص بك</button></div><div class="col"><button class="button button-full button-positive">ارسال</button></div></div>',
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
                    $location.path('#/templates/login.html');
                }).then(function(){
                  console.log($scope.response.data.token)
                  localStorage.setItem("token",$scope.response.data.token);
                alert("token is :" + localStorage.getItem("token"))
                })};

                var link = 'http://dealandcode.com/blabla/blabla/public/api/countries';
                $http.get(link)
                         .then(function (response) {
                             // $scope.data = response.data;
//console.log(response.data.name)
                             $scope.countries = response.data.data;
                              //console.log('Got some data: ', response.data.data);
                             // return data;
                         })
                var link = 'http://dealandcode.com/blabla/blabla/public/api/locations?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE0LCJpc3MiOiJodHRwOlwvXC9kZWFsYW5kY29kZS5jb21cL2JsYWJsYVwvYmxhYmxhXC9wdWJsaWNcL2FwaVwvbG9naW4iLCJpYXQiOjE0ODYxMjg3NDcsImV4cCI6MTQ4ODcyMDc0NywibmJmIjoxNDg2MTI4NzQ3LCJqdGkiOiIzODhiM2RiMmM1YWM1NmZjNDlhYjRlNWYzZmZmMmFkMiJ9.wm3jNVk4y9tx6jrUS1B_A1-oD2T5F77vXWQt31L7Tts';
                $http.get(link)
                         .then(function (response) {
                             // $scope.data = response.data;
//alert(response.data.data.locations)
                             $scope.locations = response.data.data.locations;
                            //  console.log('Got some data: ', $scope.cuntry.data.locations);
                             // return data;
                         })
                         var link = 'http://dealandcode.com/blabla/blabla/public/api/profile?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE0LCJpc3MiOiJodHRwOlwvXC9kZWFsYW5kY29kZS5jb21cL2JsYWJsYVwvYmxhYmxhXC9wdWJsaWNcL2FwaVwvbG9naW4iLCJpYXQiOjE0ODYxMjg3NDcsImV4cCI6MTQ4ODcyMDc0NywibmJmIjoxNDg2MTI4NzQ3LCJqdGkiOiIzODhiM2RiMmM1YWM1NmZjNDlhYjRlNWYzZmZmMmFkMiJ9.wm3jNVk4y9tx6jrUS1B_A1-oD2T5F77vXWQt31L7Tts';
                         $http.get(link)
                                  .then(function (response) {
                                      // $scope.data = response.data;
      //   console.log(response.data.data.user)
                                      $scope.profile = response.data.data.user;
                                      // alert('Got some data: ', response.data.data.user);
                                      // return data;
                                  })
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

        .controller('PlaylistCtrl', function ($scope, $stateParams) {
        });
