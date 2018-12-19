import {when} from 'jest-when';

import HoursConverter from "./HoursConverter";
import SimpleHourParser from "./hour/SimpleHourParser";
import SimpleHoursSplitter from "./hour/SimpleHoursSplitter";
import {hour} from "../tests/utils/HourUtils";
import MomentConverter from "./hour/MomentConverter";
import OpenHour from "./hour/model/OpenHour";

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
                expect(hours.asArray()).toEqual(asOpenHours(expectedHours));

                function asOpenHours(hours) {
                    return hours.map(hour => new OpenHour(hour));
                }
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