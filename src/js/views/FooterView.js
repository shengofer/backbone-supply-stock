define([
  'jquery',
  'underscore',
  'backbone',
 // 'models/owner/OwnerModel',
 // 'text!src/templates/footer/footerTemplate.html'
    'text!templates/footerTemplate.html'
], function($, _, Backbone,  footerTemplate){

  var FooterView = Backbone.View.extend({
    el: $("#footer"),

    initialize: function() {

      var that = this;
      var options = {query: 'thomasdavis'}
     
/*

      var onDataHandler = function(collection) {
          that.render();
      }

      this.model = new OwnerModel(options);
      this.model.fetch({ success : onDataHandler, dataType: "jsonp"});
*/

    },

    render: function(){

        var data = {
        //owner: this.model.toJSON(),
            owner: null,
        _: _ 
      };

      var compiledTemplate = _.template( footerTemplate);
      this.$el.html(compiledTemplate);
    }

  });

  return FooterView;
  
});
