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
    'models/SessionModel',
    'collections/UserCollection'
], function (Backbone, AppView, Router, SessionModel, UserCollection) {

    var app = {
        session : new SessionModel({})
    }

    // Just use GET and POST to support all browsers
    Backbone.emulateHTTP = true;

    var userCollection = new UserCollection();
    var appView = new AppView();
    var router = new Router({view: appView, collection: userCollection});
    Backbone.history.start();


    return app;
});