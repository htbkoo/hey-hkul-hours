require('es6-promise').polyfill();
require('isomorphic-fetch');

export default class HtmlFetcher {
    fetchHtml(url) {
        return fetch(url).then(response => response.text());
    }
}