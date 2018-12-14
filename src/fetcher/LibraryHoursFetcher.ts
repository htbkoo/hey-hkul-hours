import {Moment} from "moment";

import HtmlFetcher from "../external/HtmlFetcher";
import HtmlParser from "../service/HtmlParser";
import UrlAppender from "../service/UrlAppender";

export default class LibraryHoursFetcher {
    private readonly _htmlFetcher: HtmlFetcher;
    private readonly _parser: HtmlParser;
    private readonly _appender: UrlAppender;

    constructor(htmlFetcher: HtmlFetcher, parser: HtmlParser, appender: UrlAppender) {
        this._htmlFetcher = htmlFetcher;
        this._parser = parser;
        this._appender = appender;
    }

    async retrieveHours(date: Moment) {
        const url = this._appender.buildUrlWithDate(date);
        const html = await this._htmlFetcher.fetchHtml(url);
        return this._parser.parseHtml(html);
    }
}