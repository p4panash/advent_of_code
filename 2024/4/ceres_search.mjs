import { readFromFile } from "../../utils.mjs";

const WORD = "XMAS";
let matrix;

export const ceres = (fileName) => {
  const rows = readFromFile(fileName).split("\n");
  let total = 0;

  matrix = rows.map((row) => Array(row.length).fill(0));

  rows.forEach((value, i) => {
    for (let j = 0; j < value.length; j++) {
      if (value[j] == "X") {
        total += check_string(i, j, [-1, 0], rows);
        matrix[i][j] += check_string(i, j, [-1, 0], rows);

        total += check_string(i, j, [1, 0], rows);
        matrix[i][j] += check_string(i, j, [1, 0], rows);

        total += check_string(i, j, [0, -1], rows);
        matrix[i][j] += check_string(i, j, [0, -1], rows);

        total += check_string(i, j, [0, 1], rows);
        matrix[i][j] += check_string(i, j, [0, 1], rows);

        total += check_string(i, j, [-1, -1], rows);
        matrix[i][j] += check_string(i, j, [-1, -1], rows);

        total += check_string(i, j, [1, 1], rows);
        matrix[i][j] += check_string(i, j, [1, 1], rows);
      }
    }
  });

  matrix.forEach((value) => console.log(value.join("")));
  return total;
};

const check_string = (i, j, direction, array, step = 1) => {
  if (step == WORD.length) return 1;

  const new_i = i + direction[0];
  const new_j = j + direction[1];

  if (new_i < 0 || new_i >= array.length) return 0;
  if (new_j < 0 || new_j >= array[new_i].length) return 0;

  if (array[new_i][new_j] == WORD[step]) {
    return check_string(new_i, new_j, direction, array, step + 1);
  }

  return 0;
};
