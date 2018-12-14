import {JSDOM} from "jsdom";
import {Moment} from "moment";

export default class UrlAppender {
    private _prefix: string;
    private _postfix: string;

    constructor(prefix: string, postfix: string) {
        this._prefix = prefix;
        this._postfix = postfix;
    }

    buildUrlWithDate(date: Moment): string {
        return `${this._prefix}${date.format("YYYY-MM-DD")}${this._postfix}`;
    }
}