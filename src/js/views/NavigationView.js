'use strict';
define([
    'jquery',
    'underscore',
    'backbone',
    'text!../../templates/navTemplate.html'
], function($, _, Backbone,  navTemplate){

    var NavigatorView = Backbone.View.extend({
        el: $('.header'),

        render: function(){
            var compiledTemplate = _.template( navTemplate);
            this.$el.html(compiledTemplate);
            return this;
        }

    });

    return NavigatorView;

});