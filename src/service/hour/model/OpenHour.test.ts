import {when} from 'jest-when';

import OpenHour from "./OpenHour";
import {hour} from "../../../tests/utils/HourUtils";

describe("OpenHour", function () {
    it(`should be able to create open hour`, async function () {
        // given
        const from = hour("8:30am"), to = hour("11:00pm");

        // when
        const openHour = new OpenHour({from, to});

        // then
        expect(openHour.isClosed()).toEqual(false);
        expect(openHour.getFrom().isSame(from)).toEqual(true);
        expect(openHour.getTo().isSame(to)).toEqual(true);
    });

    it("should test that 2 same OpenHours are equal to each other", function () {
        // given
        const from = hour("8:30am"), to = hour("11:00pm");

        // when
        const openHour1 = new OpenHour({from, to}), openHour2 = new OpenHour({from, to});

        // then
        expect(openHour1).toEqual(openHour2);
        expect(openHour1.equals(openHour2)).toEqual(true);
        expect(openHour2.equals(openHour1)).toEqual(true);
    });

    it("should test that 2 different OpenHours are not equal to each other", function () {
        // given
        const from1 = hour("8:30am"), to1 = hour("11:00pm");
        const from2 = hour("8:31am"), to2 = hour("11:00pm");

        // when
        const openHour1 = new OpenHour({from: from1, to: to1}), openHour2 = new OpenHour({from: from2, to: to2});

        // then
        expect(openHour1).toEqual(openHour2);
        expect(openHour1.equals(openHour2)).toEqual(false);
        expect(openHour2.equals(openHour1)).toEqual(false);
    });

    it("should test that cloned OpenHour is equal to OpenHour", function () {
        // given
        const from = hour("8:30am"), to = hour("11:00pm");
        const openHour1 = new OpenHour({from, to});

        // when
        const openHour2 = openHour1.clone();

        // then
        expect(openHour1.equals(openHour2)).toEqual(true);
        expect(openHour2.equals(openHour1)).toEqual(true);
    });
});