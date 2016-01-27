export class LocalStorageAdapter {

    // @ngInject
    constructor($window) {
        this.JSON = $window.JSON;
        this.localStorage = $window.localStorage;
    }

    putObject(name, data) {
        return this.localStorage.setItem(name, this.JSON.stringify(data));
    }

    getObject(name) {
        return this.JSON.parse(this.localStorage.getItem(name));
    }

    remove(name) {
        return this.localStorage.removeItem(name);
    }
}

export class CookieStorageAdapter {

    // @ngInject
    constructor($cookies) {
        this.$cookies = $cookies;
    }

    putObject(name, data, options) {
        return this.$cookies.putObject(name, data, options);
    }

    getObject(name) {
        return this.$cookies.getObject(name);
    }

    remove(name, options) {
        return this.$cookies.remove(name, options);
    }
}