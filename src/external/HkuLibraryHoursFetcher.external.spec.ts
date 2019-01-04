import "../tests/utils/fetchPolyfill";

import {when} from 'jest-when';
import * as moment from "moment";

import HkuLibraryHoursFetcher from "../fetcher/HkuLibraryHoursFetcher";
import {assertAllHours, hour, nextDayHour} from "../tests/utils/HourUtils";
import Hours from "../service/hour/model/Hours";

describe("HkuLibraryHoursFetcher (external tests)", function () {
    it("should fetch library hours using default configuration", async function () {
        // given
        const date = moment("2018-12-23");

        // when
        const fetcher = new HkuLibraryHoursFetcher();
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
});