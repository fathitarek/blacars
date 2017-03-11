// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
/*  var appID = 1866432703602132;
  var version = "v2.8"; // or leave blank and default is v2.0
  $cordovaFacebookProvider.browserInit(appID, version);
});*/


  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('login', {
        url: '/login',
      //  views: {
            //'menuContent': {
        templateUrl: 'templates/login.html'
    //  }
      //}
    })
    .state('index', {
      url: '/index',

      templateUrl: 'templates/index.html'

    })
    .state('countries', {
          url: '/countries',
        //  views: {
              //'menuContent': {
          templateUrl: 'templates/countries.html'
      //  }
        //}
      })
      .state('security', {
            url: '/security',
          //  views: {
                //'menuContent': {
            templateUrl: 'templates/security.html'
        //  }
          //}
        })
        .state('app.addCar', {
              url: '/addCar',
            views: {
                 'menuContent': {
              templateUrl: 'templates/addCar.html',
                   controller: 'carCtrl'
            }
            }
          })
           .state('app.editProfile', {
              url: '/editProfile',
            views: {
                 'menuContent': {
              templateUrl: 'templates/editProfile.html',
                   controller: 'profileCtrl'
            }
            }
          })
           .state('app.takeDrive', {
              url: '/takeDrive',
            views: {
                 'menuContent': {
              templateUrl: 'templates/takeDrive.html',
                   controller: 'takedriveCtrl'
            }
            }
          })
    .state('app.searchRide', {
      url: '/searchRide',
      views: {
        'menuContent': {
          templateUrl: 'templates/searchRide.html',
          controller: 'searchRideCtrl'
        }
      }
    })
  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })
.state('reg', {
      url: '/reg',
       //abstract: true,
       //'menuContent': {
       templateUrl : 'templates/reg.html',
          controller: 'regCtrl'
        //}
    }).
  state('modetElr7la', {
    url: '/modetElr7la',

    templateUrl : 'templates/modetElr7la.html',
    controller: 'searchRideCtrl'

  }).
          state('filterSearch', {
    url: '/filterSearch',
    templateUrl : 'templates/filterSearch.html',
    controller: 'filterSearchCtrl'
  })
  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('countries');
  if(localStorage.getItem("token")){
    //$urlRouterProvider.otherwise('/filterSearch');
    $urlRouterProvider.otherwise('/index');

  }
  else{$urlRouterProvider.otherwise('security');}
});
