/*global angular*/
var angularApp = angular.module('SorteoPremios', []);

angularApp.controller('PremioController', function ($scope) {
    'use strict';

    $scope.listaPremios = ['coche deportivo',
                      'viaje a Japón',
                      'crucero por el Caribe',
                      'apartamento en la playa'];

    $scope.elegirPremio = function () {
        var premioElegido = Math.floor(Math.random() * $scope.listaPremios.length);
        $scope.premio = $scope.listaPremios[premioElegido];
    };
});
