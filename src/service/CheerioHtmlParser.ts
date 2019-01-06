import {RawStringsMap} from "./validation/model/RawStringsMap";
import HtmlParser from "./HtmlParser";

export default class CheerioHtmlParser implements HtmlParser {
    private cheerio: CheerioAPI;

    parseHtml(html: string): Promise<RawStringsMap> {
        const $ = this.lazyLoadCheerio().load(html);

        const allRows = $("tr");
        const libraryAndHourPairs = allRows.map(fromRowToPairs);
        const map: RawStringsMap = fromPairsToMap(libraryAndHourPairs);

        return Promise.resolve(map);

        function fromRowToPairs(i, tr) {
            const allCells = $(tr).find("td");
            return allCells.map((i, td) => $(td).text());
        }

        function fromPairsToMap(pairs): RawStringsMap {
            return Array.from(pairs).reduce(fromCheerioElementToMap, {}) as RawStringsMap;
        }

        function fromCheerioElementToMap(obj, element): RawStringsMap {
            obj[element[0]] = element[1];
            return obj;
        }
    }

    private lazyLoadCheerio(): CheerioAPI {
        if (!this.cheerio) {
            this.cheerio = require("cheerio");
        }
        return this.cheerio;
    }
}