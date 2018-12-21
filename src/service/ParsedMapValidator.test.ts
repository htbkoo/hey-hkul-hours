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

    it("should parse html to object of strings", async function () {
        // given
        const stringsMap = {
            "Library": "23 Dec 2018 Sunday",
            "Main Library": "10:00am - 7:00pm",
            "Collaboration Zone (Level 3)": "10:00am - 6:30pm",
            "Library Corner (G/F) & Study Zone (Level 3)": "10:00am - 6:30pm, 7:00pm - 7:30am of the following day",
            "AV Collection": "10:00am - 7:00pm",
            "Fung Ping Shan Library": "10:00am - 7:00pm",
            "Special Collections": "10:00am - 7:00pm",
            "Dental Library": "Closed",
            "Tin Ka Ping Education Library": "Closed",
            "Lui Che Woo Law Library": "12:00pm - 4:00pm",
            "Music Library": "Closed",
            "Yu Chun Keung Medical Library": "10:00am - 5:00pm",
        };

        // when
        const validator = new ParsedMapValidator();
        const validatedMap = validator.validate(stringsMap);

        // then
        expect(validatedMap.getDate()).toEqual("23 Dec 2018 Sunday");
        expect(validatedMap.getHoursMapping()).toEqual({
            "Main Library": "10:00am - 7:00pm",
            "Collaboration Zone (Level 3)": "10:00am - 6:30pm",
            "Library Corner (G/F) & Study Zone (Level 3)": "10:00am - 6:30pm, 7:00pm - 7:30am of the following day",
            "AV Collection": "10:00am - 7:00pm",
            "Fung Ping Shan Library": "10:00am - 7:00pm",
            "Special Collections": "10:00am - 7:00pm",
            "Dental Library": "Closed",
            "Tin Ka Ping Education Library": "Closed",
            "Lui Che Woo Law Library": "12:00pm - 4:00pm",
            "Music Library": "Closed",
            "Yu Chun Keung Medical Library": "10:00am - 5:00pm",
        });
    });
});