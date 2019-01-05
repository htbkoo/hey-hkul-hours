import HtmlFetcher from "../external/HtmlFetcher";
import HtmlParser from "../service/HtmlParser";
import CheerioHtmlParser from "../service/CheerioHtmlParser";
import UrlAppender from "../service/UrlAppender";
import HkuLibraryHoursFactory from "../service/hour/HkuLibraryHoursFactory";
import ParsedMapValidator from "../service/ParsedMapValidator";
import LibraryHoursFetcher from "./LibraryHoursFetcher";
import HoursConverter from "../service/HoursConverter";
import SimpleHoursSplitter from "../service/hour/SimpleHoursSplitter";
import SimpleHourParser from "../service/hour/SimpleHourParser";
import MomentConverter from "../service/hour/MomentConverter";

const DEFAULT_DEPENDENCIES: {
    htmlFetcher: HtmlFetcher,
    htmlParser: HtmlParser,
    urlAppender: UrlAppender,
    parsedMapValidator: ParsedMapValidator,
    libraryHoursFactory: HkuLibraryHoursFactory,
} = {
    htmlFetcher: new HtmlFetcher(),
    htmlParser: new CheerioHtmlParser(),
    urlAppender: new UrlAppender("https://lib.hku.hk/hours/daily/opening_hours_", ".html"),
    parsedMapValidator: new ParsedMapValidator(),
    libraryHoursFactory: new HkuLibraryHoursFactory(
        new HoursConverter(
            new SimpleHoursSplitter(),
            new SimpleHourParser(),
            new MomentConverter()
        )
    )
};
const NO_OVERRIDES = {};

type OverriddenDependencies = Partial<typeof DEFAULT_DEPENDENCIES>

export default class HkuLibraryHoursFetcher extends LibraryHoursFetcher {
    /**
     * @constructor
     * @param {OverriddenDependencies} overriddenDependencies (Optional) Dependencies to be overridden
     */
    constructor(overriddenDependencies: OverriddenDependencies = NO_OVERRIDES) {
        const {htmlFetcher, htmlParser, urlAppender, parsedMapValidator, libraryHoursFactory} = {
            ...DEFAULT_DEPENDENCIES,
            ...overriddenDependencies
        };
        super(htmlFetcher, htmlParser, urlAppender, parsedMapValidator, libraryHoursFactory);
    }
}