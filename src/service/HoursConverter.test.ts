import HoursConverter from "./HoursConverter";
import SimpleHourParser from "./hour/SimpleHourParser";
import SimpleHoursSplitter from "./hour/SimpleHoursSplitter";
import {assertHours, hour, nextDayHour} from "../tests/utils/HourUtils";
import MomentConverter from "./hour/MomentConverter";

describe("HoursConverter", function () {
    describe("openHours", function () {
        [
            {
                input: "8:15am - 11:00pm",
                expectedHours: [
                    {from: hour("8:15am"), to: hour("11:00pm")}
                ]
            },
            {
                input: "9:15am - 11:00pm",
                expectedHours: [
                    {from: hour("9:15am"), to: hour("11:00pm")}
                ]
            },
            {
                input: "11:23am - 8:36pm, 9:00am - 9:00pm",
                expectedHours: [
                    {from: hour("11:23am"), to: hour("8:36pm")},
                    {from: hour("9:00am"), to: hour("9:00pm")},
                ]
            },
            {
                input: "8:30am - 6:00am of the following day",
                expectedHours: [
                    {from: hour("8:30am"), to: nextDayHour("6:00am")}
                ]
            },
            {
                input: "8:30am of the following day - 6:00am of the following day",
                expectedHours: [
                    {from: nextDayHour("8:30am"), to: nextDayHour("6:00am")}
                ]
            },
            {
                input: "11:23am - 8:36pm, 9:00pm - 9:00am of the following day",
                expectedHours: [
                    {from: hour("11:23am"), to: hour("8:36pm")},
                    {from: hour("9:00pm"), to: nextDayHour("9:00am")},
                ]
            },
            {
                input: "10:00am - 6:30pm of the following day, 7:00pm - 7:30am of the following day",
                expectedHours: [
                    {from: hour("10:00am"), to: nextDayHour("6:30pm")},
                    {from: hour("7:00pm"), to: nextDayHour("7:30am")},
                ]
            }
        ].forEach(({input, expectedHours}) =>
            it(`should convert "${input}" from string to hour`, async function () {
                // given
                const splitter = new SimpleHoursSplitter();
                const parser = new SimpleHourParser();
                const momentConverter = new MomentConverter();

                const converter = new HoursConverter(splitter, parser, momentConverter);

                // when
                const hours = converter.convert(input);

                // then
                assertHours(hours).toEqual(expectedHours);
            })
        );
    });

    describe("closedHours", function () {
        [
            "CLOSED",
            "closed",
            "Closed",
        ].forEach(str =>
            it(`should be able to recognized "${str}" and will return hours that isClosed`, function () {
                // given
                const converter = new HoursConverter(jest.fn() as any, jest.fn() as any, jest.fn() as any);

                // when
                const hours = converter.convert(str);

                // then
                expect(hours.isClosed()).toEqual(true);
                expect(hours.asArray()).toEqual([]);
            })
        );
    });
});