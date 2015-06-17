// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
/*    jquery: 'libs/jquery/jquery-min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-optamd3-min',
    text: 'libs/require/text'*/
      jquery: '../../bower_components/jquery/dist/jquery',
      underscore: '../../bower_components/underscore/underscore',
      backbone: '../../bower_components/backbone/backbone',
      //text: 'libs/require/text'
      text: '../../bower_components/requirejs-text/text'
  }

});

require([
    'app'
], function (MainApp) {
    window.App = {};
    MainApp.initialize();
});