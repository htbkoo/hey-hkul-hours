import Hours from "./Hours";
import OpenHour from "./OpenHour";
import {hour} from "../../../tests/utils/HourUtils";

describe("Hours", function () {
    const hour1 = new OpenHour({from: hour("8:30am"), to: hour("9:30am")}),
        hour2 = new OpenHour({from: hour("8:30pm"), to: hour("9:30pm")});

    describe("open hours", function () {
        [
            {scenario: "1 open hour", openHours: [hour1]},
            {scenario: "2 open hours", openHours: [hour1, hour2]},
            {scenario: "2 open hours in different order", openHours: [hour2, hour1]},
        ].forEach(({scenario, openHours}) =>
            it(`should be able to create open hours for ${scenario}`, async function () {
                // given
                // when
                const hours = Hours.openHours(openHours);

                // then
                expect(hours.isClosed()).toEqual(false);
                expect(hours.asArray()).toEqual(openHours)
            })
        );

        it("should throw Error if input array is empty", function () {
            // given
            const emptyInput = [];

            // when
            // then
            expect(() => Hours.openHours(emptyInput)).toThrowError("Cannot create openHours with empty array - maybe you want to create Hours.closedHours() instead?");
        });
    });

    describe("closed hours", function () {
        it(`should be able to create closed hours`, async function () {
            // given
            // when
            const hours = Hours.closed();

            // then
            expect(hours.isClosed()).toEqual(true);
            expect(hours.asArray()).toEqual([]);
        });
    });
});