import {when} from 'jest-when';
import * as moment from "moment";
import {Moment} from "moment";

import HoursConverter from "./HoursConverter";

describe("HoursConverter", function () {
    it(`should be able to recognized "CLOSED" and will return Close`, function () {
        // given
        const parser = new HoursConverter();

        // when
        const hours = parser.convert("Closed");

        // then
        expect(hours.isClosed()).toEqual(true);
        expect(hours.asArray()).toEqual([]);
    });

    function hour(str: string): Moment {
        return moment(str, "h:ma");
    }
});