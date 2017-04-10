angular.module('localStorage.service', [])
    .service('serverLocalStorageService', ['localStorageService', serverLocalStorageService]);

function serverLocalStorageService(localStorageService) {

    var service = {};

    function set(tokenName, tokenValue) {
        return localStorageService.set(tokenName, tokenValue);
    }

    function get(getToken) {
        return localStorageService.get(getToken);
    }

    function isSupported() {
        return localStorageService.isSupported;
    }

    function clearAll() {
        return localStorageService.clearAll();
    }

    function remove(removeToken) {
        return localStorageService.remove(removeToken);
    }

    service.set = set;
    service.get = get;
    service.clearAll = clearAll;
    service.remove = remove;
    service.isSupported = isSupported;

    return service;

};