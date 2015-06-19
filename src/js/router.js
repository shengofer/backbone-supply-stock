'use strict';
define([
    'jquery',
    'underscore',
    'backbone',
    'views/NavigationView',
    'models/contact',
    'views/editcontact',
    'views/loginView',
    'views/HomeView'
], function ($, _, Backbone, NavigationView, ContactModel, EditContactView, LoginView, HomeView) {

    var Router = Backbone.Router.extend({
        routes: {
            '': 'home',
            'home': 'home',
            'signup': 'signup',
            'login': 'login'
        },
        initialize: function (options) {
            var navigationView = new NavigationView();
            navigationView.render();
          // this.homeView = new HomeView();
            this.appView = options.view;
          //  this.appView.setViews(this.homeView);
        },

        home: function () {
            var homeView = new HomeView();
            this.appView.setViews(homeView);
        },

        signup: function () {
            var createContactsView = new EditContactView({
                model: new ContactModel()
            });
            this.appView.setViews(createContactsView);

            /*  createContactsView.on('form:submitted', function(attrs) {
             attrs.id = this.collection.isEmpty() ? 1 : (_.max(this.collection.pluck('id')) + 1);
             var newContact = new ContactModel(attrs);
             var modelError = newContact.isValid();
             if(modelError !== false) {
             this.collection.add(newContact);
             newContact.save();
             App.router.navigate('home', true);
             }
             }, this);

             createContactsView.on('form:close', this.contactFormClose);*/
        },

        login: function () {
            var createLoginView = new LoginView();
            this.appView.setViews(createLoginView);
        }
    });

    return Router;
});