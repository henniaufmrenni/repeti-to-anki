import * as fs from 'fs/promises';
import { parse } from 'node-html-parser';

const readInput = async () => {
  try {
    const data = await fs.readFile('./input.html', { encoding: 'utf8' });
    return data;
  } catch (err) {
    return new Error("Couldn't read input file: ", err);
  }
};

const writeOutput = async (input) => {
  try {
    await fs.writeFile(`./output.txt`, input);
  } catch (err) {
    return new Error("Couldn't write output file: ", err);
  }
};

const sanitizeOutput = (input) => {
  return input
    .replaceAll('&nbsp;', ' ')
    .replaceAll('&gt;', '>')
    .replaceAll(`"`, `""`);
};

const main = async () => {
  await readInput()
    .then(async (input) => {
      const parsedInput = parse(input);
      const parsedList = parsedInput.querySelectorAll('.card-wrapper');

      let output = '';

      parsedList.forEach((item) => {
        if (item.querySelector('.question-text') !== null) {
          const question = sanitizeOutput(
            item.querySelector('.question-text').innerText
          );

          const answer = sanitizeOutput(
            item.querySelector('.answer-text').innerText
          );

          const questionAndAnswer = `"${question}";"${answer}"\n`;

          output += questionAndAnswer;
        }
      });

      writeOutput(output)
        .then(() => console.log('Successfully wrote output file.'))
        .catch((e) => console.warn(e));
    })
    .catch((e) => console.warn(e));
};

main();
