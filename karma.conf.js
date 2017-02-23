//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'app/bower_componentsg/angular/angular.js',
      'app/bower_componentsg/angular-route/angular-route.js',
      'app/bower_componentsg/angular-mocks/angular-mocks.js',
      'components/**/*.js',
      'view*/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
