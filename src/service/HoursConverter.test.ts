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
            const converter = new HoursConverter(jest.fn() as any, jest.fn() as any, jest.fn() as any);

            // when
            const hours = converter.convert(str);

            // then
            expect(hours.isClosed()).toEqual(true);
            expect(hours.asArray()).toEqual([]);
        })
    );
});