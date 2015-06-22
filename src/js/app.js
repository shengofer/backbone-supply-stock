'use strict';
require.config({

    paths: {
        jquery: '../vendor/jquery/dist/jquery',
        underscore: '../vendor/underscore/underscore',
        backbone: '../vendor/backbone/backbone',
        text: '../vendor/requirejs-text/text',
        localstorage: "../vendor/backbone.localstorage/backbone.localStorage"

    }
});
define([
    'backbone',
    'views/AppView',
    'router',
    'localstorage'
], function (Backbone, AppView, Router, lclStr) {
    // Just use GET and POST to support all browsers
    Backbone.emulateHTTP = true;


    var appView = new AppView();
    var router = new Router({view: appView});
    Backbone.history.start();

});