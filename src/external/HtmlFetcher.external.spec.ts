import "dotenv/config";
import "../tests/utils/fetchPolyfill";

import HtmlFetcher from "./HtmlFetcher";
import expectedText from "../tests/resources/external/expectedHtmlFetchResponse";

const DATE_WITH_EXPECTED_RESPONSE = "2018-12-23";

describe("HtmlFetcher (external tests)", function () {
    it(`should fetch from external html for fixed date "${DATE_WITH_EXPECTED_RESPONSE} and retrieve expected response"`, function () {
        // given
        const url = `https://lib.hku.hk/hours/daily/opening_hours_${DATE_WITH_EXPECTED_RESPONSE}.html`;

        // when
        const promise = new HtmlFetcher().fetchHtml(url);

        // then
        return promise.then(text => expect(text).toEqual(expectedText));
    });

    it(`should fetch from external html for date "${date()}"`, function () {
        // given
        const url = `https://lib.hku.hk/hours/daily/opening_hours_${date()}.html`;

        // when
        const promise = new HtmlFetcher().fetchHtml(url);

        // then
        return promise.then(assertAllFieldsRetrieved);

        function assertAllFieldsRetrieved(text) {
            return [
                "Library",
                "Main Library",
                "Collaboration Zone (Level 3)",
                "Library Corner (G/F) &amp; Study Zone (Level 3)",
                "AV Collection",
                "Fung Ping Shan Library",
                "Special Collections",
                "Dental Library",
                "Tin Ka Ping Education Library",
                "Lui Che Woo Law Library",
                "Music Library",
                "Yu Chun Keung Medical Library",
            ].forEach(field => expect(text).toContain(field));
        }
    });

    function date() {
        return process.env.TESTS_EXTERNAL_HTML_FETCHER_DATE || DATE_WITH_EXPECTED_RESPONSE;
    }
});