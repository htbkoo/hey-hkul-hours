import HtmlFetcher from "./external/HtmlFetcher";
import LibraryHoursFetcher from "./fetcher/LibraryHoursFetcher";
import HtmlParser from "./service/HtmlParser";
import UrlAppender from "./service/UrlAppender";
import ParsedMapValidator from "./service/ParsedMapValidator";
import HkuLibraryHoursFactory from "./service/hour/HkuLibraryHoursFactory";
import HoursConverter from "./service/HoursConverter";
import SimpleHourParser from "./service/hour/SimpleHourParser";
import SimpleHoursSplitter from "./service/hour/SimpleHoursSplitter";
import MomentConverter from "./service/hour/MomentConverter";

class HkuLibraryHoursFetcher extends LibraryHoursFetcher {
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

export {
    HkuLibraryHoursFetcher,

    HtmlFetcher,
    LibraryHoursFetcher,
    HtmlParser,
    UrlAppender,
    ParsedMapValidator,
    HkuLibraryHoursFactory,
    HoursConverter,
    SimpleHourParser,
    SimpleHoursSplitter,
    MomentConverter,
};