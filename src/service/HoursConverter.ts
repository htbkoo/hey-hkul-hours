import Hours from "./hour/model/Hours";
import {areEqualIgnoringCase} from "../utils/StringUtils";
import HourParser from "./hour/HourParser";
import HoursSplitter from "./hour/HoursSplitter";
import MomentConverter from "./hour/MomentConverter";

const CLOSED = "Closed";

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
        if (isClosed(str)) {
            return Hours.closed();
        } else {
            return this.createOpenHours(str);
        }
    }

    private createOpenHours(str: string) {
        const strings = this._splitter.split(str);
        const hourInStrings = strings.map(session => this._parser.parse(session));
        const hours = hourInStrings.map(hourInString => hourInString.asHour(this._converter));
        return Hours.openHours(hours)
    }
}

function isClosed(str: string) {
    return areEqualIgnoringCase(CLOSED, str);
}
