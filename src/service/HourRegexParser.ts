const DEFAULT_HOUR_STRING_FORMAT = /([^ ].*) ?- ?([^ ].*)/;

export type HourInString = {
    from: string,
    to: string,
}

export default class HourRegexParser {
    private _hourFormat: RegExp;

    constructor(hourFormat: RegExp = DEFAULT_HOUR_STRING_FORMAT) {
        this._hourFormat = hourFormat;
    }

    parse(str: string): HourInString {
        const result = this._hourFormat.exec(str);
        if (result !== null) {
            return {
                from: result[1].trim(),
                to: result[2].trim(),
            }
        }else{
            throw new TypeError( `Unable to parse input: "${str}"`);
        }
    }
}