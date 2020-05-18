/**
 * A manual made declaration file for 'fast-fuzzy',
 * as it doesn't come with one for itself.
 */

declare function ownKeys(object: any, enumerableOnly: any): string[];
declare function _objectSpread(target: any): any;
declare function _defineProperty(obj: any, key: any, value: any): any;
declare const split: any;
declare const whitespaceRegex: RegExp;
declare const nonWordRegex: RegExp;
declare const defaultOptions: {
  keySelector: (s: any) => any;
  threshold: number;
  ignoreCase: boolean;
  ignoreSymbols: boolean;
  normalizeWhitespace: boolean;
  returnMatchData: boolean;
  useDamerau: boolean;
  useSellers: boolean;
};
declare const noop: () => void;
declare const arrayWrap: (item: any) => any[];
declare function normalize(
  string: any,
  options: any
): {
  original: any;
  normal: any[];
  map: any[];
};
declare function denormalizeMatchPosition(
  match: any,
  map: any
): {
  index: any;
  length: number;
};
declare function walkBack(
  rows: any,
  scoreIndex: any
):
  | {
      index: number;
      length: number;
      start?: undefined;
      end?: undefined;
    }
  | {
      start: number;
      end: number;
      index?: undefined;
      length?: undefined;
    };
declare const levUpdateScore: () => boolean;
declare const sellersUpdateScore: (cur: any, min: any) => boolean;
declare function getLevScore(
  rows: any,
  length: any
): {
  score: number;
  scoreIndex: number;
};
declare function getSellersScore(
  rows: any,
  length: any
): {
  score: number;
  scoreIndex: number;
};
declare function initLevRows(rowCount: any, columnCount: any): any[];
declare function initSellersRows(rowCount: any, columnCount: any): any[];
declare function levCore(term: any, candidate: any, rows: any, i: any, j: any): void;
declare function levenshtein(term: any, candidate: any, rows: any, j: any): void;
declare function damerauLevenshtein(term: any, candidate: any, rows: any, j: any): void;
declare function trieInsert(trie: any, string: any, item: any): void;
declare function createSearchTrie(trie: any, index: any, items: any, options: any): void;
declare function compareItems(a: any, b: any): number;
declare function addResult(results: any, resultMap: any, candidate: any, score: any, match: any, lengthDiff: any): void;
declare const getLevLength: (...values: number[]) => number;
declare const getSellersLength: (termLength: any) => any;
declare function levShouldContinue(node: any, pos: any, term: any, threshold: any, sValue: any): boolean;
declare function sellersShouldContinue(node: any, _: any, term: any, threshold: any, sValue: any, lastValue: any): boolean;
declare function searchRecurse(node: any, acc: any, len: any, term: any, scoreMethods: any, rows: any, results: any, resultMap: any, options: any, sIndex: any, sValue: any): void;
declare function searchCore(term: any, trie: any, options: any): any[];
declare function fuzzy(
  term: any,
  candidate: any,
  options: any
):
  | number
  | {
      item: any;
      original: any;
      key: string;
      score: number;
      match: void | {
        index: any;
        length: number;
      };
    };
declare function search(term: any, candidates: any, options: any): any[];
declare class Searcher {
  constructor(candidates: any, options: any);
  add(...candidates: any[]): void;
  search(term: any, options: any): any[];
}

declare module 'fast-fuzzy';
