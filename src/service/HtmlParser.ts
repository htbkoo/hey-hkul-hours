import {JSDOM} from "jsdom";

export default class HtmlParser {
    constructor() {
    }

    parseHtml(html) {
        return getAllRows()
            .map(rowToTableCells)
            .map(tableCellsToStrings)
            .reduce((obj, {libraryName, hour}) => {
                obj[libraryName as any] = hour;
                return obj;
            }, {});

        function getAllRows() {
            const dom = new JSDOM(html);
            return Array.from(dom.window.document.querySelectorAll("tr")); // reference: https://stackoverflow.com/a/25657154
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