require('es6-promise').polyfill();
require('isomorphic-fetch');

export function fetchHtml(url) {
    return fetch(url).then(response => response.text());
}