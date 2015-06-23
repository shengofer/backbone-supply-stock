'use strict';
define([

    'jquery',
    'underscore',
    'backbone',
    '../static',
    'text!../../templates/homeTemplate.html'
], function($, _, Backbone,app,  navTemplate){

    var HomeView = Backbone.View.extend({

        render: function(){
            this.$el.empty();

            var compiledTemplate = _.template( navTemplate);
            this.$el.html(compiledTemplate);
            return this;
        }

    });

    return HomeView;

});