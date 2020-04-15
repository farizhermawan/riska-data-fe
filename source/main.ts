import * as angular from "angular";

import './vendor';
import './styles.scss';
import './custom';

import components from './app/components';
import services from './app/services';
import config from './app/config';
import run from "./app/run";

let app = angular.module('angular-admin-lte', [
  'ui.router',
  'moment-picker',
  'oi.select',
  'ngInputCurrency',
  'oitozero.ngSweetAlert',
  'ds.clock',
  'ngSanitize',
  'ngCookies',
  'ui.bootstrap',
  'bootstrapLightbox',
]);

app.config(config);

app.run(run);

angular.bootstrap(document.body, [app.name, components.name, services.name], {
  strictDi: true
});
