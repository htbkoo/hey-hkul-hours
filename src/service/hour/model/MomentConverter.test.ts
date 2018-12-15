import MomentConverter from "./MomentConverter";
import {hour} from "../../../tests/utils/HourUtils";

describe("MomentConverter", function () {
    [
        {str: "8:30am", expected: hour("8:30am")}
    ].forEach(({str, expected}) =>
        it(`should convert string "${str}" to moment"`, async function () {
            // given
            const converter = new MomentConverter();

            // when
            const actual = converter.convert(str);

            // then
            expect(actual.isSame(expected)).toEqual(true);
        })
    );
});