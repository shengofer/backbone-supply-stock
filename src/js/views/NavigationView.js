define([
    'jquery',
    'underscore',
    'backbone',
    // 'models/owner/OwnerModel',
    // 'text!src/templates/footer/footerTemplate.html'
    'text!../../templates/navTemplate.html'
], function($, _, Backbone,  navTemplate){

    var FooterView = Backbone.View.extend({
        el: $('.main-container'),

        initialize: function() {


        },

        render: function(){


            var compiledTemplate = _.template( navTemplate);
            this.$el.html(compiledTemplate);
        }

    });

    return FooterView;

});