define([
    '../Global',
    'text!../../templates/loginTemplate.html'
], function (app, loginTemplate) {

    var LoginView = Backbone.View.extend({
        el: $('.main-container'),

        events: {
            'click #login-btn': 'onLoginAttempt',
            'keyup #login-password-input': 'onPasswordKeyup',
            'keyup #signup-password-confirm-input': 'onConfirmPasswordKeyup'
        },

        onPasswordKeyup: function (evt) {
            var k = evt.keyCode || evt.which;

            if (k == 13 && $('#login-password-input').val() === '') {
                evt.preventDefault();    // prevent enter-press submit when input is empty
            } else if (k == 13) {
                evt.preventDefault();
                this.onLoginAttempt();
                return false;
            }
        },


        onLoginAttempt: function (evt) {
            if (evt) evt.preventDefault();

            if (this.$("#login-form")) {
               if ( app.session.login({
                    email: this.$("#login-email-input").val(),
                    password: this.$("#login-password-input").val()
                }) ){
                   window.location.hash = 'home';
               };
            }
        },


        render: function () {

            this.$el.empty();
            this.template = _.template(loginTemplate);
            var appuser = {
                id: 100500,
                username: 'qw',
                name: 'qw',
                email: 'qw@com.en'
            };
            var html = this.template({user: appuser});
            this.$el.html(html);
            return this;
        }

    });

    return LoginView;
});

