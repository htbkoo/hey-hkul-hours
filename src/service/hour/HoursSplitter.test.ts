import HoursSplitter from "./HoursSplitter";
import SimpleHoursSplitter from "./SimpleHoursSplitter";

describe("HoursSplitter", function () {
    [
        {splitterName: "SimpleHoursSplitter", splitter: new SimpleHoursSplitter()},
    ].forEach(({splitterName, splitter}: { splitterName: string, splitter: HoursSplitter }) => {
        describe(splitterName, function () {
            [
                {
                    input: "9:15am - 11:00pm",
                    expected: [
                        "9:15am - 11:00pm",
                    ]
                },
                {
                    input: "11:23am - 8:36pm, 9:00pm - 9:00am of the following day",
                    expected: [
                        "11:23am - 8:36pm",
                        "9:00pm - 9:00am of the following day",
                    ]
                },
                {
                    input: "11:23am - 8:36pm, 9:00pm - 9:00am of the following day",
                    expected: [
                        "11:23am - 8:36pm",
                        "9:00pm - 9:00am of the following day",
                    ]
                },
            ].forEach(({input, expected}) =>
                it(`should parse "${input}" from string into parts`, async function () {
                    // given
                    // when
                    const strings = splitter.split(input);

                    // then
                    expect(strings).toEqual(expected);
                })
            );
        });
    });
});