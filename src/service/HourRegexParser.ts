export type HourInString = {
    from: string,
    to: string,
}

const DEFAULT_HOUR_STRING_FORMAT = /(.+) - (.+)/;

export default class HourRegexParser {
    private _hourFormat: RegExp;

    constructor(hourFormat: RegExp = DEFAULT_HOUR_STRING_FORMAT) {
        this._hourFormat = hourFormat;
    }

    parse(str: string): HourInString {
        const result = this._hourFormat.exec(str);
        if (result !== null) {
            return {
                from: result[1],
                to: result[2],
            }
        }else{
            throw new TypeError( `Unable to parse input: "${str}"`);
        }
    }
}