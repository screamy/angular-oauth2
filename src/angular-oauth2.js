
/**
 * Module dependencies.
 */

import angular from 'angular';
import OAuthProvider from './providers/oauth-provider';
import OAuthTokenProvider from './providers/oauth-token-provider';
import oauthConfig from './config/oauth-config';
import oauthInterceptor from './interceptors/oauth-interceptor';
import {LocalStorageAdapter, CookieStorageAdapter} from './services/oauth-token-storage-adapters';

var ngModule = angular.module('angular-oauth2', [])
  .config(oauthConfig)
  .factory('oauthInterceptor', oauthInterceptor)
  .provider('OAuth', OAuthProvider)
  .provider('OAuthToken', OAuthTokenProvider)
  .service('localstorageAdapter', LocalStorageAdapter)
  .service('cookiesAdapter', CookieStorageAdapter)
;

/**
 * Export `angular-oauth2`.
 */

export default ngModule;
