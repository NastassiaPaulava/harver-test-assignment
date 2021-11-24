import { writeFile } from 'fs/promises';
import { join } from 'path';

/**
 * @description - writes data to the file with provided filename
 * @param { Buffer } data - buffer data to write
 * @param { string } filename - name of the file
 * */
export const writeDataToFile = async (data, filename) => {
  try {
    const fileOut = join(process.cwd(), filename);
    await writeFile(fileOut, data, { encoding: 'binary' });

    console.log('The file was saved!');
  } catch (err) {
    console.error(err);
  }
};
