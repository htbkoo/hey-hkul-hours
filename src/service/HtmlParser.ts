import {JSDOM} from "jsdom";
import {RawStringsMap} from "./validation/model/RawStringsMap";

export default class HtmlParser {
    parseHtml(html: string): RawStringsMap {
        return this.getAllRows(html)
            .map(this.rowToTableCells)
            .map(this.tableCellsToStrings)
            .reduce(this.toRawStringsMap, {});
    }

    private getAllRows(html) {
        const dom = new JSDOM(html);
        return Array.from(dom.window.document.querySelectorAll("tr")); // reference: https://stackoverflow.com/a/25657154
    }

    private rowToTableCells(row) {
        return Array.from((row as any).querySelectorAll("td"))
    }

    private tableCellsToStrings(tableCells) {
        return {
            libraryName: cellAsString(tableCells[0]),
            hour: cellAsString(tableCells[1]),
        };

        function cellAsString(cell: any) {
            return cell.textContent;
        }
    }

    private toRawStringsMap(obj, {libraryName, hour}) {
        obj[libraryName as any] = hour;
        return obj;
    }
}