import {Moment} from "moment";

import HtmlFetcher from "../external/HtmlFetcher";
import HtmlParser from "../service/HtmlParser";
import UrlAppender from "../service/UrlAppender";
import HkuLibraryHoursFactory from "../service/hour/model/HkuLibraryHoursFactory";

export default class LibraryHoursFetcher {
    private readonly _htmlFetcher: HtmlFetcher;
    private readonly _parser: HtmlParser;
    private readonly _appender: UrlAppender;
    private readonly _factory: HkuLibraryHoursFactory;

    constructor(htmlFetcher: HtmlFetcher, parser: HtmlParser, appender: UrlAppender, factory: HkuLibraryHoursFactory) {
        this._htmlFetcher = htmlFetcher;
        this._parser = parser;
        this._appender = appender;
        this._factory = factory;
    }

    async retrieveHours(date: Moment) {
        const url = this._appender.buildUrlWithDate(date);
        const html = await this._htmlFetcher.fetchHtml(url);
        const stringsMap = this._parser.parseHtml(html);
        // TODO: split the preconditions validation into separate validator
        return this._factory.createLibraryHours(stringsMap as any);
    }
}