(function(){
    'use strict';

    angular.module('app').controller('mainController', mainController);

    function mainController(){
        var vm = this;
        vm.mainPics = [{source:"../img/europe1.jpg", label:"Europe", ref:''}, 
                       {source:"../img/asia1.jpg", label:"Asia", ref:''}, 
                       {source:"../img/north1.jpg", label:"North America", ref:''}, 
                       {source:"../img/south1.jpg", label:"South America", ref:''}, 
                       {source:"../img/africa1.jpg", label:"Africa", ref:''}, 
                       {source:"../img/castles.jpg", label:"Castles", ref:''}, 
                       {source:"../img/beaches.jpg", label:"Europe", ref:''}, 
                       {source:"../img/cities.jpg", label:"Cities", ref:''}, 
                       {source:"../img/nature.jpg", label:"Nature", ref:''}];
    };
        
})();