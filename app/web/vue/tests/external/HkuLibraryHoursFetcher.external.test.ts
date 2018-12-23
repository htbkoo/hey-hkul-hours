import moment from "moment";

import {HkuLibraryHoursFetcher} from "hey-hkul-hours";

describe("client", function () {
    it("should be able to create LibraryHoursFetcher", function () {
        // given
        const today = moment();
        const fetcher = new HkuLibraryHoursFetcher();

        // when
        // then
        const retrieveHours = fetcher.retrieveHours(today);
        return retrieveHours.then(hours => {
            expect(hours.getDate().isSame(today, "D")).toEqual(true);
            Object.entries(hours.getHoursForAllZones())
                .forEach(([zoneName, zoneHours]) => {
                    if (zoneHours.isClosed()) {
                        console.log(`${zoneName} is: Closed`)
                    } else {
                        const hoursString = zoneHours.asArray().map(hour => `from: ${hour.getFrom()}, to: ${hour.getTo()}`);
                        console.log(`Hours for ${zoneName} are: [${hoursString}]`);
                    }
                })
        })
    });
});