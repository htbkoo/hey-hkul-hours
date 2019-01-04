import * as cheerio from "cheerio";

import {RawStringsMap} from "./validation/model/RawStringsMap";

export default class HtmlParser {
    parseHtml(html: string): RawStringsMap {
        const $ = cheerio.load(html);

        const allRows = $("tr");
        const libraryAndHourPairs = allRows.map(fromRowToPairs);

        return Array.from(libraryAndHourPairs).reduce(fromCheerioElementToMap, {});

        function fromRowToPairs(i, tr) {
            const allCells = $(tr).find("td");
            return allCells.map((i, td) => $(td).text());
        }

        function fromCheerioElementToMap(obj, element): RawStringsMap {
            obj[element[0]] = element[1];
            return obj;
        }
    }
}