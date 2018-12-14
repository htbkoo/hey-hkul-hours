import {when} from 'jest-when';
import * as moment from "moment";

import LibraryHoursFetcher from "./LibraryHoursFetcher";
import htmlResponse from "../tests/resources/external/expectedHtmlFetchResponse";
import HtmlParser from "../service/HtmlParser";
import UrlAppender from "../service/UrlAppender";

describe("LibraryHoursFetcher", function () {
    it("should fetch library hours", async function () {
        // given
        const mockHtmlFetcher = {fetchHtml: jest.fn()};
        when(mockHtmlFetcher.fetchHtml).calledWith("https://lib.hku.hk/hours/daily/opening_hours_2018-12-13.html").mockReturnValue(htmlResponse);

        const parser = new HtmlParser();
        const appender = new UrlAppender("https://lib.hku.hk/hours/daily/opening_hours_", ".html");

        const fetcher = new LibraryHoursFetcher(mockHtmlFetcher as any, parser, appender);

        // when
        const date = moment("2018-12-13");
        const hours = await fetcher.retrieveHours(date);

        // then
        expect(hours).toEqual({
            "Library": "13 Dec 2018 Thursday",
            "Main Library": "8:30am - 6:00am of the following day",
            "Collaboration Zone (Level 3)": "8:30am - 10:30pm",
            "Library Corner (G/F) & Study Zone (Level 3)": "8:30am - 6:00am of the following day",
            "AV Collection": "8:30am - 11:00pm",
            "Fung Ping Shan Library": "8:30am - 6:00am of the following day",
            "Special Collections": "9:00am - 10:00pm",
            "Dental Library": "8:30am - 10:00pm",
            "Tin Ka Ping Education Library": "9:00am - 9:00pm",
            "Lui Che Woo Law Library": "9:00am - 10:00pm",
            "Music Library": "9:00am - 8:00pm",
            "Yu Chun Keung Medical Library": "8:15am - 11:00pm",
        });
    });
});