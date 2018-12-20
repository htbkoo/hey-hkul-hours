import MomentConverter from "./MomentConverter";

import {hour, nextDayHour} from "../../tests/utils/HourUtils";

describe("MomentConverter", function () {
    [
        {str: "8:30am", expected: hour("8:30am")},
        {str: "8:15pm", expected: hour("8:15pm")},
        {str: "6:00am of the following day", expected: nextDayHour("6:00am")},
    ].forEach(({str, expected}) =>
        it(`should convert string "${str}" to moment"`, async function () {
            // given
            const converter = new MomentConverter();

            // when
            const actual = converter.convert(str);

            // then
            expect(actual).toEqual(expected);
            expect(actual.isSame(expected)).toEqual(true);
        })
    );
});