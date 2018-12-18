import {when} from 'jest-when';

import Hours from "./Hours";
import OpenHour from "./OpenHour";
import {hour} from "../../../tests/utils/HourUtils";

describe("Hours", function () {
    it(`should be able to create open hours`, async function () {
        // given
        const hour1 = new OpenHour({from: hour("8:30am"), to: hour("8:30am")}),
            hour2 = new OpenHour({from: hour("8:30am"), to: hour("8:30am")});

        // when
        const openHours = [hour1, hour2];
        const hours = Hours.openHours(openHours);

        // then
        expect(hours.isClosed()).toEqual(false);
        expect(hours.asArray()).toEqual(openHours)
    });

    it(`should be able to create closed hours`, async function () {
        // given
        // when
        const hours = Hours.closed();

        // then
        expect(hours.isClosed()).toEqual(true);
        expect(hours.asArray()).toEqual([]);
    });
});