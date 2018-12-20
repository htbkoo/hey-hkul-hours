require('es6-promise').polyfill();
require('isomorphic-fetch');

export default class HtmlFetcher {
    fetchHtml(url: string) {
        return fetch(url).then(response => response.text());
    }
}