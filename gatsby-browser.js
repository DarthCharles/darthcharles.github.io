require('bootstrap/dist/js/bootstrap');
require('./src/workbench.css');

const { revealPage } = require('./src/navigation-transition');

exports.onRouteUpdate = revealPage;
