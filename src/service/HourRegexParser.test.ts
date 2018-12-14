import {when} from 'jest-when';

import HourRegexParser from "./HourRegexParser";

describe("HourRegexParser", function () {
    [
        {input: "8:15am - 11:00pm", expected: {from: "8:15am", to: "11:00pm"}},
        {input: "8:30am - 6:00am of the following day", expected: {from: "8:30am", to: "6:00am of the following day"}},
        {input: "8:30am - 10:30pm", expected: {from: "8:30am", to: "10:30pm"}},
        {input: "8:30am - 11:00pm", expected: {from: "8:30am", to: "11:00pm"}},
        {input: "9:00am - 8:00pm", expected: {from: "9:00am", to: "8:00pm"}},
        {input: "9:00am - 9:00pm", expected: {from: "9:00am", to: "9:00pm"}},
        {input: "9:00am - 10:00pm", expected: {from: "9:00am", to: "10:00pm"}},

        {input: "8:15am- 11:00pm", expected: {from: "8:15am", to: "11:00pm"}},
        {input: "8:15am -11:00pm", expected: {from: "8:15am", to: "11:00pm"}},
        {input: "8:15am-11:00pm", expected: {from: "8:15am", to: "11:00pm"}},
    ].forEach(({input, expected}) =>
        it(`should parse "${input}" from string into parts`, async function () {
            // given
            const parser = new HourRegexParser();

            // when
            const hourInString = parser.parse(input);

            // then
            expect(hourInString).toEqual(expected);
        })
    );

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

    [
        "unparsable string",
        "8:15am - ",
        "8:15am- ",
        "8:15am -",
        "8:15am-",
        " -11:00pm",
        "- 11:00pm",
        "-11:00pm",
    ].forEach(input =>
        it(`should handle unparsable input "${input}" gracefully`, function () {
            // given
            const parser = new HourRegexParser();

            // when
            expect(() => parser.parse(input))
            // then
                .toThrow(`Unable to parse input: "${input}"`);
        })
    );
});