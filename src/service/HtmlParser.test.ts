import HtmlParser from "./HtmlParser";

import htmlResponse from "../tests/resources/external/expectedHtmlFetchResponse";
import CheerioHtmlParser from "./CheerioHtmlParser";

describe("HtmlParser", function () {
    [
        {parserName: "CheerioHtmlParser", parser: new CheerioHtmlParser()},
    ].forEach(({parserName, parser}: { parserName: string, parser: HtmlParser }) => {
        it(`should user ${parserName} to parse html to object of strings`, async function () {
            // given
            // when
            const mapping = await parser.parseHtml(htmlResponse);

            // then
            expect(mapping).toEqual({
                "Library": "23 Dec 2018 Sunday",
                "Main Library": "10:00am - 7:00pm",
                "Collaboration Zone (Level 3)": "10:00am - 6:30pm",
                "Library Corner (G/F) & Study Zone (Level 3)": "10:00am - 6:30pm, 7:00pm - 7:30am of the following day",
                "AV Collection": "10:00am - 7:00pm",
                "Fung Ping Shan Library": "10:00am - 7:00pm",
                "Special Collections": "10:00am - 7:00pm",
                "Dental Library": "Closed",
                "Tin Ka Ping Education Library": "Closed",
                "Lui Che Woo Law Library": "12:00pm - 4:00pm",
                "Music Library": "Closed",
                "Yu Chun Keung Medical Library": "10:00am - 5:00pm",
            });
        });
    });
});