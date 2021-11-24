import minimist from 'minimist';

import { fetchImage } from './cat.js';
import { concatinateImages } from './image.js';
import { writeDataToFile } from './file.js';

import { FILE_PATH } from './constants.js';

const argv = minimist(process.argv.slice(2));

console.log('argv', argv);
const {
  greeting = 'Hello',
  who = 'You',
  width = 400,
  height = 500,
  color = 'Pink',
  size = 100,
} = argv;

(async () => {
  try {
    const params = {
      width,
      height,
      color,
      size,
    };

    const images = await Promise.all([
      fetchImage(greeting, params),
      fetchImage(who, params),
    ]);

    const image = await concatinateImages(images, { height, width });

    await writeDataToFile(image, FILE_PATH);
  } catch (error) {
    console.error(error);
  }
})();
