'use strict';
require.config({
    paths: {
        jquery: '../../bower_components/jquery/dist/jquery',
        underscore: '../../bower_components/underscore/underscore',
        backbone: '../../bower_components/backbone/backbone',
        text: '../../bower_components/requirejs-text/text'
    }
});
define([
  'backbone',
  'views/app',
  'router'
], function (Backbone, AppView, Router) {

  //var initialize = function() {
    var appView = new AppView();
    var router = new Router({view: appView});
    Backbone.history.start();
  //};

 // return {
 //   initialize: initialize
 // };
});