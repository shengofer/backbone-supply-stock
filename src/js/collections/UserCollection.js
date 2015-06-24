define([
    'backbone',
    'models/UserModel',
    'localstorage'
], function (Backbone, UserModel) {

    var UserCollection = Backbone.Collection.extend({
        model: UserModel,
        localStorage: new Backbone.LocalStorage("Users"),

        search: function (letters) {
            var pattern = new RegExp(letters, "gi");
            return (this.filter(function (contact) {
                return pattern.test(contact.get("name"));
            }));
        },
        initialize: function () {
            for(var i=1; ;i++){
                var userModel = JSON.parse(localStorage.getItem("Users"+"-"+i));

                if(userModel){
                    this.add(userModel);
                }
                else{
                    break;
                }
            }

        },

        find: function(model, callback) {
            var user = null;
            for(var i=1; ;i++){
                var userModel = JSON.parse(localStorage.getItem("Users"+"-"+i));

                if(userModel){
                    var strEmail  = userModel["email"];
                    var strPassword = userModel["password"];
                    if(strEmail==model.email && strPassword==model.password){
                        user = userModel;
                        callback(user);
                        break;
                    }
                }
                else{
                    break;
                }
            }
           // while(this.localeStorage().getItem(this.name))
            return user;
        }
    });



    return UserCollection;
});