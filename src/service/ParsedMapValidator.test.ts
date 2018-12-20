import ParsedMapValidator from "./ParsedMapValidator";

describe("ParsedMapValidator", function () {
    it("should throw Error if missing the key 'Library' to indicate the date", function () {
        // given
        const stringsMap = {};

        // when
        const validator = new ParsedMapValidator();

        // then
        expect(() => validator.validate(stringsMap)).toThrowError(
            'Missing mapping of "Library" for date from the input'
        );
    });
});