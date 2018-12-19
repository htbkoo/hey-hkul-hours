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

        }

        function isClosed() {
            return areEqualIgnoringCase(CLOSED, str);
        }
    }
}