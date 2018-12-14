import {JSDOM} from "jsdom";

import HtmlFetcher from "../external/HtmlFetcher";
import HtmlParser from "./HtmlParser";

export default class LibraryHoursFetcher {
    private _htmlFetcher: HtmlFetcher;
    private _parser: HtmlParser;

    constructor(htmlFetcher: HtmlFetcher, parser: HtmlParser) {
        this._htmlFetcher = htmlFetcher;
        this._parser = parser;
    }

    async retrieveHours() {
        const html = await this._htmlFetcher.fetchHtml("");
        return this._parser.parseHtml(html);
    }
}