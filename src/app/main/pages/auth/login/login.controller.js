(function ()
{
    'use strict';

    angular
        .module('app.pages.auth.login')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($window, api, $mdToast, $scope)
    {
        var vm = this;

        // Data

        // Methods
        vm.login = function(user, password) {
            api.user.login.get({'user': user, 'pass' : password},
                        
                        // Success
                        function (response)
                        {
                            if(response.status == 'OK') {
                                var user = response.user;
                                $window.localStorage.setItem('user',user.name);
                                $window.localStorage.setItem('lang',user.language_code);
                                $window.location.href = '/dashboard-project';
                            } else {

                                var toast = $mdToast.simple()
                                    .content(response.status)
                                    .highlightAction(true)
                                    .hideDelay(3000)
                                    .position('top right');

                                $mdToast.show(toast);
                            }
                        },
                        // Error
                        function (response)
                        {
                                var toast = $mdToast.simple()
                                    .content('Response error. Try again.')
                                    .highlightAction(true)
                                    .hideDelay(0)
                                    .position('top right');

                                $mdToast.show(toast);
                        }
            );
        }

        //////////
    }
})();
