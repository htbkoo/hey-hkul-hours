import {when} from 'jest-when';

import UrlAppender from "./UrlAppender";

import * as moment from "moment";

describe("HtmlParser", function () {
    it(`should append date to base url to get combined url`, async function () {
        // given
        const prefix = "https://lib.hku.hk/hours/daily/opening_hours_", postfix = ".html";
        const urlAppender = new UrlAppender(prefix, postfix);

        // when
        const date = moment("2018-12-13");
        const actualUrl = urlAppender.buildUrlWithDate(date);

        // then
        const combinedUrl = "https://lib.hku.hk/hours/daily/opening_hours_2018-12-13.html";
        expect(actualUrl).toEqual(combinedUrl);
    });
});