'use strict';
define([
    'jquery',
    'underscore',
    'backbone',
    '../static',
    'text!../../templates/navTemplate.html',
    'text!../../templates/logedUserNavTemplate.html',
], function($, _, Backbone,app,  navTemplate, logedNavTemplate){

    var NavigatorView = Backbone.View.extend({
        el: $('.header'),

        render: function(){
            var compiledTemplate;
            if(app.session.isAuth()){
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