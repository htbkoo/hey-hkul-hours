import HourParser, {HourInString, unparsableStringToHourError} from "./HourParser";

const DEFAULT_HOUR_STRING_FORMAT = /([^ -][^-]*) ?- ?([^ -][^-]*)/;

export default class HourRegexParser implements HourParser {
    private readonly _hourFormat: RegExp;

    constructor(hourFormat: RegExp = DEFAULT_HOUR_STRING_FORMAT) {
        this._hourFormat = hourFormat;
    }

    parse(str: string): HourInString[] {
        const result = this._hourFormat.exec(str);
        if (result !== null) {
            return [{
                from: result[1].trim(),
                to: result[2].trim(),
            }]
        } else {
            throw unparsableStringToHourError(str);
        }
    }
}