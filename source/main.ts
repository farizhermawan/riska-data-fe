import components from './components';
import directives from './directives';
import services from './services';
import config from './config';
import run from "./run";

let app = angular.module('angular-admin-lte', [
  'ui.router',
  'oi.select',
  'ngInputCurrency',
  'oitozero.ngSweetAlert',
  'ds.clock',
  'moment-picker',
  'ngSanitize',
  'ngCookies',
  'angularjs-input-file'
]);

app.config(config);

app.run(run);

angular.bootstrap(document.body, [app.name, components.name, directives.name, services.name], {
  strictDi: true
});