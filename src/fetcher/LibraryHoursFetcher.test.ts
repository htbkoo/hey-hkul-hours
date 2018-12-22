import {when} from 'jest-when';
import * as moment from "moment";

import LibraryHoursFetcher from "./LibraryHoursFetcher";
import htmlResponse from "../tests/resources/external/expectedHtmlFetchResponse";
import HtmlParser from "../service/HtmlParser";
import UrlAppender from "../service/UrlAppender";
import SimpleHoursSplitter from "../service/hour/SimpleHoursSplitter";
import SimpleHourParser from "../service/hour/SimpleHourParser";
import MomentConverter from "../service/hour/MomentConverter";
import HoursConverter from "../service/HoursConverter";
import HkuLibraryHoursFactory from "../service/hour/HkuLibraryHoursFactory";
import {assertAllHours, hour, nextDayHour} from "../tests/utils/HourUtils";
import Hours from "../service/hour/model/Hours";
import ParsedMapValidator from "../service/ParsedMapValidator";

describe("LibraryHoursFetcher", function () {
    it("should fetch library hours", async function () {
        // given
        const mockHtmlFetcher = newMockHtmlFetcher("https://lib.hku.hk/hours/daily/opening_hours_2018-12-23.html", htmlResponse);
        const htmlParser = new HtmlParser();
        const appender = new UrlAppender("https://lib.hku.hk/hours/daily/opening_hours_", ".html");

        const splitter = new SimpleHoursSplitter();
        const hourParser = new SimpleHourParser();
        const momentConverter = new MomentConverter();
        const converter = new HoursConverter(splitter, hourParser, momentConverter);

        const validator = new ParsedMapValidator();

        const factory = new HkuLibraryHoursFactory(converter);

        const date = moment("2018-12-23");

        // when
        const fetcher = new LibraryHoursFetcher(mockHtmlFetcher as any, htmlParser, appender, validator, factory);

        const hours = await fetcher.retrieveHours(date);

        // then
        expect(date.isSame(hours.getDate())).toEqual(true);

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

    function newMockHtmlFetcher(url: string, response: any) {
        const mockFetcher = {fetchHtml: jest.fn()};
        when(mockFetcher.fetchHtml).calledWith(url).mockReturnValue(response);
        return mockFetcher;
    }
});