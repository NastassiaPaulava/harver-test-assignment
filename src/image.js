import blend from '@mapbox/blend';
import { promisify } from 'util';

const blendPromise = promisify(blend);

/**
 * @description - concatinates provided array of images into one image
 * @param { Buffer[] } images - images to be concatinated in one
 * @param { Object } settings - parameters for the newly created one image
 * @param { number } settings.width - image width
 * @param { number } settings.height - image height
 * @returns { Buffer } - buffer image
 * */
export const concatinateImages = async (images, settings) => {
  try {
    const { width, height } = settings;

    const preparedImages = images.map((image, index) => ({
      buffer: image,
      x: width * index,
      y: 0,
    }));

    return await blendPromise(preparedImages, {
      format: 'jpeg',
      width: width * images.length,
      height,
    });
  } catch (err) {
    console.log(err);
  }
};
