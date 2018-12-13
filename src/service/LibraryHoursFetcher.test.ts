import {when} from 'jest-when';

import LibraryHoursFetcher from "./LibraryHoursFetcher";
import htmlResponse from "../tests/resources/external/expectedHtmlFetchResponse";

describe("LibraryHoursFetcher", function () {
    it("should fetch library hours", async function () {
        // given
        const mockHtmlFetcher = {fetchHtml: jest.fn()};
        when(mockHtmlFetcher.fetchHtml).calledWith("").mockReturnValue(htmlResponse);

        const fetcher = new LibraryHoursFetcher(mockHtmlFetcher as any);

        // when
        const hours = await fetcher.retrieveHours();

        // then
        expect(hours).toEqual(htmlResponse);
    });
});