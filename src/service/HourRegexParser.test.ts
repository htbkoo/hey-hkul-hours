import {when} from 'jest-when';

import HourRegexParser from "./HourRegexParser";

describe("HourRegexParser", function () {
    it("should be possible to override hour format through constructor argument", function () {
        // given
        const parser = new HourRegexParser(/(.+)-(.+)/);

        // when
        const hourInString = parser.parse("8:15am from previous day-11:00pm of next day");

        // then
        expect(hourInString).toEqual({
            from: "8:15am from previous day",
            to: "11:00pm of next day",
        });
    });
});