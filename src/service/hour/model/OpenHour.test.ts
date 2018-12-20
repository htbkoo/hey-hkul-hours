import OpenHour from "./OpenHour";
import {hour} from "../../../tests/utils/HourUtils";

describe("OpenHour", function () {
    describe("creation", function () {
        it(`should be able to create open hour`, async function () {
            // given
            const from = hour("8:30am"), to = hour("11:00pm");

            // when
            const openHour = new OpenHour({from, to});

            // then
            expect(openHour.isClosed()).toEqual(false);
            expect(openHour.getFrom()).toEqual(from);
            expect(openHour.getTo()).toEqual(to);
        });
    });

    describe("equality", function () {
        it("should test that 2 same OpenHours are equal to each other", function () {
            // given
            const from = hour("8:30am"), to = hour("11:00pm");

            // when
            const openHour1 = new OpenHour({from, to}), openHour2 = new OpenHour({from, to});

            // then
            assertOpenHour(openHour1).toEqual(openHour2);
        });

        it("should test that 2 different OpenHours are not equal to each other", function () {
            // given
            const from1 = hour("8:30am"), to1 = hour("11:00pm");
            const from2 = hour("8:31am"), to2 = hour("11:00pm");

            // when
            const openHour1 = new OpenHour({from: from1, to: to1}), openHour2 = new OpenHour({from: from2, to: to2});

            // then
            assertOpenHour(openHour1).not.toEqual(openHour2);
        });

        it("should test that cloned OpenHour is equal to OpenHour", function () {
            // given
            const from = hour("8:30am"), to = hour("11:00pm");
            const openHour1 = new OpenHour({from, to});

            // when
            const openHour2 = openHour1.clone();

            // then
            assertOpenHour(openHour1).toEqual(openHour2);
        });
    });

    describe("immutability", function () {
        it(`should not affect OpenHour when input moments are mutated`, async function () {
            // given
            const from = hour("8:30am"), to = hour("11:00pm");
            const openHour = new OpenHour({from, to});

            // when
            from.add(10, "m");
            to.subtract(1, "h");

            // then
            assertInputMutated();
            assertOpenHourNotMutated();

            function assertInputMutated() {
                expect(from).toEqual(hour("8:30am").add(10, "m"));
                expect(to).toEqual(hour("11:00pm").subtract(1, "h"));
            }

            function assertOpenHourNotMutated() {
                expect(openHour.getFrom()).toEqual(hour("8:30am"));
                expect(openHour.getTo()).toEqual(hour("11:00pm"));
            }
        });
    });

    function assertOpenHour(openHour1: OpenHour) {
        return {
            toEqual(openHour2) {
                expect(openHour1).toEqual(openHour2);
                assertEqualsTo(openHour2).is(true);
            },
            not: {
                toEqual(openHour2) {
                    expect(openHour1).not.toEqual(openHour2);
                    assertEqualsTo(openHour2).is(false);
                }
            }
        };

        function assertEqualsTo(openHour2) {
            return {
                is(expected) {
                    expect(openHour1.equals(openHour2)).toEqual(expected);
                    expect(openHour2.equals(openHour1)).toEqual(expected);
                }
            }
        }
    }
});