import HourInString from "./HourInString";
import Hour from "./Hour";
import MomentConverter from "../MomentConverter";
import {hour} from "../../../tests/utils/HourUtils";

describe("HourInString", function () {
    it(`should be able to convert to hour`, async function () {
        // given
        const converter = new MomentConverter();

        const hourInString = new HourInString({from: "8:30am", to: "11:00pm"});

        // when
        const actual: Hour = hourInString.asHour(converter);

        // then
        expect(actual.isClosed()).toEqual(false);
        expect(actual.getFrom().isSame(hour("8:30am"))).toEqual(true);
        expect(actual.getTo().isSame(hour("11:00pm"))).toEqual(true);
    });
});