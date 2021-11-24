import fetch from 'node-fetch';
import { BASE_URL } from './constants.js';

/**
 * @description - creates URL for cats service (example: https://cataas.com/cat/says/Hi%20There?width=500&amp;height=800&amp;c=Cyan&amp;s=150)
 * @param { string } text - text for the cat to say
 * @param { Object } params - parameters for the image and text on it
 * @param { number } params.width - image width
 * @param { number } params.height - image height
 * @param { string } params.color - text color
 * @param { number } params.size - text size
 * @returns { string } ready URL
 * */
const createUrl = (text, params) => {
  const { width, height, color, size } = params;
  const urlParams = new URLSearchParams({ width, height, color, s: size });

  return `${BASE_URL}/${text}?${urlParams}`;
};

/**
 * @description - gets a picture of random cat saying provided text
 * @param { string } text - text for the cat to say
 * @param { Object } params - parameters for the image and text on it
 * @returns { Buffer } - buffer image
 * */
export const fetchImage = async (text, params) => {
  try {
    const url = createUrl(text, params);
    const response = await fetch(url);

    console.log('Received response with status:' + response.status);

    const arrBuffer = await response.arrayBuffer();
    return Buffer.from(arrBuffer);
  } catch (err) {
    console.log(err);
  }
};
