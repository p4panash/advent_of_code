import { readFromFile } from "../../utils.mjs";

export const red_reports = (fileName) => {
  const reports = buildReports(fileName);

  return reports.reduce((acc, curr) => acc + safeReport(curr), 0);
};

const safeReport = (report) => {
  var increase = report[0] - report[1] > 0;

  for (var i = 0; i < report.length - 1; i++) {
    const diff = report[i] - report[i + 1];
    const abs = Math.abs(diff);

    if (abs <= 0 || abs > 3) return 0;
    if (diff < 0 && increase) return 0;
    if (diff > 0 && !increase) return 0;
  }

  return 1;
};

const buildReports = (fileName) => {
  const data = readFromFile(fileName);
  const lines = data.split("\n");

  return lines.map((v) => v.split(" ").map(Number));
};
