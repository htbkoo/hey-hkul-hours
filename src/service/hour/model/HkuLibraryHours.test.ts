import {when} from 'jest-when';

import HkuLibraryHours from "./HkuLibraryHours";
import {hour, nextDayHour} from "../../../tests/utils/HourUtils";
import * as moment from "moment";

describe("HkuLibraryHours", function () {
    it("should be able to convert from parsed html to LibraryHours", function () {
        // given
        const stringsMap = {
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
        };

        // when
        const hours = HkuLibraryHours.fromParsedHtml(stringsMap);

        // then
        expect(hours.getDate()).toEqual(moment("13 Dec 2018 Thursday"));

        expect(hours.getHoursForAllLibraries()).toEqual({
            "Main Library": [{from: hour("8:30am"), to: nextDayHour("6:00am")}],
            "Collaboration Zone (Level 3)": [{from: hour("8:30am"), to: nextDayHour("10:30pm")}],
            "Library Corner (G/F) & Study Zone (Level 3)": "8:30am - 6:00am of the following day",
            "AV Collection": "8:30am - 11:00pm",
            "Fung Ping Shan Library": "8:30am - 6:00am of the following day",
            "Special Collections": "9:00am - 10:00pm",
            "Dental Library": "8:30am - 10:00pm",
            "Tin Ka Ping Education Library": "9:00am - 9:00pm",
            "Lui Che Woo Law Library": "9:00am - 10:00pm",
            "Music Library": "9:00am - 8:00pm",
            "Yu Chun Keung Medical Library": "8:15am - 11:00pm",
        })
    });
});