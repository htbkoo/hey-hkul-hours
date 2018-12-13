import HtmlFetcher from "../external/HtmlFetcher";

export default class LibraryHoursFetcher {
    private _htmlFetcher: HtmlFetcher;

    constructor(htmlFetcher: HtmlFetcher) {
        this._htmlFetcher = htmlFetcher;
    }

    async retrieveHours() {
        return await this._htmlFetcher.fetchHtml("");
    }
}