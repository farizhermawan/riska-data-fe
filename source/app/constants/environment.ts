export default class Environment {

  static SERVICE_BASE_URL = window.location.hostname === 'portal.riska.or.id'
    ? "https://portal.riska.or.id/api"
    : "http://localhost:8000";
}
