'use strict';
define([
    'jquery',
    'underscore',
    'backbone',
    'views/NavigationView',
    'views/SignupView',
    'views/loginView',
    'views/HomeView',
    'models/UserModel',
    'collections/UserCollection'
], function ($, _, Backbone, NavigationView,SignupView, LoginView, HomeView, UserModel, UserColleciton) {

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
            this.appView = options.view;
        },

        home: function () {
            var homeView = new HomeView();
            this.appView.setViews(homeView);
        },

        signup: function () {
            //var contact = this.collection.get(id);
            var signupView = new SignupView({
                model: new UserModel()
            });
            this.appView.setViews(signupView);

            signupView.on('form:submitted', function(attrs) {
                var userCollection = new UserColleciton();
                attrs.id = userCollection.isEmpty() ? 1 : (_.max(this.collection.pluck('id')) + 1);
                var userModel = new UserModel(attrs);
                var modelError = userModel.isValid();
                if(modelError !== false) {
                    userCollection.add(userModel);
                    userModel.save();
                   // this.routes.navigate()
                    window.location.hash = 'home';
                    //App.router.navigate('home', true);
                }
            }, this);

           // signupView.on('form:close', this.contactFormClose);
        /*    signupView.on('form:submitted', function(attrs) {
                var modelError = contact.save(attrs, {validate:true});
                if(modelError !== false) {
                    App.router.navigate('home', true);
                }
            });

            editContactsView.on('form:close', this.contactFormClose);*/
        },

        login: function () {
            var createLoginView = new LoginView();
            this.appView.setViews(createLoginView);
        }
    });

    return Router;
});