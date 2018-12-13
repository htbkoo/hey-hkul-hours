import {JSDOM} from "jsdom";

import HtmlFetcher from "../external/HtmlFetcher";

export default class LibraryHoursFetcher {
    private _htmlFetcher: HtmlFetcher;

    constructor(htmlFetcher: HtmlFetcher) {
        this._htmlFetcher = htmlFetcher;
    }

    async retrieveHours() {
        const html = await this._htmlFetcher.fetchHtml("");
        return this.parseHtml(html);
    }

    private parseHtml(html) {
        return getAllRows()
            .map(rowToTableCells)
            .map(tableCellsToStrings)
            .reduce((obj, {libraryName, hour}) => {
                obj[libraryName as any] = hour;
                return obj;
            }, {});

        function getAllRows() {
            const dom = new JSDOM(html);
            return Array.from(dom.window.document.querySelectorAll("tr"));
        }

        function rowToTableCells(row) {
            return Array.from((row as any).querySelectorAll("td"))
        }

        function tableCellsToStrings(tableCells) {
            return {
                libraryName: cellAsString(tableCells[0]),
                hour: cellAsString(tableCells[1]),
            };

            function cellAsString(cell: any) {
                return cell.textContent;
            }
        }
    }
}