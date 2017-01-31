angular.module('starter.controllers', [])
.controller('regCtrl', function ($scope,$ionicModal, $timeout,$http){
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
                });
};
  })
        .controller('AppCtrl', function ($scope,$ionicModal, $timeout) {

            // With the new view caching in Ionic, Controllers are only called
            // when they are recreated or on app start, instead of every page change.
            // To listen for when this page is active (for example, to refresh data),
            // listen for the $ionicView.enter event:
            //$scope.$on('$ionicView.enter', function(e) {
            //});

            // Form data for the login modal
            $scope.loginData = {};

            // Create the login modal that we will use later
            $ionicModal.fromTemplateUrl('templates/login.html', {
                scope: $scope
            }).then(function (modal) {
                $scope.modal = modal;
            });
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
            $scope.closeLogin = function () {
                $scope.modal.hide();
            };

            // Open the login modal
            $scope.login = function () {
                $scope.modal.show();
            };

            // Perform the login action when the user submits the login form
            $scope.doLogin = function () {
                console.log('Doing login', $scope.loginData);

                // Simulate a login delay. Remove this and replace with your login
                // code if using a login system
                $timeout(function () {
                    $scope.closeLogin();
                }, 1000);
            };
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
