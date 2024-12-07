import { readFromFile } from "../../utils.mjs";

export const red_reports = (fileName) => {
  const reports = buildReports(fileName);

  return reports.reduce((acc, curr) => acc + safeReport(curr), 0);
};

const safeReport = (report) => {
  var ascending = report[0] - report[1] > 0;

  for (var i = 0; i < report.length - 1; i++) {
    if (!isAllowed(report[i], report[i + 1], ascending)) return 0;
  }

  return 1;
};

export const red_reports2 = (fileName) => {
  const reports = buildReports(fileName);

  return reports.reduce((acc, curr) => acc + problemDampener(curr), 0);
};

const problemDampener = (report) => {
  // This isn't the most efficient solution
  // Should use DP

  for (var i = 0; i <= report.length; i++) {
    const subset = report.filter((_, index) => index != i);
    const result = safeReport(subset);

    if (result == 1) return 1;
  }

  return 0;
};

const isAllowed = (a, b, ascending) => {
  const diff = a - b;
  const abs = Math.abs(diff);

  if (abs <= 0 || abs > 3) return false;
  if (diff < 0 && ascending) return false;
  if (diff > 0 && !ascending) return false;

  return true;
};

const buildReports = (fileName) => {
  const data = readFromFile(fileName);
  const lines = data.split("\n");

  return lines.map((v) => v.split(" ").map(Number));
};
