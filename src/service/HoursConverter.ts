import Hours from "./hour/model/Hours";
import {areEqualIgnoringCase} from "../utils/StringUtils";
import HourParser from "./hour/HourParser";
import HoursSplitter from "./hour/HoursSplitter";
import MomentConverter from "./hour/MomentConverter";

const CLOSED = "closed";

export default class HoursConverter {
    private readonly _splitter: HoursSplitter;
    private readonly _parser: HourParser;
    private readonly _converter: MomentConverter;

    constructor(splitter: HoursSplitter, parser: HourParser, converter: MomentConverter) {
        this._splitter = splitter;
        this._parser = parser;
        this._converter = converter;
    }

    convert(str: string): Hours {
        if (isClosed()) {
            return Hours.closed();
        } else {
            const strings = this._splitter.split(str);
            const hourInStrings = strings.map(session => this._parser.parse(session));
            const hours = hourInStrings.map(hourInString => hourInString.asHour(this._converter));
            return Hours.openHours(hours)
        }

        function isClosed() {
            return areEqualIgnoringCase(CLOSED, str);
        }
    }
}