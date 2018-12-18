import {when} from 'jest-when';

import Hours from "./Hours";

describe("Hours", function () {
    it(`should be able to create closed hours`, async function () {
        // given
        // when
        const hours = Hours.closed();

        // then
        expect(hours.isClosed()).toEqual(true);
        expect(hours.asArray()).toEqual([]);
    });
});