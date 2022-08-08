"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
MatchReader_1.MatchReader.fromCsv('football.csv');
// const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
