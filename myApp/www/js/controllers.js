angular.module('starter.controllers', ['ngCordova'])
        .controller('regCtrl', function ($scope, $ionicModal, $timeout, $http, $location, $state) {
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
            $scope.reg = function () {
                $state.go('reg');

            }
            $scope.doReg = function (firstname, lastname, password, email, gender) {

                var data = {
                    firstname: firstname,
                    lastname: lastname,
                    password: password,
                    email: email,
                    gender: gender,
                    country_id: localStorage.getItem("country_id"),

                };
                // alert(data.email);
                var link = 'http://dealandcode.com/blabla/blabla/public/api/register';
                var headers = {
                    'Authorization': 'Basic ',
                    'Accept': 'application/json; charset=utf-8',
                    'Content-Type': 'application/json; charset=utf-8'
                };
//{firstname:$scope.data.firstname,lastname:$scope.data.lastname,password:$scope.data.password,email:$scope.data.email,country_id:$scope.data.country_id}
                $http.post(link, data).then(function (res) {
                    // alert("in fun4");
                    //alert(res);
                    //alert(res.data)
                    $scope.response = res.data;
                    // alert("in fun3");
                    $state.go('login');
                }, function (error) {
                    //console.log($scope.response.data.token)
                    //localStorage.setItem("token", $scope.response.data.token);

                    $('#err').css('display', 'block');
                    $('#err').css('visibility', 'visible');
                    // $('#').html();
                })
            }
        })
        .controller('AppCtrl', function ($scope, $ionicPopup, $http, $location, $state) {
            // Triggered on a button click, or some other target
            $scope.out = function () {
                // alert("out")
                ionic.Platform.exitApp();
            }
            $scope.showPopup = function () {
                $scope.data = {}

                // An elaborate, custom popup
                var myPopup = $ionicPopup.show({
                    template: '<button class="button button-full button-positive">الايميل الالكتروني الخاص بك</button><button class="button button-full button-positive">ارسال</button>',
                    title: '',
                    subTitle: '',
                    scope: $scope,
                    buttons: [
                        {text: 'Cancel'},
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
                myPopup.then(function (res) {
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
                $http.post(link, data).then(function (res) {
                    $scope.response = res.data;
//                    if(!$scope.response){       alert("token is :")
//                    
//                    $('#err').css('display', 'block');
//                $('#err').css('visibility', 'visible');}
                    // $location.path('#/templates/login.html');
                    //alert("bosy")
                    console.log($scope.response.data.token)
                    localStorage.setItem("token", $scope.response.data.token);
                    //alert("token is :" + localStorage.getItem("token"))
                    $state.go('index');
                }, (function (error) {
                    //console.log($scope.response.data.token)
                    //localStorage.setItem("token", $scope.response.data.token);

                    $('#err').css('display', 'block');
                    $('#err').css('visibility', 'visible');
                })
                        )
            };

            $scope.loginFacebook = function () {
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

                // alert("hey")
 /*$cordovaFacebook.login(["public_profile", "email", "user_friends"])
    .then(function(success) {
      // { id: "634565435",
      //   lastName: "bob"
      //   ...
      // }
    }, function (error) {
      // error
    });*/
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
        .controller('countriesCtrl', function ($scope, $ionicModal, $timeout, $http, $location, $state) {
            var link = 'http://dealandcode.com/blabla/blabla/public/api/countries';
            $http.get(link)
                    .then(function (response) {
                        $scope.countries = response.data.data;
                    })
            $('#country').change(function () {
                console.log("your function");
                window.localStorage.setItem("country_id", $("#country").val());
                // $location.path('../login')
                $state.go('login');

            });
        })
        .controller('carCtrl', function ($scope, $http) {

            // alert("cars")
            var link = 'http://dealandcode.com/blabla/blabla/public/api/car/info?token=' + localStorage.getItem("token");
            $http.get(link)
                    .then(function (response) {
                        $scope.cars = response.data.data.brands;
                        $scope.types = response.data.data.types;
                        $scope.entertainment = response.data.data.entertainment;
                        console.log('Got some data: ', $scope.cars);
                        console.log('Got some obj: ', $scope.myjs);
                        angular.forEach($scope.cars, function (value, key) {
                            console.log(key + ': ' + value.name);
                            $("#brand").append("<option value='" + value.id + "'>" + value.name + "</option>");
                        });
                        angular.forEach($scope.entertainment, function (value, key) {
                            $("#entertainment").append("<option value='" + value.id + "'>" + value.name + "</option>");
                        });

                        angular.forEach($scope.types, function (value, key) {
                            console.log(key + ': ' + value.name);
                            $("#type").append("<option  value='" + value.id + "'>" + value.name + "</option>");
                        });
                    });
            $scope.addCar = function (image, brand, color, entertainment, number_of_seats, type) {
                console.log($("#file")[0].files[0].name)
                if ($("#file")[0].files[0].type == 'image/jpeg' || $("#file")[0].files[0].type == 'image/png') {
                    var data = {image: $("#file")[0].files[0].name, color: $("#color").val(), brand: $("#brand").val(), entertainment: $("#entertainment").val(), number_of_seats: $("#number_of_seats").val(), type: $("#type").val()};
                    //console.log("Data"+data.brand,data.color,data.entertainment ,data.number_of_seats,data.type)
                    var link = 'http://dealandcode.com/blabla/blabla/public/api/car/store?token=' + localStorage.getItem("token");
                    var headers = {'Authorization': 'Basic ', 'Accept': 'application/json; charset=utf-8', 'Content-Type': 'application/json; charset=utf-8'};
                    // alert("in fun3");
                    $http.post(link, data).then(function (res) {
                        // alert("in fun4");
                        //alert(res);
                        //alert(res.data);
                        $scope.response = res.data;

                        // $location.path('/login');
                    });
                }
            }
        })
        .controller('profileCtrl', function ($scope, $http) {
            var link = 'http://dealandcode.com/blabla/blabla/public/api/profile?token=' + localStorage.getItem("token");
            $http.get(link)
                    .then(function (response) {
                        // $scope.data = response.data;
                        //   console.log(response.data.data.user)
                        $scope.profile = response.data.data.user;
                        console.log('Got some prof: ', response.data.data.user.firstname);
                        // return data;
                        $('#firstname').val(response.data.data.user.firstname)
                        $('#lastname').val(response.data.data.user.lastname)
                        $('#email').val(response.data.data.user.email)
                        $('#birthdate').val(response.data.data.user.birthdate)
                        $('#gender :selected').val(response.data.data.user.gender)
                        $scope.editprofile = function () {
                            var data = {firstname: $("#firstname").val(), lastname: $("#lastname").val(), birthdate: $("#birthdate").val(), brief: $("#brief").val(), gender: $('#gender').val()};
                            var link = 'http://dealandcode.com/blabla/blabla/public/api/profile/update?token=' + localStorage.getItem("token");
                            $http.post(link, data).then(function (response) {

                            });
                        }
                        $scope.addphone = function () {
                            var data = {phone: $("#phone").val()};
                            var link = 'http://dealandcode.com/blabla/blabla/public/api/profile/update?token=' + localStorage.getItem("token");
                            $http.post(link, data).then(function (response) {

                            });
                        }
                        $scope.editemil = function () {
                            var data = {email: $("#email").val()};
                            var link = 'http://dealandcode.com/blabla/blabla/public/api/profile/update?token=' + localStorage.getItem("token");
                            $http.post(link, data).then(function (response) {

                            });
                        }
                    })
        })
        .controller('takedriveCtrl', function ($http, $scope) {


            /**/
            var i = 0;
            var flag = 0;
            var val = $('#numOfMoney').html();
            var set = $('#numOfSet').html();
            $('#decrease').click(function () {
                if (val > 0) {
                    val--;
                    $('#price').html(val);
                    $('#numOfMoney').html(val);
                }

            })

            $('#increase').click(function () {
                val++;
                $('#price').html(val);
                $('#numOfMoney').html(val);
            })

            $('#descraseSet').click(function () {
                if (set > 0 && set <= 4) {
                    set--;
                    $('#numOfSet').html(set);
                }

            })

            $('#inscraseSet').click(function () {
                if (set <= 3) {
                    set++;
                    $('#numOfSet').html(set);
                }
            })


            // $)document(.on)'change', '#name', function
            $('#goandaway').change(function () {
                if ($('#goandaway').prop('checked') == true) {
                    $('#divAway').css('display', 'block')
                    $('#divAway').css('visibility', 'visible')

                } else {
                    $('#divAway').css('display', 'none')
                    $('#divAway').css('visibility', 'hidden')
                }
            })

            $('#follow').click(function () {

                $('#part2').css('display', 'block')
                $('#part2').css('visibility', 'visible')


            })
            $("#condation").change(function () {


                if ($('#condation').prop('checked') === true) {
                    // alert("L");
                    $('#publish').prop("disabled", false);
                } else {
                    $('#publish').prop("disabled", true);
                }

            })
            //alert($('#condation').prop('checked'))
            var result = [];
            var link = 'http://dealandcode.com/blabla/blabla/public/api/locations?token=' + localStorage.getItem("token");
            $http.get(link)
                    .then(function (response) {
                        console.log(response.data.data.locations[0].name)
                        // console.log("REsults :    "+result)
                        // $scope.data = response.data;
                        //alert(response.data.data.locations)
                        $scope.locations = response.data.data.locations;
                        console.log('Got some data: ', response.data.data.locations);

                    })

            $scope.takedrive = function () {
                var back_seat_number = 0;
                if ($("#back_seat_number").prop('checked') == true) {
                    back_seat_number = 1;
                }
                if ($('#goandaway').prop('checked') == true) {
                    alert("true")
                    var data = {
                        from: $('#from').val(),
                        to: $('#to').val(),
                        number_of_seats: back_seat_number,
                        price: $('#price').html(),
                        flexability: $('#flexability').val(),
                        volume_of_bag: localStorage.getItem("country_id"),
                        back_seat_number: 1,
                        potentiality_of_wandering: $('#potentiality_of_wandering').val(),
                        home_date: $('#home_date').val(),
                        home_time: $('#home_time').val(),
                        is_away: 1,
                        away_date: $('#away_date').val(),
                        away_time: $('#away_time').val(),
                        comments: $('comments').val()

                    };
                } else {

                    console.log("form " + $('#home_time').val())
                    var data = {
                        from: $('#from').val(),
                        to: $('#to').val(),
                        number_of_seats: back_seat_number,
                        price: $('#price').html(),
                        flexability: $('#flexability').val(),
                        volume_of_bag: localStorage.getItem("country_id"),
                        back_seat_number: 1,
                        potentiality_of_wandering: $('#potentiality_of_wandering').val(),
                        home_date: $('#home_date').val(),
                        home_time: $('#home_time').val(),
                        is_away: 0,
                        comments: $('comments').val()
                    };
                }

                var link = 'http://dealandcode.com/blabla/blabla/public/api/offer/store?token=' + localStorage.getItem("token");
                console.log("data " + data)
                $http.post(link, data).then(function (res) {
                    var msg = "Thanks, Added succesfully";
                    // alert("in fun4");
                    $scope.response = res.data;
                    // alert("in fun3");

                });
            }

        })
        .controller('searchRideCtrl', function ($scope, $http, $state) {
            var link = 'http://dealandcode.com/blabla/blabla/public/api/locations?token=' + localStorage.getItem("token");
            $http.get(link)
                    .then(function (response) {
                        console.log(response.data.data.locations[0].name)
                        $scope.locations = response.data.data.locations;
                        console.log('Got some data: ', response.data.data.locations);

                    })
            $scope.sendFromTo = function () {

                var link = 'http://dealandcode.com/blabla/blabla/public/api/offer/search?token=' + localStorage.getItem("token");
                var data = {
                    from: $('#from').val(),
                    to: $('#to').val(),
                };

                $http.post(link, data).then(function (res) {
                    $('.fromd').html($('.fromh').html());
                    $('.tod').html($('.toh').html());
                    $scope.dataset = res.data.data.offer_rides;
                    console.log($scope.dataset);
                    window.localStorage.setItem("from_id", $("#from").val());
                    window.localStorage.setItem("to_id", $("#to").val());

                    $state.go('modetElr7la');
                });
            }
//$scope.getData=function(){}
            $('.fromh').html($('#from :selected').text());
            $('.toh').html($('#to :selected').text());
            $('.fromd').html($('.fromh').html());
            $('.tod').html($('.toh').html());
        })
        .controller('filterSearchCtrl', function ($scope, $http, $state) {
            var user_image, disable_full;
            $('#time').change(function () {
                //alert( $('#time').val())
            })
            $('#user_image').change(function () {
                if ($("#user_image").prop('checked') == true) {
                    user_image = 1;
                    //alert(x)
                } else {
                    user_image = 0;
                }
            })
            $('#disable_full').change(function () {
                if ($("#disable_full").prop('checked') == true) {
                    disable_full = 1;
                    //alert(y)
                } else {
                    disable_full = 0;
                    alert(disable_full)
                }
            })
            $scope.search = function () {
                var link = 'http://dealandcode.com/blabla/blabla/public/api/offer/search?token=' + localStorage.getItem("token");
                var data = {
                    from: localStorage.getItem("from_id"),
                    to: localStorage.getItem("to_id"),
                    date: $('#date').val(),
                    price: {
                        from: $('#fromPrice').val(),
                        to: $('#toPrice').val(),
                    },
                    time: {
                        from: $('#fromtime').val() + ":00",
                        to: $('#totime').val() + ":00",
                    },
                    number_of_seats: $("#number_of_seats").val(),
                    disable_full: disable_full,
                    user_image: user_image,
                };
                //alert($('#fromtime').val())
                $http.post(link, data).then(function (res) {
                    $scope.dataset = res.data.data.offer_rides;
                    console.log("Mydata " + $scope.dataset)
                    //alert("Mydata " + $scope.dataset)
                    // $('#success').css('display', 'block');
                    // $('#success').css('visibility', 'visible');

                    $state.go('modetElr7la2');

                })

            }
            $scope.byanat3rd = function (id) {
                alert(id)
                var link = 'http://dealandcode.com/blabla/blabla/public/api/offer_ride/' + id + '?token=' + localStorage.getItem("token");
                $http.get(link)
                        .then(function (response) {
                            console.log("get" + response.data.data.offer_ride)
                            $scope.set = response.data.data.offer_ride;
                            $scope.cars = response.data.data.offer_ride.cars;
                            //console.log('Got some data: ', response.data.data.locations);
//$state.go("byanat3rd")
                            //$('.block_fname').text(response.data.data.offer_ride.user.firstname);
                            setInterval(function () {
                                $state.go("byanat3rd");
                            }, 500);
                            setInterval(function () {
                                $('.block_fname').text(response.data.data.offer_ride.user.firstname);
                                $('.block_lname').text(response.data.data.offer_ride.user.lastname);
                                $("#user_img").attr("src", response.data.data.offer_ride.user.image);
                                $('#block_price').text(response.data.data.offer_ride.price);
                                $('.block_age').text(response.data.data.offer_ride.user.age);
                                $('#block_number_of_seats').text(response.data.data.offer_ride.number_of_seats);
                                $('#block_rate').text(response.data.data.offer_ride.user.rate);
                                $('#block_volume_of_bag').text(response.data.data.offer_ride.volume_of_bag)
                                $('#online').text(response.data.data.offer_ride.seen);
                                $('#⁠⁠⁠potentiality').text(response.data.data.offer_ride.potentiality_of_wandering)
                                $('#flexability').text(response.data.data.offer_ride.flexability)
                                $('#from_location').text(response.data.data.offer_ride.from_location.name)
                                $('#to_location').text(response.data.data.offer_ride.to_location.name)
                                $('#from_time').text(response.data.data.offer_ride.times[0].time);
                                $('#to_time').text(response.data.data.offer_ride.times[1].time);
                                $('#created_at').text(response.data.data.offer_ride.user.created_at)
                                $('#car_color').text(response.data.data.offer_ride.cars[0].color);
                                $('#car_brand').text(response.data.data.offer_ride.cars[0].model);

                            }, 500);
                        })

//                $('.block_lname').text(lastname);
//                $('.block_age').text(age);
                /*
                 setInterval(function(){ $state.go("byanat3rd");
                 }, 500);
                 setInterval(function(){
                 $('.block_fname').text(firstname);
                 $('.block_lname').text(lastname);
                 $('.block_age').text(age);
                 $('#block_number_of_seats').text(number_of_seats);
                 $('#block_rate').text(rate);
                 $('#block_price').text(price);
                 }, 500);*/
                //    $('#firstname').val(response.data.data.user.firstname)

                // $state.go("byanat3rd");

            }
        })
        .controller('PlaylistCtrl', function ($scope, $stateParams) {
        });
