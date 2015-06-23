

define([
    'models/SessionModel'
], function ( SessionModel) {


    var app = {
        session : new SessionModel({})
    }


    return app;
});