import {when} from 'jest-when';

import HoursConverter from "./HoursConverter";

describe("HoursConverter", function () {
    [
        "CLOSED",
        "closed",
        "Closed",
    ].forEach(str =>
        it(`should be able to recognized "${str}" and will return hours that isClosed`, function () {
            // given
            const parser = new HoursConverter();

            // when
            const hours = parser.convert(str);

            // then
            expect(hours.isClosed()).toEqual(true);
            expect(hours.asArray()).toEqual([]);
        })
    );
});