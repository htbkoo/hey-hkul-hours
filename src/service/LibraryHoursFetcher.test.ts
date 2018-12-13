import {when} from 'jest-when';

import LibraryHoursFetcher from "./LibraryHoursFetcher";
import htmlResponse from "../tests/resources/external/expectedHtmlFetchResponse";

describe("LibraryHoursFetcher", function () {
    it("should fetch library hours", async function () {
        // given
        const mockHtmlFetcher = {fetchHtml: jest.fn()};
        when(mockHtmlFetcher.fetchHtml).calledWith("").mockReturnValue(htmlResponse);

        const fetcher = new LibraryHoursFetcher(mockHtmlFetcher as any);

        // when
        const hours = await fetcher.retrieveHours();

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