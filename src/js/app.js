/*require.config({
    paths: {

        jquery: '../../bower_components/jquery/dist/jquery',
        underscore: '../../bower_components/underscore/underscore',
        backbone: '../../bower_components/backbone/backbone',
        text: '../../bower_components/requirejs-text/text'
    }

});*/

define([
  'backbone',
  'views/app',
  'router'
], function (Backbone, AppView, Router, FooterView) {

  var initialize = function() {
   // var contactsCollections = new ContactsCollection();
    var appView = new AppView();
     /* var footerView = new FooterView();
      footerView.render();*/
    App.router = new Router({view: appView});
    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});