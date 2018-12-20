import UrlAppender from "./UrlAppender";

import * as moment from "moment";

describe("HtmlParser", function () {
    [
        {
            date: "2018-12-13",
            prefix: "https://lib.hku.hk/hours/daily/opening_hours_",
            postfix: ".html",
            combinedUrl: "https://lib.hku.hk/hours/daily/opening_hours_2018-12-13.html",
        },
        {
            date: "2018-01-01",
            prefix: "somePrefix ",
            postfix: " somePostfix",
            combinedUrl: "somePrefix 2018-01-01 somePostfix",
        }
    ].forEach(({date, prefix, postfix, combinedUrl}) =>
        it(`should append date="${date}" to prefix="${prefix}" and postfix="${postfix}" to get combined url="${combinedUrl}"`, async function () {
            // given
            const urlAppender = new UrlAppender(prefix, postfix);

            // when
            const actualUrl = urlAppender.buildUrlWithDate(moment(date));

            // then
            expect(actualUrl).toEqual(combinedUrl);
        })
    );

    it("should be possible to override date format in string via an optional dateFormat constructor argument", function () {
        // given
        const urlAppender = new UrlAppender("prefix ", " postfix", "[my format] MMMM Do YYYY, h:mm:ss a");

        // when
        const actualUrl = urlAppender.buildUrlWithDate(moment("2013-02-08 09:30:26.123"));

        // then
        expect(actualUrl).toEqual("prefix my format February 8th 2013, 9:30:26 am postfix");
    });
});