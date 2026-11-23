require('bootstrap/dist/js/bootstrap');
require('bootstrap/dist/css/bootstrap.css');
require('./src/navigation-transition.css');

const { revealPage } = require('./src/navigation-transition');

exports.onRouteUpdate = revealPage;
