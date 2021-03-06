import PermissionName from "./constants/permission-name";

function config(locationProvider, stateProvider, urlRouterProvider) {
  locationProvider.html5Mode(true);
  urlRouterProvider.otherwise('/');

  stateProvider
    .state('default', {
      url: '/',
      template: '<dashboard></dashboard>'
    })
    // User Management
    .state('users', {
      url: '/users',
      needPermission: PermissionName.MENU_USER_MANAGEMENT,
      template: '<user></user>'
    })
    .state('roles', {
      url: '/roles',
      needPermission: PermissionName.MENU_USER_MANAGEMENT,
      template: '<role></role>'
    })
    .state('permissions', {
      url: '/permissions',
      needPermission: PermissionName.MENU_USER_MANAGEMENT,
      template: '<permission></permission>'
    })
    .state('role-members', {
      url: '/roles/:roleId/members',
      base: 'roles',
      needPermission: PermissionName.MENU_USER_MANAGEMENT,
      template: '<role-member></role-member>'
    })
    .state('role-permissions', {
      url: '/roles/:roleId/permissions',
      base: 'roles',
      needPermission: PermissionName.MENU_USER_MANAGEMENT,
      template: '<role-permission></role-permission>'
    })
    // User (me)
    .state('me-events', {
      url: '/me/events',
      template: '<my-event></my-event>'
    })
    // Auth
    .state('auth-callback', {url: '/auth/callback', template: '<auth-callback></auth-callback>'});
}

config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

export default config;
