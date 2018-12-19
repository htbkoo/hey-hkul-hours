import {when} from 'jest-when';

import HkuLibraryHoursFactory from "./HkuLibraryHoursFactory";
import {hour, nextDayHour} from "../../../tests/utils/HourUtils";
import * as moment from "moment";
import HoursConverter from "../../HoursConverter";
import MomentConverter from "../MomentConverter";
import SimpleHoursSplitter from "../SimpleHoursSplitter";
import SimpleHourParser from "../SimpleHourParser";
import Hours from "./Hours";

describe("HkuLibraryHoursFactory", function () {
    it("should be able to convert from parsed html to LibraryHours", function () {
        // given
        const stringsMap = {
            "Library": "23 Dec 2018 Sunday",
            "Main Library": "10:00am - 7:00pm",
            "Collaboration Zone (Level 3)": "10:00am - 6:30pm",
            "Library Corner (G/F) & Study Zone (Level 3)": "10:00am - 6:30pm, 7:00pm - 7:30am of the following day",
            "Dental Library": "Closed",
        };

        // when
        const factory = new HkuLibraryHoursFactory(getConverter());
        const hours = factory.createLibraryHours(stringsMap);

        // then
        expect(moment("2018-12-23").isSame(hours.getDate())).toEqual(true);

        expect(hours.getHoursForAllLibraries()).toEqual({
            "Main Library": [
                {from: hour("10:00am"), to: hour("7:00pm")}
            ],
            "Collaboration Zone (Level 3)": [
                {from: hour("10:00am"), to: hour("6:30pm")}
            ],
            "Library Corner (G/F) & Study Zone (Level 3)": [
                {from: hour("10:00am"), to: nextDayHour("6:30pm")},
                {from: hour("7:00pm"), to: nextDayHour("7:30am")}
            ],
            "Dental Library": [
                Hours.closed()
            ],
        })
    });

    it("should throw Error if missing the key 'Library' to indicate the date", function () {
        // given
        const stringsMap = {};

        // when
        const factory = new HkuLibraryHoursFactory(getConverter());

        // then
        expect(() => factory.createLibraryHours(stringsMap as any)).toThrowError(
            ""
        );
    });

    function getConverter() {
        const splitter = new SimpleHoursSplitter();
        const parser = new SimpleHourParser();
        const converter = new MomentConverter();
        return new HoursConverter(splitter, parser, converter);
    }
});