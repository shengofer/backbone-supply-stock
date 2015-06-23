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
    'models/SessionModel'
], function (Backbone, AppView, Router, SessionModel) {


    var app = {
        session : new SessionModel({})
    }


    // Just use GET and POST to support all browsers
    Backbone.emulateHTTP = true;
    // Create a new session model and scope it to the app global
    // This will be a singleton, which other modules can access


    var appView = new AppView();
    var router = new Router({view: appView});
    Backbone.history.start();


    return app;
});