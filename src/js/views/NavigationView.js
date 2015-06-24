'use strict';
define([
    'jquery',
    'underscore',
    'backbone',
    '../Global',
    'text!../../templates/navTemplate.html',
    'text!../../templates/logedUserNavTemplate.html',
], function($, _, Backbone,app,  navTemplate, logedNavTemplate){

    var NavigatorView = Backbone.View.extend({
        el: $('.header'),

        render: function(){
            this.$el.empty();
            var isLogin = app.session.isAuth();
            var compiledTemplate;
            if(isLogin){
                compiledTemplate = _.template( logedNavTemplate);
            }
            else{
                 compiledTemplate = _.template( navTemplate);
            }

            this.$el.html(compiledTemplate);
            return this;
        }

    });

    return NavigatorView;

});