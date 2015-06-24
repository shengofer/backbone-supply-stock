'use strict';
define([

    'jquery',
    'underscore',
    'backbone',
    '../Global',
    'text!../../templates/homeTemplate.html',
    'text!../../templates/logedHomeTemplate.html'
], function($, _, Backbone,app,  homeTemplate, logedHomeTemplate){

    var HomeView = Backbone.View.extend({

        render: function(){
            this.$el.empty();
            var compiledTemplate;
            var userSession = app.session.user;
            if(app.session.isAuth()){
                compiledTemplate = _.template( logedHomeTemplate);
            }
            else{
                compiledTemplate = _.template( homeTemplate);
            }
           // var compiledTemplate = _.template( homeTemplate);
            this.$el.html(compiledTemplate({user:userSession}));
            return this;
        }

    });

    return HomeView;

});