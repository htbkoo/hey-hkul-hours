import {when} from 'jest-when';
import * as moment from "moment";

import HkuLibraryHoursFetcher from "./HkuLibraryHoursFetcher";
import htmlResponse from "../tests/resources/external/expectedHtmlFetchResponse";
import {assertAllHours, hour, nextDayHour} from "../tests/utils/HourUtils";
import Hours from "../service/hour/model/Hours";
import HtmlFetcher from "../external/HtmlFetcher";

describe("HkuLibraryHoursFetcher", function () {
    it("should fetch library hours", async function () {
        // given
        const mockHtmlFetcher = newMockHtmlFetcher("https://lib.hku.hk/hours/daily/opening_hours_1900-01-01.html", htmlResponse);

        const dateToAssertUsingMockFetcher = moment("1900-01-01");

        // when
        const fetcher = new HkuLibraryHoursFetcher({htmlFetcher: mockHtmlFetcher});

        const hours = await fetcher.retrieveHours(dateToAssertUsingMockFetcher);

        // then
        const expectedHours = {
            "Main Library": [
                {from: hour("10:00am"), to: hour("7:00pm")}
            ],
            "Collaboration Zone (Level 3)": [
                {from: hour("10:00am"), to: hour("6:30pm")}
            ],
            "Library Corner (G/F) & Study Zone (Level 3)": [
                {from: hour("10:00am"), to: hour("6:30pm")},
                {from: hour("7:00pm"), to: nextDayHour("7:30am")}
            ],
            "AV Collection": [
                {from: hour("10:00am"), to: hour("7:00pm")}
            ],
            "Fung Ping Shan Library": [
                {from: hour("10:00am"), to: hour("7:00pm")}
            ],
            "Special Collections": [
                {from: hour("10:00am"), to: hour("7:00pm")}
            ],
            "Dental Library": [
                Hours.closed()
            ],
            "Tin Ka Ping Education Library": [
                Hours.closed()
            ],
            "Lui Che Woo Law Library": [
                {from: hour("12:00pm"), to: hour("4:00pm")}
            ],
            "Music Library": [
                Hours.closed()
            ],
            "Yu Chun Keung Medical Library": [
                {from: hour("10:00am"), to: hour("5:00pm")}
            ],
        };
        assertAllHours(hours.getHoursForAllZones()).toEqual(expectedHours);
    });

    function newMockHtmlFetcher(url: string, response: any): HtmlFetcher {
        const mockFetcher = {fetchHtml: jest.fn()};
        when(mockFetcher.fetchHtml).calledWith(url).mockReturnValue(response);
        return mockFetcher as HtmlFetcher;
    }
});