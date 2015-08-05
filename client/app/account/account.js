'use strict';

angular.module('oneDayJobApp')
.config(function($stateProvider) {
    $stateProvider
    .state('login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl'
    })
    .state('signup', {
        url: '/signup',
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupCtrl'
    })
    .state('settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsCtrl',
        authenticate: true
    })

    .state('post', {
        url: '/post',
        templateUrl: 'app/account/post/post.html',
        controller: 'PostCtrl'
    })
    .state('userpage', {
        url: '/userpage',
        templateUrl: 'app/account/userpage/userpage.html',
            controller: 'UserpageCtrl',
            authenticate: true
        });
});