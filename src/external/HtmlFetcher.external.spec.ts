import {fetchHtml} from "./HtmlFetcher";
import expectedText from "../tests/resources/external/expectedHtmlFetchResponse";

describe("HtmlFetcher (external tests)", function () {
    it("should fetch from external html", function () {
        // given
        const url = `https://lib.hku.hk/hours/daily/opening_hours_2018-12-13.html`;

        // when
        const promise = fetchHtml(url);

        // then
        return promise.then(text => expect(text).toEqual(expectedText));
    });
});