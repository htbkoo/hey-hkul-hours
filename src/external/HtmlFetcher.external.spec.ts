import HtmlFetcher from "./HtmlFetcher";
import expectedText from "../tests/resources/external/expectedHtmlFetchResponse";

const DATE_WITH_EXPECTED_RESPONSE = "2018-12-13";

describe("HtmlFetcher (external tests)", function () {
    it(`should fetch from external html for fixed date "${DATE_WITH_EXPECTED_RESPONSE} and retrieve expected response"`, function () {
        // given
        const url = `https://lib.hku.hk/hours/daily/opening_hours_${DATE_WITH_EXPECTED_RESPONSE}.html`;

        // when
        const promise = new HtmlFetcher().fetchHtml(url);

        // then
        return promise.then(text => expect(text).toEqual(expectedText));
    });
});