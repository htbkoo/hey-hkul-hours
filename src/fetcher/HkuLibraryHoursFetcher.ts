import HtmlFetcher from "../external/HtmlFetcher";
import HtmlParser from "../service/HtmlParser";
import UrlAppender from "../service/UrlAppender";
import HkuLibraryHoursFactory from "../service/hour/HkuLibraryHoursFactory";
import ParsedMapValidator from "../service/ParsedMapValidator";
import LibraryHoursFetcher from "./LibraryHoursFetcher";
import HoursConverter from "../service/HoursConverter";
import SimpleHoursSplitter from "../service/hour/SimpleHoursSplitter";
import SimpleHourParser from "../service/hour/SimpleHourParser";
import MomentConverter from "../service/hour/MomentConverter";

export default class HkuLibraryHoursFetcher extends LibraryHoursFetcher {
    constructor() {
        super(
            new HtmlFetcher(),
            new HtmlParser(),
            new UrlAppender("https://lib.hku.hk/hours/daily/opening_hours_", ".html"),
            new ParsedMapValidator(),
            new HkuLibraryHoursFactory(
                new HoursConverter(
                    new SimpleHoursSplitter(),
                    new SimpleHourParser(),
                    new MomentConverter()
                )
            )
        );
    }
}