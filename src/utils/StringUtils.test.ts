import {when} from 'jest-when';
import {areEqualIgnoringCase} from "./StringUtils";

describe("StringUtils.ts", function () {
    [
        {str1: "closed", str2: "closed", areEqual: true},
        {str1: "closed", str2: "Closed", areEqual: true},
        {str1: "closed", str2: "CLOSED", areEqual: true},
        {str1: "Closed", str2: "CLOSED", areEqual: true},
        {str1: "CloseD", str2: "cLOSEd", areEqual: true},
        {str1: "closed", str2: "close", areEqual: false},
        {str1: "closed", str2: "open", areEqual: false},
    ].forEach(({str1, str2, areEqual}) =>
        it(`should check whether str1="${str1} equals to str2="${str2} is ${areEqual} "`, function () {
            // given
            // when
            const actual = areEqualIgnoringCase(str1, str2);

            // then
            expect(actual).toEqual(areEqual);
        })
    );
});