// import angular and modules
import angular from 'angular';
import 'angular-ui-router';

// app declaration
var angularApp = angular.module('angularApp', ['ui.router']);

// index.html
import '../index.html';

// favicon.ico
import '../favicon.ico';

// styles
import '../styles/main.scss';

// images
import '../images/sm.jpg';
import '../images/boi.jpg';

// controllers
import simpleCtrl from './controllers/simpleCtrl.js';
import datboiCtrl from './controllers/datboiCtrl.js';

// views
import '../views/simple.view.html';
import '../views/datboi.view.html';

// routes
angularApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/simple');

    $stateProvider
        .state('simple', {
            url: '/simple',
            templateUrl: 'views/simple.view.html',
            controller: simpleCtrl
        })
        .state('datboi', {
            url: '/datboi',
            templateUrl: 'views/datboi.view.html',
            controller: datboiCtrl
        })
});
