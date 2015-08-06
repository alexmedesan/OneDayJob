'use strict';

angular.module('oneDayJobApp')
    .controller('SignupCtrl', function($scope, Auth, $location, $window, stateFactory) {
        $scope.user = {};
        $scope.errors = {};

        $scope.register = function(form) {
            $scope.submitted = true;

            if (form.$valid) {
                Auth.createUser({

                        firstName: $scope.user.firstName,
                        lastName: $scope.user.lastName,
                        email: $scope.user.email,
                        password: $scope.user.password,
                        phone: $scope.user.phone,
                        state: $scope.user.state

                    })
                    .then(function() {
                        // Account created, redirect to home
                        $location.path('/');
                    })
                    .catch(function(err) {
                        err = err.data;
                        $scope.errors = {};


                        // Update validity of form fields that match the mongoose errors
                        angular.forEach(err.errors, function(error, field) {
                            form[field].$setValidity('mongoose', false);
                            $scope.errors[field] = error.message;
                        });
                    });
            }
        };

        $scope.loginOauth = function(provider) {
            $window.location.href = '/auth/' + provider;
        };
        stateFactory.getMongoStuff()
            .then(function(states) {
                $scope.states = states;
            }),
            function(error) {
                console.error(error);
            }

    });