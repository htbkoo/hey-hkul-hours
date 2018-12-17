import {when} from 'jest-when';

import OpenHour from "./OpenHour";
import {hour} from "../../../tests/utils/HourUtils";

describe("OpenHour", function () {
    it(`should be able to create closed hours`, async function () {
        // given
        const from = hour("8:30am"), to= hour("11:00pm");

        // when
        const openHour = new OpenHour({from, to});

        // then
        expect(openHour.isClosed()).toEqual(false);
        expect(openHour.getFrom().isSame(from)).toEqual(true);
        expect(openHour.getTo().isSame(to)).toEqual(true);
    });
});