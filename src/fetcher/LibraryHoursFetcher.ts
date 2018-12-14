import HtmlFetcher from "../external/HtmlFetcher";
import HtmlParser from "../service/HtmlParser";

export default class LibraryHoursFetcher {
    private readonly _htmlFetcher: HtmlFetcher;
    private readonly _parser: HtmlParser;

    constructor(htmlFetcher: HtmlFetcher, parser: HtmlParser) {
        this._htmlFetcher = htmlFetcher;
        this._parser = parser;
    }

    async retrieveHours() {
        const html = await this._htmlFetcher.fetchHtml("");
        return this._parser.parseHtml(html);
    }
}