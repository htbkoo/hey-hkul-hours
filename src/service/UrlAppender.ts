import {JSDOM} from "jsdom";
import {Moment} from "moment";

const DEFAULT_DATE_FORMAT = "YYYY-MM-DD";

export default class UrlAppender {
    private _prefix: string;
    private _postfix: string;

    constructor(prefix: string, postfix: string) {
        this._prefix = prefix;
        this._postfix = postfix;
    }

    buildUrlWithDate(date: Moment): string {
        return `${this._prefix}${date.format(DEFAULT_DATE_FORMAT)}${this._postfix}`;
    }
}