'use strict';
define([
    'jquery',
    'underscore',
    'backbone',
    'views/NavigationView',
    'views/SignupView',
    'views/LoginView',
    'views/HomeView',
    'models/UserModel',
    'collections/UserCollection',
    'Global'
], function ($, _, Backbone, NavigationView,SignupView, LoginView, HomeView, UserModel, UserCollection,app) {

    var Router = Backbone.Router.extend({
        routes: {
            '': 'home',
            'home': 'home',
            'signup': 'signup',
            'login': 'login',
            'logout': 'logout'
        },
        initialize: function (options) {
            this.appView = options.view;
        },

        home: function () {
            var navigationView = new NavigationView();
            navigationView.render();
            var homeView = new HomeView();
            this.appView.setViews(homeView);
       /*     if (app.session.user){

            }
            else {
                var homeView = new HomeView();
                this.appView.setViews(homeView);
            }*/


        },

        signup: function () {
            var signupView = new SignupView({
                model: new UserModel()
            });
            this.appView.setViews(signupView);

            signupView.on('form:submitted', function(attrs) {
                //var userCollection = new UserCollection();
                var isEmptyCol = app.userCollection.isEmpty();
                //var isempty = this.collection.isEmpty();
                attrs.id = isEmptyCol ? 1 : (_.max(app.userCollection.pluck('id')) + 1);
                var userModel = new UserModel(attrs);
                var modelError = userModel.isValid();
                if(modelError !== false) {
                    app.userCollection.add(userModel);
                    userModel.save();
                    window.location.hash = 'login';
                }
            }, this);
            signupView.on('form:close', this.signupFormClose);
        },

        signupFormClose: function() {
            window.location.hash = 'home';
        },

        login: function () {
            var createLoginView = new LoginView();
            this.appView.setViews(createLoginView);
        },

        logout: function(){
            app.session.logout();
            window.location.hash = 'home';
        }
    });

    return Router;
});