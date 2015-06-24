define([
    "../app",
    "models/UserModel",
    "collections/UserCollection"
], function (app, UserModel, UserCollection) {

    var SessionModel = Backbone.Model.extend({

        defaults: {
            logged_in: false,
            user_id: ''
        },

        initialize: function () {
            // _.bindAll(this);

            // Singleton user object
            // Access or listen on this throughout any module with app.session.user
            this.user = new UserModel({});
        },


        login: function (user) {

            var userCollection = new UserCollection();
            userCollection.find({email: user.email, password: user.password}, function (user) {
                this.user = user;
                this.logged_in = true;
                window.location.hash = 'home';
                return this.logged_in;
            });

        },

        isAuth: function () {
            return this.logged_in;
        },

        postAuth: function (user) {
            this.user = {
                id: 23,
                username: 'vova',
                email: 'vovanchik@gmail.com',
                pass: 'vovapass'
            }
        },
        logout: function () {
            this.user = null;
            this.logged_in = false;
        }

    });

    return SessionModel;
});

