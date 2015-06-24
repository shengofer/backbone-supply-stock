

define([
    'models/SessionModel',
    'collections/UserCollection'
], function ( SessionModel, UserCollection) {


    var app = {

        session : new SessionModel({}),
        userCollection: new UserCollection()
    }


    return app;
});