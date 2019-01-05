import {Moment} from "moment";

import HtmlFetcher from "../external/HtmlFetcher";
import HtmlParser from "../service/HtmlParser";
import UrlAppender from "../service/UrlAppender";
import HkuLibraryHoursFactory from "../service/hour/HkuLibraryHoursFactory";
import ParsedMapValidator from "../service/ParsedMapValidator";

export default class LibraryHoursFetcher {
    private readonly _htmlFetcher: HtmlFetcher;
    private readonly _parser: HtmlParser;
    private readonly _appender: UrlAppender;
    private readonly _validator: ParsedMapValidator;
    private readonly _factory: HkuLibraryHoursFactory;

    constructor(htmlFetcher: HtmlFetcher, parser: HtmlParser, appender: UrlAppender, validator: ParsedMapValidator, factory: HkuLibraryHoursFactory) {
        this._htmlFetcher = htmlFetcher;
        this._parser = parser;
        this._appender = appender;
        this._validator = validator;
        this._factory = factory;
    }

    async retrieveHours(date: Moment) {
        const url = this._appender.buildUrlWithDate(date);
        const html = await this._htmlFetcher.fetchHtml(url);
        const stringsMap = await this._parser.parseHtml(html);
        const validatedMap = this._validator.validate(stringsMap);
        return this._factory.createLibraryHours(validatedMap);
    }
}