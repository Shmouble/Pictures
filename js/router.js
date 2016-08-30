(function(){
    angular.module('app').config(function($routeProvider, $locationProvider){        
        $routeProvider.
            when("/", {templateUrl: "../partials/mainpage.html"}).
            when("/signup", {templateUrl: "../partials/signup.html"})
    });
})();