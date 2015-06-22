define([
    'backbone',
    'models/UserModel',
   // 'localstorage'
], function (Backbone, UserModel) {

    var UserCollection = Backbone.Collection.extend({
        model: UserModel,
       // localStorage: new Backbone.LocalStorage("users"),

        search: function (letters) {
            var pattern = new RegExp(letters, "gi");
            return (this.filter(function (contact) {
                return pattern.test(contact.get("name"));
            }));
        }
    });

    return UserCollection;
});