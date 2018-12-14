import {JSDOM} from "jsdom";
import {Moment} from "moment";

const DEFAULT_DATE_FORMAT = "YYYY-MM-DD";

export default class UrlAppender {
    private readonly _prefix: string;
    private readonly _postfix: string;
    private readonly _format: string;

    constructor(prefix: string, postfix: string, format: string = DEFAULT_DATE_FORMAT) {
        this._prefix = prefix;
        this._postfix = postfix;
        this._format = format;
    }

    buildUrlWithDate(date: Moment): string {
        return `${this._prefix}${date.format(this._format)}${this._postfix}`;
    }
}